import axiosInstance from "./axiosInstance";

// Login
export const login = (credentials) =>
  axiosInstance.post("/auth/login", credentials);

// Register
export const register = (userData) =>
  axiosInstance.post("/auth/signup", userData);

// Logout
export const logout = () => axiosInstance.post("/auth/logout");

// Check Auth
export const checkAuth = () => axiosInstance.get("/auth/check");
