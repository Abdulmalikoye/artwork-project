import React from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import FilterComponent from "../component/FilterComponent";
import ArtCard from "../component/ArtCard";

const Listing = () => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <NavHead />
        <FilterComponent />
        <div className="grid grid-cols-3 gap-8 p-8 ">
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
