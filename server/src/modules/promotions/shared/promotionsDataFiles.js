import path from "path";
import { constants } from "fs";
import {
  access,
  copyFile,
  mkdir,
  readdir,
  rename,
  unlink,
  writeFile,
} from "fs/promises";

import { paths } from "../../../utils/paths.js";
import { withFileLock } from "./fileLock.js";

export const PROMOTIONS_DATA_DIR = paths.promotionsDataDir;
export const PROMOTIONS_LEGACY_DATA_FILE = paths.promotionsDataFile;

const DAILY_FILE_REGEX = /^data_(\d{1,2})-(\d{1,2})-(\d{4})\.json$/;

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export function formatPromotionsDate(date = new Date()) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function parsePromotionsDateParam(value) {
  if (value === null || value === undefined) {
    return null;
  }
  const raw = String(value).trim();
  if (!raw) {
    return null;
  }

  let match = raw.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (match) {
    const day = Number.parseInt(match[1], 10);
    const month = Number.parseInt(match[2], 10);
    const year = Number.parseInt(match[3], 10);
    const date = new Date(year, month - 1, day);
    if (
      !Number.isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      return date;
    }
    return null;
  }

  match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) {
    const year = Number.parseInt(match[1], 10);
    const month = Number.parseInt(match[2], 10);
    const day = Number.parseInt(match[3], 10);
    const date = new Date(year, month - 1, day);
    if (
      !Number.isNaN(date.getTime()) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      return date;
    }
  }

  return null;
}

export function getPromotionsDailyFilePath(date = new Date()) {
  const dateKey = formatPromotionsDate(date);
  return path.join(PROMOTIONS_DATA_DIR, `data_${dateKey}.json`);
}

function parseDailyPromotionsFileName(name) {
  const match = DAILY_FILE_REGEX.exec(name);
  if (!match) {
    return null;
  }
  const day = Number.parseInt(match[1], 10);
  const month = Number.parseInt(match[2], 10);
  const year = Number.parseInt(match[3], 10);

  if (!Number.isFinite(day) || !Number.isFinite(month) || !Number.isFinite(year)) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }

  return { date };
}

export async function listPromotionsDailyFiles() {
  try {
    const entries = await readdir(PROMOTIONS_DATA_DIR, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile())
      .map((entry) => {
        const parsed = parseDailyPromotionsFileName(entry.name);
        if (!parsed) {
          return null;
        }
        return {
          name: entry.name,
          path: path.join(PROMOTIONS_DATA_DIR, entry.name),
          date: parsed.date,
        };
      })
      .filter(Boolean);

    files.sort((a, b) => b.date.getTime() - a.date.getTime());
    return files;
  } catch (error) {
    if (error?.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function getLatestPromotionsDailyFilePath() {
  const files = await listPromotionsDailyFiles();
  return files.length > 0 ? files[0].path : null;
}

export async function ensurePromotionsDailyFile(date = new Date(), { seedFromLatest = true } = {}) {
  await mkdir(PROMOTIONS_DATA_DIR, { recursive: true });
  const targetPath = getPromotionsDailyFilePath(date);

  return withFileLock(targetPath, async () => {
    if (await exists(targetPath)) {
      return { created: false, path: targetPath };
    }

    let seedPath = null;
    if (seedFromLatest) {
      const latest = await getLatestPromotionsDailyFilePath();
      if (latest && latest !== targetPath) {
        seedPath = latest;
      }
    }

    if (!seedPath && (await exists(PROMOTIONS_LEGACY_DATA_FILE))) {
      seedPath = PROMOTIONS_LEGACY_DATA_FILE;
    }

    if (seedPath) {
      const tempPath = `${targetPath}.tmp`;
      await copyFile(seedPath, tempPath);
      await rename(tempPath, targetPath);
      return { created: true, path: targetPath, seededFrom: seedPath };
    }

    const tempPath = `${targetPath}.tmp`;
    await writeFile(tempPath, "[]\n", "utf8");
    await rename(tempPath, targetPath);
    return { created: true, path: targetPath, seededFrom: null };
  });
}

export async function cleanupOldPromotionsDailyFiles({ keepDays = 5 } = {}) {
  const files = await listPromotionsDailyFiles();
  const toDelete = files.slice(Math.max(0, keepDays));

  await Promise.all(
    toDelete.map(async (file) => {
      await unlink(file.path).catch((error) => {
        if (error?.code !== "ENOENT") {
          throw error;
        }
      });
    })
  );

  return {
    kept: files.slice(0, Math.max(0, keepDays)).map((file) => file.name),
    deleted: toDelete.map((file) => file.name),
  };
}

export async function resolvePromotionsDataFileForRead({ dateParam } = {}) {
  const requestedDate = parsePromotionsDateParam(dateParam);
  if (requestedDate) {
    return {
      path: getPromotionsDailyFilePath(requestedDate),
      reason: "requested-date",
    };
  }

  const todayPath = getPromotionsDailyFilePath(new Date());
  if (await exists(todayPath)) {
    return { path: todayPath, reason: "today" };
  }

  const latestPath = await getLatestPromotionsDailyFilePath();
  if (latestPath) {
    return { path: latestPath, reason: "latest" };
  }

  if (await exists(PROMOTIONS_LEGACY_DATA_FILE)) {
    return { path: PROMOTIONS_LEGACY_DATA_FILE, reason: "legacy" };
  }

  return { path: todayPath, reason: "missing" };
}
