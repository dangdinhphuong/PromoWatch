import "dotenv/config";
import { runDichvucongCrawl } from "./crawler/dichvucongCrawler.js";

export async function runDichvucong() {
  return runDichvucongCrawl();
}