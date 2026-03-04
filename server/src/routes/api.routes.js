import { Router } from "express";
import path from "path";
import { readFile } from "fs/promises";
import { query } from "../db/index.js";
import { getMongoDb } from "../db/mongo.js";
import { config } from "../config/index.js";
import { fetchJson } from "../services/http/index.js";
import {
  runBloggiamgia,
  runDichvucong,
  runVietrade,
} from "../modules/promotions/index.js";
import {
  getPromotionsDailyFilePath,
  parsePromotionsDateParam,
  resolvePromotionsDataFileForRead,
} from "../modules/promotions/shared/promotionsDataFiles.js";
import { tryUpsertPromotions } from "../modules/promotions/shared/promotionsMongoStore.js";

const router = Router();
const PIGGI_API_BASE_URL = "https://portal.piggi.vn/api";

function buildUpstreamUrl(baseUrl, query) {
  const params = new URLSearchParams();

  for (const [key, rawValue] of Object.entries(query || {})) {
    if (rawValue === undefined || rawValue === null) {
      continue;
    }

    if (Array.isArray(rawValue)) {
      for (const value of rawValue) {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      }
      continue;
    }

    params.append(key, String(rawValue));
  }

  const search = params.toString();
  return search ? `${baseUrl}?${search}` : baseUrl;
}

router.get("/health", (req, res) => {
  res.json({
    ok: true,
    env: config.nodeEnv,
    timestamp: new Date().toISOString(),
  });
});

router.get("/db/ping", async (req, res) => {
  try {
    const result = await query("select now() as now");
    res.json({ ok: true, now: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message, code: error.code });
  }
});

router.get("/mongo/ping", async (req, res) => {
  try {
    const db = await getMongoDb();
    await db.command({ ping: 1 });
    res.json({ ok: true, db: db.databaseName });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message, code: error.code });
  }
});

router.get("/external", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ ok: false, message: "Missing url query param." });
  }

  let host;
  try {
    host = new URL(url).host;
  } catch {
    return res.status(400).json({ ok: false, message: "Invalid URL." });
  }

  if (!config.apiAllowlist.includes(host)) {
    return res.status(403).json({
      ok: false,
      message: "Host not allowlisted.",
      allowlist: config.apiAllowlist,
    });
  }

  try {
    const data = await fetchJson(url, { timeoutMs: 12_000 });
    return res.json({ ok: true, data });
  } catch (error) {
    const status = error.status || 502;
    return res.status(status).json({ ok: false, message: error.message, data: error.data || null });
  }
});

router.get("/piggi/voucher-category", async (req, res) => {
  try {
    const upstreamUrl = buildUpstreamUrl(
      `${PIGGI_API_BASE_URL}/voucher-category`,
      req.query
    );
    const data = await fetchJson(upstreamUrl, { timeoutMs: 12_000 });
    return res.json(data);
  } catch (error) {
    const status = error.status || 502;
    return res.status(status).json({
      ok: false,
      message: error.message || "Failed to fetch voucher categories",
      data: error.data || null,
    });
  }
});

router.get("/piggi/voucher", async (req, res) => {
  try {
    const upstreamUrl = buildUpstreamUrl(
      `${PIGGI_API_BASE_URL}/voucher`,
      req.query
    );
    const data = await fetchJson(upstreamUrl, { timeoutMs: 12_000 });
    return res.json(data);
  } catch (error) {
    const status = error.status || 502;
    return res.status(status).json({
      ok: false,
      message: error.message || "Failed to fetch vouchers",
      data: error.data || null,
    });
  }
});

