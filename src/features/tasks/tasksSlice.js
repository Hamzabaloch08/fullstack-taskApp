import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, removeTask, updateTask } from "./tasksThunks";

const initialState = {
  tasks: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {}, // ab normal reducers ki zaroorat nahi
  extraReducers: (builder) => {
    // Fetch
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Add
    builder
      .addCase(addTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Delete
    builder
      .addCase(removeTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(removeTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Update
    builder
      .addCase(updateTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default tasksSlice.reducer;
