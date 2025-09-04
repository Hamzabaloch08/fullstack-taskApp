import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTasksApi,
  addTaskApi,
  deleteTaskApi,
  updateTaskApi,
} from "../../api/tasksApi";

// Fetch all tasks
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, thunkAPI) => {
    try {
      const res = await getTasksApi();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch tasks"
      );
    }
  }
);

// Add new task
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (newTask, thunkAPI) => {
    try {
      const res = await addTaskApi(newTask);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to add task"
      );
    }
  }
);

// Delete task
export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (id, thunkAPI) => {
    try {
      const res = await deleteTaskApi(id);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to delete task"
      );
    }
  }
);

// Update task
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await updateTaskApi(id, data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to update task"
      );
    }
  }
);
