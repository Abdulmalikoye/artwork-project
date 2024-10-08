import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import WalletContent from "../component/WalletContent";

const Wallet = () => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead />
        <WalletContent />
      </div>
    </div>
  );
};

export default Wallet;
