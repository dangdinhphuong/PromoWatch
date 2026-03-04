import { config } from "../../../config/index.js";
import { getMongoDb } from "../../../db/mongo.js";

const COLLECTION_NAME = "promotions";

let collectionPromise = null;
let indexesEnsured = false;

export function getPromotionKey(record) {
  if (!record || typeof record !== "object") {
    return null;
  }

  const source = typeof record.source === "string" ? record.source.trim() : "";
  if (!source) {
    return null;
  }

  const code = typeof record.code === "string" ? record.code.trim() : "";
  if (code) {
    return `${source}:code:${code}`;
  }

  const sourceUrl = typeof record.sourceUrl === "string" ? record.sourceUrl.trim() : "";
  if (sourceUrl) {
    return `${source}:url:${sourceUrl}`;
  }

  const url = typeof record.url === "string" ? record.url.trim() : "";
  if (url) {
    return `${source}:url:${url}`;
  }

  if (record.id !== null && record.id !== undefined) {
    return `${source}:id:${String(record.id)}`;
  }

  if (record.rowStt !== null && record.rowStt !== undefined) {
    return `${source}:row:${String(record.rowStt)}`;
  }

  return null;
}

function parseDate(value) {
  if (!value) {
    return null;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date;
}

function normalizePromotion(record) {
  const normalized = record && typeof record === "object" ? { ...record } : {};
  delete normalized.id;
  normalized.key = getPromotionKey(record);

  const crawledAtDate = parseDate(record && record.crawledAt);
  if (crawledAtDate) {
    normalized.crawledAtDate = crawledAtDate;
  }

  const startDate = parseDate(record && record.time && record.time.start);
  if (startDate) {
    normalized.timeStartDate = startDate;
  }

  const endDate = parseDate(record && record.time && record.time.end);
  if (endDate) {
    normalized.timeEndDate = endDate;
  }

  return normalized;
}

async function ensureIndexes(collection) {
  if (indexesEnsured) {
    return;
  }

  try {
    await collection.dropIndex("promotions_source_id_unique");
  } catch (error) {
    const codeName = error?.codeName;
    const isIndexNotFound = codeName === "IndexNotFound" || error?.code === 27;
    const isNamespaceMissing = codeName === "NamespaceNotFound" || error?.code === 26;
    if (!isIndexNotFound && !isNamespaceMissing) {
      throw error;
    }
  }

  await collection.createIndex(
    { key: 1 },
    { name: "promotions_key_unique", unique: true, sparse: true }
  );
  await collection.createIndex({ source: 1, crawledAtDate: -1 }, { name: "promotions_source_crawledAt" });
  await collection.createIndex({ crawledAtDate: -1 }, { name: "promotions_crawledAt" });
  await collection.createIndex({ type: 1, source: 1 }, { name: "promotions_type_source" });
  await collection.createIndex({ "time.start": 1, "time.end": 1 }, { name: "promotions_timeRange" });
  await collection.createIndex(
    { name: "text", company: "text", code: "text" },
    { name: "promotions_textSearch", default_language: "none" }
  );

  indexesEnsured = true;
}

async function getPromotionsCollection() {
  if (!collectionPromise) {
    collectionPromise = (async () => {
      const db = await getMongoDb();
      const collection = db.collection(COLLECTION_NAME);
      await ensureIndexes(collection);
      return collection;
    })();
  }
  return collectionPromise;
}

export async function upsertPromotions(records, { logger = console } = {}) {
  if (!config.mongo?.promotionsEnabled) {
    return { ok: true, skipped: true, reason: "MONGO_PROMOTIONS_ENABLED=false" };
  }

  const items = Array.isArray(records) ? records.filter(Boolean) : [];
  if (items.length === 0) {
    return { ok: true, upserted: 0, modified: 0, matched: 0, skippedNoKey: 0 };
  }

  const collection = await getPromotionsCollection();
  const now = new Date();

  const ops = [];
  let skippedNoKey = 0;

  for (const record of items) {
    const doc = normalizePromotion(record);
    if (!doc.key) {
      skippedNoKey += 1;
      continue;
    }

    ops.push({
      updateOne: {
        filter: { key: doc.key },
        update: {
          $set: doc,
          $setOnInsert: { createdAt: now },
          $currentDate: { updatedAt: true },
          $unset: { id: "" },
        },
        upsert: true,
      },
    });
  }

  if (ops.length === 0) {
    return { ok: true, upserted: 0, modified: 0, matched: 0, skippedNoKey };
  }

  try {
    const result = await collection.bulkWrite(ops, { ordered: false });
    return {
      ok: true,
      upserted: result.upsertedCount || 0,
      modified: result.modifiedCount || 0,
      matched: result.matchedCount || 0,
      ops: ops.length,
      skippedNoKey,
    };
  } catch (error) {
    logger.error(`[mongo] promotions bulkWrite failed: ${error.message}`);
    throw error;
  }
}

export async function tryUpsertPromotions(records, { logger = console } = {}) {
  try {
    return await upsertPromotions(records, { logger });
  } catch (error) {
    logger.warn(`[mongo] promotions upsert skipped due to error: ${error.message}`);
    return { ok: false, error: error.message };
  }
}
