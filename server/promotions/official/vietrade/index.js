import "dotenv/config";
import { runVietradeCrawl } from "./crawler/vietradeCrawler.js";

export async function runVietrade() {
  return runVietradeCrawl();
}