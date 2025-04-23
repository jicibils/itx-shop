// src/components/SearchInput.jsx
export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por marca o modelo..."
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded mb-6"
    />
  );
}
