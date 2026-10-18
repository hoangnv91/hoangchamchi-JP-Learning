'use client';


import React, { useState } from 'react';

interface SubtitlesAccordionProps {
  japaneseSubtitlesPlainText: string;
  englishSubtitlesPlainText: string;
}

const SubtitlesAccordion: React.FC<SubtitlesAccordionProps> = ({ japaneseSubtitlesPlainText, englishSubtitlesPlainText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md">
      <button
        onClick={toggleAccordion}
        className="w-full text-left px-4 py-2 bg-gray-100 rounded-md focus:outline-none"
      >
        {isOpen ? 'Ẩn phụ đề' : 'Hiện phụ đề - tiếng Nhật/tiếng Anh song song'}
      </button>
      {isOpen && (
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h2>Chỉ văn bản tiếng Nhật không có mốc thời gian</h2>
              <h3>Văn bản thuần tiếng Nhật</h3>
              <pre className="whitespace-pre-wrap break-words">{japaneseSubtitlesPlainText}</pre>
            </div>

            <div>
              <h2>Chỉ văn bản tiếng Anh không có mốc thời gian</h2>
              <h3>Văn bản thuần tiếng Anh</h3>
              <pre className="whitespace-pre-wrap break-words">{englishSubtitlesPlainText}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubtitlesAccordion;
