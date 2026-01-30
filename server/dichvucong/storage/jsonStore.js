import path from "path";
import { mkdir, readFile, writeFile } from "fs/promises";
import { logger } from "../utils/logger.js";

const DATA_DIR = path.resolve("data", "promotions", "dichvucong");
const PROMOTIONS_FILE = path.join(DATA_DIR, "dichvucong.json");

export async function initStorage() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    try {
      await readFile(PROMOTIONS_FILE, "utf8");
    } catch (error) {
      if (error?.code === "ENOENT") {
        await writeFile(PROMOTIONS_FILE, JSON.stringify([]), "utf8");
      } else {
        throw error;
      }
    }
  } catch (error) {
    logger.error(`Failed to initialize storage: ${error.message}`);
    throw error;
  }
}

export async function getAll() {
  const data = await readFile(PROMOTIONS_FILE, "utf8");
  return JSON.parse(data);
}

export async function saveBatchUnique(records) {
  const existing = await getAll();
  const existingCodes = new Set(
    existing
      .map((item) => item && item.SUBMISSION_CODE)
      .filter((value) => typeof value === "string" && value.length > 0)
  );

  const newRows = records.filter(
    (item) => !existingCodes.has(item && item.SUBMISSION_CODE)
  );

  const merged = existing.concat(newRows);
  await writeFile(PROMOTIONS_FILE, JSON.stringify(merged, null, 2), "utf8");

  return { saved: newRows.length, total: merged.length };
}