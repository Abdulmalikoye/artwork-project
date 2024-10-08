import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import SettingContent from "../component/SettingContent";

const Setting = () => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead />
        <SettingContent />
      </div>
    </div>
  );
};

export default Setting;
