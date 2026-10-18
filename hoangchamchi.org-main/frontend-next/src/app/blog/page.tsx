//'use client';

import Link from "next/link";

import BlogCards from "@/components/BlogCards";

import React from "react";

export default function Blog() {

  const blogCardsProps = [
    {
      id: "1",
      name: "Gambari",
      link: "/blog/gambari",
      file: "/img/cover.jpg",
      description:
        "Gambari: Khái niệm tiếng Nhật về sự kiên trì, bền bỉ và nhẫn nại trước nghịch cảnh cùng ý nghĩa văn hóa của nó.",
    }
  ];



  return (
    <div>
      <BlogCards cards={blogCardsProps} header={headerProps}/>
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
  "title": "Blog Hoangchamchi",
  "subtitle": "Blog về các chủ đề từ những cuốn sách yêu thích của chúng tôi về văn hóa, lịch sử và xã hội Nhật Bản."
 }
 
 
 interface HeaderProps {
   title: string;
   subtitle: string;
 }
 
 
 interface BlogCardsProps {
   cards: BlogCardProps[];
   header: HeaderProps
 }