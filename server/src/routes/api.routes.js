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
import { syncPromotionsFileToSupabase } from "../modules/promotions/shared/promotionsSupabaseSync.js";
import {
  pingSupabase,
  tryUpsertPromotionsToSupabase,
} from "../modules/promotions/shared/promotionsSupabaseStore.js";

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

router.get("/supabase/ping", async (req, res) => {
  try {
    const result = await pingSupabase();
    res.json({ ok: true, ...result });
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

async function handleSupabaseUpsert(req, res) {
  try {
    const payload = req.body;
    const records = Array.isArray(payload) ? payload : payload ? [payload] : [];
    const result = await tryUpsertPromotionsToSupabase(records, { logger: console });
    const status = result.ok ? 200 : 500;
    res.status(status).json({ ...result, target: "supabase" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

async function handleSupabaseSync(req, res) {
  const dateParam = req.query.date;
  try {
    if (dateParam !== undefined && !parsePromotionsDateParam(dateParam)) {
      return res.status(400).json({
        ok: false,
        message: "Invalid date. Use d-m-yyyy (e.g. 9-2-2026) or yyyy-m-d (e.g. 2026-2-9).",
      });
    }

    const result = await syncPromotionsFileToSupabase({ dateParam, logger: console });
    const status = result.ok ? 200 : 500;
    res.status(status).json({
      ...result,
      target: "supabase",
      file: result.file
        ? {
            ...result.file,
            name: path.basename(result.file.path),
          }
        : null,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

router.post("/promotions/supabase/upsert", handleSupabaseUpsert);
router.post("/promotions/mongo/upsert", handleSupabaseUpsert);

router.post("/promotions/supabase/sync", handleSupabaseSync);
router.post("/promotions/mongo/sync", handleSupabaseSync);

router.get("/promotions/data", async (req, res) => {
  const dateParam = req.query.date;
  try {
    const storage = typeof req.query.storage === "string" ? req.query.storage.trim() : "";
    const preferSupabase =
      (storage === "" || storage === "auto" || storage === "supabase") &&
      config.supabase?.promotionsEnabled;

    if (storage === "supabase" && !config.supabase?.promotionsEnabled) {
      return res.status(400).json({
        ok: false,
        message: "Supabase storage is disabled. Set SUPABASE_PROMOTIONS_ENABLED=true.",
      });
    }

    if (preferSupabase) {
      const supabaseUrl = String(config.supabase?.url || "").replace(/\/+$/, "");
      const supabaseApiKey = String(config.supabase?.apiKey || "");
      const supabaseTable = String(config.supabase?.table || "np_promotions");

      if (!supabaseUrl || !supabaseApiKey) {
        return res.status(500).json({
          ok: false,
          message: "Supabase is not configured. Missing SUPABASE_URL or SUPABASE_API_KEY.",
        });
      }

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

      const parseContentRangeTotal = (headerValue, fallback = 0) => {
        if (!headerValue || !headerValue.includes("/")) {
          return fallback;
        }
        const rawTotal = headerValue.split("/")[1];
        const total = Number.parseInt(rawTotal, 10);
        return Number.isFinite(total) ? total : fallback;
      };

      const mapSupabaseRowToPromotion = (row) => ({
        id: row?.id ?? null,
        key: row?.key ?? null,
        code: row?.code ?? null,
        name: row?.name ?? null,
        company: row?.company ?? null,
        time: {
          start: row?.time_start ?? null,
          end: row?.time_end ?? null,
        },
        location: row?.location ?? null,
        productType: null,
        discountPercent: row?.discount_percent ?? null,
        promotionMethod: null,
        type: row?.type ?? null,
        agencyId: row?.agency_id ?? null,
        total: row?.total ?? null,
        rowStt: row?.row_stt ?? null,
        source: row?.source ?? null,
        sourceUrl: row?.source_url ?? null,
        crawledAt: row?.crawled_at ?? null,
        meta: row?.meta ?? null,
      });

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

      const pageParam = req.query.page;
      const pageSizeParam = req.query.pageSize ?? req.query.limit;
      const page = Math.max(1, Number.parseInt(String(pageParam ?? "1"), 10) || 1);
      const pageSize = Math.min(
        500,
        Math.max(1, Number.parseInt(String(pageSizeParam ?? "20"), 10) || 20)
      );

      const buildQueryParams = (pageNumber) => {
        const params = new URLSearchParams();
        params.set(
          "select",
          "id,key,agency_id,code,company,name,location,source,source_url,type,row_stt,total,discount_percent,crawled_at,time_start,time_end,meta,updated_at"
        );
        params.set("order", "updated_at.desc.nullslast,crawled_at.desc.nullslast,id.desc");
        params.set("limit", String(pageSize));
        params.set("offset", String((pageNumber - 1) * pageSize));

        if (keyword) {
          const safeKeyword = keyword.replace(/[(),]/g, " ").replace(/\*/g, "").trim();
          if (safeKeyword) {
            params.set(
              "or",
              `(name.ilike.*${safeKeyword}*,company.ilike.*${safeKeyword}*,code.ilike.*${safeKeyword}*)`
            );
          }
        }

        if (type && type !== "all") {
          params.set("type", `eq.${type}`);
        }

        if (source && source !== "all") {
          if (source === "crawl") {
            params.set("source", "in.(crawl,bloggiamgia)");
          } else {
            params.set("source", `eq.${source}`);
          }
        }

        const andParts = [];
        if (applicableStartDate) {
          andParts.push(`time_start_date.gte.${applicableStartDate.toISOString()}`);
        }
        if (applicableEndDate) {
          andParts.push(`time_start_date.lte.${applicableEndDate.toISOString()}`);
        }
        if (collectedStartDate) {
          andParts.push(`crawled_at.gte.${collectedStartDate.toISOString()}`);
        }
        if (collectedEndDate) {
          andParts.push(`crawled_at.lte.${collectedEndDate.toISOString()}`);
        }
        if (andParts.length > 0) {
          params.set("and", `(${andParts.join(",")})`);
        }

        return params;
      };

      const fetchSupabasePage = async (pageNumber) => {
        const params = buildQueryParams(pageNumber);
        const endpoint = `${supabaseUrl}/rest/v1/${encodeURIComponent(supabaseTable)}?${params.toString()}`;

        const response = await fetch(endpoint, {
          headers: {
            apikey: supabaseApiKey,
            authorization: `Bearer ${supabaseApiKey}`,
            prefer: "count=exact",
            accept: "application/json",
          },
        });

        if (!response.ok) {
          const bodyText = await response.text();
          throw new Error(
            `Supabase query failed (${response.status}): ${bodyText || "Unknown error"}`
          );
        }

        const rows = await response.json();
        const total = parseContentRangeTotal(
          response.headers.get("content-range"),
          Array.isArray(rows) ? rows.length : 0
        );

        return {
          rows: Array.isArray(rows) ? rows : [],
          total,
        };
      };

      const firstPage = await fetchSupabasePage(page);
      const total = firstPage.total;
      const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
      const safePage = totalPages === 0 ? 1 : Math.min(page, totalPages);

      const activePageData =
        safePage !== page && totalPages > 0
          ? await fetchSupabasePage(safePage)
          : firstPage;

      const data = activePageData.rows.map(mapSupabaseRowToPromotion);

      return res.json({
        ok: true,
        data,
        file: {
          name: null,
          reason: "supabase",
          storage: "supabase",
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

    const preferMongo = storage === "mongo" || storage === "" || storage === "auto";

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
