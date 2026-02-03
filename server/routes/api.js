import { Router } from "express";
import { readFile } from "fs/promises";
import path from "path";
import { query } from "../db.js";
import { config } from "../config.js";
import { fetchJson } from "../services/http.js";
import { runDichvucong } from "../promotions/official/dichvucong/index.js";
import { runVietrade } from "../promotions/official/vietrade/index.js";
import { runBloggiamgia } from "../promotions/unofficial/bloggiamgia/index.js";

const router = Router();

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

router.get("/promotions/data", async (req, res) => {
  try {
    const filePath = path.resolve("data", "promotions", "data.json");
    const raw = await readFile(filePath, "utf8");
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

      if (source && source !== "all" && item.source !== source) {
        return false;
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



