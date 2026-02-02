export async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 10_000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "user-agent": "PromoWatch-Server",
        "accept": "application/json",
        ...options.headers,
      },
    });

    const bodyText = await response.text();
    const data = bodyText ? JSON.parse(bodyText) : null;

    if (!response.ok) {
      const error = new Error(`Upstream error (${response.status})`);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } finally {
    clearTimeout(timeout);
  }
}