# Cơ sở dữ liệu (MongoDB)

Ứng dụng dùng **3 MongoDB riêng biệt**, mỗi backend một DB.

---

## 1. express-db — database `zenRelationshipsAutomated`

Dữ liệu học tập tĩnh, seed từ `backend/express/json_data/`.

### Collections
| Collection | Model | Nội dung | Nguồn seed |
|---|---|---|---|
| `grammars` | grammar.js | Ngữ pháp tiếng Nhật JLPT N1–N5 | `grammar_ja_JLPT_*.json` |
| `vngrammars` | grammar_vn.js | Ngữ pháp tiếng Việt | `grammar_vn_all_corrected_0001.json` |
| `cngrammars` | grammar_cn.js | Ngữ pháp tiếng Trung HSK | `grammar_cn_HSK_*.json` |
| `thgrammars` | grammar_th.js | Ngữ pháp tiếng Thái CU-TFL | `grammar_th_CU-TFL_*.json` |
| `words` | word.js | Từ vựng JLPT | seed script |
| `tanoswords` | wordTanos.js | Từ vựng Tanos | `seed_tanos_vocab_to_db.js` |
| `kanji` | kanji.js | Kanji | `seed_kanji_to_db.js` |
| `reading` | reading.js | Bài đọc | `seed_reading_to_db.js` |
| `sentences` | sentence.js | Câu ví dụ | seed script |

### Cấu trúc mục ngữ pháp (`grammars`)
```json
{
  "title": "A が いちばん～ (A ga ichiban～)",
  "short_explanation": "Diễn tả cấp độ so sánh nhất; 'nhất', 'hơn cả', 'ít nhất'.",
  "long_explanation": "Điểm ngữ pháp A が いちばん～ được dùng để...",
  "formation": "Danh từ + が + いちばん + Tính từ/Động từ",
  "examples": [
    {
      "jp": "この中で、寿司が一番好きです。",
      "romaji": "Kono naka de, sushi ga ichiban suki desu.",
      "en": "Trong số này, tôi thích sushi nhất."
    }
  ],
  "p_tag": "JLPT_N5",
  "s_tag": "25"
}
```

> **Lưu ý**: toàn bộ nội dung giải thích đã được dịch sang **tiếng Việt**.

---

## 2. flask-dynamic-db — database `flaskFlashcardDB` (+ user data)

Dữ liệu người dùng động.

### Collections (chính)
| Collection | Module | Nội dung |
|---|---|---|
| `flashcards` | flashcards.py | Trạng thái thẻ ghi nhớ của người dùng |
| `user_vocabulary` | vocabulary_mining.py | Từ vựng cá nhân |
| `sentence_mining` | sentence_mining.py | Câu khai thác (sentence mining) |
| `japanese_texts` | library.py | Văn bản tiếng Nhật cá nhân |
| `custom_videos` | library.py | Video YouTube cá nhân |
| `login_streaks` | login_streak.py | Lịch sử đăng nhập hằng ngày |
| `email_waitlist` | email_waitlist.py | Danh sách email chờ |

---

## 3. dictionary-db — database từ điển

Dữ liệu từ điển + Kanji + radicals.

### Collections / Dữ liệu
| Collection / File | Nội dung |
|---|---|
| JMDict / Jitendex | Từ điển Nhật–Anh (seed qua `seed_jmdict_data.js`, `seed_jitendex_data.js`) |
| `kanji/` | Dữ liệu Kanji |
| `radicals/`, `radicals_wikipedia/` | Bộ thủ |
| `kradfile_decoded_euc_jp.json` | Bộ thủ KRADFILE |
| `callCount.json` | Đếm số lần gọi API AI (giới hạn) |

---

## Quy trình seed (express-db)

`seed_db_wrapper.sh` chạy tuần tự:
1. `word_relationships_GPT.js` — quan hệ từ vựng
2. `seed_tanos_vocab_to_db.js` — từ vựng Tanos
3. `seed_grammar_to_db.js` — ngữ pháp (đọc `json_data/grammar_ja_*.json`)
4. `seed_kanji_to_db.js` — Kanji
5. `seed_reading_to_db.js` — bài đọc
6. `seed_grammar_to_db_other_langs.js` — ngữ pháp vn/cn/th
7. `my_server.js` — khởi động server

> Khi cập nhật dữ liệu JSON, cần **rebuild image + re-seed** để MongoDB nhận dữ liệu mới.