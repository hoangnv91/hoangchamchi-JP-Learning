//'use client';

import Link from "next/link";

import BlogCards from "@/components/BlogCards";

import React from "react";

export default function Blog() {
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
      file: "/img/jlpt_universal_09.jpg",
      description: "Danh sách Kanji JLPT N4 chỉ có một cách đọc.",
    },
    {
      id: "10",
      name: "JLPT N5 Kanji Phần 1/1",
      link: "/japanese/kanji/n5kanji1",
      file: "/img/jlpt_universal_10.jpg",
      description: "Danh sách Kanji JLPT N5 chỉ có một cách đọc.",
    },
  ];

  return (
    <div>
      <BlogCards cards={blogCardsProps} header={headerProps} />
    </div>
  );
}

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
  header: HeaderProps;
}
