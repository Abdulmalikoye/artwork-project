import React from "react";
import BreadCrumbs from "../components/component/BreadCrumbs";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/component/Sidebar";
import NavHead from "../components/component/NavHead";
import MainHow from "../components/component/MainHow";

const HelpLayout = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead onMenuClick={onMenuClick} isOpen={isOpen} />
        <BreadCrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default HelpLayout;
