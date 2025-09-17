import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser, checkUser } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    loginStatus: "idle",
    registerStatus: "idle",
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetLoginStatus: (state) => {
      state.loginStatus = "idle";
    },
    resetRegisterStatus: (state) => {
      state.registerStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "idle";
        state.loginStatus = "idle";
        state.registerStatus = "idle";
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
        localStorage.removeItem("token");
      })

      // CHECK USER
      .addCase(checkUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = "succeeded";
      })
      .addCase(checkUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "failed";
      });
  },
});

export const { clearError, resetLoginStatus, resetRegisterStatus } =
  authSlice.actions;

export default authSlice.reducer;
