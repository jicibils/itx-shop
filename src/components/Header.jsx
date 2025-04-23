// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";
import Breadcrumb from "./Breadcrumb";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const { cartCount } = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <header className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50 text-gray-900 dark:text-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-indigo-600 hover:underline"
        >
          <HomeIcon className="w-5 h-5" />
          ITX Shop
        </Link>

        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <div className="relative group">
            <ShoppingCartIcon className="w-6 h-6 text-indigo-600" />
            {cartCount > 0 && (
              <span
                className={`absolute -top-2 -right-2 text-white text-[10px] font-medium bg-indigo-600 rounded-full w-5 h-5 flex items-center justify-center transform transition-transform duration-300 ease-out ${
                  animate ? "scale-125" : "scale-100"
                }`}
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <Breadcrumb />
    </header>
  );
}
