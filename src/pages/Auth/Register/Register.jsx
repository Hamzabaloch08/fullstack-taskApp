import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { registerUser } from "../../../features/auth/authThunks";
import { clearError,resetRegisterStatus } from "../../../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Redux state
  const { registerStatus, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ firstName, lastName, email, password }));
  };

  // Redirect after success
  useEffect(() => {
    if (registerStatus === "succeeded") {
      navigate("/auth/login");
    }
  }, [registerStatus, navigate]);

  useEffect(() => {
    dispatch(clearError());
    dispatch(resetRegisterStatus());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Join us and explore the dashboard 🚀
        </p>

        {/* Error */}
        {registerStatus === "failed" && error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 dark:bg-red-900/40 dark:text-red-400 px-3 py-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 dark:focus-within:ring-blue-500">
            <FaUser className="text-gray-400 dark:text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 dark:focus-within:ring-blue-500">
            <FaUser className="text-gray-400 dark:text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>

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
            disabled={registerStatus === "loading"}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition disabled:from-blue-300 disabled:to-indigo-300"
          >
            {registerStatus === "loading" ? (
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
            {registerStatus === "loading" ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => {
              dispatch(clearError());
              dispatch(resetRegisterStatus())
              navigate("/auth/login");
            }}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
