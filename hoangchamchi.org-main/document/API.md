# API Endpoints

Toàn bộ API được proxy qua nginx. Tiền tố xác định service:

| Tiền tố | Service | Cổng nội bộ |
|---|---|---|
| `/e-api/v1/*` | express-db | 8000 |
| `/f-api/v1/*` | flask-dynamic-db | 5100 |
| `/d-api/v1/*` | dictionary-db | 5200 |

> Trong preview, gọi qua `http://localhost:5173/<tiền tố>/...`.
> Tất cả message lỗi/success trả về bằng **tiếng Việt**.

---

## 1. Express — `/e-api/v1/*`

### Từ vựng
| Method | Endpoint | Mô tả | Tham số |
|---|---|---|---|
| GET | `/e-api/v1/words` | Danh sách từ vựng | `p_tag` (JLPT_N5...), `s_tag` (part_1...) |
| GET | `/e-api/v1/tanos_words` | Từ vựng nguồn Tanos | — |

### Ngữ pháp
| Method | Endpoint | Mô tả | Tham số / Body |
|---|---|---|---|
| GET | `/e-api/v1/grammars` | Danh sách ngữ pháp | — |
| GET | `/e-api/v1/grammar-titles` | Tiêu đề ngữ pháp theo cấp độ | `p_tag` |
| POST | `/e-api/v1/grammar-details` | Chi tiết ngữ pháp Nhật | `{title}` |
| POST | `/e-api/v1/vietnamese/grammar-details` | Chi tiết ngữ pháp Việt | `{title}` |
| POST | `/e-api/v1/thai/grammar-details` | Chi tiết ngữ pháp Thái | `{title}` |
| POST | `/e-api/v1/mandarin/grammar-details` | Chi tiết ngữ pháp Trung | `{title}` |

### Kanji & Bài đọc
| Method | Endpoint | Mô tả | Tham số |
|---|---|---|---|
| GET | `/e-api/v1/kanji` | Danh sách Kanji | `p_tag`, `s_tag` |
| GET | `/e-api/v1/reading` | Bài đọc | `p_tag`, `s_tag` |

---

## 2. Flask — `/f-api/v1/*`

### Đăng nhập & Streak
| Method | Endpoint | Mô tả | Body / Param |
|---|---|---|---|
| POST | `/f-api/v1/notify-login` | Ghi nhận đăng nhập | `{userId}` |
| GET | `/f-api/v1/get-logins/<userId>` | Lịch sử đăng nhập | — |
| GET | `/f-api/v1/streak/<userId>` | Chuỗi ngày đăng nhập | — |

### Flashcards
| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/f-api/v1/flashcard/<userId>` | Lấy flashcards của người dùng |
| POST | `/f-api/v1/flashcard` | Lưu/cập nhật flashcard |
| POST | `/f-api/v1/clone-static-collection-words` | Sao chép collection từ vựng tĩnh |
| POST | `/f-api/v1/clone-static-collection-kanji` | Sao chép collection Kanji tĩnh |
| POST | `/f-api/v1/clone-static-collection-grammars` | Sao chép collection ngữ pháp tĩnh |
| GET/POST | `/f-api/v1/combine-flashcard-data-words` | Kết hợp dữ liệu flashcard từ vựng |
| GET/POST | `/f-api/v1/combine-flashcard-data-kanji` | Kết hợp dữ liệu flashcard Kanji |
| GET/POST | `/f-api/v1/combine-flashcard-data-grammars` | Kết hợp dữ liệu flashcard ngữ pháp |

### Từ vựng cá nhân & Sentence Mining
| Method | Endpoint | Mô tả |
|---|---|---|
| POST | `/f-api/v1/store-vocabulary-data` | Lưu dữ liệu từ vựng |
| GET | `/f-api/v1/user-vocabulary` | Từ vựng người dùng |
| POST | `/f-api/v1/enhance-vocabulary` | Nâng cấp từ vựng |
| POST | `/f-api/v1/text-parser-words` | Lưu từ vựng từ text-parser |
| DELETE | `/f-api/v1/text-parser-words/<record_id>` | Xóa bản ghi từ vựng |

### Thư viện cá nhân
| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/f-api/v1/japanese-texts/<userId>` | Văn bản tiếng Nhật của người dùng |
| POST | `/f-api/v1/japanese-texts` | Lưu văn bản |
| DELETE | `/f-api/v1/japanese-texts/<id>` | Xóa văn bản |
| GET | `/f-api/v1/custom-videos` | Video tùy chỉnh |
| POST | `/f-api/v1/custom-videos` | Lưu video |
| DELETE | `/f-api/v1/custom-videos/<id>` | Xóa video |

