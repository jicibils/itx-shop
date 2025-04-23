import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 space-x-1">
      <Link to="/" className="text-indigo-600 hover:underline">
        Home
      </Link>
      {paths.map((segment, idx) => (
        <span key={idx}>
          <span className="text-gray-400"> / </span>
          <span className="capitalize">{decodeURIComponent(segment)}</span>
        </span>
      ))}
    </nav>
  );
}
