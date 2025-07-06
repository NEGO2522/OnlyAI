import { Link } from "react-router-dom";

/**
 * A simple 404 page shown when no route matches.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you're looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
