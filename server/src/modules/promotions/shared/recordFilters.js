export function parseDateString(value) {
  if (!value) {
    return null;
  }
  const text = String(value).trim();
  if (!text) {
    return null;
  }

  const matches = text.match(
    /(\d{4}-\d{1,2}-\d{1,2})|(\d{1,2}[\/-]\d{1,2}[\/-]\d{4})/g
  );
  if (!matches || matches.length === 0) {
    return null;
  }

  const dateText = matches[matches.length - 1];
  if (!dateText) {
    return null;
  }

  if (/^\d{4}-/.test(dateText)) {
    const [year, month, day] = dateText.split("-").map(Number);
    if (!year || !month || !day) {
      return null;
    }
    return new Date(year, month - 1, day);
  }

  const parts = dateText.split(/[\/-]/).map(Number);
  if (parts.length !== 3) {
    return null;
  }
  const [day, month, year] = parts;
  if (!year || !month || !day) {
    return null;
  }
  return new Date(year, month - 1, day);
}

export function getRecordEndDate(record) {
  if (!record || typeof record !== "object") {
    return null;
  }
  const candidates = [
    record.time && record.time.end,
    record.timeEnd,
    record.endDate,
    record.timeRange,
    record.meta && record.meta.rawB && record.meta.rawB.timeRange,
    record.meta && record.meta.rawB && record.meta.rawB.PROMOTION_PERIOD,
  ];

  for (const candidate of candidates) {
    const parsed = parseDateString(candidate);
    if (parsed) {
      return parsed;
    }
  }

  return null;
}

export function filterExpiredRecords(records, referenceDate = new Date()) {
  const today = new Date(referenceDate);
  today.setHours(0, 0, 0, 0);

  return (records || []).filter((record) => {
    const endDate = getRecordEndDate(record);
    if (!endDate) {
      return true;
    }
    endDate.setHours(0, 0, 0, 0);
    return endDate >= today;
  });
}
