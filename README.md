# WebToolKit

WebToolKit gồm:
- **Frontend**: React + Vite (mã nguồn nằm trong `src/` — giữ nguyên).
- **Backend**: Node.js + Express (API + Cron + Crawlers) nằm trong `server/src/`.
- **Data**: lưu theo ngày tại `data/promotions/data_D-M-YYYY.json` (giữ tối đa **5** file gần nhất).

## Cấu trúc thư mục

```text
WebToolKit/
├─ src/                         # Frontend (GIỮ NGUYÊN)
├─ index.html                   # Vite entry
├─ vite.config.ts               # Vite config (proxy /api -> :4000)
├─ dist/                        # Output sau khi build
├─ data/
│  └─ promotions/
│     ├─ data_9-2-2026.json      # Dữ liệu promotions theo ngày (server đọc/ghi)
│     └─ data.json              # (legacy) file cũ, chỉ dùng để seed lần đầu nếu cần
├─ server/
│  └─ src/
│     ├─ index.js               # Entry: start server
│     ├─ app.js                 # Init express + middleware + routes
│     ├─ config/
│     │  ├─ index.js            # Load env + export config
│     │  └─ logger.js           # Logger chung (nếu cần)
│     ├─ db/
│     │  └─ index.js            # DB client / connection
│     ├─ routes/
│     │  ├─ index.js            # Mount routes
│     │  └─ api.routes.js       # API routes (/api/*)
│     ├─ middlewares/
│     │  └─ error.middleware.js # Handle lỗi tập trung
│     ├─ services/
│     │  └─ http/
│     │     ├─ httpClient.js
│     │     └─ index.js
│     ├─ cron/
│     │  ├─ index.js            # Register cron jobs
│     │  └─ jobs/
│     │     ├─ promotions.job.js
│     │     └─ cleanup.job.js
│     ├─ modules/
│     │  └─ promotions/
│     │     ├─ index.js
│     │     ├─ shared/
│     │     │  ├─ fileLock.js
│     │     │  └─ recordFilters.js
│     │     └─ sources/
│     │        ├─ official/
│     │        └─ unofficial/
│     └─ utils/
│        ├─ paths.js            # Paths helper (repo root, data, dist…)
│        └─ sleep.js
├─ .env                         # Biến môi trường (server load từ repo root)
├─ package.json
└─ package-lock.json
```

## Yêu cầu

- Node.js **>= 18.11** (để dùng `node --watch` trong `npm run dev:server`).
- NPM (repo có `package-lock.json`).

## Cài đặt

```bash
npm install
```

## Chạy local (dev)

### 1) Chạy frontend (Vite)

```bash
npm run dev
```

Mặc định Vite chạy ở `http://localhost:5173` và sẽ proxy `"/api"` sang `http://localhost:4000`.

### 2) Chạy backend (Express)

```bash
npm run dev:server
```

Backend chạy ở `http://localhost:4000`:
- `GET /health` → `"ok"`
- `GET /api/health` → JSON

### 3) Chạy cả 2 cùng lúc

```bash
npm run dev:all
```

## Build & chạy như production

```bash
npm run build
npm run start:server
```

Khi có `dist/index.html`, backend sẽ tự serve frontend build (SPA) từ `dist/` (đồng thời vẫn giữ `/api/*`).

## Biến môi trường (`.env`)

Server đọc `.env` tại **repo root**.

Các biến chính:
- `PORT` (mặc định `4000`)
- `NODE_ENV` (mặc định `development`)
- `DATABASE_URL` (tuỳ chọn; chỉ cần nếu dùng `GET /api/db/ping`)
- MongoDB (tuỳ chọn):
  - `MONGO_URI` (mặc định `mongodb://localhost:27017`)
  - `MONGO_DB` (mặc định `webtoolkit`)
  - `MONGO_PROMOTIONS_ENABLED` (`true/false`, mặc định `false` nếu không set)
- `API_ALLOWLIST` (mặc định `api.github.com`) — allowlist host cho `GET /api/external?url=...`
- Cron:
  - `CRON_ENABLED` (mặc định `true`, set `false` để tắt)
  - `CRON_SCHEDULE` (mặc định `*/5 * * * *`)
  - `CRON_DB_PING` (mặc định `false`)
  - `CRON_SERIAL` (mặc định `false`)
  - `DVC_CRON_ENABLED`, `DVC_CRON_SCHEDULE`
  - `VTR_CRON_ENABLED`, `VTR_CRON_SCHEDULE`
  - `BGG_CRON_ENABLED`, `BGG_CRON_SCHEDULE`
  - `PROMOTIONS_CLEANUP_ENABLED`, `PROMOTIONS_CLEANUP_SCHEDULE`, `PROMOTIONS_CLEANUP_TIMEZONE`

Crawler dichvucong:
- `DVC_RECORDS_PER_PAGE` (mặc định `500`)
- `DVC_MAX_PAGES` (mặc định `0` = không giới hạn)

## MongoDB promotions (tuỳ chọn)

Khi bật `MONGO_PROMOTIONS_ENABLED=true`, bạn có thể upsert promotions vào MongoDB qua API:
- `GET /api/mongo/ping` (kiểm tra kết nối)
- `POST /api/promotions/mongo/upsert` (body: 1 record hoặc mảng records)
- `POST /api/promotions/mongo/sync?date=9-2-2026` (import từ file `data/promotions/data_*.json` theo ngày; nếu không truyền `date` sẽ dùng file hôm nay/latest)
