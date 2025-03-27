import { useState } from 'react';

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className={`text-blue-700 text-2xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`px-6 transition-all duration-200 ease-in-out ${isOpen ? 'py-4 h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}