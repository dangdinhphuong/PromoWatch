function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function get(url, options = {}) {
  const {
    headers = {},
    retry = 3,
    retryDelayMs = 2000,
    timeoutMs = 30000,
  } = options;

  let lastError;

  for (let attempt = 0; attempt <= retry; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
        signal: controller.signal,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Request failed: ${response.status} ${text}`);
      }

      return response;
    } catch (error) {
      lastError = error;
      if (attempt < retry) {
        await delay(retryDelayMs);
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}