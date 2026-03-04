# Tai lieu logic va nghiep vu

Cap nhat theo ma nguon hien tai ngay **2026-03-04**.

Pham vi tai lieu:
- Module `Quan ly tin khuyen mai` (frontend + backend + crawler + cron + luu tru).
- Module `Ma giam gia` (frontend + API proxy toi Piggi).

## 1) Tong quan kien truc

- Frontend: React/Vite trong `src/app/*`.
- Backend: Express trong `server/src/routes/api.routes.js`.
- Data promotions:
  - File theo ngay: `data/promotions/data_D-M-YYYY.json`.
  - MongoDB collection: `promotions` (neu bat `MONGO_PROMOTIONS_ENABLED=true`).
- Nguon promotions: `dichvucong`, `vietrade`, `bloggiamgia` (UI co them nhan `crawl`).

### 1.1 CORS va Proxy (hien tai dang xu ly the nao)

Trang thai hien tai:
- Backend **chua** bat middleware `cors()` trong `server/src/app.js`.
- Frontend dev dung Vite proxy de tranh CORS khi goi API.

Proxy dang co trong `vite.config.ts`:
- `/api` -> `http://localhost:4000`
- `/api/piggi` -> `https://portal.piggi.vn` (rewrite sang `/api`)

Proxy dang co trong backend:
- `GET /api/piggi/voucher-category` va `GET /api/piggi/voucher` la proxy server-to-server toi Piggi.
- `GET /api/external?url=...` la proxy tong quat co `API_ALLOWLIST`.

Y nghia van hanh:
- Local dev: frontend goi relative path `/api/...` => khong bi CORS do da qua proxy.
- Production cung domain (backend serve SPA + API): thuong khong can CORS.
- Neu frontend/backend khac domain: can bat `cors` middleware va allow origin cu the.

---

## 2) Module Quan ly tin khuyen mai

### 2.1 Muc tieu nghiep vu

- Tong hop va giam sat thong tin khuyen mai tu nhieu nguon.
- Phan loai tinh phap ly (`official`/`unofficial`).
- Tim kiem, loc, xem chi tiet, xuat Excel, theo doi theo thoi gian thu thap va thoi gian ap dung.

### 2.2 Luong frontend

File chinh:
- `src/app/pages/promotions-table.tsx`
- `src/app/components/promotion-filter.tsx`
- `src/app/components/promotion-table.tsx`
- `src/app/components/promotion-detail-modal.tsx`

Luong:
- Nguoi dung thay doi bo loc trong `PromotionFilter`.
- Bam `Tim kiem` -> frontend set `appliedFilters` va goi `GET /api/promotions/data`.
- Backend tra ve `data` + `pagination`.
- `PromotionTable` hien thi danh sach, sort cot thoi gian, phan trang.
- Bam `Xem` -> mo `PromotionDetailModal`.
- Bam `Export` -> xuat file Excel tu mang `promotions` dang co tren client.

Bo loc frontend:
- Tu khoa (`keyword`).
- Loai tin (`type`: `official` / `unofficial` / `all`).
- Nguon (`source`: `vietrade` / `dichvucong` / `crawl` / `bloggiamgia` / `all`).
- Khoang ngay ap dung (`applicableStartDate`, `applicableEndDate`).
- Khoang ngay thu thap (`collectedStartDate`, `collectedEndDate`).
- `applicableTimeRange` va `collectedTimeRange` dung de auto-fill date tren UI.

### 2.2.1 Table Quan ly tin khuyen mai can truong gi, lay o dau

Table hien thi trong `src/app/components/promotion-table.tsx`.

#### A. Truong can co de render danh sach table

| Cot tren UI | Truong du lieu | Bat buoc |
|---|---|---|
| Checkbox | `code` | Nen co (de select row) |
| STT | tinh toan theo page (`startIndex + index + 1`) | Tu dong |
| Ten chuong trinh | `name` | Bat buoc |
| Cong ty / Don vi | `company` | Bat buoc |
| Thoi gian ap dung | `time.start`, `time.end` | Nen co |
| Dia diem | `location` | Khong bat buoc (thieu thi `N/A`) |
| Nguon | `source` | Bat buoc |
| Phap ly | `type` | Bat buoc |
| Thoi diem thu thap | `crawledAt` | Nen co (thieu thi fallback) |
| Hanh dong Xem | dung toan bo object row | Bat buoc object hop le |

#### B. Truong can co de mo popup chi tiet

