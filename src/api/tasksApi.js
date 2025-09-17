import axiosInstance from "./axiosInstance";

const token = localStorage.getItem("token");

// Fetch all tasks
export const getTasksApi = () =>
  axiosInstance.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

// Add new task
export const addTaskApi = (newTask) =>
  axiosInstance.post("/tasks", newTask, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Delete task
export const deleteTaskApi = (id) =>
  axiosInstance.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Update task
export const updateTaskApi = (id, data) =>
  axiosInstance.put(`/tasks/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
