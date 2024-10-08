import React from "react";
import artlogoblue from "../../img/artlogoblue.svg";
import { Link, NavLink } from "react-router-dom";
import questionMark from "../../img/question-mark.svg";

const Sidebar = () => {
  return (
    <div className="w-56  bg-[#F7F9FA] h-fit gap-14 p-8 flex flex-col ">
      <div className="flex p-2 gap-2 justify-center items-center">
        <img src={artlogoblue} alt="" className="h-[56px] " />
      </div>
      <div>
        <div className="space-y-4 flex flex-col items-start ">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "w-full text-[#6271EB] bg-[#6272eb34] p-2 rounded-md flex items-center gap-2" // Active styles
                : "text-gray-600 hover:text-blue-600 p-2 flex items-center gap-2"
            }
          >
            <ion-icon name="grid-outline"></ion-icon> Dashboard
          </NavLink>
          <NavLink
            to="/listing"
            className={({ isActive }) =>
              isActive
                ? "w-full text-[#6271EB] bg-[#6272eb34] p-2 rounded-md flex items-center gap-2" // Active styles
                : "text-gray-600 hover:text-blue-600 p-2 flex items-center gap-2"
            }
          >
            <ion-icon name="compass-outline"></ion-icon> Listing
          </NavLink>
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              isActive
                ? "w-full text-[#6271EB] bg-[#6272eb34] p-2 rounded-md flex items-center gap-2" // Active styles
                : "text-gray-600 hover:text-blue-600 p-2 flex items-center gap-2"
            }
          >
            <ion-icon name="wallet-outline"></ion-icon> Wallet
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              isActive
                ? "w-full text-[#6271EB] bg-[#6272eb34] p-2 rounded-md flex items-center gap-2" // Active styles
                : "text-gray-600 hover:text-blue-600 p-2 flex items-center gap-2"
            }
          >
            <ion-icon name="settings-outline"></ion-icon> Setting
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive
                ? "w-full text-[#6271EB] bg-[#6272eb34] p-2 rounded-md flex items-center gap-2" // Active styles
                : "text-gray-600 hover:text-blue-600 p-2 flex items-center gap-2"
            }
          >
            <ion-icon name="help-circle-outline"></ion-icon> Help
          </NavLink>
        </div>
      </div>
      <div className=" bg-[#6271EB] p-6 rounded-lg">
        <img src={questionMark} alt="" className=" " />
        <div className="  text-center ">
          <div className="flex flex-col items-center justify-center gap-2 my-2">
            <h3 className="font-bold text-lg text-white">Go Pro</h3>
            <p className="text-sm text-white mb-4">
              Get premium to access all features
            </p>
          </div>
          <button className="font-bold w-full bg-white text-[#6271EB] py-2 rounded-lg text-sm">
            Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
