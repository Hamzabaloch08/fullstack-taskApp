import React, { useState } from "react";
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

const menuItems = [
  { name: "All Tasks", icon: <FiList size={18} /> },
  { name: "Important", icon: <FiStar size={18} /> },
  { name: "Completed", icon: <FiCheckCircle size={18} /> },
  { name: "Incomplete", icon: <FiXCircle size={18} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [profileImg, setProfileImg] = useState(
    "" // default avatar
  );

  return (
    <>
      {/* Sidebar */}
      <div
        className={`hidden md:flex bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800 py-6 px-2 h-screen
          ${
            isOpen ? "w-60 md:w-64" : "w-16"
          } flex-col justify-between shadow-lg transition-all duration-300`}
      >
        {/* Toggle */}
        <div className="flex items-center justify-between px-2 mb-6">
          {isOpen && (
            <h1 className="text-lg font-semibold tracking-wide text-[#4a506a] uppercase">
              To-Do List
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-300 rounded-full p-1 shadow-md hover:bg-gray-400 transition cursor-pointer"
          >
            {isOpen ? (
              <FiChevronLeft size={18} />
            ) : (
              <FiChevronRight size={18} />
            )}
          </button>
        </div>

        {/* Add Todo */}
        {isOpen && <AddTaskButton width="100%" />}

        {/* Menu */}
        <nav className="mt-6 flex-1">
          <ul className="space-y-3">
            {menuItems.map((item, idx) => (
              <NavLink
                key={idx}
                className={`flex items-center gap-3 font-medium px-4 py-2 cursor-pointer 
                          relative group
                          transition-colors duration-500 hover:bg-red-400/10 hover:text-pink-600
                          ${!isOpen ? "justify-center px-0" : ""}`}
              >
                {item.icon}
                {isOpen && <span className="truncate">{item.name}</span>}

                {/* Border animation */}
                <span
                  className="absolute right-0 top-0 h-0 w-[2px] bg-red-500 
               transition-all duration-300 ease-in-out 
               group-hover:h-full"
                ></span>
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Profile */}
        <div
          className={`flex items-center bg-gray-300 p-3 rounded-lg 
            ${!isOpen ? "justify-center p-2" : "space-x-3"}`}
        >
          {profileImg ? (
            <img
              className={`rounded-full border-2 border-gray-200 object-cover transition-all duration-300 
                ${isOpen ? "w-10 h-10" : "w-8 h-8"}`}
              src={profileImg}
              alt="User Avatar"
            />
          ) : (
            <FiUser size={isOpen ? 24 : 20} />
          )}

          {isOpen && (
            <div>
              <p className="font-medium text-gray-800">Jane Doe</p>
              <p className="text-sm text-gray-600">View Profile</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-gray-100 to-gray-200 shadow-inner flex md:hidden justify-around items-center py-3">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center text-gray-600 hover:text-pink-600 transition"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}

        {/* Profile Button */}
        <button className="flex flex-col items-center text-gray-600 hover:text-pink-600 transition">
          {profileImg ? (
            <img
              className="w-7 h-7 rounded-full border-2 border-gray-300 object-cover"
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
