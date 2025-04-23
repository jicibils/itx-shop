import axios from "axios";

const BASE_URL = "https://itx-frontend-test.onrender.com";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/product`);
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/product/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching products by id:", err);
    throw err;
  }
};

export const addToCart = async ({ id, colorCode, storageCode }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/cart`, {
      id,
      colorCode,
      storageCode,
    });
    return data;
  } catch (err) {
    console.error("Error adding product to cart:", err);
    throw err;
  }
};
