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
    const data = Array.isArray(parsed)
      ? parsed
      : parsed && Array.isArray(parsed.promotions)
      ? parsed.promotions
      : [];

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



