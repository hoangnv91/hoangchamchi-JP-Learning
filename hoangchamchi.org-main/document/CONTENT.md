# Nội dung học tập

## 1. Bài giảng ngữ pháp markdown (807 bài)

- **Vị trí**: `frontend-next/content/markdown_grammar_japanese/`
- **Số lượng**: 807 file `.md`
- **Ngôn ngữ**: tiếng Việt (đã dịch toàn bộ từ tiếng Anh)
- **Hiển thị**: trang `/japanese/grammarpoint/[slug]` đọc file markdown tương ứng
  (qua `MarkdownContent.tsx`)

### Cấu trúc chuẩn mỗi bài
```markdown
Processing keyword: A あるいは B (A aruiwa B)
# Điểm ngữ pháp tiếng Nhật: A あるいは B (A aruiwa B)

## 1. Giới thiệu
## 2. Giải thích ngữ pháp cốt lõi
   ### Ý nghĩa / Cấu trúc / Sơ đồ cấu tạo / Ghi chú cách dùng / Minh họa
## 3. Phân tích so sánh
## 4. Ví dụ trong ngữ cảnh
## 5. Ghi chú văn hóa
## 6. Lỗi thường gặp và mẹo
## 7. Tóm tắt và ôn tập
```

### Quy tắc dịch đã áp dụng
- Dịch toàn bộ phần giải thích tiếng Anh → tiếng Việt
- **Giữ nguyên**: câu tiếng Nhật (kanji/kana), romaji in nghiêng, công thức
  (code blocks), dòng `Processing keyword`, footer `© Hoangchamchi.org`
- Giữ nguyên thuật ngữ chuyên môn khi cần (trợ từ, thể động từ...)

### Đặt tên file
`<Tên điểm ngữ pháp>_(<romaji>).md` — ví dụ `A_あるいは_B_(A_aruiwa_B).md`,
`Verb_ながら_(〜nagara).md`

---

## 2. Dữ liệu ngữ pháp JSON (828 mục)

- **Vị trí**: `backend/express/json_data/grammar_ja_JLPT_*.json`
- **Số lượng**: 828 mục (N1: 245, N2: 191, N3: 132, N4: 124, N5: 136)
- **Ngôn ngữ**: tiếng Việt (đã dịch toàn bộ)
- **Hiển thị**: qua API `POST /e-api/v1/grammar-details` (seed vào MongoDB)

### Cấu trúc mỗi mục
```json
{
  "title": "A が いちばん～ (A ga ichiban～)",
  "short_explanation": "Diễn tả cấp độ so sánh nhất...",
  "long_explanation": "Điểm ngữ pháp A が いちばん～ được dùng để...",
  "formation": "Danh từ + が + いちばん + Tính từ/Động từ",
  "examples": [{ "jp": "...", "romaji": "...", "en": "..." }],
  "p_tag": "JLPT_N5",
  "s_tag": "25"
}
```

### Các file JSON khác
| File | Nội dung |
|---|---|
| `grammar_vn_all_corrected_0001.json` | Ngữ pháp tiếng Việt |
| `grammar_cn_HSK_1..6_0001.json` | Ngữ pháp tiếng Trung HSK |
| `grammar_th_CU-TFL_1..5_0001.json` | Ngữ pháp tiếng Thái |
| `kana.json` | Bảng chữ cái kana |
| `backup_words_*.json` | Từ vựng backup |

---

## 3. Từ vựng & Kanji

- Từ vựng JLPT theo cấp độ (N5–N1) — collection `words`
- 600 động từ thiết yếu — `essential_verbs`
- Kanji kèm bộ thủ, âm On/Kun, mẹo ghi nhớ — collection `kanji`
- Bộ thủ (radicals) — từ KRADFILE + Wikipedia

---

## 4. Ngôn ngữ giao diện

- Toàn bộ UI tiếng Việt (nút, nhãn, placeholder, thông báo lỗi)
- AI trả lời tiếng Việt (dịch, giải thích ngữ pháp, tóm tắt)
- Thuật ngữ giữ nguyên: Kanji, JLPT, On'yomi/Kun'yomi, furigana, romaji
- **Không còn nội dung tiếng Hàn** (đã xóa toàn bộ)