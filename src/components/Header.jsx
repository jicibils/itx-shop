// Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";
import Breadcrumb from "./Breadcrumb";

export default function Header() {
  const { cartCount } = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 200);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <header className="flex flex-col gap-2 px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-indigo-600 hover:underline"
        >
          <HomeIcon className="w-5 h-5" />
          ITX Shop
        </Link>
        <div
          className={`flex items-center gap-1 text-lg font-semibold transition-transform ${
            animate ? "scale-110 text-indigo-500" : ""
          }`}
        >
          <ShoppingCartIcon className="w-5 h-5" />
          {cartCount}
        </div>
      </div>
      <Breadcrumb />
    </header>
  );
}
