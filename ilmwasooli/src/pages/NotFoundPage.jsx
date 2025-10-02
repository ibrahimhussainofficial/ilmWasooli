// NotFoundPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-[#2dce89] mb-4">404</h1>
      <p className="text-2xl md:text-3xl mb-6 text-gray-700">Oops! Page Not Found.</p>
      <p className="mb-8 max-w-md text-center text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#2dce89] hover:bg-[#2dce89] text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Go Back Home
      </button>
    </section>
  );
}
