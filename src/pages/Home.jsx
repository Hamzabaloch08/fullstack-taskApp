import React, { useEffect } from "react";
import SearchBar from "../components/common/SearchBar";
import { IoMdNotifications } from "react-icons/io";
import AddTaskButton from "../components/tasks/button/AddTaskButton";
import { clearError } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <div className="w-full h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center py-5 px-4 sm:px-8">
        {/* Search */}
        <SearchBar />

        {/* Date */}
        <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base order-last sm:order-none transition-colors duration-300">
          2025, May 02
        </div>

        {/* Add Task + Notification */}
        <div className="flex flex-row-reverse items-center gap-5">
          <AddTaskButton width="140px" />
          <IoMdNotifications className="text-2xl text-purple-500 dark:text-purple-400 cursor-pointer hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
