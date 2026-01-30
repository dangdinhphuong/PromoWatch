import pg from "pg";
import { config } from "./config.js";

const { Pool } = pg;
let pool;

function initPool() {
  if (!config.databaseUrl) {
    return null;
  }
  if (!pool) {
    pool = new Pool({
      connectionString: config.databaseUrl,
      max: 10,
      idleTimeoutMillis: 30_000,
    });
  }
  return pool;
}

export async function query(text, params) {
  const activePool = initPool();
  if (!activePool) {
    const error = new Error("DATABASE_URL is not set.");
    error.code = "MISSING_DATABASE_URL";
    throw error;
  }
  return activePool.query(text, params);
}

export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}