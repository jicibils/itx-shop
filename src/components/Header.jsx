// Header.jsx
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";

export default function Header() {
  const { cartCount } = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 200);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <header
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href="/">🏠 ITX Shop</a>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          transform: animate ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.2s ease",
        }}
      >
        🛒 {cartCount}
      </div>
    </header>
  );
}
