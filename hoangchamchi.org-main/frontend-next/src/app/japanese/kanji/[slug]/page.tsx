"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // plugin to render markdown tables

import BlogCards from "@/components/BlogCards";

// https://github.com/sindresorhus/github-markdown-css
// https://github.com/hyrious/github-markdown-css
// import 'github-markdown-css/github-markdown.css';
import "github-markdown-css/github-markdown-light.css";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  console.log("----------------------------------");
  console.log(params);

  return (
    <div>
      <MarkdownRenderer name={params.slug} />
      <BlogCards cards={blogCardsProps} header={headerProps} />
    </div>
  );
};
export default BlogPost;


const headerProps = {
  title: "Danh sách Kanji JLPT Hoangchamchi",
  subtitle:
    "Danh sách Kanji JLPT chỉ có một cách đọc. Đây là tập con của Kanji JLPT N5-1 được chọn để học trước cho từng cấp độ. Vì những Kanji này chỉ yêu cầu một cách đọc cho mỗi cấp độ nên dễ học hơn. Điều này không có nghĩa là những Kanji này chỉ có một cách đọc nói chung (các cách đọc khác chỉ không bắt buộc cho cấp độ JLPT tương ứng).",
};


interface HeaderProps {
  title: string;
  subtitle: string;
}


interface BlogCardsProps {
  cards: BlogCardProps[];
  header: HeaderProps
}







// Assuming blogs is defined somewhere
const blogs = [
  { name: "gambari", file: "/markdown_kanji/gpt_gambari.md" },
  { name: "kanji", file: "/markdown_kanji/N3_kanji_week1.md" },
  {
    id: "1",
    name: "n3kanji1",
    file: "/markdown_kanji/n3kanji1.md",
  },
  {
    id: "2",
    name: "n3kanji2",
    file: "/markdown_kanji/n3kanji2.md",
  },
  {
    id: "3",
    name: "n3kanji3",
    file: "/markdown_kanji/n3kanji3.md",
  },
  {
    id: "4",
    name: "n3kanji4",
    file: "/markdown_kanji/n3kanji4.md",
  },
  {
    id: "5",
    name: "n3kanji5",
    file: "/markdown_kanji/n3kanji5.md",
  },
  {
    id: "6",
    name: "n3kanji6",
    file: "/markdown_kanji/n3kanji6.md",
  },
  {
    id: "7",
    name: "n4kanji1",
    file: "/markdown_kanji/n4kanji1.md",
  },
  {
    id: "8",
    name: "n4kanji2",
    file: "/markdown_kanji/n4kanji2.md",
  },
  {
    id: "9",
    name: "n4kanji3",
    file: "/markdown_kanji/n4kanji3.md",
  },
  {
    id: "10",
    name: "n5kanji1",
    file: "/markdown_kanji/n5kanji1.md",
  },


];

interface BlogProps {
  name: string;
  file: string;
}

const MarkdownRenderer = ({ name }: { name: string }) => {
  const [postContent, setPostContent] = useState("");

  const fetchMarkdown = (name: string) => {
    const blog = blogs.find((b: BlogProps) => b.name === name);
    if (blog) {
      fetch(`${blog.file}`)
        .then((response) => response.text())
        .then((text) => setPostContent(text))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchMarkdown(name);
  }, [name]);

  return (
    <div className="markdown-body p-10">
      <ReactMarkdown remarkPlugins={[gfm]}>{postContent}</ReactMarkdown>
    </div>
  );
};

interface BlogCardProps {
  id: string;
  name: string;
  link: string;
  file: string;
  description: string;
}

interface BlogCardsProps {
  cards: BlogCardProps[];
}

const blogCardsProps = [
  {
    id: "1",
    name: "JLPT N3 Kanji Phần 1/6",
    link: "/japanese/kanji/n3kanji1",
    file: "/img/jlpt_universal_01.jpg",
    description: "Danh sách Kanji JLPT N3 chỉ có một cách đọc.",
  },
  {
    id: "2",
    name: "JLPT N3 Kanji Phần 2/6",
    link: "/japanese/kanji/n3kanji2",
    file: "/img/jlpt_universal_02.jpg",
    description: "Danh sách Kanji JLPT N3 chỉ có một cách đọc.",
  },
  {
    id: "3",
    name: "JLPT N3 Kanji Phần 3/6",
    link: "/japanese/kanji/n3kanji3",
    file: "/img/jlpt_universal_03.jpg",
    description: "Danh sách Kanji JLPT N3 chỉ có một cách đọc.",
  },
  {
    id: "4",
    name: "JLPT N3 Kanji Phần 4/6",
    link: "/japanese/kanji/n3kanji4",
    file: "/img/jlpt_universal_04.jpg",
    description: "Danh sách Kanji JLPT N3 chỉ có một cách đọc.",
  },
  {
    id: "5",
    name: "JLPT N3 Kanji Phần 5/6",
    link: "/japanese/kanji/n3kanji5",
    file: "/img/jlpt_universal_05.jpg",
    description: "Danh sách Kanji JLPT N3 chỉ có một cách đọc.",
  },
  {
    id: "6",
    name: "JLPT N3 Kanji Phần 6/6",
    link: "/japanese/kanji/n3kanji6",
    file: "/img/jlpt_universal_06.jpg",
    description: "Danh sách Kanji JLPT N3 chỉ có một cách đọc.",
  },
  {
    id: "7",
    name: "JLPT N4 Kanji Phần 1/3",
    link: "/japanese/kanji/n4kanji1",
    file: "/img/jlpt_universal_07.jpg",
    description: "Danh sách Kanji JLPT N4 chỉ có một cách đọc.",
  },
  {
    id: "8",
    name: "JLPT N4 Kanji Phần 2/3",
    link: "/japanese/kanji/n4kanji2",
    file: "/img/jlpt_universal_08.jpg",
    description: "Danh sách Kanji JLPT N4 chỉ có một cách đọc.",
  },
  {
    id: "9",
    name: "JLPT N4 Kanji Phần 3/3",
    link: "/japanese/kanji/n4kanji3",
    file: "/img/jlpt_universal_08.jpg",
    description: "Danh sách Kanji JLPT N4 chỉ có một cách đọc.",
  },
];