Popup dung them cac truong:
- `productType`
- `promotionMethod`
- `discountPercent`
- `sourceUrl`
- `meta.rawB.content`
- `meta.rawB.file`

Neu thieu, popup van mo duoc, nhung mot so block thong tin se an hoac hien `N/A`.

#### C. Truong can co cho backend loc/phang trang

API `GET /api/promotions/data` can/uu tien cac truong:
- Tim keyword: `name`, `company`, `code`
- Loc loai/nguon: `type`, `source`
- Loc thoi gian ap dung:
  - Nhanh Mongo: `timeStartDate`, `timeEndDate`
  - Nhanh file: parse tu `time.start`, `time.end`
- Loc thoi diem thu thap: `crawledAt`
- Phan trang: `page`, `limit/pageSize` (query param)

#### D. Moi truong du lieu promotions lay o dau (theo tung nguon)

| Truong chung | dichvucong | vietrade | bloggiamgia |
|---|---|---|---|
| `name` | `detail.PROMOTION_NAME` hoac `row.PROMOTION_NAME` | title bai viet (`h2/h1`) | `blog.title` |
| `company` | `detail.MERCHANT_NAME` hoac `row.MERCHANT_NAME` | parse nhan "Ten to chuc/doanh nghiep..." trong noi dung | detect tu noi dung (Shopee/Lazada/...) |
| `time.start` | `DATE_FROM` hoac `PROMOTION_PERIOD` | parse nhan "Thoi gian bat dau" | parse date range tu noi dung |
| `time.end` | `DATE_TO` hoac `PROMOTION_PERIOD` | parse nhan "Thoi gian ket thuc" | parse date range tu noi dung |
| `location` | `PROMOTION_AREA`/`PROVINCE_NAMES` | parse nhan "Dia chi lien he" | thuong de `null` |
| `productType` | thuong `null` | parse nhan "Hang hoa/dich vu..." | thuong `null` |
| `promotionMethod` | thuong `null` | parse nhan "Hinh thuc khuyen mai" | thuong `null` |
| `discountPercent` | thuong `null` | regex `%` trong noi dung | thuong `null` |
| `type` | gan cung: `official` | gan cung: `official` | gan cung: `unofficial` |
| `source` | gan cung: `dichvucong` | gan cung: `vietrade` | gan cung: `bloggiamgia` |
| `sourceUrl` | thuong `null` | URL bai viet | URL blog |
| `meta.rawB.content/file` | co (tu detail/file dinh kem) | co mot phan (title/company/timeRange) | co content rut gon |

#### E. Schema day du cua 1 record promotions (theo `PromotionData`)

- `id`
- `code`
- `name`
- `company`
- `time.start`
- `time.end`
- `location`
- `productType`
- `discountPercent`
- `promotionMethod`
- `type`
- `agencyId`
- `total`
- `rowStt`
- `source`
- `sourceUrl`
- `crawledAt`
- `meta.rawA`
- `meta.rawB`

#### F. Required vs Optional (ngan gon de dev/API test)

##### F1. Query filter `GET /api/promotions/data`

| Param | Required | Ghi chu |
|---|---|---|
| `page` | Khong (frontend dang gui) | Backend default `1` neu thieu |
| `limit` / `pageSize` | Khong (frontend dang gui `limit`) | Backend default `20`, max `500` |
| `keyword` | Khong | Tim trong `name`, `company`, `code` |
| `type` | Khong | `official` / `unofficial` / `all` |
| `source` | Khong | `dichvucong` / `vietrade` / `bloggiamgia` / `crawl` / `all` |
| `applicableStartDate` | Khong | Loc ngay bat dau ap dung |
| `applicableEndDate` | Khong | Loc ngay ket thuc ap dung |
| `collectedStartDate` | Khong | Loc moc thu thap tu ngay |
| `collectedEndDate` | Khong | Loc moc thu thap den ngay |
| `storage` | Khong | `file` de ep doc file; mac dinh uu tien Mongo neu bat |
| `date` | Khong | Chon file theo ngay (`d-m-yyyy` hoac `yyyy-m-d`) |

##### F2. Fields cho render table (list)

