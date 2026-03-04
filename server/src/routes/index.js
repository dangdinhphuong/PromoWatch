import { Router } from "express";
import apiRouter from "./api.routes.js";

export function createRoutes() {
  const router = Router();
  router.use("/api", apiRouter);
  return router;
}

