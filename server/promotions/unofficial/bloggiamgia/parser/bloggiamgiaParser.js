import { load } from "cheerio";
import { logger } from "../utils/logger.js";

const BASE_URL = "https://bloggiamgia.vn";
const SOURCE_NAME = "Bloggiamgia.vn";

const PLATFORM_RULES = [
  { name: "Shopee", regex: /\bshopee\b/gi },
  { name: "Lazada", regex: /\blazada\b/gi },
  { name: "Tiki", regex: /\btiki\b/gi },
  { name: "Sendo", regex: /\bsendo\b/gi },
  { name: "TikTok", regex: /\btiktok\b/gi },
  { name: "Grab", regex: /\bgrab\b/gi },
];

export function buildBlogUrl(slug) {
  if (!slug) {
    return null;
  }
  return `${BASE_URL}/${slug}`;
}

export function parseBlogList(payload) {
  const items = Array.isArray(payload && payload.data) ? payload.data : [];
  const page = Number(payload && payload.page) || 1;
  const pageSize = Number(payload && payload.pageSize) || items.length;
  const total = Number(payload && payload.total) || items.length;
  return { items, page, pageSize, total };
}

export function parseBlogDetail(blog, articleUrl) {
  if (!blog) {
    return null;
  }
  return parsePromotionHtml(blog.content || "", {
    title: blog.title || "",
    url: articleUrl || "",
  });
}

export function parsePromotionHtml(html, { title = "", url = "" } = {}) {
  const rawHtml = html || "";
  const $raw = load(rawHtml);
  const blogPost = $raw(".blog-post").first();
  let fragmentHtml = rawHtml;
  let firstParagraphText = "";
  if (blogPost.length) {
    const firstParagraph = blogPost.find("p").first();
    fragmentHtml = firstParagraph.length
      ? $raw.html(firstParagraph) || ""
      : blogPost.html() || "";
    firstParagraphText = firstParagraph.length ? firstParagraph.text() : "";
  } else {
    const firstParagraph = $raw("p").first();
    fragmentHtml = firstParagraph.length ? $raw.html(firstParagraph) || "" : rawHtml;
    firstParagraphText = firstParagraph.length ? firstParagraph.text() : "";
  }
  logger.info("parsePromotionHtml html:", fragmentHtml);
  const $ = load(`<div id="root">${fragmentHtml}</div>`);
  const root = $("#root");
  const analysisText = normalizeWhitespace(
    (blogPost.length ? blogPost.text() : $raw.text()) || ""
  );
  const contextText = normalizeWhitespace([title, analysisText].filter(Boolean).join(" "));

  const platform = detectPlatform(contextText);
  const code = extractSlug(url);
  const dateRange = extractDateRangeFromText(analysisText, title);
  const timeStart = dateRange ? toIsoDate(dateRange.startDate) : null;
  const timeEnd = dateRange ? toIsoDate(dateRange.endDate) : null;

  return {
    id: null,
    code,
    name: title || "",
    company: platform || "",
    time: {
      start: timeStart,
      end: timeEnd,
    },
    location: null,
    productType: null,
    discountPercent: null,
    promotionMethod: null,
    type: "unofficial",
    agencyId: null,
    total: null,
    rowStt: null,
    source: "bloggiamgia",
    sourceUrl: url || null,
    crawledAt: null,
    meta: {
      rawA: null,
      rawB: {
        platform: platform || null,
        sourceName: SOURCE_NAME,
        hasHtml: Boolean(fragmentHtml),
        content: sanitizeContent(firstParagraphText) || null,
      },
    },
  };
}

function normalizeWhitespace(value) {
  if (!value) {
    return "";
  }
  return value.replace(/\s+/g, " ").trim();
}

function uniqueStrings(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const value = typeof item === "string" ? item.trim() : "";
    if (!value || seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(value);
  }
  return result;
}

function detectPlatform(text) {
  if (!text) {
    return null;
  }
  let best = { name: null, count: 0 };
  for (const rule of PLATFORM_RULES) {
    const matches = text.match(rule.regex);
    const count = matches ? matches.length : 0;
    if (count > best.count) {
      best = { name: rule.name, count };
    }
  }
  return best.count > 0 ? best.name : null;
}

function extractTopic($, fallbackTitle) {
  if (fallbackTitle) {
    return normalizeWhitespace(fallbackTitle);
  }

  const h1 = normalizeWhitespace($("h1").first().text());
  if (h1) {
    return h1;
  }

  const strong = normalizeWhitespace($("p strong").first().text());
  if (strong) {
    return strong;
  }

  const firstParagraph = normalizeWhitespace($("p").first().text());
  return firstParagraph || null;
}

