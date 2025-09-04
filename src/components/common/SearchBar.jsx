import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {

  const [inputValue,setInputValue] = useState("")
  console.log(inputValue)

  return (
    <div className="relative w-[25%] max-w-[220px] sm:max-w-xs md:max-w-sm">
      <input
        type="text"
        placeholder="Search task"
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full pl-4 pr-10 py-3 border-none bg-white/70 rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                   transition duration-300 placeholder:text-gray-400"
      />
      <HiMagnifyingGlass
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none"
      />
    </div>
  );
};

export default SearchBar;
