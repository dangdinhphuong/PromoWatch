import dns from "dns";
import express from "express";
import { existsSync } from "fs";
import { createApp } from "./app.js";
import { config } from "./config/index.js";
import { startCron } from "./cron/index.js";
import { closeMongoClient } from "./db/mongo.js";
import { closePool } from "./db/index.js";
import { disconnectMongo } from "./db/mongoose.js";
import { paths } from "./utils/paths.js";

dns.setDefaultResultOrder("ipv4first");

const app = createApp();
const hasDist = existsSync(paths.distIndexHtml);

// Serve built frontend (Vite dist) when available
if (hasDist) {
  app.use(express.static(paths.distDir));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(paths.distIndexHtml);
  });
}

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
    Promise.allSettled([closePool(), closeMongoClient(), disconnectMongo()]).finally(() => {
      process.exit(0);
    });
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
