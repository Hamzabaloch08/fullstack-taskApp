import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, logout, checkAuth } from "../../api/authApi";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await login(credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await register(userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Register failed");
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await logout();
});

export const checkAuthUser = createAsyncThunk(
  "auth/check",
  async (_, { rejectWithValue }) => {
    try {
      const res = await checkAuth();
      console.log(res?.data)
      return res?.data;
    } catch (err) {
      return rejectWithValue("Not authenticated");
    }
  }
);
