import React, { useEffect, useState } from "react";
import AddTaskButton from "../tasks/button/AddTaskButton";
import { NavLink } from "react-router";
import {
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiStar,
  FiList,
  FiXCircle,
  FiUser,
} from "react-icons/fi";
import { useSelector } from "react-redux";

const menuItems = [
  { name: "All Tasks", icon: <FiList size={18} /> },
  { name: "Important", icon: <FiStar size={18} /> },
  { name: "Completed", icon: <FiCheckCircle size={18} /> },
  { name: "Incomplete", icon: <FiXCircle size={18} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [profileImg, setProfileImg] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(user, "hello iam hamza");
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`dark:border-gray-800 border-gray-300/70 border-r-[1px] hidden md:flex flex-col justify-between h-screen py-6 px-2
          transition-all duration-300 shadow-lg
          ${isOpen ? "w-64" : "w-16"}
          bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-400
        `}
      >
        {/* Toggle */}
        <div className="flex items-center justify-between px-2 mb-6">
          {isOpen && (
            <h1 className="text-lg font-semibold tracking-wide uppercase">
              To-Do List
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-300 dark:bg-gray-700 rounded-full p-1 shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            {isOpen ? (
              <FiChevronLeft size={18} />
            ) : (
              <FiChevronRight size={18} />
            )}
          </button>
        </div>

        {/* Add Task */}
        {isOpen && <AddTaskButton width="100%" />}

        {/* Menu */}
        <nav className="mt-6 flex-1">
          <ul className="space-y-3">
            {menuItems.map((item, idx) => (
              <NavLink
                key={idx}
                className={`flex items-center gap-3 font-medium px-4 py-2 rounded-bl-lg
                rounded-tl-lg relative group transition-colors duration-300
                hover:bg-red-400/10 hover:text-pink-600
                ${!isOpen ? "justify-center px-0" : ""}`}
              >
                {item.icon} {/* Icon stays unchanged */}
                {isOpen && (
                  <span className="truncate text-gray-600 dark:text-gray-400">
                    {item.name}
                  </span>
                )}
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-red-500 transition-all duration-300 ease-in-out group-hover:h-full"></span>
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Profile */}
        <div
          className={`flex items-center rounded-lg
          ${
            isOpen
              ? "bg-gray-300 p-3 space-x-3"
              : "bg-gray-300 p-2 justify-center"
          }
          dark:bg-gray-800`}
        >
          {profileImg && profileImg.trim() !== "" ? (
            <img
              className={`rounded-full border-2 border-gray-200 dark:border-gray-600 object-cover transition-all duration-300 
              ${isOpen ? "w-10 h-10" : "w-8 h-8"}`}
              src={profileImg}
              alt="User Avatar"
            />
          ) : (
            <FiUser color="gray" size={isOpen ? 24 : 20} />
          )}

          {isOpen && (
            <div>
              <p className="font-medium text-gray-600 dark:text-gray-400 capitalize">
                {`${user?.firstName}`}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                View Profile
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden justify-around items-center py-3 bg-gray-100 dark:bg-gray-900 shadow-inner">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-pink-600 transition"
          >
            {item.icon} {/* Icon stays unchanged */}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}

        {/* Profile Button */}
        <button className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-pink-600 transition">
          {profileImg ? (
            <img
              className="w-7 h-7 rounded-full border-2 border-gray-300 dark:border-gray-700 object-cover"
              src={profileImg}
              alt="User Avatar"
            />
          ) : (
            <FiUser size={20} />
          )}
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
