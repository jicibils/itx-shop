// src/components/BackLink.jsx
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackLink({ to = "/", children = "Volver" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:underline"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      {children}
    </Link>
  );
}
