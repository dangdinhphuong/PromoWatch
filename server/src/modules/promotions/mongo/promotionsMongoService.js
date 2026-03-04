import { fetchJson } from "../../../services/http/index.js";
import { config } from "../../../config/index.js";
import { connectMongo } from "../../../db/mongoose.js";
import { Promotion } from "../../../models/promotion.model.js";

let indexesPreparedPromise = null;

function trimToNull(value) {
  if (value === null || value === undefined) {
    return null;
  }
  if (typeof value !== "string") {
    return String(value);
  }
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

function toNumberOrNull(value) {
  if (value === null || value === undefined) {
    return null;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  const raw = typeof value === "string" ? value.trim() : String(value).trim();
  if (!raw) {
    return null;
  }
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeDateString(value) {
  const raw = trimToNull(value);
  if (!raw) {
    return null;
  }

  const matchDmy = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (matchDmy) {
    const day = Number.parseInt(matchDmy[1], 10);
    const month = Number.parseInt(matchDmy[2], 10);
    const year = Number.parseInt(matchDmy[3], 10);
    const date = new Date(year, month - 1, day);
    if (
      !Number.isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      const mm = String(month).padStart(2, "0");
      const dd = String(day).padStart(2, "0");
      return `${year}-${mm}-${dd}`;
    }
    return null;
  }

  const matchYmd = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (matchYmd) {
    const year = Number.parseInt(matchYmd[1], 10);
    const month = Number.parseInt(matchYmd[2], 10);
    const day = Number.parseInt(matchYmd[3], 10);
    const date = new Date(year, month - 1, day);
    if (
      !Number.isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      const mm = String(month).padStart(2, "0");
      const dd = String(day).padStart(2, "0");
      return `${year}-${mm}-${dd}`;
    }
    return null;
  }

  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIsoDateTime(value) {
  const raw = trimToNull(value);
  if (!raw) {
    return null;
  }
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date;
}

function parseYmdToDate(value) {
  const raw = trimToNull(value);
  if (!raw) {
    return null;
  }

  const matchYmd = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!matchYmd) {
    return null;
  }

  const year = Number.parseInt(matchYmd[1], 10);
  const month = Number.parseInt(matchYmd[2], 10);
  const day = Number.parseInt(matchYmd[3], 10);
  const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
  return Number.isNaN(date.getTime()) ? null : date;
}

function getPromotionKey(record) {
  if (!record || typeof record !== "object") {
    return null;
  }

  const source = trimToNull(record.source);
  if (!source) {
    return null;
  }

  const code = trimToNull(record.code);
  if (code) {
    return `${source}:code:${code}`;
  }

  const sourceUrl = trimToNull(record.sourceUrl);
  if (sourceUrl) {
    return `${source}:url:${sourceUrl}`;
  }

  const url = trimToNull(record.url);
  if (url) {
    return `${source}:url:${url}`;
  }

  if (record.id !== null && record.id !== undefined) {
    const rawId = String(record.id).trim();
    if (rawId) {
      return `${source}:id:${rawId}`;
    }
  }

  if (record.rowStt !== null && record.rowStt !== undefined) {
    const rawRow = String(record.rowStt).trim();
    if (rawRow) {
      return `${source}:row:${rawRow}`;
    }
  }

  const name = trimToNull(record.name);
  const company = trimToNull(record.company);
  const start = normalizeDateString(record?.time?.start);
  const end = normalizeDateString(record?.time?.end);
  const parts = [name, company, start, end].filter(Boolean);
  if (parts.length) {
    return `${source}:fallback:${parts.join("|").slice(0, 512)}`;
  }

  return null;
}

export function normalizePromotionRecord(record) {
  if (!record || typeof record !== "object") {
    return null;
  }

  const source = trimToNull(record.source);
  if (!source) {
    return null;
  }

  const key = getPromotionKey(record);
  if (!key) {
    return null;
  }

  const timeStart = normalizeDateString(record?.time?.start);
  const timeEnd = normalizeDateString(record?.time?.end);
  const crawledAt = parseIsoDateTime(record.crawledAt);
  const crawledAtDate = crawledAt
    ? new Date(Date.UTC(crawledAt.getUTCFullYear(), crawledAt.getUTCMonth(), crawledAt.getUTCDate()))
    : null;

  return {
    key,
    source,
    code: trimToNull(record.code),
    name: trimToNull(record.name),
    company: trimToNull(record.company),
    time:
      timeStart || timeEnd
        ? {
            start: timeStart,
            end: timeEnd,
          }
        : record.time
        ? {
            start: trimToNull(record?.time?.start),
            end: trimToNull(record?.time?.end),
          }
        : null,
    timeStartDate: parseYmdToDate(timeStart),
    timeEndDate: parseYmdToDate(timeEnd),
    location: trimToNull(record.location),
    productType: trimToNull(record.productType),
    discountPercent: toNumberOrNull(record.discountPercent),
    promotionMethod: trimToNull(record.promotionMethod),
    type: trimToNull(record.type),
    agencyId:
      record.agencyId === null || record.agencyId === undefined
        ? null
        : String(record.agencyId),
    total: toNumberOrNull(record.total),
    rowStt: toNumberOrNull(record.rowStt),
    sourceUrl: trimToNull(record.sourceUrl),
    crawledAt,
    crawledAtDate,
    meta: record.meta ?? null,
  };
}

async function preparePromotionIndexes({ logger = console } = {}) {
  if (indexesPreparedPromise) {
    return indexesPreparedPromise;
  }

  indexesPreparedPromise = (async () => {
    await connectMongo({ logger });

    const legacyIndexName = "promotions_source_id_unique";
    try {
      await Promotion.collection.dropIndex(legacyIndexName);
      logger.info(`[mongo] dropped legacy index: ${legacyIndexName}`);
    } catch (error) {
      const codeName = error?.codeName;
      const isIndexNotFound = codeName === "IndexNotFound" || error?.code === 27;
      const isNamespaceMissing = codeName === "NamespaceNotFound" || error?.code === 26;
      if (!isIndexNotFound && !isNamespaceMissing) {
        throw error;
      }
    }

    await Promotion.init();
  })().catch((error) => {
    indexesPreparedPromise = null;
    throw error;
  });

  return indexesPreparedPromise;
}

export async function fetchPromotionsFromApi({ url, logger = console } = {}) {
  const targetUrl = url || config.promotionsCrawl?.apiUrl || "";
  if (!targetUrl) {
    const error = new Error("PROMOTIONS_CRAWL_API_URL is not set.");
    error.code = "MISSING_PROMOTIONS_CRAWL_API_URL";
    throw error;
  }

  logger.info(`[crawl] fetching promotions from ${targetUrl}`);
  const payload = await fetchJson(targetUrl, { timeoutMs: 60_000 });

  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.data)) {
    return payload.data;
  }

  if (payload && Array.isArray(payload.promotions)) {
    return payload.promotions;
  }

  return [];
}

export async function upsertPromotionsWithMongoose(records, { logger = console } = {}) {
  if (!config.mongo?.promotionsEnabled) {
    return {
      ok: true,
      skipped: true,
      reason: "MONGO_PROMOTIONS_ENABLED!=true",
      inserted: 0,
      updated: 0,
      skippedCount: 0,
      total: Array.isArray(records) ? records.length : 0,
    };
  }

  const rawRecords = Array.isArray(records) ? records : [];
  if (rawRecords.length === 0) {
    return { ok: true, inserted: 0, updated: 0, skippedCount: 0, total: 0 };
  }

  await preparePromotionIndexes({ logger });

  const ops = [];
  const seenKeys = new Set();
  let invalid = 0;
  let duplicateInBatch = 0;

  const now = new Date();
  for (const raw of rawRecords) {
    const doc = normalizePromotionRecord(raw);
    if (!doc) {
      invalid += 1;
      continue;
    }

    if (seenKeys.has(doc.key)) {
      duplicateInBatch += 1;
      continue;
    }
    seenKeys.add(doc.key);

    const legacyOrFilters = [{ key: doc.key }];
    if (doc.code) {
      legacyOrFilters.push({ code: doc.code });
    }
    if (doc.sourceUrl) {
      legacyOrFilters.push({ sourceUrl: doc.sourceUrl });
    }
    if (raw && raw.id !== null && raw.id !== undefined) {
      const rawId = String(raw.id).trim();
      if (rawId) {
        legacyOrFilters.push({ id: rawId });
      }
    }

    ops.push({
      updateOne: {
        filter: { source: doc.source, $or: legacyOrFilters },
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
    return {
      ok: true,
      inserted: 0,
      updated: 0,
      skippedCount: invalid + duplicateInBatch,
      invalid,
      duplicateInBatch,
      total: rawRecords.length,
    };
  }

  const result = await Promotion.bulkWrite(ops, { ordered: false });
  const inserted = result.upsertedCount || 0;
  const updated = result.modifiedCount || 0;
  const matched = result.matchedCount || 0;
  const unchanged = Math.max(0, matched - updated);

  return {
    ok: true,
    inserted,
    updated,
    unchanged,
    invalid,
    duplicateInBatch,
    skippedCount: invalid + duplicateInBatch + unchanged,
    processed: ops.length,
    total: rawRecords.length,
  };
}
