import { fetchJson } from "../../../../services/http.js";
import { logger } from "../utils/logger.js";
import {
  buildBlogUrl,
  parseBlogDetail,
  parseBlogList,
} from "../parser/bloggiamgiaParser.js";
import {
  initStorage,
  isArticleExists,
  saveArticle,
  getAllArticles,
} from "../storage/jsonStore.js";

const API_BASE = "https://api.bloggiamgia.vn/api";
const CATEGORY_SLUG = "tin-khuyen-mai";
const PAGE_SIZE = 15;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchCategoryId() {
  const category = await fetchJson(`${API_BASE}/b/BlogCategory/bySlug/${CATEGORY_SLUG}`, {
    timeoutMs: 12_000,
  });
  return category && category.id ? category.id : null;
}

async function fetchBlogList(categoryId, page) {
  const params = new URLSearchParams({
    pageSize: String(PAGE_SIZE),
    page: String(page),
  });
  const url = `${API_BASE}/b/Blog/category/${categoryId}?${params.toString()}`;
  return fetchJson(url, { timeoutMs: 12_000 });
}

async function fetchBlogDetail(slug) {
  const url = `${API_BASE}/b/Blog/slug/${slug}`;
  return fetchJson(url, { timeoutMs: 12_000 });
}

export async function runBloggiamgiaCrawl() {
  logger.info("Starting Bloggiamgia crawler...");
  await initStorage();

  const categoryId = await fetchCategoryId();
  if (!categoryId) {
    throw new Error("Cannot resolve bloggiamgia category id.");
  }

  let page = 1;
  let totalSaved = 0;

  while (true) {
    logger.info(`Fetching list page ${page}...`);
    try {
      const listPayload = await fetchBlogList(categoryId, page);
      const { items, pageSize, total } = parseBlogList(listPayload);

      if (!items.length) {
        break;
      }

      let newFound = 0;
      for (const item of items) {
        const articleUrl = buildBlogUrl(item && item.slug);
        if (!articleUrl) {
          continue;
        }

        const exists = await isArticleExists(articleUrl);
        if (exists) {
          continue;
        }

        const detailPayload = await fetchBlogDetail(item.slug);
        const blog = detailPayload?.data?.blog || detailPayload?.blog || null;
        const parsed = parseBlogDetail(blog, articleUrl);
        if (parsed) {
          await saveArticle(parsed);
          newFound += 1;
        }

        await delay(800);
      }

      totalSaved += newFound;

      if (newFound === 0) {
        logger.info("No new articles on this page, stopping pagination.");
        break;
      }

      if (page * pageSize >= total) {
        break;
      }

      page += 1;
    } catch (error) {
      logger.error(`Error crawling page ${page}: ${error.message}`);
      break;
    }
  }

  const articles = await getAllArticles();
  const totalInFile = articles.length;

  logger.info("Bloggiamgia crawler finished.");
  return { saved: totalSaved, total: totalInFile };
}
