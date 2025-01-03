import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import SettingContent from "../component/SettingContent";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Setting = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </div>
      <div
        className={`flex flex-col w-full 
          ${isOpen ? "md:ml-0 ml-0 " : "md:ml-0 ml-[-225px] "} `}
      >
        <NavHead onMenuClick={onMenuClick} isOpen={isOpen} />
        <SettingContent />
      </div>
    </div>
  );
};

export default Setting;
