// 'use client';

interface GrammarBreadcrumbProps {
  decodedTitle: string;
}

const GrammarBreadcrumb: React.FC<GrammarBreadcrumbProps> = ({ decodedTitle }) => {
  return (
    <nav className="mb-6 text-gray-700" aria-label="Đường dẫn">
      <ol className="list-reset flex">
        <li>
          <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Trang chủ
          </a>
        </li>
        <li>
          <span className="mx-2">›</span>
        </li>
        <li>
          <a href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Ngữ pháp
          </a>
        </li>
        <li>
          <span className="mx-2">›</span>
        </li>
        <li className="text-gray-500">{decodedTitle}</li>
      </ol>
    </nav>
  );
};

export default GrammarBreadcrumb;
