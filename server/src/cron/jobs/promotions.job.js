import {
  runBloggiamgia,
  runDichvucong,
  runVietrade,
} from "../../modules/promotions/index.js";
import { syncPromotionsFileToMongo } from "../../modules/promotions/shared/promotionsMongoSync.js";

export async function runDichvucongJob({ logger = console } = {}) {
  logger.info(`[cron] dichvucong job at ${new Date().toISOString()}`);
  const result = await runDichvucong();
  logger.info(
    `[cron] dichvucong saved ${result.saved} new records (total ${result.total})`
  );
  const syncResult = await syncPromotionsFileToMongo({ logger });
  logger.info(
    `[cron] mongo sync after dichvucong: ok=${syncResult.ok} upserted=${syncResult.upserted ?? 0} modified=${syncResult.modified ?? 0} skippedNoKey=${syncResult.skippedNoKey ?? 0}`
  );
  return result;
}

export async function runVietradeJob({ logger = console } = {}) {
  logger.info(`[cron] vietrade job at ${new Date().toISOString()}`);
  const result = await runVietrade();
  logger.info(
    `[cron] vietrade saved ${result.saved} new records (total ${result.total})`
  );
  const syncResult = await syncPromotionsFileToMongo({ logger });
  logger.info(
    `[cron] mongo sync after vietrade: ok=${syncResult.ok} upserted=${syncResult.upserted ?? 0} modified=${syncResult.modified ?? 0} skippedNoKey=${syncResult.skippedNoKey ?? 0}`
  );
  return result;
}

export async function runBloggiamgiaJob({ logger = console } = {}) {
  logger.info(`[cron] bloggiamgia job at ${new Date().toISOString()}`);
  const result = await runBloggiamgia();
  logger.info(
    `[cron] bloggiamgia saved ${result.saved} new records (total ${result.total})`
  );
  const syncResult = await syncPromotionsFileToMongo({ logger });
  logger.info(
    `[cron] mongo sync after bloggiamgia: ok=${syncResult.ok} upserted=${syncResult.upserted ?? 0} modified=${syncResult.modified ?? 0} skippedNoKey=${syncResult.skippedNoKey ?? 0}`
  );
  return result;
}
