import Navbar from "../components/common/Navbar";
import Home from "../pages/home";

const DashboardLayout = () => {
  return (
    <div className="flex">
        <Navbar />
        <Home />
    </div>
  );
};

export default DashboardLayout;
