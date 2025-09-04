import Navbar from "../components/common/Navbar";
import Home from "../pages/Home";

const DashboardLayout = () => {
  return (
    <div className="flex">
        <Navbar />
        <Home />
    </div>
  );
};

export default DashboardLayout;
