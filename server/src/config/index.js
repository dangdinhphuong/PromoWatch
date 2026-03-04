import dotenv from "dotenv";
import path from "path";
import { paths } from "../utils/paths.js";

dotenv.config({ path: path.join(paths.repoRootDir, ".env") });

const env = process.env;

export const config = {
  port: Number(env.PORT || 4000),
  nodeEnv: env.NODE_ENV || "development",
  databaseUrl: env.DATABASE_URL || "",
  mongo: {
    uri: env.MONGO_URI || "mongodb://localhost:27017",
    dbName: env.MONGO_DB || "webtoolkit",
    promotionsEnabled: env.MONGO_PROMOTIONS_ENABLED === "true",
  },
  promotionsCrawl: {
    enabled: env.PROMOTIONS_CRAWL_ENABLED === "true",
    apiUrl: env.PROMOTIONS_CRAWL_API_URL || "",
    schedule: env.PROMOTIONS_CRAWL_SCHEDULE || "0 1 * * *",
    timezone: env.PROMOTIONS_CRAWL_TIMEZONE || "Asia/Bangkok",
  },
  promotionsCleanup: {
    enabled: env.PROMOTIONS_CLEANUP_ENABLED === "true",
    schedule: env.PROMOTIONS_CLEANUP_SCHEDULE || "0 2 * * *",
    timezone: env.PROMOTIONS_CLEANUP_TIMEZONE || "Asia/Bangkok",
  },
  apiAllowlist: (env.API_ALLOWLIST || "api.github.com")
    .split(",")
    .map((host) => host.trim())
    .filter(Boolean),
  cron: {
    enabled: env.CRON_ENABLED !== "false",
    schedule: env.CRON_SCHEDULE || "*/5 * * * *",
    dbPing: env.CRON_DB_PING === "true",
    serial: env.CRON_SERIAL === "true",
  },
  dichvucong: {
    cronEnabled: env.DVC_CRON_ENABLED !== "false",
    cronSchedule: env.DVC_CRON_SCHEDULE || "0 */6 * * *",
  },
  vietrade: {
    cronEnabled: env.VTR_CRON_ENABLED !== "false",
    cronSchedule: env.VTR_CRON_SCHEDULE || "0 */6 * * *",
  },
  bloggiamgia: {
    cronEnabled: env.BGG_CRON_ENABLED !== "false",
    cronSchedule: env.BGG_CRON_SCHEDULE || "0 */6 * * *",
  },
};
