export function buildPayload(pageIndex, recordPerPage) {
  return new URLSearchParams({
    params: JSON.stringify({
      type: "ref",
      service: "promotion_tien_ich_tra_cuu_v2",
      SUBMISSION_CODE: "-1",
      MERCHANT_ID: "-1",
      CITY_ID: "-1",
      page_index: pageIndex,
      record_per_page: recordPerPage,
      provider: "dvcquocgiaRead",
    }),
  }).toString();
}

export function buildDetailPayload(submissionCode, agencyId) {
  return new URLSearchParams({
    params: JSON.stringify({
      type: "qry",
      service: "promotion_tien_ich_tra_cuu_findOne",
      SUBMISSION_CODE: submissionCode || "",
      AGENCY_ID: agencyId || "-1",
    }),
  }).toString();
}

export function parseRows(data) {
  if (Array.isArray(data)) {
    return data;
  }
  return data && (data.data || data.result) ? data.data || data.result : [];
}

export function parseDetailResponse(data) {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return data.length > 0 ? parseDetailResponse(data[0]) : null;
  }
  if (data.PROMOTION_NAME || data.PROMOTION_DETAIL || data.PROMOTION_AREA) {
    return data;
  }
  if (data.data) {
    return parseDetailResponse(data.data);
  }
  if (data.result) {
    return parseDetailResponse(data.result);
  }
  return null;
}

export function getPagination(rows) {
  if (!rows || rows.length === 0) {
    return { rowStt: null, total: null };
  }
  const lastRow = rows[rows.length - 1];
  const rowStt = Number(lastRow && lastRow.ROW_STT);
  const total = Number((lastRow && lastRow.TOTAL) || (rows[0] && rows[0].TOTAL));
  return {
    rowStt: Number.isFinite(rowStt) ? rowStt : null,
    total: Number.isFinite(total) ? total : null,
  };
}

function parseDateTo(value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const normalized = value.replace(" ", "T").replace(".0", "");
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function filterActive(rows) {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  return rows.filter((item) => {
    const dateTo = parseDateTo(item && item.DATE_TO);
    return dateTo && dateTo > todayStart;
  });
}

function formatDate(value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const match = value.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (!match) {
    return null;
  }
  const year = match[1];
  const month = match[2].padStart(2, "0");
  const day = match[3].padStart(2, "0");
  return `${day}/${month}/${year}`;
}

function toNumber(value) {
  if (value === null || value === undefined) {
    return null;
  }
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function parsePromotionPeriod(text) {
  if (!text || typeof text !== "string") {
    return { start: null, end: null };
  }
  const match = text.match(/(\d{1,2}\/\d{1,2}\/\d{4}).*?(\d{1,2}\/\d{1,2}\/\d{4})/);
  if (!match) {
    return { start: null, end: null };
  }
  return { start: match[1], end: match[2] };
}

function cleanText(value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  return trimmed.replace(/[.\s]+$/, "");
}

function normalizeLocation(value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  const colonIndex = trimmed.indexOf(":");
  if (colonIndex >= 0) {
    const after = trimmed.slice(colonIndex + 1).trim();
    return after || trimmed;
  }
  return trimmed;
}

function buildTimeRange(start, end) {
  if (!start || !end) {
    return null;
  }
  return `${start} - ${end}`;
}

function buildRawB(detail, name, company, timeRange) {
  if (!detail) {
    return null;
  }
  const content =
    cleanText(detail.PROMOTION_DETAIL) ||
    (detail.PDF_SIGNED_PATH || detail.PROMOTION_AGREEMENT_FILE
      ? "Chi tiết theo File đính kèm"
      : null);
  const file = detail.PDF_SIGNED_PATH || detail.PROMOTION_AGREEMENT_FILE || null;
  return {
    url: null,
    title: cleanText(detail.PROMOTION_NAME) || name || null,
    company: cleanText(detail.MERCHANT_NAME) || company || null,
    content,
    file,
    timeRange,
  };
}

export function mapRowToPromotion(row, detail) {
  const code = row && row.SUBMISSION_CODE ? String(row.SUBMISSION_CODE) : null;
  const detailName = detail && detail.PROMOTION_NAME ? String(detail.PROMOTION_NAME) : "";
  const detailCompany = detail && detail.MERCHANT_NAME ? String(detail.MERCHANT_NAME) : "";
  const name =
    detailName || (row && row.PROMOTION_NAME ? String(row.PROMOTION_NAME) : "");
  const company =
    detailCompany || (row && row.MERCHANT_NAME ? String(row.MERCHANT_NAME) : "");

  const period = parsePromotionPeriod(detail && detail.PROMOTION_PERIOD);
  const timeStart = formatDate(row && row.DATE_FROM) || period.start;
  const timeEnd = formatDate(row && row.DATE_TO) || period.end;
  const location =
    normalizeLocation(detail && detail.PROMOTION_AREA) ||
    normalizeLocation(detail && detail.PROVINCE_NAMES) ||
    null;
  const timeRange = buildTimeRange(timeStart, timeEnd);
  const rawB = buildRawB(detail, name, company, timeRange);

  return {
    id: null,
    code,
    name,
    company,
    time: {
      start: timeStart,
      end: timeEnd,
    },
    location,
    productType: null,
    discountPercent: null,
    promotionMethod: null,
    type: "official",
    agencyId: row && row.AGENCY_ID ? String(row.AGENCY_ID) : null,
    total: toNumber(row && row.TOTAL),
    rowStt: toNumber(row && row.ROW_STT),
    source: "dichvucong",
    sourceUrl: null,
    crawledAt: null,
    meta: {
      rawA: null,
      rawB,
    },
  };
}
