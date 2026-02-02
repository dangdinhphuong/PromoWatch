import path from "path";
import { mkdir, readFile, writeFile, rename } from "fs/promises";
import { logger } from "../utils/logger.js";
import { withFileLock } from "../../../utils/fileLock.js";

const LEGACY_DIR = path.resolve("data", "articles", "vietrade");
const LEGACY_FILE = path.join(LEGACY_DIR, "vietrade.json");
const LEGACY_PROMOTIONS_FILE = path.resolve("data", "promotions", "vietrade", "vietrade.json");
const DATA_DIR = path.resolve("data", "promotions");
const PROMOTIONS_FILE = path.join(DATA_DIR, "data.json");

function isVietradeRecord(record) {
  if (!record) {
    return false;
  }
  const url =
    record.sourceUrl ||
    (record.meta && record.meta.rawB && record.meta.rawB.url) ||
    "";
  return typeof url === "string" && url.includes("vietrade.gov.vn");
}

function getRecordKey(record) {
  if (!record || !isVietradeRecord(record)) {
    return null;
  }
  if (record.sourceUrl) {
    return `vietrade:${record.sourceUrl}`;
  }
  if (record.url) {
    return `vietrade:${record.url}`;
  }
  if (record.meta && record.meta.rawB && record.meta.rawB.url) {
    return `vietrade:${record.meta.rawB.url}`;
  }
  return null;
}

async function readJsonArray(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    const trimmed = data.trim();
    if (!trimmed) {
      return [];
    }
    const parsed = JSON.parse(trimmed);
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

function mergeVietradeRecords(existing, incoming) {
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
    const legacyArticles = await readJsonArray(LEGACY_FILE);
    const legacyPromotions = await readJsonArray(LEGACY_PROMOTIONS_FILE);
    const mergedLegacy = mergeVietradeRecords(legacyArticles, legacyPromotions);
    const merged = mergeVietradeRecords(existingAll, mergedLegacy);

    if (!existingAll.length && !mergedLegacy.length) {
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

export async function getAllArticles() {
  const all = await readJsonArray(PROMOTIONS_FILE);
  return all.filter(isVietradeRecord);
}

export async function isArticleExists(articleUrl) {
  const articles = await getAllArticles();
  return articles.some((item) => {
    if (!item) {
      return false;
    }
    if (item.sourceUrl === articleUrl || item.url === articleUrl) {
      return true;
    }
    return false;
  });
}

export async function saveArticle(article) {
  const all = await readJsonArray(PROMOTIONS_FILE);
  all.push(article);
  await writeJsonArray(PROMOTIONS_FILE, all);
  const label =
    article && article.name
      ? article.name
      : article && article.sourceUrl
      ? article.sourceUrl
      : article && article.url
      ? article.url
      : "unknown";
  logger.info(`Saved article: ${label}`);
}

export async function saveBatchUnique(newArticles) {
  const all = await readJsonArray(PROMOTIONS_FILE);
  const existingUrls = new Set(
    all
      .filter(isVietradeRecord)
      .map((item) => {
        if (!item) {
          return null;
        }
        if (item.sourceUrl) {
          return item.sourceUrl;
        }
        if (item.url) {
          return item.url;
        }
        if (item.meta && item.meta.rawB && item.meta.rawB.url) {
          return item.meta.rawB.url;
        }
        return null;
      })
      .filter((value) => typeof value === "string" && value.length > 0)
  );

  const uniqueArticles = (newArticles || []).filter(
    (item) => !existingUrls.has(item && (item.sourceUrl || item.url))
  );

  const merged = all.concat(uniqueArticles);
  await writeJsonArray(PROMOTIONS_FILE, merged);
  const totalForSource = merged.filter(isVietradeRecord).length;
  logger.info(`Saved ${uniqueArticles.length} new articles (total ${totalForSource})`);

  return { saved: uniqueArticles.length, total: totalForSource };
}
