// src/components/Skeleton.jsx
export default function Skeleton() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 p-4 shadow animate-pulse flex flex-col gap-4"
        >
          <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}
