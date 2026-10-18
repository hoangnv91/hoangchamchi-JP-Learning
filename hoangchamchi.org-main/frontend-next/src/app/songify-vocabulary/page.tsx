import React from "react";

export default function LearningText() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Từ vựng qua bài hát
      </h1>

      <h2 className="text-xl font-bold text-center mb-8">
        Phương pháp thử nghiệm: Bài hát do AI tạo để học từ vựng, nguyên mẫu ban đầu
      </h2>
      
      
      <div className="text-xs max-w-8xl mx-auto bg-white shadow-md rounded-md p-6">
        <p className="mb-4">
          Đây là phương pháp học từ vựng mang tính thử nghiệm cao, trong đó
          chúng tôi sử dụng AI để tạo bài hát từ các câu ví dụ. Ý tưởng là kết
          hợp các tín hiệu thính giác và ngữ cảnh để việc ghi nhớ từ vựng hiệu
          quả và thú vị hơn.
        </p>
        <p className="mb-4 text-red-500 font-semibold">
          Tuy nhiên, phương pháp này rất gây tranh cãi. Thường bị ghét trong
          cộng đồng học tiếng Nhật và tiếng Hàn trên Reddit :), nhưng điều đó
          không có gì mới với Hoangchamchi. Chúng tôi có nhiều tính năng học tập
          khác thường mà không được chấp nhận rộng rãi.
        </p>

        <p className="mb-4">
          Các thử nghiệm của chúng tôi cho thấy khi thêm romanization bên cạnh
          văn bản Kanji, lời bài hát thường có phát âm chính xác. Chúng tôi tạo
          bài hát qua{" "}
          <a
            href="https://suno.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Suno
          </a>
          . Trong tương lai, chúng tôi dự định thêm cả một mục với các bài hát
          cho từ vựng khó, thậm chí có thể cấp cho người dùng một số tín dụng
          để họ có thể tạo bài hát cho từ vựng khó của mình. Chúng tôi lấy các
          câu ví dụ từ các mục từ vựng tại đây:{" "}
          <a
            href="https://hoangchamchi.org/content"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Hoangchamchi.org
          </a>
          .
        </p>

        <p className="mb-4">
          Hãy ghé qua Discord của Hoangchamchi (liên kết ở chân trang) để chia
          sẻ suy nghĩ của bạn.
        </p>




        {/* <div className="bg-gray-100 p-4 rounded-md shadow-inner mt-5">
          <h2 className="text-xl font-semibold mb-4">
            Example Vocabulary: `貧しい`
          </h2>
          <p className="text-gray-700 mb-4">
            Below is an example of an AI-generated song created using the
            sentences we explored earlier. This song uses sentences about the
            word <strong>貧しい</strong> (mazushii) in Japanese to craft lyrics:
          </p>


          <div className="text-center">
            <a
              href="https://suno.com/song/7cdd989a-7d71-44ce-a9f3-96643b345063"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Listen to the Song
            </a>
          </div>

        </div> */}



<div className="bg-gray-100 p-6 rounded-md shadow-inner mt-5">
  <h2 className="text-xl font-semibold mb-4">
    Từ vựng ví dụ: `貧しい / 가난한`
  </h2>
  <p className="text-gray-700 mb-4">
    Dưới đây là ví dụ về một bài hát do AI tạo bằng các câu chúng ta đã khám
    phá trước đó. Bài hát này sử dụng các câu về từ <strong>貧しい</strong> (mazushii) trong tiếng Nhật và{" "}
    <strong>가난한</strong> (ganahan) trong tiếng Hàn để tạo lời:
  </p>

  <div className="text-center mb-6">
    <a
      href="https://suno.com/song/7cdd989a-7d71-44ce-a9f3-96643b345063"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
    >
      Nghe bài hát 0
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <a
      href="https://suno.com/song/b7b16b15-81ca-4fe8-9154-fe7bd7dfa3d8"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 text-center"
    >
      Bài hát 1
    </a>
    <a
      href="https://suno.com/song/78f0bf89-7768-4699-bb5a-e0a8dbc7f34f"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 text-center"
    >
      Bài hát 2
    </a>
    <a
      href="https://suno.com/song/64df0188-14e3-41e1-a851-cf02a81de19e"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 text-center"
    >
      Bài hát 3
    </a>
    <a
      href="https://suno.com/song/c6830f42-0d55-4566-b46c-fa97fd25e708"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
    >
      Bài hát 4
    </a>
    <a
      href="https://suno.com/song/cd5fb375-d9e3-4009-9fa5-efcbd2d1cd6f"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-900 text-center"
    >
      Doom Metal Vibes
    </a>
    <a
      href="https://suno.com/song/59729938-9aab-41a6-b1a4-f8151a0bc1a0"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-700 text-center"
    >
      Ví dụ khác
    </a>
    <div className="text-center mt-4">
      <a
        href="https://suno.com/@salsakey3784"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600"
      >
        Thêm ví dụ của Hoangchamchi
      </a>
    </div>
  </div>
</div>










      </div>

      <h3 className="text-3xl font-bold text-center mt-5 mb-5">
        Câu ví dụ cho: 貧しい / 가난한
      </h3>





      <div className="p-6">

  {/* Japanese Section */}
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-center">Tiếng Nhật</h2>
    <p className="text-gray-700 text-center mb-4">
      Từ đang học: <strong>貧しい</strong>
    </p>
    <table className="w-full border border-gray-300 text-sm md:text-base">
      <thead className="bg-gray-200">
        <tr>
          <th className="border px-4 py-2 text-left">Tiếng Nhật</th>
          <th className="border px-4 py-2 text-left">Phiên âm</th>
          <th className="border px-4 py-2 text-left">Bản dịch</th>
        </tr>
      </thead>
      <tbody>
        {data.japanese.map((item, index) => (
          <tr key={index} className="even:bg-gray-100">
            <td className="border px-4 py-2">{item.text}</td>
            <td className="border text-xs px-4 py-2 italic">{item.romanization}</td>
            <td className="border text-sm px-4 py-2">{item.translation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Japanese Section */}
</div>






    </div>
  );
}

// ----------------------------------------------- //

const data = {
  japanese: [
    {
      text: "貧しい家庭で育ったが、彼は一生懸命働いて成功した。",
      romanization:
        "Mazushii katei de sodatta ga, kare wa isshoukenmei hataraite seikou shita.",
      translation:
        "He grew up in a poor family, but he worked hard and succeeded.",
    },
    {
      text: "貧しい国では、教育のアクセスが制限されることが多い。",
      romanization:
        "Mazushii kuni de wa, kyouiku no akusesu ga seigen sareru koto ga ooi.",
      translation: "In poor countries, access to education is often limited.",
    },
    {
      text: "貧しい地域では、飢餓や住宅問題に対処しなければならない。",
      romanization:
        "Mazushii chiiki de wa, kiga ya juutaku mondai ni taisho shinakereba naranai.",
      translation:
        "In poor areas, hunger and housing issues must be addressed.",
    },
    {
      text: "貧しい生活があったおかげで、私は何が大切かを理解している。",
      romanization:
        "Mazushii seikatsu ga atta okage de, watashi wa nani ga taisetsu ka o rikai shite iru.",
      translation:
        "Thanks to experiencing a poor life, I understand what is important.",
    },
    {
      text: "貧しい人々に対して助けを差し伸べるのは、私たちの責任です。",
      romanization:
        "Mazushii hitobito ni taishite tasuke o sashinoberu no wa, watashitachi no sekinin desu.",
      translation: "It is our responsibility to extend help to poor people.",
    },
  ],
};
