# Backend — 3 Services

Ứng dụng có **3 backend độc lập**, mỗi backend kèm MongoDB riêng và được proxy
qua nginx theo tiền tố URL.

---

## 1. express-db (Express + MongoDB) — `/e-api/v1`

- **Vị trí**: `backend/express/`
- **Cổng**: 8000
- **Entry point**: `my_server.js`
- **Package**: `express`, `mongoose`, `cors`

### Vai trò
Phục vụ **dữ liệu học tập tĩnh**: từ vựng, ngữ pháp, Kanji, bài đọc.

### Models (`models/`)
| Model | Collection | Mô tả |
|---|---|---|
| `word.js` | words | Từ vựng JLPT |
| `wordTanos.js` | tanoswords | Từ vựng (nguồn Tanos) |
| `grammar.js` | grammars | Ngữ pháp tiếng Nhật |
| `grammar_vn.js` | vngrammars | Ngữ pháp tiếng Việt |
| `grammar_cn.js` | cngrammars | Ngữ pháp tiếng Trung |
| `grammar_th.js` | thgrammars | Ngữ pháp tiếng Thái |
| `kanji.js` | kanji | Kanji |
| `reading.js` | reading | Bài đọc |
| `sentence.js` | sentences | Câu ví dụ |

### Seeding
- `seeding_scripts/` chứa các script seed dữ liệu từ `json_data/` vào MongoDB.
- `seed_db_wrapper.sh` chạy tuần tự các script seed rồi khởi động server.
- `json_data/` chứa dữ liệu JSON: `grammar_ja_JLPT_N1..N5`, `grammar_vn_*`,
  `grammar_cn_HSK_*`, `grammar_th_CU-TFL_*`, `kana.json`, từ vựng backup...

### API chính
| Endpoint | Mô tả |
|---|---|
| `GET /e-api/v1/words?p_tag=&s_tag=` | Danh sách từ vựng theo JLPT |
| `GET /e-api/v1/tanos_words` | Từ vựng Tanos |
| `GET /e-api/v1/grammars` | Danh sách ngữ pháp |
| `GET /e-api/v1/grammar-titles?p_tag=` | Tiêu đề ngữ pháp theo cấp độ |
| `POST /e-api/v1/grammar-details` | Chi tiết ngữ pháp (body: `{title}`) |
| `POST /e-api/v1/vietnamese/grammar-details` | Chi tiết ngữ pháp tiếng Việt |
| `POST /e-api/v1/thai/grammar-details` | Chi tiết ngữ pháp tiếng Thái |
| `POST /e-api/v1/mandarin/grammar-details` | Chi tiết ngữ pháp tiếng Trung |
| `GET /e-api/v1/kanji?p_tag=&s_tag=` | Kanji theo cấp độ |
| `GET /e-api/v1/reading?p_tag=&s_tag=` | Bài đọc |

---

## 2. flask-dynamic-db (Flask + MongoDB) — `/f-api/v1`

- **Vị trí**: `backend/flask/`
- **Cổng**: 5100
- **Entry point**: `server.py`
- **Package**: `flask`, `flask_cors`, `flask_pymongo`

### Vai trò
Phục vụ **dữ liệu người dùng động**: flashcards, thư viện cá nhân, login streak,
sentence mining, email waitlist.

### Modules (`modules/`)
| Module | Vai trò |
|---|---|
| `flashcards.py` | Flashcard CRUD, clone collection, combine data (grammar/kanji/words) |
| `library.py` | Thư viện văn bản + video cá nhân |
| `login_streak.py` | Ghi nhận & thống kê đăng nhập hằng ngày |
| `sentence_mining.py` | Lưu câu + từ vựng khai thác (sentence mining) |
| `vocabulary_mining.py` | Từ vựng cá nhân của người dùng |
| `email_waitlist.py` | Đăng ký email chờ |

