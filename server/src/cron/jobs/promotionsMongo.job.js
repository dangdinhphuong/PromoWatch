import cron from "node-cron";
import { config } from "../../config/index.js";
import { syncPromotionsFileToSupabase } from "../../modules/promotions/shared/promotionsSupabaseSync.js";

let isRunning = false;

export function startPromotionsMongoDailyJob({ logger = console } = {}) {
  if (!config.promotionsCrawl?.enabled) {
    logger.info("[cron] promotions db sync disabled via PROMOTIONS_CRAWL_ENABLED!=true");
    return null;
  }

  const schedule = config.promotionsCrawl?.schedule || "0 1 * * *";
  const timezone = config.promotionsCrawl?.timezone || "Asia/Bangkok";

  const task = cron.schedule(
    schedule,
    async () => {
      if (isRunning) {
        logger.warn("[cron] promotions db sync skipped: previous run still running.");
        return;
      }

      isRunning = true;
      const startedAt = Date.now();
      try {
        logger.info(`[cron] promotions db sync started at ${new Date().toISOString()}`);
        const result = await syncPromotionsFileToSupabase({ logger });
        if (!result.ok) {
          throw new Error(result.error || "Unknown Supabase sync error");
        }
        const elapsedMs = Date.now() - startedAt;

        logger.info(
          `[cron] promotions db sync done in ${elapsedMs}ms: upserted=${result.upserted ?? 0} skippedNoKey=${result.skippedNoKey ?? 0} total=${result?.file?.total ?? result.total ?? 0}`
        );
      } catch (error) {
        logger.error(`[cron] promotions db sync failed: ${error.message}`);
        if (process.env.LOG_STACK === "true" && error?.stack) {
          logger.error(error.stack);
        }
      } finally {
        isRunning = false;
      }
    },
    { timezone }
  );

  task.start();
  return task;
}
