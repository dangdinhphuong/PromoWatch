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
    const data = Array.isArray(parsed) ? parsed : [];
    res.json({ ok: true, data });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

export default router;
