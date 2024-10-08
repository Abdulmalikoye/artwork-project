import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
