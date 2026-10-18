// 'use client';

import SocialShare from "./SocialShare";

const FeaturesBanner: React.FC = () => {
  
  const pageUrl = 'https://hoangchamchi.org'; // Hoangchamchi.org URL
  const pageTitle = 'Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, tự lưu trữ, không quảng cáo';
  
  return (
    <div className="text-xs w-full">
      {/* Existing Feature Banner */}
      <div
        className="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-3 rounded relative mt-2 mb-2"
        role="alert"
      >
        <p>
          <strong className="font-bold">Tính năng mới!</strong>{" "}
          <span className="block sm:inline">
            Trình phân tích văn bản tiếng Nhật hoạt động với văn bản tùy chỉnh và YouTube, đóng vai trò như trợ lý đọc và dịch thuật.
          </span>{" "}
          <a
            href="/text-parser"
            className="underline font-semibold hover:text-blue-600 transition-colors"
          >
            Khám phá ngay!
          </a>
        </p>
        <p>
          <span className="block sm:inline">Danh sách tất cả tính năng của Hoangchamchi</span>{" "}
          <a
            href="/"
            className="underline font-semibold hover:text-blue-600 transition-colors"
          >
            Xem tại đây.
          </a>
        </p>
      </div>

      {/* New Alert Section for Hoangchamchi.org */}
      <div
        className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded relative mt-2 mb-2"
        role="alert"
      >
        <p>
          <strong className="font-bold">Hãy giới thiệu cho bạn bè!</strong>{" "}
          <span className="block sm:inline">
            Hoangchamchi.org là cổng thông tin miễn phí, mã nguồn mở, tự lưu trữ và không có quảng cáo. Chúng tôi dựa vào cộng đồng để lan truyền thông tin. Chia sẻ liên kết giúp dự án rất nhiều!
          </span>
        </p>
        <p className="mt-1 mb-3">
          <span className="block sm:inline">Hỗ trợ dự án bằng cách chia sẻ liên kết tới</span>{" "}
          <a
            href="https://hoangchamchi.org"
            className="underline font-semibold hover:text-orange-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            hoangchamchi.org
          </a>{" "}trên mạng xã hội qua các liên kết bên dưới!
        </p>

        <SocialShare url={pageUrl} title={pageTitle} />

      </div>
    </div>
  );
};

export default FeaturesBanner;