function extractMonths(text) {
  if (!text) {
    return [];
  }

  const months = new Set();
  const addMonth = (month, year) => {
    const mm = Number(month);
    const yy = Number(year);
    if (!Number.isFinite(mm) || mm < 1 || mm > 12 || !Number.isFinite(yy)) {
      return;
    }
    months.add(`${String(mm).padStart(2, "0")}/${yy}`);
  };

  const rangeRegex =
    /tháng\s*(\d{1,2})\s*(?:\+|–|-|đến|to|và|,|&)\s*(\d{1,2})\s*[\/.-]\s*(\d{4})/gi;
  let match;
  while ((match = rangeRegex.exec(text)) !== null) {
    addMonth(match[1], match[3]);
    addMonth(match[2], match[3]);
  }

  const singleRegex = /tháng\s*(\d{1,2})\s*[\/.-]\s*(\d{4})/gi;
  while ((match = singleRegex.exec(text)) !== null) {
    addMonth(match[1], match[2]);
  }

  return Array.from(months);
}

function extractLinks(root) {
  const links = [];
  root.find("a").each((_, el) => {
    const href = el.attribs && el.attribs.href ? el.attribs.href.trim() : "";
    if (!href || href.startsWith("#") || href.startsWith("javascript")) {
      return;
    }
    links.push(href);
  });

  return uniqueStrings(links);
}

function extractChannels($, root) {
  let facebookGroup = null;
  let messenger = null;
  let appNoti = null;

  root.find("p, li").each((_, el) => {
    const lines = extractLinesFromNode($, el);
    const link = extractFirstLink($, el);
    const url = link && link.url ? link.url : extractUrlFromLines(lines);

    for (const line of lines) {
      const lower = line.toLowerCase();
      if (!facebookGroup && /group facebook|facebook group/.test(lower)) {
        facebookGroup = {
          name: link && link.name ? link.name : null,
          url: url || null,
        };
      }

      if (!messenger && /messenger/.test(lower)) {
        messenger = {
          name: link && link.name ? link.name : null,
          url: url || null,
        };
      }

      if (!appNoti && /app\s*n[ôo]\s*t[iì]|app\s*no\s*ti|noti\.sale/.test(lower)) {
        appNoti = {
          url: url || null,
        };
      }
    }
  });

  return {
    facebookGroup,
    messenger,
    appNoti,
  };
}

function extractSchedule($, root) {
  const nodes = root.contents().toArray().filter((node) => node.type === "tag");
  const schedule = [];
  let inSection = false;

  for (const node of nodes) {
    if (node.name === "h2") {
      const title = normalizeWhitespace($(node).text());
      const sectionNumber = extractLeadingNumber(title);
      if (sectionNumber === 1) {
        inSection = true;
        continue;
      }
      if (inSection) {
        break;
      }
    }

    if (!inSection) {
      continue;
    }

    if (node.name === "p" || node.name === "li") {
      const lines = extractLinesFromNode($, node);
      for (const line of lines) {
        if (!isBulletLine(line)) {
          continue;
        }
        const range = parseDateRange(line);
        if (!range) {
          continue;
        }
        schedule.push({
          startDate: range.startDate,
          endDate: range.endDate,
          name: extractLineName(line),
          raw: line.trim(),
        });
      }
    }
  }

  return schedule;
}

function extractPrograms($, root) {
  const nodes = root.contents().toArray().filter((node) => node.type === "tag");
  const programs = [];
  let currentProgram = null;
  let programNodes = [];
  let currentSection = null;

  const flushProgram = () => {
    if (!currentProgram) {
      return;
    }
    const built = buildProgram($, currentProgram.name, programNodes);
    if (built) {
      programs.push(built);
    }
    currentProgram = null;
    programNodes = [];
  };

  for (const node of nodes) {
    if (node.name === "h2") {
      flushProgram();
      const title = normalizeWhitespace($(node).text());
      currentSection = extractLeadingNumber(title);
      continue;
    }

    if (node.name === "h3") {
      flushProgram();
      if (currentSection && currentSection >= 2) {
        currentProgram = { name: normalizeWhitespace($(node).text()) || null };
      }
      continue;
    }

    if (currentProgram) {
      programNodes.push(node);
    }
  }

  flushProgram();
  return programs;
}

