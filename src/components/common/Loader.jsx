import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50">
      <div className="flex items-end space-x-1">
        <span className="w-1.5 h-5 rounded bg-gradient-to-t from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 animate-[bounce_1s_ease-in-out_infinite]"></span>
        <span className="w-1.5 h-8 rounded bg-gradient-to-t from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 animate-[bounce_1s_ease-in-out_infinite] [animation-delay:200ms]"></span>
        <span className="w-1.5 h-5 rounded bg-gradient-to-t from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 animate-[bounce_1s_ease-in-out_infinite] [animation-delay:400ms]"></span>
      </div>
    </div>
  );
};

export default Loader;
