import cron from "node-cron";
import { config } from "../../config/index.js";
import {
  fetchPromotionsFromApi,
  upsertPromotionsWithMongoose,
} from "../../modules/promotions/mongo/promotionsMongoService.js";

let isRunning = false;

export function startPromotionsMongoDailyJob({ logger = console } = {}) {
  if (!config.promotionsCrawl?.enabled) {
    logger.info("[cron] promotions crawl disabled via PROMOTIONS_CRAWL_ENABLED!=true");
    return null;
  }

  const schedule = config.promotionsCrawl?.schedule || "0 1 * * *";
  const timezone = config.promotionsCrawl?.timezone || "Asia/Bangkok";

  const task = cron.schedule(
    schedule,
    async () => {
      if (isRunning) {
        logger.warn("[cron] promotions crawl skipped: previous run still running.");
        return;
      }

      isRunning = true;
      const startedAt = Date.now();
      try {
        logger.info(`[cron] promotions crawl started at ${new Date().toISOString()}`);
        const promotions = await fetchPromotionsFromApi({ logger });
        const result = await upsertPromotionsWithMongoose(promotions, { logger });
        const elapsedMs = Date.now() - startedAt;

        logger.info(
          `[cron] promotions crawl done in ${elapsedMs}ms: inserted=${result.inserted} updated=${result.updated} skipped=${result.skippedCount} total=${result.total}`
        );
      } catch (error) {
        logger.error(`[cron] promotions crawl failed: ${error.message}`);
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