function buildProgram($, name, nodes) {
  if (!nodes || nodes.length === 0) {
    return null;
  }

  const html = nodes.map((node) => $.html(node) || "").join("");
  const $$ = load(`<div id="program">${html}</div>`);
  const container = $$("#program");

  const images = uniqueStrings(
    container
      .find("img")
      .map((_, el) => (el.attribs && el.attribs.src ? el.attribs.src.trim() : ""))
      .get()
      .filter(Boolean)
  );

  const links = uniqueStrings(
    container
      .find("a")
      .map((_, el) => (el.attribs && el.attribs.href ? el.attribs.href.trim() : ""))
      .get()
      .filter(Boolean)
  );

  const lines = collectLines($$, container);
  const description = extractDescription(lines);
  const timeRange = extractProgramTime(lines);
  const dailySchedule = extractDailySchedule(lines);
  const offers = extractOffers(lines, dailySchedule);

  return {
    name: name || null,
    timeStart: timeRange ? timeRange.startDate : null,
    timeEnd: timeRange ? timeRange.endDate : null,
    description,
    images,
    links,
    dailySchedule,
    offers,
  };
}

function collectLines($, container) {
  const lines = [];
  container.find("p, li").each((_, el) => {
    const parts = extractLinesFromNode($, el);
    for (const part of parts) {
      if (part) {
        lines.push(part);
      }
    }
  });
  return lines;
}

function extractDescription(lines) {
  for (const line of lines) {
    if (!line) {
      continue;
    }
    if (isBulletLine(line)) {
      continue;
    }
    const cleaned = normalizeWhitespace(line);
    if (!cleaned) {
      continue;
    }
    const sentences = cleaned.split(/(?<=[.!?])\s+/);
    return normalizeWhitespace(sentences.slice(0, 2).join(" "));
  }
  return null;
}

function extractProgramTime(lines) {
  for (const line of lines) {
    const lower = line.toLowerCase();
    if (!/diễn ra|áp dụng|từ ngày|từ\s+\d/.test(lower)) {
      continue;
    }
    const range = parseDateRange(line);
    if (range) {
      return range;
    }
  }
  return null;
}

function extractDailySchedule(lines) {
  const dailySchedule = [];
  let capturing = false;

  for (const line of lines) {
    const lower = line.toLowerCase();
    if (/lịch sale mỗi ngày|lịch sale hằng ngày|lịch sale từng ngày/.test(lower)) {
      capturing = true;
      continue;
    }

    if (capturing) {
      if (!isBulletLine(line)) {
        if (line) {
          capturing = false;
        }
        continue;
      }
      const range = parseDateRange(line);
      dailySchedule.push({
        startDate: range ? range.startDate : null,
        endDate: range ? range.endDate : null,
        name: extractLineName(line),
        raw: line.trim(),
      });
    }
  }

  return dailySchedule;
}

function extractOffers(lines, dailySchedule) {
  const offers = [];
  const dailyRaw = new Set((dailySchedule || []).map((item) => item.raw));

  for (const line of lines) {
    if (!isBulletLine(line)) {
      continue;
    }
    if (dailyRaw.has(line.trim())) {
      continue;
    }
    offers.push(parseOffer(line));
  }

  return offers;
}

function parseOffer(line) {
  const raw = line.trim();
  const cleaned = stripBullet(raw);
  const lower = cleaned.toLowerCase();

  let type = "other";
  if (/giảm\s*đến\s*\d+/.test(lower)) {
    type = "percent_off";
  } else if (/freeship|free\s*ship/.test(lower)) {
    type = "shipping";
  } else if (/voucher/.test(lower)) {
    type = "voucher";
  } else if (/giảm\s*\d+%/.test(lower)) {
    type = "percent_off";
  }

  const discountPercent = parsePercent(cleaned);
  const maxDiscount = parseMoneyMatch(cleaned, /tối đa\s*([0-9.,]+)\s*(k|đ|vnd|triệu|trieu)/i);
  const minOrder = parseMoneyMatch(cleaned, /đơn\s*(?:hàng\s*)?từ\s*([0-9.,]+)\s*(k|đ|vnd|triệu|trieu)/i);
  const category = extractCategory(cleaned);

  return {
    type,
    discountPercent,
    maxDiscount,
    minOrder,
    category,
    raw,
  };
}

function parsePercent(text) {
  const range = text.match(/(\d+(?:[.,]\d+)?)\s*%\s*(?:-|–|đến|to)\s*(\d+(?:[.,]\d+)?)\s*%/i);
  if (range) {
    const min = parseNumber(range[1]);
    const max = parseNumber(range[2]);
    return {
      min: Number.isFinite(min) ? min : null,
      max: Number.isFinite(max) ? max : null,
      value: null,
    };
  }

  const toMatch = text.match(/giảm\s*đến\s*(\d+(?:[.,]\d+)?)\s*%/i);
  if (toMatch) {
    const value = parseNumber(toMatch[1]);
    return { min: null, max: null, value: Number.isFinite(value) ? value : null };
  }

  const single = text.match(/(\d+(?:[.,]\d+)?)\s*%/);
  if (single) {
    const value = parseNumber(single[1]);
    return { min: null, max: null, value: Number.isFinite(value) ? value : null };
  }

  return null;
}

