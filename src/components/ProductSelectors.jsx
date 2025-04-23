// src/components/ProductSelectors.jsx
export default function ProductSelectors({
  product,
  colorCode,
  storageCode,
  setColorCode,
  setStorageCode,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <div>
        <label className="block mb-1 text-sm">Color:</label>
        <select
          value={colorCode}
          onChange={(e) => setColorCode(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {product.options.colors.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 text-sm">Almacenamiento:</label>
        <select
          value={storageCode}
          onChange={(e) => setStorageCode(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {product.options.storages.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
