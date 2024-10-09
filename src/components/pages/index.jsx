import React, { useState } from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";

const Dashboard = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </div>

      <div
        className={`flex flex-col w-full 
          ${isOpen ? "md:ml-0 ml-0 " : "md:ml-0 ml-[-225px] "} `}
      >
        <NavHead onMenuClick={onMenuClick} isOpen={isOpen} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
