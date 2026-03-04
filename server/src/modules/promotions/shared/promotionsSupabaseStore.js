import { config } from "../../../config/index.js";

const DEFAULT_BATCH_SIZE = 500;

function trimText(value) {
  if (value === null || value === undefined) {
    return null;
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  const asText = String(value).trim();
  return asText.length > 0 ? asText : null;
}

function toIntegerOrNull(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function toNumberOrNull(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseDateValue(value) {
  const raw = trimText(value);
  if (!raw) {
    return null;
  }

  const dmyMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (dmyMatch) {
    const day = Number.parseInt(dmyMatch[1], 10);
    const month = Number.parseInt(dmyMatch[2], 10);
    const year = Number.parseInt(dmyMatch[3], 10);
    const date = new Date(Date.UTC(year, month - 1, day));
    if (
      !Number.isNaN(date.getTime()) &&
      date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
    ) {
      return date;
    }
    return null;
  }

  const ymdMatch = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (ymdMatch) {
    const year = Number.parseInt(ymdMatch[1], 10);
    const month = Number.parseInt(ymdMatch[2], 10);
    const day = Number.parseInt(ymdMatch[3], 10);
    const date = new Date(Date.UTC(year, month - 1, day));
    if (
      !Number.isNaN(date.getTime()) &&
      date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
    ) {
      return date;
    }
    return null;
  }

  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toUtcDateStart(date) {
  if (!date) {
    return null;
  }
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0)
  );
}

function getPromotionKey(record) {
  if (!record || typeof record !== "object") {
    return null;
  }

  const source = trimText(record.source);
  if (!source) {
    return null;
  }

  const code = trimText(record.code);
  if (code) {
    return `${source}:code:${code}`;
  }

  const sourceUrl = trimText(record.sourceUrl);
  if (sourceUrl) {
    return `${source}:url:${sourceUrl}`;
  }

  const url = trimText(record.url);
  if (url) {
    return `${source}:url:${url}`;
  }

  const rawId = trimText(record._id ?? record.id);
  if (rawId) {
    return `${source}:id:${rawId}`;
  }

  const rowStt = trimText(record.rowStt);
  if (rowStt) {
    return `${source}:row:${rowStt}`;
  }

  const name = trimText(record.name);
  const company = trimText(record.company);
  const start = trimText(record?.time?.start);
  const end = trimText(record?.time?.end);
  const fallbackParts = [name, company, start, end].filter(Boolean);
  if (fallbackParts.length > 0) {
    return `${source}:fallback:${fallbackParts.join("|").slice(0, 512)}`;
  }

  return null;
}

function normalizePromotionRow(record) {
  if (!record || typeof record !== "object") {
    return null;
  }

  const source = trimText(record.source);
  if (!source) {
    return null;
  }

  const key = getPromotionKey(record);
  if (!key) {
    return null;
  }

  const timeStart = trimText(record?.time?.start);
  const timeEnd = trimText(record?.time?.end);
  const crawledAt = parseDateValue(record.crawledAt);
  const crawledAtDate = toUtcDateStart(crawledAt);
  const timeStartDate = parseDateValue(timeStart);

  return {
    mongo_oid: trimText(record._id ?? record.id),
    key,
    agency_id: trimText(record.agencyId),
    code: trimText(record.code),
    company: trimText(record.company),
    name: trimText(record.name),
    location: trimText(record.location),
    source,
    source_url: trimText(record.sourceUrl ?? record.url),
    type: trimText(record.type),
    row_stt: toIntegerOrNull(record.rowStt),
    total: toIntegerOrNull(record.total),
    discount_percent: toNumberOrNull(record.discountPercent),
    crawled_at: crawledAt ? crawledAt.toISOString() : null,
    crawled_at_date: crawledAtDate ? crawledAtDate.toISOString() : null,
    time_start: timeStart,
    time_end: timeEnd,
    time_start_date: timeStartDate ? timeStartDate.toISOString() : null,
    meta: record.meta ?? null,
  };
}

function getSupabaseSettings() {
  const url = config.supabase?.url;
  const apiKey = config.supabase?.apiKey;
  const table = config.supabase?.table || "np_promotions";

  if (!url) {
    const error = new Error("SUPABASE_URL (or VITE_SUPABASE_URL) is not set.");
    error.code = "MISSING_SUPABASE_URL";
    throw error;
  }

  if (!apiKey) {
    const error = new Error(
      "SUPABASE_API_KEY/SUPABASE_SERVICE_ROLE_KEY (or VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY) is not set."
    );
    error.code = "MISSING_SUPABASE_API_KEY";
    throw error;
  }

  return {
    url: String(url).replace(/\/+$/, ""),
    apiKey: String(apiKey),
    table: String(table).trim() || "np_promotions",
  };
}

function buildHeaders(apiKey) {
  return {
    apikey: apiKey,
    authorization: `Bearer ${apiKey}`,
    "content-type": "application/json",
    prefer: "resolution=merge-duplicates,return=minimal",
  };
}

function getErrorMessage(status, bodyText) {
  if (!bodyText) {
    return `Supabase upsert failed with status ${status}.`;
  }

  try {
    const parsed = JSON.parse(bodyText);
    if (parsed?.message) {
      return `Supabase upsert failed (${status}): ${parsed.message}`;
    }
    return `Supabase upsert failed (${status}): ${bodyText}`;
  } catch {
    return `Supabase upsert failed (${status}): ${bodyText}`;
  }
}

async function upsertBatch(rows, settings) {
  if (rows.length === 0) {
    return { ok: true, upserted: 0 };
  }

  const endpoint = `${settings.url}/rest/v1/${encodeURIComponent(
    settings.table
  )}?on_conflict=key`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: buildHeaders(settings.apiKey),
    body: JSON.stringify(rows),
  });

  if (!response.ok) {
    const bodyText = await response.text();
    throw new Error(getErrorMessage(response.status, bodyText));
  }

  return { ok: true, upserted: rows.length };
}

