// src/pages/ProductListPage.jsx
import { useState } from "react";
import { useCachedProducts } from "../hooks/useCachedProducts";
import { Link } from "react-router-dom";

export default function ProductListPage() {
  const { products, loading } = useCachedProducts();
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    `${p.brand} ${p.model}`.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Buscar por marca o modelo..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((p) => (
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1rem",
                  textAlign: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  background: "#fff",
                  transition: "transform 0.2s",
                }}
              >
                <img
                  src={p.imgUrl}
                  alt={p.model}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>{p.brand}</h3>
                <p>{p.model}</p>
                <strong>${p.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
