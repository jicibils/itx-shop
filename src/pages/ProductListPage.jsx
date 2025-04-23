// src/pages/ProductListPage.jsx
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useCachedProducts } from "../hooks/useCachedProducts";
import ProductCard from "../components/ProductCard";
import SearchInput from "../components/SearchInput";

export default function ProductListPage() {
  const { products, loading } = useCachedProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const debouncedSetQuery = useMemo(
    () => debounce((value) => setQuery(value), 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [debouncedSetQuery]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSetQuery(value);
  };

  const filtered = products.filter((p) =>
    `${p.brand} ${p.model}`.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="p-4">Cargando productos...</p>;

  return (
    <div className="p-6">
      <SearchInput value={search} onChange={handleSearchChange} />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
