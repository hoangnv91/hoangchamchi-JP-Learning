# Kiến trúc hệ thống

## Tổng quan

Hoangchamchi.org là ứng dụng web học tiếng Nhật gồm **1 frontend** (Next.js) và
**3 backend** độc lập (Express, Flask, Dictionary), mỗi backend kèm một MongoDB
riêng. Một proxy nginx đứng trước để định tuyến theo tiền tố URL.

```
                         ┌──────────────────────────────┐
                         │        nginx (proxy)         │
                         │  :5173 (preview) / :8888     │
                         └──────┬───────┬───────┬───────┘
                                │       │       │
              / (frontend)      │       │       │
        ┌───────────────────────▼┐  ┌───▼────┐  ┌▼──────────────────┐
        │  frontend-next         │  │        │  │                   │
        │  Next.js 14 :3000      │  │        │  │                   │
        └───────────┬────────────┘  │        │  │                   │
                    │               │        │  │                   │
   /e-api/v1 ───────┼──────────────►│        │  │                   │
                    │               │        │  │                   │
   /f-api/v1 ───────┼────────────────────────►│                   │
                    │               │        │  │                   │
   /d-api/v1 ───────┼──────────────────────────────────────────────►│
                    │               │        │  │                   │
                    ▼               ▼        ▼  ▼                   ▼
        ┌─────────────────┐  ┌──────────┐ ┌──────────┐  ┌──────────────────┐
        │  express-db     │  │ flask-   │ │ dictionary│  │                  │
        │  Express + Mongo│  │ dynamic- │ │ -db       │  │                  │
        │  :8000          │  │ db       │ │ Node+Mongo│  │                  │
        │                 │  │ Flask+   │ │ :5200     │  │                  │
        │                 │  │ Mongo    │ │           │  │                  │
        │                 │  │ :5100    │ │           │  │                  │
        └─────────────────┘  └──────────┘ └──────────┘  └──────────────────┘
```

## Các thành phần

### 1. frontend-next (Next.js 14)
- **Vị trí**: `frontend-next/`
- **Cổng**: 3000 (nginx proxy ra ngoài)
- **Framework**: Next.js App Router, React 18, TypeScript, Tailwind CSS
- **Vai trò**: toàn bộ giao diện người dùng; gọi API qua đường dẫn tương đối
  `/e-api/v1`, `/f-api/v1`, `/d-api/v1` (nginx chuyển tiếp).
- **Layout**: `AppShell` bọc toàn bộ — trang chủ `/` và trang khóa học `/content`
  tự render navbar/footer riêng; các trang còn lại dùng Sidebar + Nav + DashboardNav.

### 2. express-db (Express + MongoDB)
- **Vị trí**: `backend/express/`
- **Cổng**: 8000
- **Vai trò**: dữ liệu tĩnh học tập — từ vựng, ngữ pháp, Kanji, bài đọc.
- **Entry point**: `my_server.js`
- **DB**: MongoDB (collection `grammars`, `words`, `kanji`, `reading`, ...)

### 3. flask-dynamic-db (Flask + MongoDB)
- **Vị trí**: `backend/flask/`
- **Cổng**: 5100
- **Vai trò**: dữ liệu người dùng động — flashcards, thư viện cá nhân, login streak,
  sentence mining, email waitlist.
- **Entry point**: `server.py` (import các module trong `modules/`)
- **DB**: MongoDB (flashcardDB, user data)

### 4. dictionary-db (Node/Express + MongoDB)
- **Vị trí**: `backend/dictionary/`
- **Cổng**: 5200
- **Vai trò**: từ điển JMDict/Jitendex, dịch thuật & phân tích bằng AI (OpenAI),
  Kanji, radicals.
- **Entry point**: `main_server.js`
- **DB**: MongoDB (dictionary data)

### 5. nginx
- **Vị trí**: `nginx/` + `nginx.conf`
- **Vai trò**: reverse proxy, định tuyến theo tiền tố, phục vụ frontend build.

## Luồng dữ liệu điển hình

### Xem chi tiết ngữ pháp
```
Browser → GET /japanese/grammarpoint/[slug]
        → frontend-next render markdown từ content/markdown_grammar_japanese/
        → POST /e-api/v1/grammar-details (title)
        → express-db → MongoDB grammars → JSON tiếng Việt → Browser
```

### Phân tích văn bản (text-parser)
```
Browser → POST /d-api/v1/parse (text)
        → dictionary-db → MeCab + JMDict → JSON (từ, furigana, nghĩa)
        → Browser hiển thị WordDetailsSidebar / ParseTree
```

### Dịch thuật AI
```
Browser → POST /d-api/v1/translate (text)
        → dictionary-db → OpenAI API (prompt tiếng Việt) → bản dịch
        → Browser
```

### Flashcards người dùng
```
Browser → GET/POST /f-api/v1/flashcard
        → flask-dynamic-db → MongoDB flashcardDB → trạng thái thẻ
        → Browser
```

## Quy ước tiền tố API

| Tiền tố | Service | Ví dụ |
|---|---|---|
| `/e-api/v1/*` | express-db | `/e-api/v1/words?p_tag=JLPT_N5` |
| `/f-api/v1/*` | flask-dynamic-db | `/f-api/v1/flashcard` |
| `/d-api/v1/*` | dictionary-db | `/d-api/v1/translate` |

## Biến môi trường

- `REACT_APP_HOST_IP`: host của express-db (dùng trong frontend)
- `GA_MEASUREMENT_ID`: Google Analytics (tuỳ chọn)
- `DEEPL_API_KEY`, `OPENAI_API_KEY`, `OPENAI_ORG_ID`: cấu hình AI (file `config.json`)

## Ghi chú triển khai preview (VibeFlow)

- Compose file riêng: `podman-compose.preview.vibeflow.yaml`
- Các `Dockerfile.preview.vibeflow` tương ứng từng service
- Cổng publish: 5173 (nginx)
- Chi tiết xem [DEPLOYMENT.md](./DEPLOYMENT.md)