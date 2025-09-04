import React from "react";
import Home from "../pages/home";
import Navbar from "../components/common/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex">
        <Navbar />
        <Home />
    </div>
  );
};

export default DashboardLayout;