| Field | Required | Neu thieu thi sao |
|---|---|---|
| `name` | Co | Hien thi xau/trong, mat y nghia nghiep vu |
| `company` | Co | Hien thi xau/trong |
| `time.start`, `time.end` | Nen co | Hien `N/A` |
| `source` | Co | Khong gan badge nguon dung |
| `type` | Co | Khong gan badge phap ly dung |
| `crawledAt` | Nen co | Fallback moc 1970 trong mot so view |
| `code` | Nen co | Checkbox select theo `code` de trung/lac key |
| `location` | Khong | Hien `N/A` |

##### F3. Fields cho popup `Xem chi tiet`

| Field | Required | Ghi chu |
|---|---|---|
| `code` | Nen co | Hien ma so tren header |
| `name` | Co | Tieu de noi dung |
| `company` | Co | Thong tin don vi to chuc |
| `time.start`, `time.end` | Nen co | Hien block thoi gian ap dung |
| `type` | Co | Badge chinh thuc/khong chinh thuc |
| `source` | Co | Badge nguon thu thap |
| `crawledAt` | Nen co | Hien "Thu thap luc" |
| `meta.rawB.content` | Khong | Neu co thi uu tien hien noi dung chi tiet |
| `location` | Khong | Co thi hien block khu vuc |
| `productType` | Khong | Co thi hien block loai san pham |
| `promotionMethod` | Khong | Co thi hien block phuong thuc |
| `discountPercent` | Khong | Co thi hien block phan tram giam |
| `meta.rawB.file` | Khong | Co thi hien file dinh kem |
| `sourceUrl` | Khong | Co thi hien nut "Mo trang nguon" |

### 2.3 API dang su dung

| Method | Endpoint | Muc dich |
|---|---|---|
| GET | `/api/promotions/data` | Lay danh sach promotions co loc + phan trang |
| POST | `/api/promotions/dichvucong/fetch` | Crawl du lieu tu Dich vu cong |
| POST | `/api/articles/vietrade/fetch` | Crawl bai viet khuyen mai Vietrade |
| POST | `/api/promotions/bloggiamgia/fetch` | Crawl du lieu tu Bloggiamgia |
| POST | `/api/promotions/mongo/upsert` | Upsert records vao Mongo |
| POST | `/api/promotions/mongo/sync` | Dong bo file promotions sang Mongo |
| GET | `/api/mongo/ping` | Kiem tra ket noi Mongo |

Tham so `GET /api/promotions/data`:
- `page`, `limit`/`pageSize`
- `keyword`, `type`, `source`
- `applicableStartDate`, `applicableEndDate`
- `collectedStartDate`, `collectedEndDate`
- `storage=file` de ep doc tu file (mac dinh uu tien Mongo neu da bat)
- `date` (d-m-yyyy hoac yyyy-m-d) khi can doc file theo ngay cu the

Response chuan `GET /api/promotions/data`:
- `ok`: boolean
- `data`: danh sach promotions (mang record)
- `file`:
  - `name`: ten file neu doc tu file, `null` neu doc Mongo
  - `reason`: `mongo` | `today` | `latest` | `requested-date` | `legacy` | `missing`
  - `storage`: `mongo` | `file`
- `pagination`:
  - `page`, `pageSize`, `total`, `totalPages`, `hasNext`, `hasPrev`

### 2.4 Logic backend `GET /api/promotions/data`

File: `server/src/routes/api.routes.js`

Nhanh 1: Doc Mongo (uu tien)
- Dieu kien: `storage != file` va `config.mongo.promotionsEnabled=true`.
- Loc:
  - `keyword`: dung `$text` tren `name`, `company`, `code`.
  - `type`, `source`.
  - `timeStartDate >= applicableStartDate`.
  - `timeEndDate <= applicableEndDate`.
  - `crawledAt` nam trong khoang thu thap.
- Sort: `crawledAt desc`, `_id desc`.
- Tra ve `pagination` day du.

Nhanh 2: Doc file JSON
- Chon file: theo `date` -> file hom nay -> file moi nhat -> file legacy.
- Parse JSON (ho tro ca `[]` va `{ promotions: [] }`).
- Loc tuong tu, nhung `keyword` la so khop substring (`name/company/code`).
- Phan trang tren mang sau khi loc.

### 2.5 Nguon du lieu promotions va chuan hoa

#### Dich vu cong (`official`)
- Crawler: `server/src/modules/promotions/sources/official/dichvucong/crawler/*`.
- Lay danh sach theo page, goi them API detail tung record.
- Chi giu record con hieu luc (`DATE_TO > today`).
- Mapping ve schema chung:
  - `type: official`
  - `source: dichvucong`
  - `code` tu `SUBMISSION_CODE`
  - `time.start/end`, `company`, `location`, `meta.rawB.file/content`

