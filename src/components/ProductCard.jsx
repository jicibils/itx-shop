// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col"
    >
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <img
          src={product.imgUrl}
          alt={product.model}
          className="max-h-full object-contain"
        />
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
        {product.model}
      </p>
      <h2 className="font-semibold text-lg">{product.brand}</h2>
      <p className="text-indigo-600 font-bold mt-auto">{product.price} €</p>
    </Link>
  );
}
