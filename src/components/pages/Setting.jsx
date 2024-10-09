import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import SettingContent from "../component/SettingContent";

const Setting = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead onMenuClick={onMenuClick} isOpen={isOpen} />
        <SettingContent />
      </div>
    </div>
  );
};

export default Setting;
