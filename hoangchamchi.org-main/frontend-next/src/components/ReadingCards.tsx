// Import necessary libraries
import Link from "next/link";

// Define the type for reading card data
interface ReadingCardData {
  key: string;
  title: string;
  titleRomaji: string;
  titleJp: string;
  p_tag: string;
  s_tag: string;
  shortDescription: string;
}

// Sample data (you can fetch this from an API or database in a real app)
const readingCardsData: ReadingCardData[] = [
  {
    key: "jlpt_n3_reading_01",
    title: "Bí ẩn khu vườn Thiền",
    titleRomaji: "Niwa no zen no nazo",
    titleJp: "庭の禅の謎",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Một bí ẩn hé lộ trong khu vườn Thiền yên bình, nơi một học trò của Thiền tông khám phá ra một câu đố lịch sử hay thông điệp được giấu trong những phiến đá của khu vườn.",
  },
  {
    key: "jlpt_n3_reading_02",
    title: "Thử thách Haiku",
    titleRomaji: "Haiku Charenji",
    titleJp: "俳句チャレンジ",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Một nhân vật nhận thử thách viết haiku mỗi ngày, với mỗi bài thơ phản ánh một khía cạnh của cuộc sống thường nhật và suy nghĩ nội tâm.",
  },
  {
    key: "jlpt_n3_reading_03",
    title: "Tình thế khó xử của samurai ở Nhật Bản hiện đại",
    titleRomaji: "Gendai Nihon ni okeru samurai no jirenma",
    titleJp: "現代日本における侍のジレンマ",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Một samurai bí ẩn tỉnh dậy ở Nhật Bản ngày nay và phải xoay xở với sự phức tạp của cuộc sống hiện đại trong khi tuân theo võ sĩ đạo bushido. Sự tương phản giữa cũ và mới có thể giúp học viên học được nhiều cách diễn đạt văn hóa và cách dùng thành ngữ.",
  },
  {
    key: "jlpt_n3_reading_04",
    title: "Ngày nghỉ của ninja",
    titleRomaji: "Ninja no Kyūjitsu",
    titleJp: "忍者の休日",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Một câu chuyện hài hước về một ninja vào ngày nghỉ quyết định đi thăm Nhật Bản hiện đại trong khi cố giấu thân phận, gặp phải đủ loại rắc rối ngôn ngữ trên đường đi.",
  },
  {
    key: "jlpt_n3_reading_05",
    title: "Dưới những hàng anh đào",
    titleRomaji: "Sakura no shita de",
    titleJp: "桜の下で",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Một mối tình nảy nở trong dịp hanami (ngắm hoa anh đào) giữa hai người đến từ những hoàn cảnh rất khác nhau. Câu chuyện của họ là ẩn dụ cho vẻ đẹp mong manh của hoa sakura và những khoảnh khắc thoáng qua của cuộc đời.",
  },
  {
    key: "jlpt_n3_reading_06",
    title: "Khu vườn của samurai",
    titleRomaji: "Samurai no niwa",
    titleJp: "侍の庭",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Câu chuyện về một samurai về hưu dành cả đời để tạo nên khu vườn hoàn hảo. Mỗi loài cây và vị trí của từng phiến đá đều mang ý nghĩa lịch sử và bài học cuộc sống, mà ông chia sẻ với một người hàng xóm trẻ.",
  },
  {
    key: "jlpt_n3_reading_07",
    title: "Chiếc kimono xuyên thời gian",
    titleRomaji: "Toki o koeru kimono",
    titleJp: "時を超える着物",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Câu chuyện về một chiếc kimono cổ, khi mặc vào sẽ đưa người mặc đến những thời kỳ khác nhau trong lịch sử Nhật Bản. Nhân vật chính phải vượt qua các sự kiện lịch sử và trở về hiện tại, sử dụng ngữ pháp và từ vựng N3 liên quan đến thời gian, lịch sử và văn hóa truyền thống.",
  },
  {
    key: "jlpt_n3_reading_08",
    title: "Chú vẹt nói haiku",
    titleRomaji: "Haiku o Hanasu Ōmu",
    titleJp: "俳句を話すオウム",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Câu chuyện về một chú vẹt chỉ nói bằng haiku, khiến chủ nhân phải giải mã một bí ẩn dựa trên những bài thơ bí ẩn này. Bài đọc giúp học viên làm quen với cấu trúc haiku cùng các từ chỉ mùa (kigo) và từ ngắt nhịp (kireji).",
  },
  {
    key: "jlpt_n3_reading_09",
    title: "Tình thế khó xử của samurai",
    titleRomaji: "Samurai no Jirenma",
    titleJp: "侍のジレンマ",
    p_tag: "jlpt_n3",
    s_tag: "story",
    shortDescription:
      "Một samurai giằng xé giữa bổn phận và ham muốn cá nhân, bối cảnh thời kỳ Edo. Câu chuyện mang đến cái nhìn sâu sắc về cấu trúc xã hội thời bấy giờ và giới thiệu các thuật ngữ liên quan đến đời sống samurai, danh dự và xung đột đạo đức, tất cả trong phạm vi trình độ N3.",
  },

  // Add more cards here...
];

const ReadingCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {readingCardsData.map((card) => (
        <Link key={card.key} href={`/japanese/reading/${card.key}`} passHref>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg dark:hover:shadow-dark-lg transition-shadow cursor-pointer">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {card.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {card.titleRomaji}
            </p>
            <p className="text-gray-600 dark:text-gray-300">({card.titleJp})</p>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {card.shortDescription}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadingCards;
