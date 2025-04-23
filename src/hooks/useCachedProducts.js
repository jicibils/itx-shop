import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { getCache, setCache } from "../utils/cache";

const CACHE_KEY = "products";

export const useCachedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndCache = async () => {
      const cached = getCache(CACHE_KEY);
      if (cached) {
        setProducts(cached);
        setLoading(false);
      } else {
        const data = await getProducts();
        setProducts(data);
        setCache(CACHE_KEY, data);
        setLoading(false);
      }
    };

    fetchAndCache();
  }, []);

  return { products, loading };
};
