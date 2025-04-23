// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ProductSpecs from "../components/ProductSpecs";
import ProductSelectors from "../components/ProductSelectors";
import BackLink from "../components/BackLink";
import AddToCartButton from "../components/AddToCartButton";
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
    toast.success("Producto añadido al carrito");
  };

  if (loading || !product) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6 space-y-4">
      <BackLink>Volver al listado</BackLink>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <img
          src={product.imgUrl}
          alt={product.model}
          className="w-full max-w-sm h-60 object-contain p-4 bg-white rounded shadow"
        />

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">
            {product.brand} - {product.model}
          </h2>
          <p className="text-xl text-indigo-600 font-semibold">
            ${product.price}
          </p>

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
