import path from "path";
import { mkdir, readFile, writeFile } from "fs/promises";
import { logger } from "../utils/logger.js";

const DATA_DIR = path.resolve("data", "articles", "vietrade");
const ARTICLES_FILE = path.join(DATA_DIR, "vietrade.json");

export async function initStorage() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    try {
      await readFile(ARTICLES_FILE, "utf8");
    } catch (error) {
      if (error?.code === "ENOENT") {
        await writeFile(ARTICLES_FILE, JSON.stringify([]), "utf8");
      } else {
        throw error;
      }
    }
  } catch (error) {
    logger.error(`Failed to initialize storage: ${error.message}`);
    throw error;
  }
}

export async function getAllArticles() {
  const data = await readFile(ARTICLES_FILE, "utf8");
  return JSON.parse(data);
}

export async function isArticleExists(articleUrl) {
  const articles = await getAllArticles();
  return articles.some((item) => item && item.url === articleUrl);
}

export async function saveArticle(article) {
  const articles = await getAllArticles();
  articles.push(article);
  await writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 2), "utf8");
  logger.info(`Saved article: ${article.title || article.url}`);
}

export async function saveBatchUnique(newArticles) {
  const articles = await getAllArticles();
  const existingUrls = new Set(
    articles
      .map((item) => item && item.url)
      .filter((value) => typeof value === "string" && value.length > 0)
  );

  const uniqueArticles = newArticles.filter(
    (item) => !existingUrls.has(item && item.url)
  );

  const merged = articles.concat(uniqueArticles);
  await writeFile(ARTICLES_FILE, JSON.stringify(merged, null, 2), "utf8");
  logger.info(`Saved ${uniqueArticles.length} new articles (total ${merged.length})`);

  return { saved: uniqueArticles.length, total: merged.length };
}