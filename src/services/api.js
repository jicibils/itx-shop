import axios from "axios";

const BASE_URL = "https://itx-frontend-test.onrender.com";

export const getProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/product`);
  return data;
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/api/product/${id}`);
  return data;
};

export const addToCart = async ({ id, colorCode, storageCode }) => {
  const { data } = await axios.post(`${BASE_URL}/api/cart`, {
    id,
    colorCode,
    storageCode,
  });
  return data;
};
