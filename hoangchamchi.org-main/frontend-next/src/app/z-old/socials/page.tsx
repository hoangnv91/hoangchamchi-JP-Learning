//'use client';



// pages/your-page.js
import SocialShare from "@/components/SocialShare";

const YourPage = () => {

  const pageUrl = 'https://hoangchamchi.org'; // Hoangchamchi.org URL
  const pageTitle = 'Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, tự lưu trữ, không quảng cáo';


  return (
    <div className="container mx-auto p-4">
      {/* Your page content */}
      <h1 className="text-2xl font-bold mb-4">Tiêu đề trang của bạn</h1>
      <p className="mb-8">Nội dung trang của bạn ở đây... Được render bằng SSR</p>

      <SocialShare url={pageUrl} title={pageTitle} />
    </div>
  );
};

export default YourPage;


// ---





