// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import ProductSpecs from "../components/ProductSpecs";
import ProductSelectors from "../components/ProductSelectors";
import BackLink from "../components/BackLink";
import AddToCartButton from "../components/AddToCartButton";
import Spinner from "../components/Spinner";
import { getProductById, addToCart } from "../services/api";
import { useCart } from "../hooks/useCart";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [colorCode, setColorCode] = useState("");
  const [storageCode, setStorageCode] = useState("");
  const [loading, setLoading] = useState(true);
  const { setCartCount, cartCount } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setColorCode(data.options.colors[0]?.code || "");
      setStorageCode(data.options.storages[0]?.code || "");
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    await addToCart({ id, colorCode, storageCode });
    setCartCount(cartCount + 1);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    toast.success("Producto añadido al carrito");
  };

  if (loading || !product) return <Spinner />;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 transition-colors duration-700">
      <BackLink>Volver al listado</BackLink>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Image */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-600">
          <img
            src={product.imgUrl}
            alt={product.model}
            className="w-full max-h-[400px] object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6 text-gray-800 dark:text-gray-100 transition-colors duration-600">
          <div>
            <h1 className="text-3xl font-bold leading-tight">
              {product.brand} - {product.model}
            </h1>
            <p className="text-2xl text-indigo-600 font-semibold mt-2">
              {product.price} €
            </p>
          </div>

          <ProductSpecs product={product} />

          <ProductSelectors
            product={product}
            colorCode={colorCode}
            storageCode={storageCode}
            setColorCode={setColorCode}
            setStorageCode={setStorageCode}
          />

          <AddToCartButton handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