router.post("/promotions/dichvucong/fetch", async (req, res) => {
  try {
    const result = await runDichvucong();
    res.json({ ok: true, source: "dichvucong", ...result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/articles/vietrade/fetch", async (req, res) => {
  try {
    const result = await runVietrade();
    res.json({ ok: true, source: "vietrade", ...result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/promotions/bloggiamgia/fetch", async (req, res) => {
  try {
    const result = await runBloggiamgia();
    res.json({ ok: true, source: "bloggiamgia", ...result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/promotions/mongo/upsert", async (req, res) => {
  try {
    const payload = req.body;
    const records = Array.isArray(payload) ? payload : payload ? [payload] : [];
    const result = await tryUpsertPromotions(records, { logger: console });
    const status = result.ok ? 200 : 500;
    res.status(status).json(result);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/promotions/mongo/sync", async (req, res) => {
  const dateParam = req.query.date;
  try {
    let filePath;

    if (dateParam !== undefined) {
      const parsedDate = parsePromotionsDateParam(dateParam);
      if (!parsedDate) {
        return res.status(400).json({
          ok: false,
          message: "Invalid date. Use d-m-yyyy (e.g. 9-2-2026) or yyyy-m-d (e.g. 2026-2-9).",
        });
      }
      filePath = getPromotionsDailyFilePath(parsedDate);
    } else {
      const resolved = await resolvePromotionsDataFileForRead();
      filePath = resolved.path;
    }

    const raw = await readFile(filePath, "utf8");
    const parsed = raw.trim() ? JSON.parse(raw) : [];
    const promotions = Array.isArray(parsed)
      ? parsed
      : parsed && Array.isArray(parsed.promotions)
      ? parsed.promotions
      : [];

    const result = await tryUpsertPromotions(promotions, { logger: console });
    const status = result.ok ? 200 : 500;
    res.status(status).json({
      ...result,
      file: {
        name: path.basename(filePath),
        total: promotions.length,
      },
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.get("/promotions/data", async (req, res) => {
  const dateParam = req.query.date;
  try {
    const storage = typeof req.query.storage === "string" ? req.query.storage.trim() : "";
    const preferMongo = storage !== "file";

    if (preferMongo && config.mongo?.promotionsEnabled) {
      const normalizeString = (value) =>
        typeof value === "string" ? value.trim() : "";

      const parseDateValue = (value) => {
        const rawValue = normalizeString(value);
        if (!rawValue) return null;
        if (rawValue.includes("/")) {
          const parts = rawValue.split("/");
          if (parts.length === 3) {
            const [day, month, year] = parts;
            const date = new Date(
              Date.UTC(
                Number.parseInt(year, 10),
                Number.parseInt(month, 10) - 1,
                Number.parseInt(day, 10)
              )
            );
            return Number.isNaN(date.getTime()) ? null : date;
          }
        }
        const date = new Date(rawValue);
        return Number.isNaN(date.getTime()) ? null : date;
      };

      const keyword = normalizeString(req.query.keyword).toLowerCase();
      const type = normalizeString(req.query.type);
      const source = normalizeString(req.query.source);

      const applicableStartDate = parseDateValue(req.query.applicableStartDate);
      const applicableEndDate = parseDateValue(req.query.applicableEndDate);
      const collectedStartDate = parseDateValue(req.query.collectedStartDate);
      const collectedEndDate = parseDateValue(req.query.collectedEndDate);

      if (applicableStartDate) {
        applicableStartDate.setUTCHours(0, 0, 0, 0);
      }
      if (applicableEndDate) {
        applicableEndDate.setUTCHours(23, 59, 59, 999);
      }
      if (collectedStartDate) {
        collectedStartDate.setUTCHours(0, 0, 0, 0);
      }
      if (collectedEndDate) {
        collectedEndDate.setUTCHours(23, 59, 59, 999);
      }

      const filter = {};

      if (keyword) {
        filter.$text = { $search: keyword };
      }

      if (type && type !== "all") {
        filter.type = type;
      }

      if (source && source !== "all") {
        if (source === "crawl") {
          filter.source = { $in: ["crawl", "bloggiamgia"] };
        } else {
          filter.source = source;
        }
      }

      if (applicableStartDate) {
        filter.timeStartDate = { ...(filter.timeStartDate || {}), $gte: applicableStartDate };
      }

      if (applicableEndDate) {
        filter.timeEndDate = { ...(filter.timeEndDate || {}), $lte: applicableEndDate };
      }

      if (collectedStartDate) {
        filter.crawledAt = { ...(filter.crawledAt || {}), $gte: collectedStartDate };
      }

      if (collectedEndDate) {
        filter.crawledAt = { ...(filter.crawledAt || {}), $lte: collectedEndDate };
      }

      const pageParam = req.query.page;
      const pageSizeParam = req.query.pageSize ?? req.query.limit;

      const page = Math.max(1, Number.parseInt(String(pageParam ?? "1"), 10) || 1);
      const pageSize = Math.min(
        500,
        Math.max(1, Number.parseInt(String(pageSizeParam ?? "20"), 10) || 20)
      );

      const db = await getMongoDb();
      const collection = db.collection("promotions");

      const total = await collection.countDocuments(filter);
      const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
      const safePage = totalPages === 0 ? 1 : Math.min(page, totalPages);
      const skip = (safePage - 1) * pageSize;

      const cursor = collection
        .find(filter)
        .sort({ crawledAt: -1, _id: -1 })
        .skip(skip)
        .limit(pageSize);

      const data = await cursor.toArray();

      return res.json({
        ok: true,
        data,
        file: {
          name: null,
          reason: "mongo",
          storage: "mongo",
        },
        pagination: {
          page: safePage,
          pageSize,
          total,
          totalPages,
          hasNext: safePage < totalPages,
          hasPrev: safePage > 1,
        },
      });
    }

    let filePath;
    let fileReason = null;

    if (dateParam !== undefined) {
      const parsedDate = parsePromotionsDateParam(dateParam);
      if (!parsedDate) {
        return res.status(400).json({
          ok: false,
          message: "Invalid date. Use d-m-yyyy (e.g. 9-2-2026) or yyyy-m-d (e.g. 2026-2-9).",
        });
      }
      filePath = getPromotionsDailyFilePath(parsedDate);
      fileReason = "requested-date";
    } else {
      const resolved = await resolvePromotionsDataFileForRead();
      filePath = resolved.path;
      fileReason = resolved.reason;
    }

    let raw = "[]";
    try {
      raw = await readFile(filePath, "utf8");
    } catch (error) {
      if (error?.code !== "ENOENT") {
        throw error;
      }
    }
    const parsed = raw.trim() ? JSON.parse(raw) : [];
    const allData = Array.isArray(parsed)
      ? parsed
      : parsed && Array.isArray(parsed.promotions)
      ? parsed.promotions
      : [];

    const normalizeString = (value) =>
      typeof value === "string" ? value.trim() : "";

    const parseDateValue = (value) => {
      const rawValue = normalizeString(value);
      if (!rawValue) return null;
      if (rawValue.includes("/")) {
        const parts = rawValue.split("/");
        if (parts.length === 3) {
          const [day, month, year] = parts;
          const date = new Date(
            Number.parseInt(year, 10),
            Number.parseInt(month, 10) - 1,
            Number.parseInt(day, 10)
          );
          return Number.isNaN(date.getTime()) ? null : date;
        }
      }
      const date = new Date(rawValue);
      return Number.isNaN(date.getTime()) ? null : date;
    };

    const keyword = normalizeString(req.query.keyword).toLowerCase();
    const type = normalizeString(req.query.type);
    const source = normalizeString(req.query.source);

    const applicableStartDate = parseDateValue(req.query.applicableStartDate);
    const applicableEndDate = parseDateValue(req.query.applicableEndDate);
    const collectedStartDate = parseDateValue(req.query.collectedStartDate);
    const collectedEndDate = parseDateValue(req.query.collectedEndDate);

    if (applicableStartDate) {
      applicableStartDate.setHours(0, 0, 0, 0);
    }
    if (applicableEndDate) {
      applicableEndDate.setHours(23, 59, 59, 999);
    }
    if (collectedStartDate) {
      collectedStartDate.setHours(0, 0, 0, 0);
    }
    if (collectedEndDate) {
      collectedEndDate.setHours(23, 59, 59, 999);
    }

    const data = allData.filter((item) => {
      if (!item) return false;

      if (keyword) {
        const name = normalizeString(item.name).toLowerCase();
        const company = normalizeString(item.company).toLowerCase();
        const code = normalizeString(item.code).toLowerCase();
        if (!name.includes(keyword) && !company.includes(keyword) && !code.includes(keyword)) {
          return false;
        }
      }

      if (type && type !== "all" && item.type !== type) {
        return false;
      }

      if (source && source !== "all") {
        const sourceMatched =
          source === "crawl"
            ? item.source === "crawl" || item.source === "bloggiamgia"
            : item.source === source;
        if (!sourceMatched) {
          return false;
        }
      }

      if (applicableStartDate) {
        const itemStart = parseDateValue(item.time && item.time.start);
        if (!itemStart || itemStart < applicableStartDate) {
          return false;
        }
      }

      if (applicableEndDate) {
        const itemEnd = parseDateValue(item.time && item.time.end);
        if (!itemEnd || itemEnd > applicableEndDate) {
          return false;
        }
      }

      if (collectedStartDate) {
        const itemCollected = parseDateValue(item.crawledAt);
        if (!itemCollected || itemCollected < collectedStartDate) {
          return false;
        }
      }

      if (collectedEndDate) {
        const itemCollected = parseDateValue(item.crawledAt);
        if (!itemCollected || itemCollected > collectedEndDate) {
          return false;
        }
      }

      return true;
    });

    const pageParam = req.query.page;
    const pageSizeParam = req.query.pageSize ?? req.query.limit;

    const page = Math.max(1, Number.parseInt(String(pageParam ?? "1"), 10) || 1);
    const pageSize = Math.min(
      500,
      Math.max(1, Number.parseInt(String(pageSizeParam ?? "20"), 10) || 20)
    );

    const total = data.length;
    const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
    const safePage = totalPages === 0 ? 1 : Math.min(page, totalPages);
    const startIndex = (safePage - 1) * pageSize;
    const pagedData = data.slice(startIndex, startIndex + pageSize);

    return res.json({
      ok: true,
      data: pagedData,
      file: {
        name: filePath ? path.basename(filePath) : null,
        reason: fileReason,
        storage: "file",
      },
      pagination: {
        page: safePage,
        pageSize,
        total,
        totalPages,
        hasNext: safePage < totalPages,
        hasPrev: safePage > 1,
      },
    });
  } catch (error) {
    console.error(`API Error: ${error.message}`);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
});

export default router;
