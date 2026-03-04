export async function runCleanupJob({ logger = console } = {}) {
  logger.info("[cron] cleanup job is not configured.");
  return { ok: true };
}

