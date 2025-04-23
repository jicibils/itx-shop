// src/components/ProductSelectors.jsx
import SelectField from "./SelectField";

export default function ProductSelectors({
  product,
  colorCode,
  storageCode,
  setColorCode,
  setStorageCode,
}) {
  const { colors, storages } = product.options;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <SelectField
        id="color-select"
        label="Color:"
        value={colorCode}
        onChange={setColorCode}
        options={colors}
      />
      <SelectField
        id="storage-select"
        label="Almacenamiento:"
        value={storageCode}
        onChange={setStorageCode}
        options={storages}
      />
    </div>
  );
}
