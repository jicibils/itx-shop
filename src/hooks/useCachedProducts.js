import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

const CACHE_KEY = "products";
const CACHE_EXPIRY_MS = 60 * 60 * 1000; // 1 hora

const getCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;
  const { data, expiry } = JSON.parse(cached);
  return Date.now() < expiry ? data : null;
};

const setCache = (data) => {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      data,
      expiry: Date.now() + CACHE_EXPIRY_MS,
    })
  );
};

export const useCachedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndCache = async () => {
      const cached = getCache();
      if (cached) {
        setProducts(cached);
        setLoading(false);
      } else {
        const data = await getProducts();
        setProducts(data);
        setCache(data);
        setLoading(false);
      }
    };

    fetchAndCache();
  }, []);

  return { products, loading };
};
