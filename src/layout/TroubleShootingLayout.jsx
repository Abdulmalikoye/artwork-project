import React from "react";
import BreadCrumbs from "../components/component/BreadCrumbs";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/component/Sidebar";
import NavHead from "../components/component/NavHead";
import MainHow from "../components/component/MainHow";

const TroubleShooting = ({ isOpen }) => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div
        className={`flex flex-col w-full 
          ${isOpen ? "md:ml-0 ml-0 " : "md:ml-0 ml-[-225px] "} `}
      >
        <NavHead />
        <BreadCrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default TroubleShooting;
