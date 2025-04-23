// src/components/ProductSpecs.jsx
export default function ProductSpecs({ product }) {
  return (
    <ul className="text-sm text-gray-700 grid grid-cols-2 gap-y-1">
      <li>
        <strong>CPU:</strong> {product.cpu}
      </li>
      <li>
        <strong>RAM:</strong> {product.ram}
      </li>
      <li>
        <strong>OS:</strong> {product.os}
      </li>
      <li>
        <strong>Resolución:</strong> {product.displayResolution}
      </li>
      <li>
        <strong>Batería:</strong> {product.battery}
      </li>
      <li>
        <strong>Cámaras:</strong> {product.primaryCamera} /{" "}
        {product.secondaryCamera}
      </li>
      <li>
        <strong>Dimensiones:</strong> {product.dimentions}
      </li>
      <li>
        <strong>Peso:</strong> {product.weight}
      </li>
    </ul>
  );
}