### Khác
| Method | Endpoint | Mô tả |
|---|---|---|
| POST | `/f-api/v1/submit_email` | Đăng ký email chờ |
| GET | `/f-api/v1/health` | Kiểm tra sức khỏe |

---

## 3. Dictionary — `/d-api/v1/*`

### Phân tích câu (MeCab + JMDict)
| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/d-api/v1/parse` | Phân tích câu (từ, furigana, nghĩa) |
| GET | `/d-api/v1/parse-json` | Phân tích câu dạng JSON |
| GET | `/d-api/v1/parse-simple` | Phân tích đơn giản |
| GET | `/d-api/v1/parse-split` | Phân tích tách câu |
| GET | `/d-api/v1/parse-tree` | Cây cú pháp |
| GET | `/d-api/v1/extract-kanji` | Trích xuất Kanji từ văn bản |
| GET | `/d-api/v1/get-transcript` | Lấy transcript video |

### Chuyển đổi
| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/d-api/v1/convert/furigana` | Thêm furigana |
| GET | `/d-api/v1/convert/hiragana` | Chuyển sang hiragana |
| GET | `/d-api/v1/convert/katakana` | Chuyển sang katakana |
| GET | `/d-api/v1/convert/romaji` | Chuyển sang romaji |
| GET | `/d-api/v1/convert/okurigana` | Okurigana |
| GET | `/d-api/v1/convert/all` | Tất cả dạng chuyển đổi |

### AI (OpenAI) — trả lời tiếng Việt
| Method | Endpoint | Mô tả |
|---|---|---|
| POST | `/d-api/v1/translate` | Dịch Nhật → Việt |
| POST | `/d-api/v1/translate-side-by-side` | Dịch song song (bảng) |
| POST | `/d-api/v1/deepl-translate` | Dịch qua DeepL |
| POST | `/d-api/v1/grammar` | Giải thích ngữ pháp |
| POST | `/d-api/v1/summary` | Tóm tắt văn bản |
| POST | `/d-api/v1/sentiment` | Phân tích cảm xúc |
| POST | `/d-api/v1/verb-conjugation` | Chia động từ |
| POST | `/d-api/v1/word-similarity` | Từ tương tự |
| POST | `/d-api/v1/synonyms` | Từ đồng nghĩa |
| POST | `/d-api/v1/antonyms` | Từ trái nghĩa |
| POST | `/d-api/v1/hypernyms` | Hypernyms |
| POST | `/d-api/v1/hyponyms` | Hyponyms |
| POST | `/d-api/v1/collocations` | Kết hợp từ |
| POST | `/d-api/v1/part-of-speech` | Từ loại |
| POST | `/d-api/v1/idioms` | Thành ngữ |
| POST | `/d-api/v1/pronounciation-similarity` | Từ phát âm tương tự |

### Kanji & Radicals
| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/d-api/v1/radical-info` | Thông tin bộ thủ |
| GET | `/d-api/v1/kanji/:char` | Chi tiết Kanji |

### Khác
| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/d-api/v1/metrics` | Số liệu sử dụng API |

---

## Ví dụ gọi API

```bash
# Lấy từ vựng JLPT N5
curl "http://localhost:5173/e-api/v1/words?p_tag=JLPT_N5&s_tag=part_1"

# Chi tiết ngữ pháp (tiếng Việt)
curl -X POST "http://localhost:5173/e-api/v1/grammar-details" \
  -H "Content-Type: application/json" \
  -d '{"title":"A が いちばん～ (A ga ichiban～)"}'

# Dịch thuật AI
curl -X POST "http://localhost:5173/d-api/v1/translate" \
  -H "Content-Type: application/json" \
  -d '{"text":"日本語を勉強します。"}'
```