#### Vietrade (`official`)
- Crawler: `server/src/modules/promotions/sources/official/vietrade/crawler/*`.
- Quet list bai viet -> vao chi tiet -> parse HTML.
- Trich xuat:
  - `company`, `timeStart/timeEnd`, `location`, `promotionMethod`, `productType`, `% giam`.
- Mapping:
  - `type: official`
  - `source: vietrade`
  - `sourceUrl` la link bai viet

#### Bloggiamgia (`unofficial`)
- Crawler: `server/src/modules/promotions/sources/unofficial/bloggiamgia/crawler/*`.
- Lay category `tin-khuyen-mai` qua API bloggiamgia.
- Parse noi dung blog de xac dinh nen tang, chu de, thoi gian.
- Mapping:
  - `type: unofficial`
  - `source: bloggiamgia`
  - `sourceUrl` la link blog

### 2.6 Luu tru va dedupe

File lien quan:
- `server/src/modules/promotions/shared/promotionsDataFiles.js`
- `server/src/modules/promotions/shared/promotionsMongoStore.js`
- `server/src/modules/promotions/shared/promotionsMongoSync.js`

File JSON theo ngay:
- Dang ten: `data/promotions/data_D-M-YYYY.json`.
- Tu dong cleanup, chi giu 5 file gan nhat.
- Co file lock de tranh ghi dong thoi.

Dedupe key (uu tien):
- `source + code`
- Neu khong co `code`: `source + sourceUrl/url`
- Neu khong co nua: `source + id` hoac `source + rowStt`

Mongo indexes quan trong:
- `promotions_key_unique` (unique sparse)
- `source + crawledAtDate`
- `crawledAtDate`
- `type + source`
- `time.start + time.end`
- text index: `name`, `company`, `code`

### 2.7 Cron va van hanh

File:
- `server/src/cron/index.js`
- `server/src/cron/jobs/promotions.job.js`
- `server/src/cron/jobs/promotionsMongo.job.js`

Co 2 nhom job:
- Job crawl nguon promotions (`dichvucong`, `vietrade`, `bloggiamgia`) theo lich.
- Job crawl tu API external vao Mongo (Mongoose) theo `PROMOTIONS_CRAWL_*`.

Sau moi lan crawl nguon promotions, he thong goi sync file -> Mongo.

Bien moi truong lien quan:
- `CRON_ENABLED`, `CRON_SCHEDULE`, `CRON_SERIAL`
- `DVC_CRON_ENABLED`, `DVC_CRON_SCHEDULE`
- `VTR_CRON_ENABLED`, `VTR_CRON_SCHEDULE`
- `BGG_CRON_ENABLED`, `BGG_CRON_SCHEDULE`
- `MONGO_PROMOTIONS_ENABLED`, `MONGO_URI`, `MONGO_DB`
- `PROMOTIONS_CRAWL_ENABLED`, `PROMOTIONS_CRAWL_API_URL`, `PROMOTIONS_CRAWL_SCHEDULE`, `PROMOTIONS_CRAWL_TIMEZONE`

### 2.8 Dinh dang xuat Excel (frontend)

Cot dang xuat:
- STT
- Ten chuong trinh
- Cong ty/Don vi
- Ngay bat dau
- Ngay ket thuc
- Dia diem
- Loai mat hang
- Nguon
- Tinh phap ly
- Thoi diem thu thap
- Link nguon

Luu y:
- Comment trong code ghi "export all data", nhung thuc te xuat mang `promotions` dang co tren client.
- Neu API dang phan trang server-side, file xuat hien tai chi la du lieu trang dang tai.

### 2.9 Khoang trong va luu y implementation

- `PromotionDetailModal` dang type `source` chi gom `dichvucong | vietrade | crawl`, chua co `bloggiamgia` trong ham badge nguon.
- Export cột `Nguon` dang map else -> "Thu thap tu dong", vi vay record `bloggiamgia` se bi hien thi gom chung.
- UI bo loc co option `source=crawl`, nhung pipeline crawl hien tai luu ro `source=bloggiamgia`; can thong nhat naming neu muon bao cao chinh xac theo nguon.
- Truong `legalStatus` co trong type frontend nhung chua duoc backend cap/khai thac trong luong hien tai.

---

## 3) Module Ma giam gia

### 3.1 Muc tieu nghiep vu

