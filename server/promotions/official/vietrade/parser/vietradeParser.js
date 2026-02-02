import { load } from "cheerio";
import { URL } from "url";

const LABEL_CONFIG = [
  {
    key: "company",
    labels: [
      "Tên cá nhân/tổ chức",
      "Tên cá nhân / tổ chức",
      "Tên cá nhân, tổ chức",
      "Tên cá nhân hoặc tổ chức",
      "Tên tổ chức",
      "Tên doanh nghiệp",
    ],
  },
  {
    key: "timeStart",
    labels: ["Thời gian bắt đầu"],
  },
  {
    key: "timeEnd",
    labels: ["Thời gian kết thúc"],
  },
  {
    key: "location",
    labels: ["Địa chỉ liên hệ"],
  },
  {
    key: "promotionMethod",
    labels: ["Hình thức khuyến mại", "Hình thức khuyến mãi"],
  },
  {
    key: "promotionProductType",
    labels: [
      "Hàng hóa, dịch vụ",
      "Hàng hóa/dịch vụ",
      "Hàng hóa, dịch vụ khuyến mại",
      "Hàng hóa khuyến mại",
    ],
  },
];

const LABEL_LOOKUP = new Map();
const TEXT_LABELS = [];

for (const { key, labels } of LABEL_CONFIG) {
  for (const label of labels) {
    const normalized = normalizeLabel(label).toLowerCase();
    if (!LABEL_LOOKUP.has(normalized)) {
      LABEL_LOOKUP.set(normalized, key);
      TEXT_LABELS.push(label);
    }
  }
}

const TEXT_LABEL_REGEX =
  TEXT_LABELS.length > 0
    ? new RegExp(`(${TEXT_LABELS.map(escapeRegExp).join("|")})\\s*[:：]\\s*`, "gi")
    : null;

export function parseArticleList(html, baseUrl) {
  const $ = load(html);
  const articles = [];

  $("#main-content .card.border-light > a").each((_, el) => {
    const href = $(el).attr("href");
    if (href) {
      articles.push(new URL(href, baseUrl).href);
    }
  });

  return articles;
}

export function parsePagination(html) {
  const $ = load(html);
  let lastPage = 1;

  $("ul.pagination a.page-link").each((_, el) => {
    const pageNum = parseInt($(el).text().trim(), 10);
    if (!Number.isNaN(pageNum) && pageNum > lastPage) {
      lastPage = pageNum;
    }
  });

  const currentPage = parseInt($("ul.pagination .page-item.active").text().trim(), 10) || 1;

  return { currentPage, lastPage };
}

export function parseArticleDetail(html, articleUrl) {
  const $ = load(html);

  const title =
    $("#main-content h2").first().text().trim() ||
    $("#main-content h1").first().text().trim() ||
    $("h1").text().trim();

  const contentSelector = "#main-content .news-content";
  const contentHtml = $(contentSelector).html() || "";
  const contentText = $(contentSelector).text().trim() || "";

  const extractedFromHtml = extractFieldsFromHtml(contentHtml);
  const extractedFromText = extractFieldsFromText(contentText);
  const mergedFields = { ...extractedFromText, ...extractedFromHtml };

  const timeStartRaw = parseDate(mergedFields.timeStart);
  const timeEndRaw = parseDate(mergedFields.timeEnd);
  const timeRange =
    timeStartRaw && timeEndRaw ? `${timeStartRaw} - ${timeEndRaw}` : null;
  const timeStart = toIsoDate(timeStartRaw);
  const timeEnd = toIsoDate(timeEndRaw);

  const discountPercent =
    findDiscountPercent($(contentSelector).text()) ||
    findDiscountPercent(contentText);

  const slug = extractSlug(articleUrl);
  const id = extractNumericId(articleUrl);

  return {
    id,
    code: slug,
    name: title || "",
    company: cleanText(mergedFields.company || "") || "",
    time: {
      start: timeStart,
      end: timeEnd,
    },
    location: cleanText(mergedFields.location) || null,
    productType: cleanText(mergedFields.promotionProductType) || null,
    discountPercent,
    promotionMethod: cleanText(mergedFields.promotionMethod) || null,
    type: "official",
    agencyId: null,
    total: null,
    rowStt: null,
    source: "vietrade",
    sourceUrl: articleUrl || null,
    crawledAt: new Date().toISOString(),
    meta: {
      rawA: null,
      rawB: {
        url: articleUrl || null,
        title: title || null,
        company: cleanText(mergedFields.company || "") || null,
        timeRange,
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

function normalizeLabel(label) {
  return normalizeWhitespace(label).replace(/[:：]$/, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function labelToKey(label) {
  if (!label) {
    return null;
  }
  return LABEL_LOOKUP.get(normalizeLabel(label).toLowerCase()) || null;
}

function extractValueAfterStrong($, el) {
  const parts = [];
  let node = el.nextSibling;

  while (node) {
    if (node.type === "tag" && node.name === "br") {
      break;
    }
    if (node.type === "tag" && node.name === "strong") {
      break;
    }

    const text = $(node).text();
    if (text) {
      parts.push(text);
    }
    node = node.nextSibling;
  }

  return normalizeWhitespace(parts.join(" "));
}

function extractFieldsFromHtml(contentHtml) {
  if (!contentHtml) {
    return {};
  }

  const $ = load(contentHtml);
  const result = {};

  $("strong").each((_, el) => {
    const key = labelToKey($(el).text());
    if (!key || result[key]) {
      return;
    }

    const value = extractValueAfterStrong($, el);
    if (value) {
      result[key] = value;
    }
  });

  return result;
}

function extractFieldsFromText(contentText) {
  if (!contentText || !TEXT_LABEL_REGEX) {
    return {};
  }

  const normalizedText = normalizeWhitespace(contentText);
  if (!normalizedText) {
    return {};
  }

  const matches = Array.from(normalizedText.matchAll(TEXT_LABEL_REGEX));
  const result = {};

  for (let i = 0; i < matches.length; i += 1) {
    const match = matches[i];
    const key = labelToKey(match[1]);
    if (!key || result[key]) {
      continue;
    }

    const valueStart = match.index + match[0].length;
    const valueEnd = i + 1 < matches.length ? matches[i + 1].index : normalizedText.length;
    const value = normalizeWhitespace(normalizedText.slice(valueStart, valueEnd));

    if (value) {
      result[key] = value;
    }
  }

  return result;
}

function parseDate(value) {
  if (!value) {
    return null;
  }

  const match = value.match(/\b(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})\b/);
  if (!match) {
    return null;
  }

  const day = match[1].padStart(2, "0");
  const month = match[2].padStart(2, "0");
  const year = match[3];

  return `${day}/${month}/${year}`;
}

function findDiscountPercent(text) {
  if (!text) {
    return null;
  }

  const match = text.match(/(\d+(?:[.,]\d+)?)\s*%/);
  if (!match) {
    return null;
  }

  const value = Number(match[1].replace(",", "."));
  return Number.isFinite(value) ? value : null;
}

function cleanText(value) {
  if (!value) {
    return "";
  }
  return value.toString().trim().replace(/[.\s]+$/, "");
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

function extractNumericId(articleUrl) {
  if (!articleUrl) {
    return null;
  }
  try {
    const pathname = new URL(articleUrl).pathname;
    const parts = pathname.split("/").filter(Boolean);
    const numeric = parts.find((part) => /^\d+$/.test(part));
    if (!numeric) {
      return null;
    }
    const id = Number(numeric);
    return Number.isFinite(id) ? id : null;
  } catch {
    return null;
  }
}
