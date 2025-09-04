import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineWarning, AiOutlineHome } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <AiOutlineWarning className="w-16 h-16 text-red-500" />
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Back to Home */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            <AiOutlineHome className="w-5 h-5 mr-2" />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
