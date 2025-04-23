// src/components/SelectField.jsx
export default function SelectField({ id, label, value, onChange, options }) {
  return (
    <div className="flex-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        {options.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
