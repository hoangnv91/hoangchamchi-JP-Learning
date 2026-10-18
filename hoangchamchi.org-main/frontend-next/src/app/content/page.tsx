"use client";

// ─────────────────────────────────────────────────────────────
// hoangluoibieng Nihongo — 黄 hoangluoibieng Nihongo
// Course catalogue page, styled to match the landing page.
// Palette: sky #EBF4FA · blue #1E90FF · mint #A3D9C9 · navy #16324F
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";

import { ChipiBoy, ChipiGirl } from "@/components/ChipiBabies";

import japanese6000 from "@public/img/Japanese6000.png";
import jlpt_n2_grammar from "@public/img/jlpt_n2_grammar.jpg";
import jlpt_n3_grammar from "@public/img/jlpt_n3_grammar.jpg";
import jlpt_n3_vocabulary from "@public/img/jlpt_n3_vocabulary.jpg";
import jlpt_n4_grammar from "@public/img/jlpt_n4_grammar.jpg";
import jlpt_n5_grammar from "@public/img/jlpt_n5_grammar.jpg";
import jlpt_universal_01 from "@public/img/jlpt_universal_01.jpg";
import jlpt_universal_02 from "@public/img/jlpt_universal_02.jpg";
import jlpt_universal_07 from "@public/img/jlpt_universal_07.jpg";

/* ----------------------------- Tokens ----------------------------- */