### API chính
| Endpoint | Mô tả |
|---|---|
| `POST /f-api/v1/notify-login` | Ghi nhận đăng nhập |
| `GET /f-api/v1/flashcard` | Lấy flashcards |
| `POST /f-api/v1/store-vocabulary-data` | Lưu từ vựng |
| `GET /f-api/v1/user-vocabulary` | Từ vựng người dùng |
| `GET /f-api/v1/japanese-texts` | Văn bản tiếng Nhật của người dùng |
| `GET /f-api/v1/custom-videos` | Video tùy chỉnh |
| `POST /f-api/v1/enhance-vocabulary` | Nâng cấp từ vựng |
| `POST /f-api/v1/text-parser-words` | Từ vựng từ text-parser |
| `POST /f-api/v1/clone-static-collection-*` | Sao chép collection tĩnh |
| `POST /f-api/v1/combine-flashcard-data-*` | Kết hợp dữ liệu flashcard |

---

## 3. dictionary-db (Node/Express + MongoDB) — `/d-api/v1`

- **Vị trí**: `backend/dictionary/`
- **Cổng**: 5200
- **Entry point**: `main_server.js`
- **Package**: `express`, `mongoose`, `openai`, `axios`, `crypto`, `fs`

### Vai trò
Từ điển (JMDict/Jitendex), **AI** (OpenAI): dịch thuật, giải thích ngữ pháp,
tóm tắt, phân tích cảm xúc, cây cú pháp, quan hệ từ vựng; Kanji, radicals.

### AI Prompts (đã chuyển sang tiếng Việt)
| Prompt | Mô tả |
|---|---|
| `systemPrompt` | Giải thích ngữ pháp — trả lời **tiếng Việt** |
| `translationPrompt` | Dịch Nhật → **Việt** |
| `translationSbSPrompt` | Dịch song song (side-by-side) Nhật → **Việt** |
| `summaryPrompt` | Tóm tắt — **tiếng Việt** |
| `sentimentPrompt` | Phân tích cảm xúc — **tiếng Việt** |
| `parseTreePrompt` | Cây cú pháp JSON (mô tả **tiếng Việt**) |
| `payload_structure` | Cấu trúc JSON từ vựng (usage **tiếng Việt**) |
| `verbConjugationPrompt`, `wordSimilarityPrompt`, `synonymsPrompt`, `antonymsPrompt`, `hypernymsPrompt`, `hyponymsPrompt`, `collocationsPrompt`, `partOfSpeechPrompt`, `idiomsPrompt`, `pronSimPrompt` | Các prompt từ vựng/kanji |

### API chính
| Endpoint | Mô tả |
|---|---|
| `POST /d-api/v1/translate` | Dịch thuật AI |
| `POST /d-api/v1/grammar` | Giải thích ngữ pháp AI |
| `POST /d-api/v1/summary` | Tóm tắt AI |
| `POST /d-api/v1/sentiment` | Phân tích cảm xúc AI |
| `GET /d-api/v1/parse` | Phân tích câu (MeCab + JMDict) |
| `GET /d-api/v1/kanji/:char` | Chi tiết Kanji |
| `GET /d-api/v1/word/:word` | Tra từ |
| `GET /d-api/v1/metrics` | Số liệu sử dụng |

### Server modules
- `server_modules/mecab-logic.js`: logic MeCab (phân tích câu tiếng Nhật)
- `kanji/`, `radicals/`, `radicals_wikipedia/`: dữ liệu Kanji & bộ thủ
- `seed_jitendex_data.js`, `seed_jmdict_data.js`: seed từ điển
- `kradfile_decoded_euc_jp.json`: dữ liệu bộ thủ KRADFILE

---

## Ghi chú

- Tất cả message lỗi/success trả về từ API đã chuyển sang **tiếng Việt**.
- `deprecated/` chứa mã cũ không dùng (server cũ, seed cũ).
- Chi tiết từng endpoint xem [API.md](./API.md).