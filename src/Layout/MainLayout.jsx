import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Phone Shop";
    } else {
      document.title = loc.pathname.replace("/", " ");
    }
    if (loc.state) {
      document.title = ` ${loc.state}`;
    }
  }, [loc.pathname, loc.state]);
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
