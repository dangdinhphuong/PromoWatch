import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const config = {
  port: Number(env.PORT || 4000),
  nodeEnv: env.NODE_ENV || "development",
  databaseUrl: env.DATABASE_URL || "",
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
