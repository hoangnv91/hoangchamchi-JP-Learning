// app/import-article/page.tsx

'use client';

import { useState, FormEvent } from 'react';

type ApiResponse = {
  content?: string;
  error?: string;
};

export default function ImportArticlePage() {
  const [url, setUrl] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setContent('');

    try {
      const response = await fetch(`/api/fetch-content?url=${encodeURIComponent(url)}`);
      const data: ApiResponse = await response.json();

      if (response.ok) {
        setContent(data.content || '');
      } else {
        setError(data.error || 'Không thể tải nội dung');
      }
    } catch (error) {
      setError('Đã xảy ra lỗi. Vui lòng thử lại.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Nhập bài viết (tiếng Nhật)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nhập URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </label>
        <button type="submit">Tải nội dung</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {content && (
        <div>
          <h2>Nội dung bài viết</h2>
          <pre>{content}</pre>
        </div>
      )}
    </div>
  );
}
