import React, { useState } from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";

const Dashboard = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div className="flex">
      <MainContent />
    </div>
  );
};

export default Dashboard;
