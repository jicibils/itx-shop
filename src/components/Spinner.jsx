// src/components/Spinner.jsx
export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent" />
    </div>
  );
}
