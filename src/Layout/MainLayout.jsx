import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
