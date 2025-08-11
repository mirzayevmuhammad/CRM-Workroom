import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../index.css";
const RootLayout = () => {
  return (
    <div className="">
      <div className="flex pt-[20px] pb-[25px] pl-[20px]  bg-[#F4F9FD]  ">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
