"use client";

// ─────────────────────────────────────────────────────────────
// hoangluoibieng Nihongo — 黄 hoangluoibieng Nihongo
// Modern, friendly Japanese EdTech landing page.
// Palette: sky #EBF4FA · orange #1E90FF · mint #A3D9C9 · white
// Signature: Maneki-neko + bookish fox mascots, musubi knot logo,
//            interactive furigana toggle & 3D flashcards.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import Link from "next/link";

import { ChipiBoy, ChipiGirl } from "@/components/ChipiBabies";

/* ----------------------------- Tokens ----------------------------- */

const C = {
  sky: "#EBF4FA",
  orange: "#1E90FF",
  orangeSoft: "#FFF1E0",
  mint: "#A3D9C9",
  mintSoft: "#EAF7F2",
  navy: "#16324F",
  navySoft: "#2E4E6E",
  white: "#FFFFFF",
  ink: "#22303C",
  muted: "#5C6B7A",
};

/* ------------------------------ Icons ------------------------------ */

function MusubiLogo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 6c-6 4-8 10-6 16 2 6 8 8 12 14 4-6 10-8 12-14 2-6 0-12-6-16-4 3-8 3-12 0Z"
        fill="#1E90FF"
      />
      <path
        d="M24 6c-4 6-4 14 0 20 4-6 4-14 0-20Z"
        fill="#FFB35C"
      />
      <circle cx="24" cy="40" r="4" fill="#A3D9C9" />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
    </svg>
  );
}

/* --------------------------- Furigana card --------------------------- */

type FuriganaWord = { kanji: string; kana: string };

const EXAMPLE_WORDS: FuriganaWord[] = [
  { kanji: "日本語", kana: "にほんご" },
  { kanji: "を", kana: "" },
  { kanji: "勉強", kana: "べんきょう" },
  { kanji: "します", kana: "" },
];

