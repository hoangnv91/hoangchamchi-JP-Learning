# Frontend — Next.js 14

## Tổng quan

- **Framework**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS (cấu hình trong `tailwind.config.js`), CSS variables trong `globals.css`
- **Thư mục gốc**: `frontend-next/`

## Cấu trúc thư mục

```
frontend-next/
├── src/
│   ├── app/                  # Các trang (App Router)
│   │   ├── page.tsx          # Trang chủ (landing, self-contained)
│   │   ├── layout.tsx        # Layout gốc + meta tags
│   │   ├── globals.css       # Tailwind + custom styles
│   │   ├── content/          # Trang khóa học コース (self-contained)
│   │   ├── japanese/         # Các trang học tiếng Nhật
│   │   │   ├── grammarlist/  # Danh sách ngữ pháp JLPT
│   │   │   ├── grammarpoint/ # Chi tiết ngữ pháp (markdown)
│   │   │   ├── grammar_selection/  # Chọn ngữ pháp theo cấp độ
│   │   │   ├── vocabulary_selection/ # Chọn từ vựng theo cấp độ
│   │   │   ├── kanji/        # Kanji
│   │   │   ├── kanji-mnemonics/ # Kanji ghi nhớ
│   │   │   ├── flashcards/   # Flashcards SRS
│   │   │   ├── quick_vocab/  # Từ vựng nhanh
│   │   │   ├── quick_kanji/  # Kanji nhanh
│   │   │   ├── kana/         # Bảng chữ cái
│   │   │   └── reading/      # Bài đọc
│   │   ├── text-parser/      # Phân tích văn bản (chính)
│   │   ├── translate/        # Dịch thuật
│   │   ├── grammar-graph/    # Sơ đồ ngữ pháp
│   │   ├── word-relations/   # Quan hệ từ vựng
│   │   ├── songify-vocabulary/ # Từ vựng qua bài hát
│   │   ├── vocabulary-map/   # Sơ đồ từ vựng
│   │   ├── kanji-dashboard/  # Bảng điều khiển Kanji
│   │   ├── my-vocabulary/    # Từ vựng của tôi (sentence mining)
│   │   ├── custom-text/      # Thư viện bài viết của tôi
│   │   ├── podcasts/         # Thư viện YouTube
│   │   ├── my-podcasts/      # Video YouTube của tôi
│   │   ├── user-dashboard/   # Bảng điều khiển người dùng
│   │   ├── radicals/         # Bộ thủ Kanji
│   │   ├── downloads/        # Tải xuống
│   │   ├── about/            # Giới thiệu
│   │   ├── privacy-policy/   # Chính sách bảo mật
│   │   ├── terms-of-service/ # Điều khoản sử dụng
│   │   ├── langs/            # Ngữ pháp ngôn ngữ khác (vn/th/cn)
│   │   └── ...
│   ├── components/           # Component dùng chung (54 files)
│   │   ├── Sidebar.tsx       # Thanh điều hướng trái
│   │   ├── Nav.tsx           # Thanh điều hướng trên
│   │   ├── DashboardNav.tsx  # Thanh điều hướng dashboard
│   │   ├── AppShell.tsx      # Layout shell (bọc các trang)
│   │   ├── ChipiBabies.tsx   # Linh vật chipi (SVG)
│   │   ├── Category.tsx      # Card khóa học
│   │   ├── CategoriesHeader.tsx
│   │   ├── GrammarHead.tsx   # Header trang ngữ pháp
│   │   ├── VocabularyHead.tsx
│   │   ├── ComplexFlashcardModal*.tsx  # Modal flashcards
│   │   ├── Footer.tsx
│   │   └── ui/               # shadcn/ui components
│   ├── components-parser/    # Component phân tích văn bản
│   │   ├── JapaneseTextParser.tsx
│   │   ├── WordDetailsSidebar.tsx
│   │   ├── ParseTree.tsx
│   │   ├── KanjiDisplay.tsx
│   │   ├── FuriganaConverter.tsx / V2
│   │   ├── GrammarExplanation.tsx
│   │   ├── UnifiedGptComponent.tsx
│   │   ├── YouTubeComponent.tsx
│   │   └── ...
│   ├── components-markdown/  # Render markdown ngữ pháp
│   │   └── MarkdownContent.tsx
│   ├── components-inactive/  # Component không dùng
│   ├── context/              # React context
│   ├── hooks/                # Custom hooks (use-toast...)
│   ├── lib/                  # Tiện ích (utils, api...)
│   └── utils/
├── content/
│   └── markdown_grammar_japanese/  # 807 bài ngữ pháp (markdown, tiếng Việt)
├── public/
│   └── img/                  # Ảnh tĩnh
└── ...
```

## Layout & Điều hướng

### AppShell (`src/components/AppShell.tsx`)
- Trang `/` (trang chủ) và `/content` (khóa học): **self-contained** — tự có
  navbar + footer riêng theo phong cách landing (sky #EBF4FA, blue #1E90FF,
  mint #A3D9C9, navy #16324F).
- Các trang còn lại: bọc trong **Sidebar (trái) + Nav (trên) + DashboardNav**.

### Trang chủ (`src/app/page.tsx`)
- Navbar: logo Musubi "黄 hoangluoibieng Nihongo", menu Khóa học/Từ vựng/Ngữ pháp/Cộng đồng
- Hero: "楽しく日本語を学びましょう！" + linh vật chipi
- FuriganaCard (bật/tắt furigana), FlipCard 3D, feature strip, CTA, footer

## Gọi API

Frontend gọi API qua đường dẫn tương đối (nginx proxy):

```ts
// Ví dụ: lấy danh sách từ vựng
fetch(`/e-api/v1/words?p_tag=${tag}&s_tag=${part}`)

// Ví dụ: chi tiết ngữ pháp
fetch(`/e-api/v1/grammar-details`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title }),
})

// Ví dụ: dịch thuật
fetch(`/d-api/v1/translate`, { method: "POST", ... })
```

## Ngôn ngữ giao diện

- Toàn bộ giao diện sử dụng **tiếng Việt** (mục tiêu người học Việt).
- Thuật ngữ chuyên môn giữ nguyên: Kanji, JLPT, On'yomi/Kun'yomi, furigana, romaji.
- AI prompts (dịch, giải thích ngữ pháp, tóm tắt) yêu cầu trả lời **tiếng Việt**.