// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block border rounded-lg p-4 hover:shadow-md transition"
    >
      <img
        src={product.imgUrl}
        alt={product.model}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-lg font-semibold">{product.brand}</h3>
      <p className="text-gray-600">{product.model}</p>
      <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
    </Link>
  );
}
