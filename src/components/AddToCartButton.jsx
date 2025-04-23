// src/components/AddToCartButton.jsx
export default function AddToCartButton({ handleAddToCart }) {
  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded transition"
    >
      Añadir al carrito
    </button>
  );
}
