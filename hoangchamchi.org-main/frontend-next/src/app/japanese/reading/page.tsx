import ReadingCards from "@/components/ReadingCards";

export default function Reading() {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="p-4">
          <h1 className="text-3xl text-black dark:text-white font-bold mb-2">
            Mục bài đọc tiếng Nhật
          </h1>
          <p className="text-sm text-black dark:text-white mb-4">
            Khám phá bộ sưu tập truyện ngắn tiếng Nhật của chúng tôi, mỗi truyện đều có
            âm thanh, romaji và bản dịch tiếng Anh. Đi sâu vào phần giải thích
            từng câu chi tiết cùng với hiểu biết về ngữ pháp và từ vựng liên quan để nâng cao trải nghiệm học tập của bạn.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen relative">
          <ReadingCards />
        </div>
      </div>
    </>
  );
}
