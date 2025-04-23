const CACHE_EXPIRY_MS = 60 * 60 * 1000; // 1 hora

export const getCache = (key) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;
  const { data, expiry } = JSON.parse(cached);
  return Date.now() < expiry ? data : null;
};

export const setCache = (key, data) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      expiry: Date.now() + CACHE_EXPIRY_MS,
    })
  );
};
