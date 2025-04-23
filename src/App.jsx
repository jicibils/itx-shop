// src/App.jsx
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="transition-colors duration-700 bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}
