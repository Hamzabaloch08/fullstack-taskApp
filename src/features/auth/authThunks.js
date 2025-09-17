import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, checkAuth } from "../../api/authApi";

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await login(credentials);
      const token = res.data.data.token;

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Return user info
      return res.data.data.user || { email: credentials.email };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

// Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await register(userData);
      return res?.data?.data?.user || null;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Register failed");
    }
  }
);

// Logout
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
});

// Check User
export const checkUser = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) return rejectWithValue("No token found");

    try {
      const res = await checkAuth();
      console.log(res?.data?.data.user);
      return res?.data?.data?.user;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Not authenticated"
      );
    }
  }
);
