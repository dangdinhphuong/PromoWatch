import { post } from "../utils/httpClient.js";
import { logger } from "../utils/logger.js";
import {
  buildPayload,
  buildDetailPayload,
  parseRows,
  parseDetailResponse,
  getPagination,
  filterActive,
  mapRowToPromotion,
} from "../parser/dichvucongParser.js";
import { initStorage, saveBatchUnique } from "../storage/jsonStore.js";

const endpoint = "https://dichvucong.gov.vn/jsp/rest.jsp";
const headers = {
  Accept: "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "en,fr-FR;q=0.9,fr;q=0.8,vi;q=0.7,en-US;q=0.6,zh-CN;q=0.5,zh;q=0.4",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  Origin: "https://dichvucong.gov.vn",
  Referer: "https://dichvucong.gov.vn/p/home/dvc-tra-cuu-ho-so.html",
  "X-Requested-With": "XMLHttpRequest",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36",
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchDetail(submissionCode, agencyId) {
  if (!submissionCode) {
    return null;
  }
  const payload = buildDetailPayload(submissionCode, agencyId || "-1");
  const response = await post(endpoint, payload, { headers, retry: 3 });
  const data = await response.json();
  return parseDetailResponse(data);
}

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
      const mappedRows = [];
      for (const row of activeRows) {
        const submissionCode = row && row.SUBMISSION_CODE ? String(row.SUBMISSION_CODE) : null;
        const agencyId = row && row.AGENCY_ID ? String(row.AGENCY_ID) : "-1";
        let detail = null;
        try {
          detail = await fetchDetail(submissionCode, agencyId);
        } catch (error) {
          logger.warn(
            `Detail fetch failed for ${submissionCode || "unknown"}: ${error.message}`
          );
        }
        mappedRows.push({
          ...mapRowToPromotion(row, detail),
          crawledAt: new Date().toISOString(),
        });
        await delay(200);
      }
      const savedResult = await saveBatchUnique(mappedRows);
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
      if (error && error.cause) {
        logger.error(`Error cause: ${error.cause.message || error.cause}`);
      }
      if (error && error.stack) {
        logger.error(error.stack);
      }
      break;
    }
  }

  return { saved: totalSaved, total: totalInFile };
}
