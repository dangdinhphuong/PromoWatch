import { readFile } from "fs/promises";
import { config } from "../../../config/index.js";
import { resolvePromotionsDataFileForRead } from "./promotionsDataFiles.js";
import { tryUpsertPromotions } from "./promotionsMongoStore.js";

export async function syncPromotionsFileToMongo({ dateParam, logger = console } = {}) {
  if (!config.mongo?.promotionsEnabled) {
    return { ok: true, skipped: true, reason: "MONGO_PROMOTIONS_ENABLED!=true" };
  }

  const resolved = await resolvePromotionsDataFileForRead({ dateParam });
  const filePath = resolved.path;

  let raw = "[]";
  try {
    raw = await readFile(filePath, "utf8");
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
  }

  const parsed = raw.trim() ? JSON.parse(raw) : [];
  const promotions = Array.isArray(parsed)
    ? parsed
    : parsed && Array.isArray(parsed.promotions)
    ? parsed.promotions
    : [];

  const result = await tryUpsertPromotions(promotions, { logger });
  return {
    ...result,
    file: {
      path: filePath,
      reason: resolved.reason,
      total: promotions.length,
    },
  };
}

