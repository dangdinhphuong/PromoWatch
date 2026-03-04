import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRootDir = path.resolve(__dirname, "..", "..", "..");
const serverRootDir = path.resolve(__dirname, "..", "..");

export const paths = {
  repoRootDir,
  serverRootDir,
  distDir: path.join(repoRootDir, "dist"),
  distIndexHtml: path.join(repoRootDir, "dist", "index.html"),
  dataDir: path.join(repoRootDir, "data"),
  promotionsDataDir: path.join(repoRootDir, "data", "promotions"),
  promotionsDataFile: path.join(repoRootDir, "data", "promotions", "data.json"),
};

