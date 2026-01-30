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

export function parseRows(data) {
  if (Array.isArray(data)) {
    return data;
  }
  return data && (data.data || data.result) ? data.data || data.result : [];
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