function FuriganaCard() {
  const [showFurigana, setShowFurigana] = useState(true);

  return (
    <div className="flex flex-col rounded-3xl bg-white p-6 shadow-[0_20px_60px_-20px_rgba(22,50,79,0.25)] ring-1 ring-slate-100">
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-full bg-[#EBF4FA] px-3 py-1 text-xs font-bold text-[#2E4E6E]">
          読み方 · Cách đọc
        </span>
      </div>

      <div className="flex flex-wrap items-end gap-x-5 gap-y-3 rounded-2xl bg-[#EBF4FA] px-5 py-7">
        {EXAMPLE_WORDS.map((w, i) => (
          <span key={i} className="inline-flex flex-col items-center">
            {showFurigana && w.kana ? (
              <ruby className="text-center">
                <span className="text-3xl font-bold text-[#16324F] sm:text-4xl">
                  {w.kanji}
                </span>
                <rp>(</rp>
                <rt className="text-sm font-semibold text-[#1E90FF]">{w.kana}</rt>
                <rp>)</rp>
              </ruby>
            ) : (
              <span className="text-3xl font-bold text-[#16324F] sm:text-4xl">
                {w.kanji}
              </span>
            )}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-[#5C6B7A]">
        「日本語を勉強します」 — Tôi học tiếng Nhật.
      </p>

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setShowFurigana((v) => !v)}
        aria-pressed={showFurigana}
        className="mt-5 inline-flex items-center gap-3 self-start rounded-full bg-[#A3D9C9] px-4 py-2 font-bold text-[#16324F] transition hover:brightness-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A3D9C9]/50"
      >
        <span
          className={`relative h-6 w-11 rounded-full transition ${
            showFurigana ? "bg-[#16324F]" : "bg-slate-300"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
              showFurigana ? "left-[22px]" : "left-0.5"
            }`}
          />
        </span>
        {showFurigana ? "Tắt Furigana" : "Bật Furigana"}
      </button>
    </div>
  );
}

/* --------------------------- 3D flashcard --------------------------- */

type Flashcard = {
  front: string;
  frontSub: string;
  back: string;
  backSub: string;
  accent: string;
};

const FLASHCARDS: Flashcard[] = [
  {
    front: "猫",
    frontSub: "ねこ",
    back: "Mèo",
    backSub: "cat · ねこ",
    accent: "#1E90FF",
  },
  {
    front: "空",
    frontSub: "そら",
    back: "Bầu trời",
    backSub: "sky · そら",
    accent: "#A3D9C9",
  },
  {
    front: "本",
    frontSub: "ほん",
    back: "Sách",
    backSub: "book · ほん",
    accent: "#16324F",
  },
];

function FlipCard({ card }: { card: Flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="group h-56 w-full [perspective:1200px] focus:outline-none"
      aria-label={`Flashcard: ${card.front}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white shadow-[0_16px_50px_-16px_rgba(22,50,79,0.3)] ring-1 ring-slate-100 [backface-visibility:hidden]"
        >
          <span className="text-6xl font-black" style={{ color: card.accent }}>
            {card.front}
          </span>
          <span className="mt-2 text-lg font-semibold text-[#2E4E6E]">
            {card.frontSub}
          </span>
          <span className="absolute bottom-3 text-[11px] font-medium uppercase tracking-wider text-slate-300">
            Tap để lật · クリック
          </span>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl text-white shadow-[0_16px_50px_-16px_rgba(22,50,79,0.4)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-3xl font-extrabold">{card.back}</span>
          <span className="mt-2 text-sm font-medium opacity-90">{card.backSub}</span>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------- Page ------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Khóa học", jp: "コース", href: "/content" },
    { label: "Từ vựng", jp: "単語", href: "/japanese/quick_vocab" },
    { label: "Ngữ pháp", jp: "文法", href: "/japanese/grammarlist" },
    { label: "Cộng đồng", jp: "コミュニティ", href: "/about" },
  ];

  return (
    <div className="min-h-screen bg-[#EBF4FA] font-sans text-[#22303C]">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#EBF4FA]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <MusubiLogo />
            <span className="text-xl font-black tracking-tight text-[#16324F]">
              黄 <span className="text-[#1E90FF]">hoangluoibieng</span> Nihongo
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group rounded-full px-4 py-2 text-sm font-bold text-[#2E4E6E] transition hover:bg-white hover:text-[#16324F]"
              >
                {l.label}
                <span className="ml-1 text-xs font-semibold text-[#1E90FF]">{l.jp}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login-test"
              className="rounded-full px-4 py-2 text-sm font-bold text-[#16324F] transition hover:bg-white"
            >
              ログイン · Đăng nhập
            </Link>
            <Link
              href="/login-test"
              className="rounded-full bg-[#A3D9C9] px-5 py-2.5 text-sm font-extrabold text-[#16324F] shadow-[0_10px_24px_-10px_rgba(163,217,201,0.9)] transition hover:-translate-y-0.5 hover:brightness-95"
            >
              登録 · Đăng ký
            </Link>
          </div>

          {/* mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg p-2 text-[#16324F] md:hidden"
            aria-label="Mở menu"
            aria-expanded={menuOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/60 bg-[#EBF4FA] px-4 pb-4 md:hidden" aria-label="Menu di động">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-bold text-[#2E4E6E] hover:bg-white"
              >
                {l.label} <span className="ml-1 text-xs text-[#1E90FF]">{l.jp}</span>
              </Link>
            ))}
            <div className="mt-3 flex gap-3">
              <Link
                href="/login-test"
                className="flex-1 rounded-full border-2 border-[#16324F] px-4 py-2.5 text-center text-sm font-bold text-[#16324F]"
              >
                Đăng nhập
              </Link>
              <Link
                href="/login-test"
                className="flex-1 rounded-full bg-[#A3D9C9] px-4 py-2.5 text-center text-sm font-extrabold text-[#16324F]"
              >
                Đăng ký
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* soft blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#A3D9C9]/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-[#1E90FF]/20 blur-3xl" />
        <Sparkle className="pointer-events-none absolute left-[12%] top-24 h-5 w-5 text-[#1E90FF]/70" />
        <Sparkle className="pointer-events-none absolute right-[18%] top-16 h-4 w-4 text-[#A3D9C9]" />
        <Sparkle className="pointer-events-none absolute left-[45%] bottom-8 h-3 w-3 text-[#1E90FF]/60" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#2E4E6E] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1E90FF]" />
              日本語学習プラットフォーム · Nền tảng học tiếng Nhật
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16324F] sm:text-5xl lg:text-6xl">
              楽しく日本語を
              <br />
              <span className="text-[#1E90FF]">学びましょう！</span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-[#2E4E6E] sm:text-2xl">
              Hãy cùng học tiếng Nhật thật vui nào!
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#5C6B7A] lg:mx-0">
              hoangluoibieng Nihongo giúp bạn chinh phục JLPT N5–N1 qua thẻ ghi nhớ thông
              minh, phân tích văn bản có furigana và sơ đồ ngữ pháp trực quan —
              hoàn toàn miễn phí, mã nguồn mở.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/japanese/grammarlist"
                className="rounded-full bg-[#1E90FF] px-8 py-3.5 text-base font-extrabold text-white shadow-[0_16px_36px_-12px_rgba(30,144,255,0.8)] transition hover:-translate-y-0.5 hover:brightness-95"
              >
                はじめよう · Bắt đầu ngay
              </Link>
              <Link
                href="/text-parser"
                className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#16324F] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Xem công cụ phân tích
              </Link>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center lg:text-left">
              {[
                ["N5–N1", "Trình độ JLPT"],
                ["100%", "Miễn phí"],
                ["∞", "Không quảng cáo"],
              ].map(([v, k]) => (
                <div key={k} className="rounded-2xl bg-white/70 px-3 py-3 ring-1 ring-white">
                  <dt className="sr-only">{k}</dt>
                  <dd className="text-2xl font-black text-[#16324F]">{v}</dd>
                  <dd className="text-xs font-semibold text-[#5C6B7A]">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* mascots — chipi babies */}
          <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-6 lg:max-w-none">
            <div className="animate-[floaty_5s_ease-in-out_infinite]">
              <ChipiBoy size={190} />
            </div>
            <div className="animate-[floaty_6s_ease-in-out_0.6s_infinite]">
              <ChipiGirl size={170} />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-5 py-2 text-sm font-bold text-[#16324F] shadow-lg ring-1 ring-white">
              一緒に頑張ろう！ Cùng cố gắng nhé! 🎌
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive learning cards ── */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1E90FF]">
            Học mà chơi · 遊びながら学ぶ
          </span>
          <h2 className="mt-2 text-3xl font-black text-[#16324F] sm:text-4xl">
            Trải nghiệm tương tác ngay bây giờ
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Kanji + furigana */}
          <FuriganaCard />

          {/* Flashcards */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-[#16324F]">
                フラッシュカード · Flashcards lật 3D
              </h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#2E4E6E] ring-1 ring-slate-100">
                Nhấn vào thẻ để lật
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {FLASHCARDS.map((c) => (
                <FlipCard key={c.front} card={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature strip ── */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            {
              emoji: "📖",
              title: "Ngữ pháp JLPT",
              desc: "Giải thích chi tiết N5–N1 kèm ví dụ có furigana.",
              href: "/japanese/grammarlist",
            },
            {
              emoji: "🎬",
              title: "Đắm chìm YouTube",
              desc: "Học qua video thực tế với phụ đề và phân tích câu.",
              href: "/text-parser?type=youtube",
            },
            {
              emoji: "🧠",
              title: "Thẻ ghi nhớ SRS",
              desc: "Ôn tập từ vựng & Kanji theo lịch trình lặp lại thông minh.",
              href: "/japanese/flashcards",
            },
            {
              emoji: "🌱",
              title: "Bộ thủ & Kanji",
              desc: "Học Kanji qua mẹo ghi nhớ, bộ thủ và cách đọc.",
              href: "/japanese/kanji",
            },
          ].map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group rounded-3xl bg-[#EBF4FA] p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(22,50,79,0.3)]"
            >
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-3 text-lg font-extrabold text-[#16324F] group-hover:text-[#1E90FF]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#5C6B7A]">{f.desc}</p>
              <span className="mt-3 inline-block text-sm font-bold text-[#1E90FF]">
                Khám phá →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#16324F] py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#1E90FF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#A3D9C9]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            さあ、始めましょう！
            <br />
            <span className="text-[#A3D9C9]">Bắt đầu hành trình tiếng Nhật của bạn</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#C7D6E4]">
            Tạo tài khoản miễn phí để lưu tiến độ, bộ thẻ ghi nhớ và thư viện
            học tập của riêng bạn.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login-test"
              className="rounded-full bg-[#1E90FF] px-8 py-3.5 font-extrabold text-white shadow-[0_16px_36px_-12px_rgba(30,144,255,0.7)] transition hover:-translate-y-0.5 hover:brightness-95"
            >
              登録 · Đăng ký miễn phí
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-white/40 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#16324F] pt-4 pb-8 text-[#C7D6E4]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <MusubiLogo size={26} />
            <span className="font-black text-white">黄 hoangluoibieng Nihongo</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} hoangchamchi.org · Miễn phí, mã nguồn mở, không quảng cáo.
          </p>
          <div className="flex gap-4 text-sm font-semibold">
            <Link href="/about" className="hover:text-white">Giới thiệu</Link>
            <Link href="/privacy-policy" className="hover:text-white">Bảo mật</Link>
            <Link href="/terms-of-service" className="hover:text-white">Điều khoản</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}