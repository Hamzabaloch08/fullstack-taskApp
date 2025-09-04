import React, { useState } from "react";
import AddTaskModal from "../modal/AddTaskModal";

const AddTaskButton = ({ width }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ width }}
        className="bg-purple-600 text-white rounded-lg py-3 text-center text-sm cursor-pointer hover:bg-purple-700 transition"
      >
        Add New Task
      </button>

      {isModalOpen && (
        <AddTaskModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default AddTaskButton;
