import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearError,resetLoginStatus } from "../../../features/auth/authSlice";
import { loginUser } from "../../../features/auth/authThunks";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loginStatus, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (loginStatus === "succeeded" && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [loginStatus, isAuthenticated, navigate]);

  useEffect(() => {
    dispatch(clearError());
    dispatch(resetLoginStatus());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Sign in to continue 🚀
        </p>

        {/* Error / Success */}
        {loginStatus === "failed" && error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 dark:bg-red-900/40 dark:text-red-400 px-3 py-2 rounded">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 dark:focus-within:ring-blue-500">
            <FaEnvelope className="text-gray-400 dark:text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 dark:focus-within:ring-blue-500">
            <FaLock className="text-gray-400 dark:text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 ml-2 cursor-pointer"
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loginStatus === "loading"}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition disabled:from-blue-300 disabled:to-indigo-300"
          >
            {loginStatus === "loading" ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
            ) : null}
            {loginStatus === "loading" ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register link */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <span
            onClick={() => {
              dispatch(clearError());
              dispatch(resetLoginStatus())
              navigate("/auth/register");
            }}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
