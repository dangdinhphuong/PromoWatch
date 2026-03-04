import cron from "node-cron";
import { config } from "../config/index.js";
import { query } from "../db/index.js";
import {
  runBloggiamgiaJob,
  runDichvucongJob,
  runVietradeJob,
} from "./jobs/promotions.job.js";
import { startPromotionsCleanupJob } from "./jobs/promotionsCleanup.job.js";
import { startPromotionsMongoDailyJob } from "./jobs/promotionsMongo.job.js";

export function startCron({ logger = console } = {}) {
  if (!config.cron.enabled) {
    logger.info("Cron disabled via CRON_ENABLED=false");
    return null;
  }

  const tasks = [];

  const task = cron.schedule(config.cron.schedule, async () => {
    logger.info(`[cron] running job at ${new Date().toISOString()}`);
    if (config.cron.dbPing) {
      try {
        const result = await query("select now() as now");
        logger.info(`[cron] db ping ok: ${result.rows[0].now}`);
      } catch (error) {
        logger.warn(`[cron] db ping failed: ${error.message}`);
      }
    }

    if (config.cron.serial) {
      if (config.dichvucong.cronEnabled) {
        try {
          await runDichvucongJob({ logger });
        } catch (error) {
          logger.warn(`[cron] dichvucong failed: ${error.message}`);
        }
      }

      if (config.vietrade.cronEnabled) {
        try {
          await runVietradeJob({ logger });
        } catch (error) {
          logger.warn(`[cron] vietrade failed: ${error.message}`);
        }
      }

      if (config.bloggiamgia.cronEnabled) {
        try {
          await runBloggiamgiaJob({ logger });
        } catch (error) {
          logger.warn(`[cron] bloggiamgia failed: ${error.message}`);
        }
      }
    }
  });

  task.start();
  tasks.push(task);

  if (!config.cron.serial && config.dichvucong.cronEnabled) {
    const dvcTask = cron.schedule(config.dichvucong.cronSchedule, async () => {
      try {
        await runDichvucongJob({ logger });
      } catch (error) {
        logger.warn(`[cron] dichvucong failed: ${error.message}`);
      }
    });
    dvcTask.start();
    tasks.push(dvcTask);
  } else if (!config.cron.serial) {
    logger.info("Dichvucong cron disabled via DVC_CRON_ENABLED=false");
  }

  if (!config.cron.serial && config.vietrade.cronEnabled) {
    const vtrTask = cron.schedule(config.vietrade.cronSchedule, async () => {
      try {
        await runVietradeJob({ logger });
      } catch (error) {
        logger.warn(`[cron] vietrade failed: ${error.message}`);
      }
    });
    vtrTask.start();
    tasks.push(vtrTask);
  } else if (!config.cron.serial) {
    logger.info("Vietrade cron disabled via VTR_CRON_ENABLED=false");
  }

  if (!config.cron.serial && config.bloggiamgia.cronEnabled) {
    const bggTask = cron.schedule(config.bloggiamgia.cronSchedule, async () => {
      try {
        await runBloggiamgiaJob({ logger });
      } catch (error) {
        logger.warn(`[cron] bloggiamgia failed: ${error.message}`);
      }
    });
    bggTask.start();
    tasks.push(bggTask);
  } else if (!config.cron.serial) {
    logger.info("Bloggiamgia cron disabled via BGG_CRON_ENABLED=false");
  }

  const promotionsMongoTask = startPromotionsMongoDailyJob({ logger });
  if (promotionsMongoTask) {
    tasks.push(promotionsMongoTask);
  }

  const promotionsCleanupTask = startPromotionsCleanupJob({ logger });
  if (promotionsCleanupTask) {
    tasks.push(promotionsCleanupTask);
  }

  return {
    stop() {
      tasks.forEach((item) => item.stop());
    },
  };
}