function parseMoneyMatch(text, regex) {
  const match = text.match(regex);
  if (!match) {
    return null;
  }
  const value = parseNumber(match[1]);
  const unit = normalizeMoneyUnit(match[2]);
  return {
    value: Number.isFinite(value) ? value : null,
    unit,
  };
}

function normalizeMoneyUnit(rawUnit) {
  if (!rawUnit) {
    return null;
  }
  const unit = rawUnit.toLowerCase();
  if (unit === "k") {
    return "K";
  }
  if (unit.includes("tri")) {
    return "million_vnd";
  }
  if (unit === "đ" || unit === "vnd") {
    return "VND";
  }
  return null;
}

function parseNumber(value) {
  if (!value) {
    return NaN;
  }
  const cleaned = value.toString().replace(/[^0-9.,]/g, "");
  if (!cleaned) {
    return NaN;
  }

  const hasDot = cleaned.includes(".");
  const hasComma = cleaned.includes(",");

  if (hasDot && cleaned.split(".").every((part, idx) => idx === 0 || part.length === 3)) {
    return Number(cleaned.replace(/\./g, ""));
  }

  if (hasComma && cleaned.split(",").every((part, idx) => idx === 0 || part.length === 3)) {
    return Number(cleaned.replace(/,/g, ""));
  }

  return Number(cleaned.replace(",", "."));
}

function extractCategory(text) {
  const paren = text.match(/\(([^)]+)\)/);
  if (paren) {
    return normalizeWhitespace(paren[1]);
  }

  const match = text.match(/(?:cho|áp dụng cho)\s+([^.:;]+)/i);
  if (match) {
    const candidate = match[1]
      .split(/đơn|tối đa|giảm/i)[0]
      .trim();
    return normalizeWhitespace(candidate) || null;
  }

  return null;
}

function extractLinesFromNode($, node) {
  const html = $.html(node) || "";
  const withBreaks = html.replace(/<br\s*\/?>/gi, "\n");
  const text = load(`<div>${withBreaks}</div>`).text();
  const normalized = normalizeWithNewlines(text);
  const rawLines = normalized ? normalized.split(/\n+/) : [];
  const lines = [];

  for (const raw of rawLines) {
    const trimmed = raw.trim();
    if (!trimmed) {
      continue;
    }
    if (trimmed.includes("►")) {
      const parts = trimmed
        .split("►")
        .map((part) => part.trim())
        .filter(Boolean);
      for (const part of parts) {
        lines.push(`► ${part}`);
      }
    } else {
      lines.push(trimmed);
    }
  }

  return lines;
}

function normalizeWithNewlines(value) {
  if (!value) {
    return "";
  }
  return value
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .trim();
}

function isBulletLine(text) {
  const trimmed = text.trim();
  return trimmed.startsWith("-") || trimmed.startsWith("►");
}

function stripBullet(text) {
  return text.replace(/^[-►]\s*/, "").trim();
}

function extractFirstLink($, node) {
  const $node = $(node);
  const anchor = $node.find("a").first();
  if (!anchor.length) {
    return null;
  }
  const url = anchor.attr("href") ? anchor.attr("href").trim() : null;
  const name = normalizeWhitespace(anchor.text());
  return { url: url || null, name: name || null };
}

function extractUrlFromLines(lines) {
  for (const line of lines) {
    const match = line.match(/https?:\/\/[^\s)]+/i);
    if (match) {
      return match[0].replace(/[),.]+$/, "");
    }
  }
  return null;
}

function extractLeadingNumber(text) {
  const match = text.match(/^(\d+)/);
  if (!match) {
    return null;
  }
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : null;
}

function extractLineName(line) {
  const cleaned = stripBullet(line);
  const colonIndex = cleaned.indexOf(":");
  if (colonIndex >= 0) {
    return normalizeWhitespace(cleaned.slice(colonIndex + 1)) || null;
  }
  return null;
}

function extractSlug(articleUrl) {
  if (!articleUrl) {
    return null;
  }
  try {
    const pathname = new URL(articleUrl).pathname;
    const parts = pathname.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : null;
  } catch {
    return null;
  }
}

