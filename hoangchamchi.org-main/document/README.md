# Tài liệu ứng dụng Hoangchamchi.org (hoangluoibieng Nihongo)

> Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, không quảng cáo — dành cho người Việt.

Thư mục này chứa toàn bộ tài liệu kỹ thuật của ứng dụng. Mọi thông tin được
đối chiếu trực tiếp với mã nguồn trong repository.

## Mục lục tài liệu

| Tài liệu | Nội dung |
|---|---|
| [README.md](./README.md) | Tổng quan ứng dụng, tính năng, cách chạy nhanh |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Kiến trúc hệ thống, sơ đồ thành phần, luồng dữ liệu |
| [FRONTEND.md](./FRONTEND.md) | Cấu trúc frontend (Next.js), các trang, component chính |
| [BACKEND.md](./BACKEND.md) | Ba backend (Express / Flask / Dictionary), cơ sở dữ liệu |
| [API.md](./API.md) | Danh sách đầy đủ API endpoints theo từng service |
| [DATABASE.md](./DATABASE.md) | Các collection MongoDB, model, dữ liệu seed |
| [CONTENT.md](./CONTENT.md) | Nội dung học tập: 807 bài ngữ pháp markdown, 828 mục ngữ pháp JSON |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Cách chạy local, Docker, preview (VibeFlow) |

## Tóm tắt nhanh

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS + TypeScript
- **Backend 1 — Express** (`/e-api/v1`): từ vựng, ngữ pháp, Kanji, bài đọc (MongoDB)
- **Backend 2 — Flask** (`/f-api/v1`): flashcards, thư viện cá nhân, login streak, sentence mining (MongoDB)
- **Backend 3 — Dictionary** (`/d-api/v1`): từ điển, dịch thuật AI, phân tích câu, Kanji (MongoDB)
- **Proxy**: nginx (cổng 5173 trong preview, 8888 khi chạy docker-compose gốc)
- **Nội dung**: 807 file markdown ngữ pháp tiếng Nhật (đã dịch tiếng Việt), 828 mục ngữ pháp JLPT N1–N5 (đã dịch tiếng Việt)

## Tính năng chính

1. **Học ngữ pháp JLPT N5–N1** — 807 bài giảng markdown đầy đủ (giới thiệu, cấu trúc,
   ví dụ, so sánh, văn hóa, lỗi thường gặp, ôn tập) + 828 mục ngữ pháp chi tiết từ API.
2. **Từ vựng & Kanji** — danh sách từ theo cấp độ JLPT, Kanji kèm bộ thủ, âm On/Kun,
   mẹo ghi nhớ, flashcards SRS.
3. **Phân tích văn bản** — dán văn bản tiếng Nhật, xem furigana, nghĩa từng từ,
   cây phân tích cú pháp, dịch thuật AI.
4. **Học qua YouTube** — dán URL video có phụ đề tiếng Nhật, xem furigana + bản dịch.
5. **Flashcards thông minh (SRS)** — lặp lại ngắt quãng cho từ vựng, ngữ pháp, Kanji.
6. **Sentence Mining** — lưu câu + từ vựng cá nhân từ văn bản/video.
7. **Công cụ hỗ trợ** — dịch thuật, sơ đồ ngữ pháp, quan hệ từ vựng, từ vựng qua bài hát,
   sơ đồ từ vựng, bản đồ database.

## Liên hệ

- Website: https://hoangchamchi.org
- Giấy phép: xem [LICENSE](../LICENSE)