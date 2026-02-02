import { open, unlink } from "fs/promises";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function withFileLock(filePath, fn, options = {}) {
  const {
    retryDelayMs = 200,
    timeoutMs = 30000,
  } = options;
  const lockPath = `${filePath}.lock`;
  const start = Date.now();

  while (true) {
    try {
      const handle = await open(lockPath, "wx");
      await handle.close();
      break;
    } catch (error) {
      if (error?.code !== "EEXIST") {
        throw error;
      }
      if (Date.now() - start > timeoutMs) {
        throw new Error(`Timed out waiting for lock: ${lockPath}`);
      }
      await delay(retryDelayMs);
    }
  }

  try {
    return await fn();
  } finally {
    await unlink(lockPath).catch(() => {});
  }
}
