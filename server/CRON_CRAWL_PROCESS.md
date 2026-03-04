# Quy trinh cao du lieu theo cron (Service)

Tai lieu nay mo ta quy trinh cron dang chay trong backend service (`server/src/*`) theo ma nguon hien tai.

## 1) Muc tieu

Service co 2 nhom cron chinh:

1. Crawl promotions tu cac nguon:
- `dichvucong`
- `vietrade`
- `bloggiamgia`

2. Crawl promotions tu API ngoai va upsert vao Mongo qua Mongoose:
- job `PROMOTIONS_CRAWL_*`

3. Cleanup promotions het han trong Mongo:
- job `PROMOTIONS_CLEANUP_*`

---

## 2) Entry point cron

Cron duoc khoi dong tai:
- `server/src/index.js`
  - `startCron({ logger: console })`

File quan ly scheduler:
- `server/src/cron/index.js`

Neu `CRON_ENABLED=false` thi toan bo cron bi tat.

---

## 3) Tong quan scheduler (`server/src/cron/index.js`)

`startCron()` tao cac task nhu sau:

1. Task "base" theo `CRON_SCHEDULE` (mac dinh `*/5 * * * *`)
- Log moc chay: `[cron] running job at ...`
- Neu `CRON_DB_PING=true` thi ping Postgres (`select now() as now`)

2. Neu `CRON_SERIAL=true`
- Task base se chay lan luot:
  1. `runDichvucongJob()`
  2. `runVietradeJob()`
  3. `runBloggiamgiaJob()`
- Moi job co `try/catch` rieng, loi 1 job khong lam dung job tiep theo.

3. Neu `CRON_SERIAL=false` (mac dinh)
- Tao 3 scheduler rieng:
  - `DVC_CRON_SCHEDULE` (mac dinh `0 */6 * * *`)
  - `VTR_CRON_SCHEDULE` (mac dinh `0 */6 * * *`)
  - `BGG_CRON_SCHEDULE` (mac dinh `0 */6 * * *`)
- Moi nguon co flag bat/tat:
  - `DVC_CRON_ENABLED`
  - `VTR_CRON_ENABLED`
  - `BGG_CRON_ENABLED`

4. Luon thu khoi dong them job `startPromotionsMongoDailyJob()` (neu du dieu kien)
- File: `server/src/cron/jobs/promotionsMongo.job.js`

5. Luon thu khoi dong them job `startPromotionsCleanupJob()` (neu du dieu kien)
- File: `server/src/cron/jobs/promotionsCleanup.job.js`

6. `startCron()` tra ve object co ham `stop()` de dung tat ca task khi shutdown.

---

## 4) Quy trinh job promotions theo nguon

File: `server/src/cron/jobs/promotions.job.js`

Moi job nguon (`runDichvucongJob`, `runVietradeJob`, `runBloggiamgiaJob`) deu co luong:

1. Log bat dau job
2. Goi crawler tu `server/src/modules/promotions/index.js`
3. Crawler ghi vao file promotions theo ngay (`data/promotions/data_D-M-YYYY.json`)
4. Log so ban ghi moi (`saved`) va tong (`total`)
5. Goi `syncPromotionsFileToMongo()` de dong bo file vao Mongo (neu bat Mongo promotions)
6. Log ket qua sync Mongo (`upserted`, `modified`, `skippedNoKey`, ...)

### 4.1 Dichvucong

Call chain:
- `runDichvucongJob()` -> `runDichvucong()` -> `runDichvucongCrawl()`

Dac diem:
- Crawl theo page (`DVC_RECORDS_PER_PAGE`, `DVC_MAX_PAGES`)
- Lay detail tung ho so
- Loc record con hieu luc
- Save theo co che dedupe key nguon dichvucong
- Co canh bao timeout ket noi den dichvucong

### 4.2 Vietrade

Call chain:
- `runVietradeJob()` -> `runVietrade()` -> `runVietradeCrawl()`

Dac diem:
- Crawl danh sach bai viet theo page
- Vao tung bai de parse detail
- Kiem tra trung URL truoc khi save
- Neu page hien tai khong co bai moi thi dung pagination

### 4.3 Bloggiamgia

Call chain:
- `runBloggiamgiaJob()` -> `runBloggiamgia()` -> `runBloggiamgiaCrawl()`

Dac diem:
- Resolve category `tin-khuyen-mai`
- Crawl list theo page, sau do crawl detail tung slug
- Kiem tra trung URL truoc khi save
- Neu page khong co bai moi thi dung pagination

---

## 5) Quy trinh job promotions crawl API -> Mongo (Mongoose)

File: `server/src/cron/jobs/promotionsMongo.job.js`

Dieu kien bat:
- `PROMOTIONS_CRAWL_ENABLED=true`

