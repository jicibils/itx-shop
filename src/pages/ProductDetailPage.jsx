// src/pages/ProductDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, addToCart } from "../services/api";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [colorCode, setColorCode] = useState("");
  const [storageCode, setStorageCode] = useState("");
  const [loading, setLoading] = useState(true);

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
    const result = await addToCart({ id, colorCode, storageCode });
    alert(`Producto añadido al carrito. Total en carrito: ${result.count}`);
    // TODO: add context to handle the global count of elements
  };

  if (loading || !product) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/">← Volver al listado</Link>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2rem",
          alignItems: "flex-start",
        }}
      >
        <img
          src={product.imgUrl}
          alt={product.model}
          style={{
            width: "300px",
            height: "auto",
            objectFit: "contain",
            border: "1px solid #ddd",
            padding: "1rem",
            background: "#fff",
            borderRadius: "8px",
          }}
        />

        <div>
          <h2>
            {product.brand} - {product.model}
          </h2>
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          <p>
            <strong>CPU:</strong> {product.cpu}
          </p>
          <p>
            <strong>RAM:</strong> {product.ram}
          </p>
          <p>
            <strong>Sistema Operativo:</strong> {product.os}
          </p>
          <p>
            <strong>Resolución:</strong> {product.displayResolution}
          </p>
          <p>
            <strong>Batería:</strong> {product.battery}
          </p>
          <p>
            <strong>Cámaras:</strong> {product.primaryCamera} /{" "}
            {product.secondaryCamera}
          </p>
          <p>
            <strong>Dimensiones:</strong> {product.dimentions}
          </p>
          <p>
            <strong>Peso:</strong> {product.weight}
          </p>

          <div style={{ marginTop: "1rem" }}>
            <label>Color: </label>
            <select
              value={colorCode}
              onChange={(e) => setColorCode(e.target.value)}
            >
              {product.options.colors.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label>Almacenamiento: </label>
            <select
              value={storageCode}
              onChange={(e) => setStorageCode(e.target.value)}
            >
              {product.options.storages.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
