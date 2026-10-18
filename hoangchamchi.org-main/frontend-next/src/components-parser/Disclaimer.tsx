'use client';

import { useState } from "react";


function Disclaimer() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="w-full mr-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left text-sm font-bold flex items-center justify-between w-full p-1 bg-blue-100 text-blue-800 rounded-md border border-blue-200 hover:bg-blue-200 transition-colors"
        >
Tuyên bố miễn trừ
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="mt-2 p-4 bg-blue-50 text-blue-900 rounded-md border border-blue-200 shadow-sm">
            <p className="text-xs">
              Trình phân tích văn bản tiếng Nhật sử dụng Mecab, KuroShiro,
              Jitendex, JMDICT, KANJIDIC, Deepl và Chat GPT để dịch và giải
              thích ngữ pháp. Chúng tôi nhận thấy trình phân tích Mecab đôi khi
              chèn furigana sai phía trên các từ kanji đơn lẻ. Nhưng khi dùng
              KuroShiro cho cả câu, chúng tôi thường nhận được furigana chính
              xác. Ngoài ra Chat GPT và Deepl đôi khi cũng mắc lỗi. Người dùng
              nên có kiến thức cơ bản về tiếng Nhật khi sử dụng công cụ này.
              Việc dùng tiện ích mở rộng trình duyệt Yomitan cũng có thể hữu
              ích khi đọc.
            </p>
            <p className="text-xs mt-2">
              Lưu ý rằng bản dịch tự động của DEEPL/Chat GPT có thể gây hiểu
              lầm. Điều tương tự cũng áp dụng cho các giải thích ngữ pháp và
              cảm xúc do Chat GPT tạo ra. Không sử dụng để dịch các tài liệu
              quan trọng như y tế, pháp lý, v.v.
            </p>
          </div>
        )}
      </div>
    );
  }

export default Disclaimer;