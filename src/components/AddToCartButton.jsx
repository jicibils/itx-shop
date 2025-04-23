// src/components/AddToCartButton.jsx
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function AddToCartButton({ handleAddToCart }) {
  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 leading-none"
    >
      <ShoppingCartIcon className="w-5 h-5" />
      Añadir al carrito
    </button>
  );
}
