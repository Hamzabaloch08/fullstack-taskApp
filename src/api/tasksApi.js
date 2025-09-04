import axiosInstance from "./axiosInstance";

// Fetch all tasks
export const getTasksApi = () => axiosInstance.get("/tasks");

// Add new task
export const addTaskApi = (newTask) => axiosInstance.post("/tasks", newTask);

// Delete task
export const deleteTaskApi = (id) => axiosInstance.delete(`/tasks/${id}`);

// Update task
export const updateTaskApi = (id, data) => axiosInstance.put(`/tasks/${id}`, data);
