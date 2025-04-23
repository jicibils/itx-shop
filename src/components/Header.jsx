// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">🏠 ITX Shop</Link>
    </header>
  );
}
