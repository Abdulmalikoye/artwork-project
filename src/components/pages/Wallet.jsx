import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import WalletContent from "../component/WalletContent";

const Wallet = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div className="flex w-full">
      <div className="">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </div>
      <div
        className={`flex flex-col w-full 
          ${isOpen ? "md:ml-0 ml-0 " : "md:ml-0 ml-[-225px] "} `}
      >
        <NavHead onMenuClick={onMenuClick} isOpen={isOpen} />
        <WalletContent />
      </div>
    </div>
  );
};

export default Wallet;
