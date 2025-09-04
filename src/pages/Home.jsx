import React, { useEffect } from "react";
import SearchBar from "../components/common/SearchBar";
import { IoMdNotifications } from "react-icons/io";
import AddTaskButton from "../components/tasks/button/AddTaskButton";
import { clearError } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(clearError())
    }, []);

  return (
    <div className="w-full h-screen bg-gray-50">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center py-5 px-4 sm:px-8">
        {/* Search */}
        <SearchBar />

        {/* Date */}
        <div className="text-gray-600 font-medium text-sm sm:text-base order-last sm:order-none">
          2025, May 02
        </div>

        {/* Add Task + Notification */}
        <div className="flex flex-row-reverse items-center gap-5 p-3">
          <AddTaskButton width="140px" />
          <IoMdNotifications className="text-2xl text-purple-500 cursor-pointer hover:text-purple-800 transition" />
        </div>
      </div>
    </div>
  );
};

export default Home;
