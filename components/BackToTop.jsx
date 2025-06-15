// components/BackToTop.tsx
'use client';

import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg transition duration-300"
      aria-label="Back to top"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}