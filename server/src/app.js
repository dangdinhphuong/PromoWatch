import express from "express";
import { createRoutes } from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

export function createApp() {
  const app = express();

  app.get("/health", (req, res) => {
    res.status(200).type("text/plain").send("ok");
  });

  app.use(express.json({ limit: "1mb" }));
  app.use(createRoutes());

  app.use(errorMiddleware);

  return app;
}