function chunkRows(rows, chunkSize = DEFAULT_BATCH_SIZE) {
  if (rows.length <= chunkSize) {
    return [rows];
  }

  const chunks = [];
  for (let i = 0; i < rows.length; i += chunkSize) {
    chunks.push(rows.slice(i, i + chunkSize));
  }
  return chunks;
}

export async function pingSupabase({ timeoutMs = 12_000 } = {}) {
  const settings = getSupabaseSettings();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${settings.url}/auth/v1/settings`, {
      method: "GET",
      signal: controller.signal,
      headers: {
        apikey: settings.apiKey,
        authorization: `Bearer ${settings.apiKey}`,
      },
    });

    if (!response.ok) {
      const bodyText = await response.text();
      throw new Error(getErrorMessage(response.status, bodyText));
    }

    return { ok: true };
  } finally {
    clearTimeout(timeout);
  }
}

export async function upsertPromotionsToSupabase(records, { logger = console } = {}) {
  if (!config.supabase?.promotionsEnabled) {
    return { ok: true, skipped: true, reason: "SUPABASE_PROMOTIONS_ENABLED!=true" };
  }

  const rawItems = Array.isArray(records) ? records.filter(Boolean) : [];
  if (rawItems.length === 0) {
    return { ok: true, upserted: 0, skippedNoKey: 0, total: 0 };
  }

  const rows = [];
  let skippedNoKey = 0;
  for (const item of rawItems) {
    const row = normalizePromotionRow(item);
    if (!row) {
      skippedNoKey += 1;
      continue;
    }
    rows.push(row);
  }

  if (rows.length === 0) {
    return {
      ok: true,
      upserted: 0,
      skippedNoKey,
      total: rawItems.length,
    };
  }

  const settings = getSupabaseSettings();
  const chunks = chunkRows(rows);

  let upserted = 0;
  for (const chunk of chunks) {
    const result = await upsertBatch(chunk, settings);
    upserted += result.upserted;
  }

  logger.info(
    `[supabase] promotions upsert done: upserted=${upserted} skippedNoKey=${skippedNoKey} total=${rawItems.length}`
  );

  return {
    ok: true,
    upserted,
    skippedNoKey,
    total: rawItems.length,
    batches: chunks.length,
  };
}

export async function tryUpsertPromotionsToSupabase(records, { logger = console } = {}) {
  try {
    return await upsertPromotionsToSupabase(records, { logger });
  } catch (error) {
    logger.warn(`[supabase] promotions upsert failed: ${error.message}`);
    return { ok: false, error: error.message };
  }
}

