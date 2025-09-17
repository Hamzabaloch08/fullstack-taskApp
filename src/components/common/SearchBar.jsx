import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-[25%] max-w-[220px] sm:max-w-xs md:max-w-sm">
      <input
        type="text"
        placeholder="Search task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full pl-4 pr-10 py-3 rounded-lg
                   bg-white dark:bg-gray-800
                   text-gray-800 dark:text-gray-200
                   placeholder:text-gray-400 dark:placeholder:text-gray-500
                   border border-gray-200 dark:border-gray-700
                   shadow-sm focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                   transition duration-300 outline-none"
      />
      <HiMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg pointer-events-none" />
    </div>
  );
};

export default SearchBar;
