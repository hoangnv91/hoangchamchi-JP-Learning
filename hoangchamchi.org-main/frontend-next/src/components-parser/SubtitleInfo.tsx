"use client";

import { useState } from "react";

function SubtitleInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-1 mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left text-sm font-bold flex items-center justify-between w-full p-1 bg-gray-100 text-gray-800 rounded-md border border-gray-200 hover:bg-gray-200 transition-colors"
      >
        Cách lấy phụ đề YouTube
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
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
        <div className="mt-2 p-4 bg-white text-gray-700 rounded-md border border-gray-200 shadow-sm">
          <p className="text-sm font-bold text-slate-600 mb-2">
            Phụ đề YouTube hoạt động tự động trong trường hợp tự lưu trữ (self-hosting).
          </p>
          <p className="text-sm font-bold text-slate-600 mb-2">
            Trên trang hoangchamchi.org, bạn cần nhập phụ đề thủ công
            (YouTube chặn máy chủ/trung tâm dữ liệu của Hoangchamchi).
          </p>
          <div className="text-xs text-slate-600 space-y-1">
            <p>
              Bạn có thể nhập phụ đề YouTube của riêng mình, ví dụ có sẵn qua
              dịch vụ này:
            </p>
            <p>
              <a
                href="https://www.downloadyoutubesubtitles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.downloadyoutubesubtitles.com
              </a>{" "}
              (hoặc bất kỳ nguồn phụ đề nào khác).
            </p>
            <p>
              Hiện tại chúng tôi hỗ trợ tải lên phụ đề tiếng Nhật và ngôn ngữ
              phụ ở định dạng .srt. Phụ đề đã nhập sẽ được lưu trong Local Storage
              của trình duyệt.
            </p>
            <p>
              Trong tương lai, chúng tôi sẽ tạo sẵn phụ đề cho tất cả video trong
              Thư viện YouTube.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubtitleInfo;
