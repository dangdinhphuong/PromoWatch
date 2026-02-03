import dns from "dns";
import express from "express";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import apiRouter from "./routes/api.js";
import { config } from "./config.js";
import { startCron } from "./cron.js";

dns.setDefaultResultOrder("ipv4first");

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const hasDist = existsSync(indexPath);

app.get("/health", (req, res) => {
  res.status(200).type("text/plain").send("ok");
});

app.use(express.json({ limit: "1mb" }));
app.use("/api", apiRouter);

// Serve built frontend (Vite dist) when available
if (hasDist) {
  app.use(express.static(distDir));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(indexPath);
  });
}

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    ok: false,
    message: err.message || "Internal error",
  });
});

const server = app.listen(config.port, () => {
  console.log(`Server listening on http://localhost:${config.port}`);
});

const cronTask = startCron({ logger: console });

function shutdown(signal) {
  console.log(`Received ${signal}, shutting down...`);
  if (cronTask) {
    cronTask.stop();
  }
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
