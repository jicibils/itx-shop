// src/components/CustomToaster.jsx
import { Toaster } from "react-hot-toast";

export default function CustomToaster() {
  return (
    <Toaster
      toastOptions={{
        className:
          "rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-gray-700",
      }}
    />
  );
}
