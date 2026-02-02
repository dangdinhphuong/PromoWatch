import path from "path";
import { mkdir, readFile, writeFile, rename } from "fs/promises";
import { logger } from "../utils/logger.js";
import { withFileLock } from "../../../utils/fileLock.js";

const DATA_DIR = path.resolve("data", "promotions");
const PROMOTIONS_FILE = path.join(DATA_DIR, "data.json");
const LEGACY_FILE = path.resolve("data", "promotions", "dichvucong", "dichvucong.json");

function normalizeJsonText(value) {
  if (!value) {
    return "";
  }
  return value.replace(/^\uFEFF/, "").trim();
}

function isDichvucongRecord(record) {
  return Boolean(record && record.source === "dichvucong");
}

function getRecordKey(record) {
  if (!record || !isDichvucongRecord(record)) {
    return null;
  }
  if (record.code) {
    return `dichvucong:${record.code}`;
  }
  if (record.rowStt !== null && record.rowStt !== undefined) {
    return `dichvucong:row:${record.rowStt}`;
  }
  return null;
}

async function readJsonArray(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    const normalized = normalizeJsonText(data);
    if (!normalized) {
      return [];
    }
    const parsed = JSON.parse(normalized);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error?.code === "ENOENT") {
      return [];
    }
    logger.error(`Failed to read JSON file ${filePath}: ${error.message}`);
    return [];
  }
}

async function writeJsonArray(filePath, items) {
  await withFileLock(filePath, async () => {
    const tempPath = `${filePath}.tmp`;
    await writeFile(tempPath, JSON.stringify(items, null, 2), "utf8");
    await rename(tempPath, filePath);
  });
}

function mergeDichvucongRecords(existing, incoming) {
  const merged = Array.isArray(existing) ? [...existing] : [];
  const existingKeys = new Set(
    merged
      .map((item) => getRecordKey(item))
      .filter((key) => typeof key === "string")
  );

  for (const item of incoming || []) {
    const key = getRecordKey(item);
    if (key && existingKeys.has(key)) {
      continue;
    }
    merged.push(item);
    if (key) {
      existingKeys.add(key);
    }
  }

  return merged;
}

export async function initStorage() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const existingAll = await readJsonArray(PROMOTIONS_FILE);
    const legacy = await readJsonArray(LEGACY_FILE);
    const merged = mergeDichvucongRecords(existingAll, legacy);

    if (!existingAll.length && !legacy.length) {
      await writeJsonArray(PROMOTIONS_FILE, []);
      return;
    }

    if (merged.length !== existingAll.length) {
      await writeJsonArray(PROMOTIONS_FILE, merged);
    }
  } catch (error) {
    logger.error(`Failed to initialize storage: ${error.message}`);
    throw error;
  }
}

export async function getAll() {
  const all = await readJsonArray(PROMOTIONS_FILE);
  return all.filter(isDichvucongRecord);
}

export async function saveBatchUnique(records) {
  const all = await readJsonArray(PROMOTIONS_FILE);
  const indexByKey = new Map();
  all.forEach((item, idx) => {
    const key = getRecordKey(item);
    if (key) {
      indexByKey.set(key, idx);
    }
  });

  const hasValue = (value) => {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === "string") {
      return value.trim().length > 0;
    }
    return true;
  };

  const mergeObjects = (base, incoming) => {
    if (!incoming || typeof incoming !== "object") {
      return base;
    }
    if (!base || typeof base !== "object") {
      return incoming;
    }
    const result = { ...base };
    for (const [key, value] of Object.entries(incoming)) {
      if (!hasValue(result[key]) && hasValue(value)) {
        result[key] = value;
      }
    }
    return result;
  };

  const mergeRecord = (existing, incoming) => {
    if (!existing) {
      return incoming;
    }
    const updated = { ...existing };

    for (const field of [
      "name",
      "company",
      "location",
      "productType",
      "discountPercent",
      "promotionMethod",
      "type",
      "agencyId",
      "total",
      "rowStt",
      "sourceUrl",
      "crawledAt",
    ]) {
      if (!hasValue(updated[field]) && hasValue(incoming[field])) {
        updated[field] = incoming[field];
      }
    }

    if (incoming.time) {
      updated.time = updated.time || {};
      if (!hasValue(updated.time.start) && hasValue(incoming.time.start)) {
        updated.time.start = incoming.time.start;
      }
      if (!hasValue(updated.time.end) && hasValue(incoming.time.end)) {
        updated.time.end = incoming.time.end;
      }
    }

    updated.meta = updated.meta || {};
    if (!updated.meta.rawA && incoming.meta && incoming.meta.rawA) {
      updated.meta.rawA = incoming.meta.rawA;
    }
    updated.meta.rawB = mergeObjects(updated.meta.rawB, incoming.meta && incoming.meta.rawB);

    return updated;
  };

  let saved = 0;
  const merged = [...all];
  for (const item of records || []) {
    const key = getRecordKey(item);
    if (key && indexByKey.has(key)) {
      const idx = indexByKey.get(key);
      merged[idx] = mergeRecord(merged[idx], item);
      continue;
    }
    merged.push(item);
    if (key) {
      indexByKey.set(key, merged.length - 1);
    }
    saved += 1;
  }

  await writeJsonArray(PROMOTIONS_FILE, merged);

  const totalForSource = merged.filter(isDichvucongRecord).length;
  return { saved, total: totalForSource };
}
