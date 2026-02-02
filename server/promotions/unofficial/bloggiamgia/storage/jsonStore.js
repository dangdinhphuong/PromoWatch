import path from "path";
import { mkdir, readFile, writeFile } from "fs/promises";
import { load } from "cheerio";
import { logger } from "../utils/logger.js";

const LEGACY_DIR = path.resolve("data", "articles", "bloggiamgia");
const LEGACY_FILE = path.join(LEGACY_DIR, "bloggiamgia.json");
const LEGACY_PROMOTIONS_FILE = path.resolve(
  "data",
  "promotions",
  "bloggiamgia",
  "bloggiamgia.json"
);
const DATA_DIR = path.resolve("data", "promotions");
const PROMOTIONS_FILE = path.join(DATA_DIR, "data.json");

function normalizeWhitespace(value) {
  if (!value) {
    return "";
  }
  return value.replace(/\s+/g, " ").trim();
}

function sanitizeContent(value) {
  if (!value) {
    return "";
  }
  let text = value;
  if (/<[^>]+>/.test(text)) {
    text = load(`<div>${text}</div>`).text();
  }
  const withoutLinks = text.replace(/https?:\/\/\S+/gi, "");
  return normalizeWhitespace(withoutLinks);
}

function sanitizeExistingContent(articles) {
  if (!Array.isArray(articles)) {
    return { updated: false, items: articles };
  }
  let updated = false;
  const items = articles.map((item) => {
    if (!isBloggiamgiaRecord(item)) {
      return item;
    }
    const content = item?.meta?.rawB?.content;
    if (typeof content !== "string") {
      return item;
    }
    const cleaned = sanitizeContent(content);
    if (cleaned === content) {
      return item;
    }
    updated = true;
    return {
      ...item,
      meta: {
        ...item.meta,
        rawB: {
          ...item.meta?.rawB,
          content: cleaned || null,
        },
      },
    };
  });
  return { updated, items };
}

function isBloggiamgiaRecord(record) {
  if (!record) {
    return false;
  }
  const url =
    record.sourceUrl ||
    record.url ||
    (record.meta && record.meta.rawB && record.meta.rawB.url) ||
    "";
  if (typeof url === "string" && url.includes("bloggiamgia.vn")) {
    return true;
  }
  const sourceName = record?.meta?.rawB?.sourceName;
  return sourceName === "Bloggiamgia.vn";
}

function getRecordKey(record) {
  if (!record || !isBloggiamgiaRecord(record)) {
    return null;
  }
  if (record.sourceUrl) {
    return `bloggiamgia:${record.sourceUrl}`;
  }
  if (record.url) {
    return `bloggiamgia:${record.url}`;
  }
  if (record.code) {
    return `bloggiamgia:code:${record.code}`;
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
  await writeFile(filePath, JSON.stringify(items, null, 2), "utf8");
}

function mergeBloggiamgiaRecords(existing, incoming) {
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
    const mergedLegacy = mergeBloggiamgiaRecords(legacyArticles, legacyPromotions);
    const merged = mergeBloggiamgiaRecords(existingAll, mergedLegacy);
    const sanitized = sanitizeExistingContent(merged);

    if (!existingAll.length && !mergedLegacy.length) {
      await writeJsonArray(PROMOTIONS_FILE, []);
      return;
    }

    if (sanitized.updated || sanitized.items.length !== existingAll.length) {
      await writeJsonArray(PROMOTIONS_FILE, sanitized.items);
    }
  } catch (error) {
    logger.error(`Failed to initialize storage: ${error.message}`);
    throw error;
  }
}

export async function getAllArticles() {
  const all = await readJsonArray(PROMOTIONS_FILE);
  return all.filter(isBloggiamgiaRecord);
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
    const links = item.source && Array.isArray(item.source.links) ? item.source.links : [];
    return links.includes(articleUrl);
  });
}

export async function saveArticle(article) {
  const all = await readJsonArray(PROMOTIONS_FILE);
  all.push(article);
  await writeJsonArray(PROMOTIONS_FILE, all);
  const label =
    article && article.name
      ? article.name
      : article && article.topic
      ? article.topic
      : article && article.sourceUrl
      ? article.sourceUrl
      : article && article.source && Array.isArray(article.source.links)
      ? article.source.links[0]
      : "unknown";
  logger.info(`Saved article: ${label}`);
}

export async function saveBatchUnique(newArticles) {
  const all = await readJsonArray(PROMOTIONS_FILE);
  const existingUrls = new Set(
    all
      .filter(isBloggiamgiaRecord)
      .flatMap((item) => {
        if (!item) {
          return [];
        }
        if (item.sourceUrl) {
          return [item.sourceUrl];
        }
        if (item.url) {
          return [item.url];
        }
        if (item.source && Array.isArray(item.source.links)) {
          return item.source.links;
        }
        return [];
      })
      .filter((value) => typeof value === "string" && value.length > 0)
  );

  const uniqueArticles = (newArticles || []).filter(
    (item) => !existingUrls.has(item && (item.sourceUrl || item.url))
  );

  const merged = all.concat(uniqueArticles);
  await writeJsonArray(PROMOTIONS_FILE, merged);
  const totalForSource = merged.filter(isBloggiamgiaRecord).length;
  logger.info(`Saved ${uniqueArticles.length} new articles (total ${totalForSource})`);

  return { saved: uniqueArticles.length, total: totalForSource };
}
