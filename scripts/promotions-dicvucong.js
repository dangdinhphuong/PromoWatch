import { runDichvucong } from "../server/dichvucong/index.js";

try {
  const result = await runDichvucong();
  console.log(
    `Saved ${result.saved} new records (total ${result.total}) to data/promotions/dichvucong/dichvucong.json`
  );
} catch (error) {
  console.error(error?.message || error);
  process.exit(1);
}