function sanitizeContent(value) {
  if (!value) {
    return "";
  }
  let text = value;
  if (/<[^>]+>/.test(text)) {
    text = load(`<div>${text}</div>`).text();
  }
  const withoutLinks = text.replace(/https?:\/\/\S+/gi, "");
  return normalizeWhitespace(withoutLinks);
}

function toIsoDate(value) {
  if (!value) {
    return null;
  }
  const match = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) {
    return null;
  }
  const day = match[1].padStart(2, "0");
  const month = match[2].padStart(2, "0");
  const year = match[3];
  return `${year}-${month}-${day}`;
}

function extractDateRangeFromText(text, title = "") {
  if (!text) {
    return null;
  }

  const titleShort = title.match(/(\d{1,2})[./](\d{1,2})/);
  const yearMatch = text.match(/(20\d{2})/);
  if (titleShort && yearMatch) {
    const day = titleShort[1];
    const month = titleShort[2];
    const year = yearMatch[1];
    const date = formatDate(day, month, year);
    if (date) {
      return { startDate: date, endDate: date };
    }
  }

  const rangeFull = text.match(
    /(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})\s*(?:-|–|—|đến|to)\s*(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/i
  );
  if (rangeFull) {
    return {
      startDate: formatDate(rangeFull[1], rangeFull[2], rangeFull[3]),
      endDate: formatDate(rangeFull[4], rangeFull[5], rangeFull[6]),
    };
  }

  const rangeSharedYear = text.match(
    /(\d{1,2})[\/.](\d{1,2})\s*(?:-|–|—|đến|to)\s*(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/i
  );
  if (rangeSharedYear) {
    return {
      startDate: formatDate(rangeSharedYear[1], rangeSharedYear[2], rangeSharedYear[5]),
      endDate: formatDate(rangeSharedYear[3], rangeSharedYear[4], rangeSharedYear[5]),
    };
  }

  const rangeDayToFull = text.match(
    /(\d{1,2})\s*(?:-|–|—|đến|to)\s*(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/i
  );
  if (rangeDayToFull) {
    return {
      startDate: formatDate(rangeDayToFull[1], rangeDayToFull[3], rangeDayToFull[4]),
      endDate: formatDate(rangeDayToFull[2], rangeDayToFull[3], rangeDayToFull[4]),
    };
  }

  const single = text.match(/(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/);
  if (single) {
    const date = formatDate(single[1], single[2], single[3]);
    return date ? { startDate: date, endDate: date } : null;
  }

  return null;
}

function parseDateRange(text) {
  if (!text) {
    return null;
  }

  if (!/[\/.]/.test(text) && !/ngày|từ ngày/i.test(text)) {
    return null;
  }

  let normalized = text.replace(/[–—]/g, "-");
  normalized = normalized.replace(/(\d{1,2})\s*\/\s*(?=[-]|đến|to)/gi, "$1");

  const rangeRegex =
    /(?:từ ngày|từ|ngày)?\s*(\d{1,2})(?:[\/.](\d{1,2}))?(?:[\/.](\d{4}))?\s*(?:-|đến|to)\s*(?:ngày\s*)?(\d{1,2})(?:[\/.](\d{1,2}))?(?:[\/.](\d{4}))?/i;
  const match = normalized.match(rangeRegex);
  if (match) {
    let startDay = match[1];
    let startMonth = match[2];
    let startYear = match[3];
    let endDay = match[4];
    let endMonth = match[5];
    let endYear = match[6];

    if (!startMonth && endMonth) {
      startMonth = endMonth;
    }
    if (!endMonth && startMonth) {
      endMonth = startMonth;
    }
    if (!startYear && endYear) {
      startYear = endYear;
    }
    if (!endYear && startYear) {
      endYear = startYear;
    }

    const startDate = formatDate(startDay, startMonth, startYear);
    const endDate = formatDate(endDay, endMonth, endYear);
    if (!startDate && !endDate) {
      return null;
    }
    return { startDate, endDate };
  }

  const singleMatch = normalized.match(/(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/);
  if (singleMatch) {
    const date = formatDate(singleMatch[1], singleMatch[2], singleMatch[3]);
    return date ? { startDate: date, endDate: date } : null;
  }

  return null;
}

function formatDate(day, month, year) {
  const dd = Number(day);
  const mm = Number(month);
  const yy = Number(year);
  if (!Number.isFinite(dd) || !Number.isFinite(mm) || !Number.isFinite(yy)) {
    return null;
  }
  return `${String(dd).padStart(2, "0")}/${String(mm).padStart(2, "0")}/${yy}`;
}
