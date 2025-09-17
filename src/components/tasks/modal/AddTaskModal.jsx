import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Add New Task
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded 
                     text-gray-800 dark:text-gray-200 
                     placeholder-gray-400 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded
                     text-gray-800 dark:text-gray-200
                     placeholder-gray-400 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
        />
        <div className="flex justify-end gap-3 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border text-gray-700 dark:text-gray-200 
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