Lich chay:
- `PROMOTIONS_CRAWL_SCHEDULE` (mac dinh `0 1 * * *`)
- `PROMOTIONS_CRAWL_TIMEZONE` (mac dinh `Asia/Bangkok`)

Luong chay:

1. Kiem tra co run dang chay khong (`isRunning`)
- Neu dang chay, bo qua lan nay:
  - log: `promotions crawl skipped: previous run still running`

2. Bat dau crawl
- `fetchPromotionsFromApi()` tu `PROMOTIONS_CRAWL_API_URL`
- Ho tro payload:
  - mang truc tiep `[]`
  - object co `data: []`
  - object co `promotions: []`

3. Upsert vao Mongo bang Mongoose
- `upsertPromotionsWithMongoose()`
- Chuan hoa record, tao key dedupe
- Bulk upsert
- Log ket qua: `inserted`, `updated`, `skippedCount`, `total`

4. Catch loi + log stack neu `LOG_STACK=true`

---

## 6) Luu tru, dedupe, dong bo

File data promotions:
- `data/promotions/data_D-M-YYYY.json`

Co che luu:
- Tao file theo ngay neu chua co (`ensurePromotionsDailyFile`)
- Co file lock khi ghi (`withFileLock`)
- Tu dong cleanup, giu 5 file gan nhat (`cleanupOldPromotionsDailyFiles`)

Dong bo Mongo tu file:
- `syncPromotionsFileToMongo()` doc file ngay/today/latest
- Upsert qua `tryUpsertPromotions()`

Dedupe key uu tien:
1. `source + code`
2. `source + sourceUrl/url`
3. `source + id`
4. `source + rowStt`

---

## 7) Bien moi truong quan trong

### 7.1 Cron tong
- `CRON_ENABLED` (default true)
- `CRON_SCHEDULE` (default `*/5 * * * *`)
- `CRON_DB_PING` (default false)
- `CRON_SERIAL` (default false)

### 7.2 Cron tung nguon
- `DVC_CRON_ENABLED`, `DVC_CRON_SCHEDULE`
- `VTR_CRON_ENABLED`, `VTR_CRON_SCHEDULE`
- `BGG_CRON_ENABLED`, `BGG_CRON_SCHEDULE`

### 7.3 Crawl API vao Mongo (Mongoose)
- `PROMOTIONS_CRAWL_ENABLED` (bat job)
- `PROMOTIONS_CRAWL_API_URL` (url nguon API)
- `PROMOTIONS_CRAWL_SCHEDULE`
- `PROMOTIONS_CRAWL_TIMEZONE`
- `MONGO_PROMOTIONS_ENABLED` (can bat de ghi Mongo)
- `MONGO_URI`, `MONGO_DB`

### 7.4 Cleanup promotions het han
- `PROMOTIONS_CLEANUP_ENABLED`
- `PROMOTIONS_CLEANUP_SCHEDULE`
- `PROMOTIONS_CLEANUP_TIMEZONE`

### 7.5 Dichvucong tuning
- `DVC_RECORDS_PER_PAGE` (default 500)
- `DVC_MAX_PAGES` (default 0 = khong gioi han)

---

## 8) Thu tu chay thuc te (vi du)

### Truong hop A: `CRON_SERIAL=false` (pho bien)

1. Service start -> dang ky cron
2. Den lich DVC -> chay DVC job -> sync Mongo
3. Den lich VTR -> chay VTR job -> sync Mongo
4. Den lich BGG -> chay BGG job -> sync Mongo
5. Den lich `PROMOTIONS_CRAWL_SCHEDULE` -> chay crawl API -> upsert Mongoose

### Truong hop B: `CRON_SERIAL=true`

1. Den moi `CRON_SCHEDULE`:
  - DVC -> VTR -> BGG (lan luot)
2. Job `PROMOTIONS_CRAWL_*` van doc lap theo schedule rieng

---

## 9) Log can theo doi

Mau log quan trong:

- `[cron] running job at ...`
- `[cron] dichvucong job at ...`
- `[cron] vietrade job at ...`
- `[cron] bloggiamgia job at ...`
- `[cron] mongo sync after ...: ok=... upserted=... modified=...`
- `[cron] promotions crawl started at ...`
- `[cron] promotions crawl done in ...ms: inserted=... updated=...`
- `[cron] promotions crawl skipped: previous run still running.`
- `[cron] ... failed: ...`

---

## 10) Van hanh nhanh

Chay service local:

```bash
npm run dev:server
```

Check API:

```bash
GET /api/health
GET /api/mongo/ping
GET /api/promotions/data
```

Neu can tam tat crawler nguon do timeout mang:
- set `DVC_CRON_ENABLED=false` (hoac VTR/BGG tuong ung)

Neu can tat toan bo cron:
- set `CRON_ENABLED=false`
