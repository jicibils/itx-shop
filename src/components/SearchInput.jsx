// src/components/SearchInput.jsx
export default function SearchInput({ value, onChange }) {
  return (
    <div className="relative max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Buscar por marca o modelo..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm bg-white transition-all duration-300 focus:outline-none dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-lg transition hover:shadow"
      />
      <svg
        className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M17 10A7 7 0 103 10a7 7 0 0014 0z"
        />
      </svg>
    </div>
  );
}
