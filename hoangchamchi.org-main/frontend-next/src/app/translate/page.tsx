'use client';

// pages/translate.js

import { useState } from 'react';
import UnifiedGptComponent from '@/components-parser/UnifiedGptComponent';  // Adjust the path as necessary

const TranslatePage = () => {
  const [inputText, setInputText] = useState(
    "日本語のテキストを入力してください。"
  );
  const [translatedText, setTranslatedText] = useState('');

  const gptTranslateUrl = '/d-api/v1/translate';

  const handleTranslate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(gptTranslateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setTranslatedText(data.translatedText || 'Lỗi dịch');
    } catch (error) {
      console.error('Error:', error);
      setTranslatedText('Lỗi dịch');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Dịch văn bản (tiếng Nhật)</h1>

        <form onSubmit={handleTranslate} className="space-y-4">
          <textarea
            value={inputText} // Pre-fill the text here
            onChange={(e) => setInputText(e.target.value)}
            rows={5} // Correctly passed as a number
            cols={40} // Correctly passed as a number
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Translate
          </button> */}
        </form>

        {translatedText && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Văn bản đã dịch:</h2>
            <p className="text-gray-700 mt-2">{translatedText}</p>
          </div>
        )}

        {/* Pass the input text to the UnifiedGptComponent for translation */}
        <UnifiedGptComponent
          japaneseText={inputText}
          url={gptTranslateUrl}
          task="translate"
        />

        {/* Disclaimer */}
        <div className="mt-6 text-sm text-gray-600">
          <p>Công cụ này được thiết kế cho việc dịch tiếng Nhật.</p>
          <p className="text-xs mt-1">
            Xin lưu ý rằng bản dịch có thể không chính xác 100% và không nên dùng cho các văn bản quan trọng (như văn bản y tế, pháp lý).
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;













// --------------------------- //

// "use client";

// // pages/translate.js

// import { useState } from "react";
// import UnifiedGptComponent from "@/components-parser/UnifiedGptComponent"; // Adjust the path as necessary

// const TranslatePage = () => {
//   const [inputText, setInputText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");

//   const gptTranslateUrl = "/d-api/v1/translate";

//   // Handle form submission to send the input text for translation
//   const handleTranslate = async (e) => {
//     e.preventDefault();

//     // Send the input text to the translation component and get the result
//     try {
//       const response = await fetch(gptTranslateUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: inputText }),
//       });

//       if (!response.ok) {
//         throw new Error("Translation failed");
//       }

//       const data = await response.json();
//       setTranslatedText(data.translatedText || "Translation error");
//     } catch (error) {
//       console.error("Error:", error);
//       setTranslatedText("Translation error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col  items-center bg-gray-100 py-10">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Translate Text</h1>

//         <form onSubmit={handleTranslate} className="space-y-4">
//           <textarea
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             rows={5} // Correctly passed as a number
//             cols={40} // Correctly passed as a number
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
//           >
//             Translate
//           </button>
//         </form>

//         {translatedText && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold text-gray-800">Translated Text:</h2>
//             <p className="text-gray-700 mt-2">{translatedText}</p>
//           </div>
//         )}

//         {/* Pass the input text to the UnifiedGptComponent for translation */}
//         <UnifiedGptComponent
//           japaneseText={inputText}
//           url={gptTranslateUrl}
//           task="translate"
//         />

//         {/* Disclaimer */}
//         <div className="mt-6 text-sm text-gray-600">
//           <p>This tool is designed for Japanese translations.</p>
//           <p className="text-xs">
//             Please note that the translations may not be 100% accurate and should not be used for texts of high importance (such as medical, legal texts).
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TranslatePage;