- Thu thap va hien thi voucher theo san e-commerce de tra cuu nhanh.
- Ho tro thao tac nhanh: loc theo platform/category, xem chi tiet, copy ma.

### 3.2 Luong frontend

File chinh: `src/app/pages/discount-codes.tsx`

Luong:
- Mac dinh `platform = shopee`.
- Khi doi platform:
  - Goi `GET /api/piggi/voucher-category` de lay danh muc.
  - Tu dong reset category ve `Toan San`.
- Khi doi platform/category:
  - Goi `GET /api/piggi/voucher` de lay danh sach voucher.
  - Gui sort `totalClick,DESC`.
- Frontend map du lieu API -> `DiscountCode`.
- Hien thi card voucher, popup chi tiet, copy ma, `Xem them` de tai trang tiep theo.

Tac vu nguoi dung:
- Chon platform
- Chon category
- Xem gia tri giam, don toi thieu, han su dung, mo ta
- Copy voucher code (co fallback `document.execCommand('copy')` neu Clipboard API bi chan)

### 3.3 API dang su dung

File backend: `server/src/routes/api.routes.js`

| Method | Endpoint | Muc dich |
|---|---|---|
| GET | `/api/piggi/voucher-category` | Proxy lay danh muc voucher tu Piggi |
| GET | `/api/piggi/voucher` | Proxy lay danh sach voucher tu Piggi |

Luu y ky thuat:
- Backend chi proxy query params sang `https://portal.piggi.vn/api/*`.
- Khong co buoc enrich phap ly cho voucher module o backend.

Query params frontend dang gui:
- `GET /api/piggi/voucher-category`:
  - `slugSupplier`
  - `isNotChildren=true`
  - `pageSize=9999`
- `GET /api/piggi/voucher`:
  - `slugSupplier`
  - `sort=totalClick,DESC`
  - `page`
  - `categoryIds` (neu co category duoc chon)

### 3.4 Mapping du lieu voucher (frontend)

Mapping tieu bieu:
- `voucherType + voucherAmount/voucherReward/maxDiscount` -> `discount` (phan tram hoac tien)
- `minSpend` -> `minOrder`
- `expiredAt` -> `expiryDate`
- `voucherCategory.title/slug` -> ten category + icon
- `voucherCode` -> `code`
- `detailLink/affLink` -> `link`

### 3.5 Phan trang va tai them

- Lan tai dau: goi page 1.
- Nhan `Xem them`: tang page, goi tiep API, append vao danh sach hien co.
- `hasMore` duoc tinh dua tren tong so record API tra ve.

Luu y:
- Module dang theo kieu infinite load (`Xem them`), khong dung pagination UI truyen thong.
- Trong popup chi tiet co canh bao "nguon khong chinh thong", can xac minh truoc khi su dung ma.

---

## 4) Ban do file quan trong

Frontend:
- `src/app/App.tsx`
- `src/app/pages/promotions-table.tsx`
- `src/app/components/promotion-filter.tsx`
- `src/app/components/promotion-table.tsx`
- `src/app/components/promotion-detail-modal.tsx`
- `src/app/pages/discount-codes.tsx`

Backend:
- `server/src/routes/api.routes.js`
- `server/src/config/index.js`
- `server/src/cron/index.js`
- `server/src/cron/jobs/promotions.job.js`
- `server/src/modules/promotions/shared/promotionsDataFiles.js`
- `server/src/modules/promotions/shared/promotionsMongoStore.js`
- `server/src/modules/promotions/mongo/promotionsMongoService.js`
- `server/src/models/promotion.model.js`

DB layer lien quan (de tranh nham lan):
- `server/src/db/mongo.js`: Mongo native driver (dung cho route `/api/promotions/data` nhanh Mongo va store shared).
- `server/src/db/mongoose.js`: Mongoose connection (dung cho job `PROMOTIONS_CRAWL_*` va model `Promotion`).
- `server/src/db/index.js`: PostgreSQL pool (hien tai chu yeu cho `db/ping` va phan khac neu co).

---

## 5) Tom tat nhanh cho stakeholder

- `Quan ly tin khuyen mai`: module giam sat thong tin promotions co phan loai phap ly, da co pipeline crawl + luu file + sync Mongo + API loc/phan trang.
- `Ma giam gia`: module tra cuu voucher theo san, du lieu thong qua API Piggi proxy, frontend map/hien thi va ho tro copy ma nhanh.
