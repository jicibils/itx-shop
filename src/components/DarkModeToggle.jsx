// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;
  });

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 shadow hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
    >
      {enabled ? "🌙 Modo oscuro" : "☀️ Modo claro"}
    </button>
  );
}
