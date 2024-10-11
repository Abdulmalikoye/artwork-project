import React, { useState } from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import FilterComponent from "../component/FilterComponent";
import ArtCard from "../component/ArtCard";
import AddUser from "../component/AddUser";

const Listing = ({ isOpen, onClose, onMenuClick }) => {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    return setPopup(true);
  };
  const closePopup = () => {
    return setPopup(false);
  };
  return (
    <div className="flex w-full ">
      <div className="">
        <Sidebar isOpen={isOpen} onClose={onClose} />
      </div>
      <div
        className={`flex flex-col w-full 
          ${isOpen ? "md:ml-0 ml-0 " : "md:ml-0 ml-[-225px] "} `}
      >
        <NavHead onMenuClick={onMenuClick} isOpen={isOpen} />
        <div className="flex items-center justify-between gap-12 px-8 w-full">
          <FilterComponent handlePopup={handlePopup} />
          <button
            className="border border-gray-400 px-4 py-2 rounded"
            onClick={handlePopup}
          >
            New Art
          </button>
          {popup && <AddUser closePopup={closePopup} />}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full ">
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
        </div>
      </div>
    </div>
  );
};

export default Listing;
