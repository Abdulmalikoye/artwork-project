import React from "react";
import BreadCrumbs from "../components/component/BreadCrumbs";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/component/Sidebar";
import NavHead from "../components/component/NavHead";
import MainHow from "../components/component/MainHow";

const TroubleShooting = () => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead />
        <BreadCrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default TroubleShooting;
