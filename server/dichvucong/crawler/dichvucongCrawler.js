import { post } from "../utils/httpClient.js";
import { logger } from "../utils/logger.js";
import {
  buildPayload,
  parseRows,
  getPagination,
  filterActive,
} from "../parser/dichvucongParser.js";
import { initStorage, saveBatchUnique } from "../storage/jsonStore.js";

const endpoint = "https://dichvucong.gov.vn/jsp/rest.jsp";
const headers = {
  Accept: "application/json, text/javascript, */*; q=0.01",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  Origin: "https://dichvucong.gov.vn",
  Referer: "https://dichvucong.gov.vn/p/home/dvc-tra-cuu-ho-so.html",
  "X-Requested-With": "XMLHttpRequest",
};

export async function runDichvucongCrawl() {
  await initStorage();

  const recordPerPage = Number(process.env.DVC_RECORDS_PER_PAGE) || 500;
  const maxPages = Number(process.env.DVC_MAX_PAGES) || 0;

  let pageIndex = 1;
  let totalExpected = null;
  let lastRowStt = 0;
  let totalSaved = 0;
  let totalInFile = 0;

  while (true) {
    logger.info(`Fetching page ${pageIndex}`);
    const payload = buildPayload(pageIndex, recordPerPage);

    try {
      const response = await post(endpoint, payload, { headers, retry: 3 });
      const data = await response.json();
      const rows = parseRows(data);

      if (!rows || rows.length === 0) {
        logger.info("No rows returned, stopping.");
        break;
      }

      const activeRows = filterActive(rows);
      const savedResult = await saveBatchUnique(activeRows);
      totalSaved += savedResult.saved;
      totalInFile = savedResult.total;
      if (savedResult.saved === 0) {
        logger.info("No new records on this page, stopping pagination.");
        break;
      }

      const { rowStt, total } = getPagination(rows);
      if (total !== null) {
        totalExpected = total;
      }

      if (rowStt !== null) {
        if (rowStt <= lastRowStt) {
          logger.warn("Pagination stopped: ROW_STT did not advance.");
          break;
        }
        lastRowStt = rowStt;
      }

      if (rowStt === null || totalExpected === null) {
        logger.warn("Pagination stopped: missing ROW_STT or TOTAL.");
        break;
      }

      if (maxPages > 0 && pageIndex >= maxPages) {
        logger.warn("Pagination stopped: reached max pages limit.");
        break;
      }

      if (rowStt < totalExpected) {
        pageIndex += 1;
        continue;
      }

      break;
    } catch (error) {
      logger.error(`Error fetching page ${pageIndex}: ${error.message}`);
      break;
    }
  }

  return { saved: totalSaved, total: totalInFile };
}
