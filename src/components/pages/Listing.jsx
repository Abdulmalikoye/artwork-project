import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import FilterComponent from "../component/FilterComponent";
import ArtCard from "../component/ArtCard";

const Listing = ({ isOpen, onClose, onMenuClick }) => {
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
        <FilterComponent />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mx-8 w-full ">
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
