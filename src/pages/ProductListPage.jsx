// src/pages/ProductListPage.jsx
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useCachedProducts } from "../hooks/useCachedProducts";
import ProductCard from "../components/ProductCard";
import SearchInput from "../components/SearchInput";
import Skeleton from "../components/Skeleton";

export default function ProductListPage() {
  const { products, loading } = useCachedProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const debouncedSetQuery = useMemo(
    () => debounce((value) => setQuery(value), 300),
    [],
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
    `${p.brand} ${p.model}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Catálogo de productos
      </h1>

      <SearchInput value={search} onChange={handleSearchChange} />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Mostrando {filtered.length} producto{filtered.length !== 1 && "s"}
      </p>
      {loading ? (
        <Skeleton />
      ) : filtered.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          No se encontraron productos para tu búsqueda.
        </p>
      )}
    </div>
  );
}
