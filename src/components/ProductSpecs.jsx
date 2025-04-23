// src/components/ProductSpecs.jsx
export default function ProductSpecs({ product }) {
  const specs = [
    { label: "CPU", value: product.cpu },
    { label: "RAM", value: product.ram },
    { label: "OS", value: product.os },
    { label: "Resolución", value: product.displayResolution },
    { label: "Batería", value: product.battery },
    {
      label: "Cámaras",
      value: `${product.primaryCamera} / ${product.secondaryCamera}`,
    },
    { label: "Dimensiones", value: product.dimentions },
    { label: "Peso", value: product.weight },
  ];

  return (
    <ul className="text-sm text-gray-700 dark:text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
      {specs.map(({ label, value }) => (
        <li key={label}>
          <strong>{label}:</strong> {value}
        </li>
      ))}
    </ul>
  );
}
