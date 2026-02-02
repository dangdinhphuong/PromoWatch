import { get } from "../utils/httpClient.js";
import { logger } from "../utils/logger.js";
import {
  parseArticleList,
  parsePagination,
  parseArticleDetail,
} from "../parser/vietradeParser.js";
import {
  initStorage,
  isArticleExists,
  saveArticle,
  getAllArticles,
} from "../storage/jsonStore.js";

const baseUrl = "https://kmttqg.vietrade.gov.vn/tin-khuyen-mai";
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
};

export async function runVietradeCrawl() {
  logger.info("Starting Vietrade crawler...");
  await initStorage();

  let currentPage = 1;
  let hasNextPage = true;
  let totalSaved = 0;
  let totalInFile = 0;

  while (hasNextPage) {
    const pageUrl =
      currentPage === 1 ? baseUrl : `${baseUrl}?page=${currentPage}`;
    logger.info(`Crawling page ${currentPage}: ${pageUrl}`);

    try {
      const response = await get(pageUrl, { headers, retry: 3 });
      const html = await response.text();

      const articleLinks = parseArticleList(html, baseUrl);
      logger.info(`Found ${articleLinks.length} articles on page ${currentPage}`);

      let newFound = 0;
      for (const link of articleLinks) {
        const exists = await isArticleExists(link);
        if (exists) {
          continue;
        }

        newFound += 1;
        await crawlArticle(link);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      totalSaved += newFound;

      if (newFound === 0) {
        logger.info("No new articles on this page, stopping pagination.");
        break;
      }

      const { lastPage } = parsePagination(html);
      if (currentPage < lastPage) {
        currentPage += 1;
      } else {
        hasNextPage = false;
      }
    } catch (error) {
      logger.error(`Error crawling page ${currentPage}: ${error.message}`);
      hasNextPage = false;
    }
  }

  const articles = await getAllArticles();
  totalInFile = articles.length;

  logger.info("Vietrade crawler finished.");
  return { saved: totalSaved, total: totalInFile };
}

async function crawlArticle(articleUrl) {
  try {
    logger.info(`Crawling article detail: ${articleUrl}`);
    const response = await get(articleUrl, { headers, retry: 3 });
    const html = await response.text();
    const articleData = parseArticleDetail(html, articleUrl);

    await saveArticle(articleData);
  } catch (error) {
    logger.error(`Failed to crawl article ${articleUrl}: ${error.message}`);
  }
}
