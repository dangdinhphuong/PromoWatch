import express from "express";
import apiRouter from "./routes/api.js";
import { config } from "./config.js";
import { startCron } from "./cron.js";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use("/api", apiRouter);

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