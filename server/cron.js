import cron from "node-cron";
import { config } from "./config.js";
import { query } from "./db.js";
import { runDichvucong } from "./dichvucong/index.js";
import { runVietrade } from "./vietrade/index.js";

export function startCron({ logger = console } = {}) {
  if (!config.cron.enabled) {
    logger.info("Cron disabled via CRON_ENABLED=false");
    return null;
  }

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
  });

  task.start();

  if (config.dichvucong.cronEnabled) {
    const dvcTask = cron.schedule(config.dichvucong.cronSchedule, async () => {
      logger.info(`[cron] dichvucong job at ${new Date().toISOString()}`);
      try {
        const result = await runDichvucong();
        logger.info(
          `[cron] dichvucong saved ${result.saved} new records (total ${result.total})`
        );
      } catch (error) {
        logger.warn(`[cron] dichvucong failed: ${error.message}`);
      }
    });
    dvcTask.start();
  } else {
    logger.info("Dichvucong cron disabled via DVC_CRON_ENABLED=false");
  }

  if (config.vietrade.cronEnabled) {
    const vtrTask = cron.schedule(config.vietrade.cronSchedule, async () => {
      logger.info(`[cron] vietrade job at ${new Date().toISOString()}`);
      try {
        const result = await runVietrade();
        logger.info(
          `[cron] vietrade saved ${result.saved} new records (total ${result.total})`
        );
      } catch (error) {
        logger.warn(`[cron] vietrade failed: ${error.message}`);
      }
    });
    vtrTask.start();
  } else {
    logger.info("Vietrade cron disabled via VTR_CRON_ENABLED=false");
  }

  return task;
}