const C = {
  sky: "#EBF4FA",
  blue: "#1E90FF",
  mint: "#A3D9C9",
  navy: "#16324F",
  navySoft: "#2E4E6E",
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
      <path d="M24 6c-4 6-4 14 0 20 4-6 4-14 0-20Z" fill="#FFB35C" />
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

/* --------------------------- Course data --------------------------- */

type Course = {
  title: string;
  jp: string;
  level: string;
  lessons: string;
  desc: string;
  img: any;
  href: string;
  accent: string;
};

const COURSES: Course[] = [
  {
    title: "Ngữ pháp JLPT N5",
    jp: "文法",
    level: "Căn bản",
    lessons: "3 bài học",
    desc: "Nền tảng ngữ pháp đầu tiên: trợ từ, thể động từ và cấu trúc câu cơ bản.",
    img: jlpt_n5_grammar,
    href: "/japanese/grammar_selection/JLPT_N5",
    accent: "#1E90FF",
  },
  {
    title: "Ngữ pháp JLPT N4",
    jp: "文法",
    level: "Sơ cấp",
    lessons: "2 bài học",
    desc: "Mở rộng cấu trúc câu, thể điều kiện và cách diễn đạt lịch sự thường gặp.",
    img: jlpt_n4_grammar,
    href: "/japanese/grammar_selection/JLPT_N4",
    accent: "#A3D9C9",
  },
  {
    title: "Ngữ pháp JLPT N3",
    jp: "文法",
    level: "Trung cấp",
    lessons: "10 bài học",
    desc: "Các mẫu câu trung cấp giúp bạn đọc hiểu văn bản và giao tiếp tự nhiên hơn.",
    img: jlpt_n3_grammar,
    href: "/japanese/grammar_selection/JLPT_N3",
    accent: "#16324F",
  },
  {
    title: "Ngữ pháp JLPT N2",
    jp: "文法",
    level: "Cao cấp",
    lessons: "2 bài học",
    desc: "Cấu trúc nâng cao dùng trong báo chí, công việc và văn viết trang trọng.",
    img: jlpt_n2_grammar,
    href: "/japanese/grammar_selection/JLPT_N2",
    accent: "#1E90FF",
  },
  {
    title: "Ngữ pháp JLPT N1",
    jp: "文法",
    level: "Chuyên gia",
    lessons: "2 bài học",
    desc: "Đỉnh cao ngữ pháp: thành ngữ, văn phong cổ điển và sắc thái tinh tế.",
    img: jlpt_universal_02,
    href: "/japanese/grammar_selection/JLPT_N1",
    accent: "#A3D9C9",
  },
  {
    title: "Từ vựng JLPT N3",
    jp: "単語",
    level: "Trung cấp",
    lessons: "5 bài học",
    desc: "Trau dồi vốn từ trung cấp qua thẻ ghi nhớ thông minh và ví dụ thực tế.",
    img: jlpt_n3_vocabulary,
    href: "/japanese/vocabulary_selection/JLPT_N3",
    accent: "#16324F",
  },
  {
    title: "Kanji JLPT thiết yếu",
    jp: "漢字",
    level: "Trung cấp",
    lessons: "5 bài học",
    desc: "Học Kanji qua bộ thủ, mẹo ghi nhớ và âm đọc theo từng cấp độ.",
    img: jlpt_universal_07,
    href: "/japanese/kanji",
    accent: "#1E90FF",
  },
  {
    title: "Động từ thiết yếu",
    jp: "動詞",
    level: "Trung cấp",
    lessons: "5 bài học",
    desc: "600 động từ quan trọng nhất kèm cách chia và cách dùng trong câu.",
    img: jlpt_universal_01,
    href: "/japanese/vocabulary_selection/essential_verbs",
    accent: "#A3D9C9",
  },
];

/* ------------------------------- Page ------------------------------- */

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#EBF4FA] font-sans text-[#22303C]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#A3D9C9]/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-[#1E90FF]/20 blur-3xl" />
        <Sparkle className="pointer-events-none absolute left-[12%] top-24 h-5 w-5 text-[#1E90FF]/70" />
        <Sparkle className="pointer-events-none absolute right-[18%] top-16 h-4 w-4 text-[#A3D9C9]" />
        <Sparkle className="pointer-events-none absolute left-[45%] bottom-8 h-3 w-3 text-[#1E90FF]/60" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#2E4E6E] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1E90FF]" />
              コース一覧 · Danh mục khóa học
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#16324F] sm:text-5xl lg:text-6xl">
              日本語の
              <br />
              <span className="text-[#1E90FF]">コース</span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-[#2E4E6E] sm:text-2xl">
              Các khóa học tiếng Nhật của chúng tôi
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#5C6B7A] lg:mx-0">
              Lộ trình học JLPT N5–N1 trọn vẹn: ngữ pháp, từ vựng và Kanji được
              thiết kế bài bản, dễ hiểu — giúp bạn tự tin chinh phục kỳ thi.
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center lg:text-left">
              {[
                ["22", "Khóa học"],
                ["5", "Chuỗi bài học"],
                ["N5–N1", "Trình độ"],
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
              一緒に勉強しよう！ Học cùng nhau nhé! 🎌
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured banner ── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[#16324F] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A3D9C9]">
              Tinh túy tiếng Nhật · 日本語の精髄
            </span>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Khóa học JLPT N5–N1 trọng tâm
            </h2>
            <p className="mt-3 max-w-2xl text-[#C7D6E4]">
              Làm chủ tiếng Nhật với khóa học JLPT N5-N1 trọng tâm của chúng tôi,
              được thiết kế để củng cố kiến thức từ vựng, ngữ pháp và Kanji của bạn.
              Khám phá các bài học đơn giản, dễ hiểu giúp việc học trở nên thú vị.
            </p>
          </div>
          <Image
            src={japanese6000}
            alt="Tinh túy tiếng Nhật JLPT"
            className="mx-auto w-56 rounded-2xl shadow-2xl ring-4 ring-white/20 lg:w-64"
          />
        </div>
      </section>

      {/* ── Course grid ── */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1E90FF]">
            Khóa học · レッスン
          </span>
          <h2 className="mt-2 text-3xl font-black text-[#16324F] sm:text-4xl">
            Chọn khóa học phù hợp với bạn
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_16px_50px_-20px_rgba(22,50,79,0.25)] ring-1 ring-slate-100 transition hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(22,50,79,0.35)]"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold text-white shadow"
                  style={{ backgroundColor: c.accent }}
                >
                  {c.level}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold text-[#16324F] group-hover:text-[#1E90FF]">
                  {c.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm text-[#5C6B7A]">{c.desc}</p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold text-[#2E4E6E]">
                    {c.lessons} · <span className="text-[#1E90FF]">{c.jp}</span>
                  </span>
                  <span className="rounded-full bg-[#EBF4FA] px-3 py-1 text-xs font-extrabold text-[#1E90FF] transition group-hover:bg-[#1E90FF] group-hover:text-white">
                    Bắt đầu →
                  </span>
                </div>
              </div>
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
              href="/japanese/grammarlist"
              className="rounded-full border-2 border-white/40 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Khám phá ngữ pháp
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