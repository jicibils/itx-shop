import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const getInitialCount = () => {
  const stored = localStorage.getItem("cartCount");
  return stored ? parseInt(stored, 10) : 0;
};

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(getInitialCount);

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount.toString());
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
