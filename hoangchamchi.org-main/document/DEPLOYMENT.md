# Triển khai & Chạy ứng dụng

## Yêu cầu

- Docker / Podman + Docker Compose (hoặc podman-compose)
- Node.js (cho build frontend local)
- MongoDB (chạy bên trong container, không cần cài riêng)

---

## 1. Chạy với docker-compose gốc

```bash
# Từ thư mục gốc của repo
docker-compose up --build
# Truy cập: http://localhost:8888
```

> Lưu ý: cần file `config.json` (bản sao của `config_dummy.json`) chứa
> `DEEPL_API_KEY`, `OPENAI_API_KEY`, `OPENAI_ORG_ID` cho các tính năng AI.

### Services (docker-compose.yml)
| Service | Image | Cổng |
|---|---|---|
| frontend-next | coil/hoangchamchi.org:frontend-next | 127.0.0.1:3000 |
| express-db | coil/hoangchamchi.org:express-db | 127.0.0.1:8000 |
| flask-dynamic-db | coil/hoangchamchi.org:flask-dynamic-db | 127.0.0.1:5100 |
| dictionary-db | coil/hoangchamchi.org:dictionary-db | 127.0.0.1:5200 |

---

## 2. Chạy preview trong VibeFlow

Preview dùng compose file riêng: `podman-compose.preview.vibeflow.yaml`
và các `Dockerfile.preview.vibeflow` tương ứng mỗi service.

### Khởi động
```bash
podman-compose -f podman-compose.preview.vibeflow.yaml up --build -d
```

### Cổng publish
- nginx: **5173** → toàn bộ ứng dụng
- Các service nội bộ: 3000, 8000, 5100, 5200

### Lưu ý quan trọng (kinh nghiệm vận hành)
1. **`up --build` không recreate container cũ** — sau khi build image mới cần:
   ```bash
   podman-compose -f podman-compose.preview.vibeflow.yaml build frontend-next
   podman-compose -f podman-compose.preview.vibeflow.yaml up -d --force-recreate frontend-next
   ```
2. **Cập nhật dữ liệu JSON** (vd ngữ pháp) cần: rebuild `express-db` +
   force-recreate + chạy lại seed bên trong container:
   ```bash
   podman exec workspace_express-db_1 sh -c "cd /app && node ./seeding_scripts/seed_grammar_to_db.js"
   ```
3. **IPv6 issue**: mongoose có thể resolve `localhost` → `::1` gây
   `ECONNREFUSED ::1:27017`. Đã fix bằng `NODE_OPTIONS=--dns-result-order=ipv4first`
   trong compose.
4. **TLS trong build container**: các Dockerfile preview đã nới lỏng TLS
   (`NPM_CONFIG_STRICT_SSL=false`, `NODE_TLS_REJECT_UNAUTHORIZED=0`,
   `PIP_TRUSTED_HOST`, apt `Verify-Peer false`) do môi trường sandbox.

### Kiểm tra
```bash
curl http://localhost:5173/                                   # frontend
curl "http://localhost:5173/e-api/v1/words?p_tag=JLPT_N5"     # express
curl http://localhost:5173/d-api/v1/metrics                   # dictionary
```

### Dừng preview
```bash
podman-compose -f podman-compose.preview.vibeflow.yaml down
```

---

## 3. Chạy frontend local (development)

```bash
cd frontend-next
npm install
npm run dev        # http://localhost:3000
```

> Ở chế độ dev, frontend cần proxy tới backend (xem `next.config.js`).

---

## 4. Cấu hình AI

File `config.json` (dựa trên `config_dummy.json`):
```json
{
  "DEEPL_API_KEY": "your-key",
  "OPENAI_API_KEY": "your-key",
  "OPENAI_ORG_ID": "your-org"
}
```

Các tính năng AI: dịch thuật, giải thích ngữ pháp, tóm tắt, phân tích cảm xúc,
quan hệ từ vựng — đều gọi OpenAI và **trả lời tiếng Việt**.

---

## 5. CI/CD

- Thư mục `CICD/` chứa cấu hình CI/CD (xem chi tiết trong thư mục).

---

## 6. Checklist trước khi deploy

- [ ] `config.json` có đủ API keys
- [ ] Build thành công cả 4 services
- [ ] Seed dữ liệu xong (grammars, words, kanji, reading)
- [ ] Kiểm tra 3 tiền tố API trả 200
- [ ] Nội dung tiếng Việt hiển thị đúng
- [ ] Không còn tiếng Hàn trong giao diện