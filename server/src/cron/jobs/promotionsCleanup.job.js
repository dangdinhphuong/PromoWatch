import cron from "node-cron";
import { config } from "../../config/index.js";
import { getMongoDb } from "../../db/mongo.js";

let isRunning = false;

function parseDateValue(value) {
  if (value === null || value === undefined) {
    return null;
  }

  const raw = typeof value === "string" ? value.trim() : String(value).trim();
  if (!raw) {
    return null;
  }

  const dmyMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (dmyMatch) {
    const day = Number.parseInt(dmyMatch[1], 10);
    const month = Number.parseInt(dmyMatch[2], 10);
    const year = Number.parseInt(dmyMatch[3], 10);
    const date = new Date(year, month - 1, day);
    if (
      !Number.isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      return date;
    }
    return null;
  }

  const ymdMatch = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (ymdMatch) {
    const year = Number.parseInt(ymdMatch[1], 10);
    const month = Number.parseInt(ymdMatch[2], 10);
    const day = Number.parseInt(ymdMatch[3], 10);
    const date = new Date(year, month - 1, day);
    if (
      !Number.isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      return date;
    }
    return null;
  }

  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}

async function deleteByIdsInChunks(collection, ids, { chunkSize = 1000 } = {}) {
  let deleted = 0;
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    const result = await collection.deleteMany({ _id: { $in: chunk } });
    deleted += result.deletedCount || 0;
  }
  return deleted;
}

async function runPromotionsCleanup({ logger = console } = {}) {
  if (!config.mongo?.promotionsEnabled) {
    return { ok: true, skipped: true, reason: "MONGO_PROMOTIONS_ENABLED!=true" };
  }

  const db = await getMongoDb();
  const collection = db.collection("promotions");

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  // Chi xoa theo truong time.end theo yeu cau.
  const cursor = collection.find(
    {
      "time.end": { $exists: true, $nin: [null, ""] },
    },
    {
      projection: { _id: 1, time: 1 },
    }
  );

  const expiredIds = [];
  let scanned = 0;
  let invalidEndDate = 0;

  for await (const doc of cursor) {
    scanned += 1;
    const endDate = parseDateValue(doc?.time?.end);
    if (!endDate) {
      invalidEndDate += 1;
      continue;
    }
    endDate.setHours(0, 0, 0, 0);
    if (endDate < todayStart) {
      expiredIds.push(doc._id);
    }
  }

  const deleted =
    expiredIds.length > 0 ? await deleteByIdsInChunks(collection, expiredIds) : 0;

  logger.info(
    `[cron] promotions cleanup done: deleted=${deleted} scanned=${scanned} invalidEndDate=${invalidEndDate}`
  );

  return {
    ok: true,
    deleted,
    scanned,
    invalidEndDate,
    totalDeleted: deleted,
  };
}

export function startPromotionsCleanupJob({ logger = console } = {}) {
  if (!config.promotionsCleanup?.enabled) {
    logger.info("[cron] promotions cleanup disabled via PROMOTIONS_CLEANUP_ENABLED!=true");
    return null;
  }

  const schedule = config.promotionsCleanup?.schedule || "0 2 * * *";
  const timezone = config.promotionsCleanup?.timezone || "Asia/Bangkok";

  const task = cron.schedule(
    schedule,
    async () => {
      if (isRunning) {
        logger.warn("[cron] promotions cleanup skipped: previous run still running.");
        return;
      }

      isRunning = true;
      try {
        logger.info(`[cron] promotions cleanup started at ${new Date().toISOString()}`);
        await runPromotionsCleanup({ logger });
      } catch (error) {
        logger.error(`[cron] promotions cleanup failed: ${error.message}`);
      } finally {
        isRunning = false;
      }
    },
    { timezone }
  );

  task.start();
  return task;
}
