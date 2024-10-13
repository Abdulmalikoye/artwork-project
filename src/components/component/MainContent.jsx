import React, { useState } from "react";
import ArtCard from "./ArtCard";
import dashboardImg from "../../img/dashboardimg.svg";
import FilterComponent from "./FilterComponent";
import AddUser from "./AddUser";
import { useNavigate } from "react-router-dom";
import ArtGallery from "./ArtGallery";

const MainContent = () => {
  const navigate = useNavigate();
  // const [popup, setPopup] = useState(false);

  const handleClick = () => {
    navigate("/dashboard/adduser");
  };
  // const closePopup = () => {
  //   return setPopup(false);
  // };
  return (
    <main className="w-full px-8">
      <div className="dash-img p-8 rounded-lg mb-8 ">
        {/* <img src={dashboardImg} alt="" className="w-full h-full" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div> */}
        <h1 className="text-3xl text-white font-bold mb-4">
          Create and Sell Extraordinary NFTs
        </h1>
        <p className="text-lg text-white mb-4">
          The world’s first and largest digital marketplace for crypto NFTs.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 border-blue-600 text-white py-2 px-4 rounded">
            Sell artwork
          </button>
          <button className="border border-white text-white py-2 px-4 rounded">
            Explore
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 w-full">
        <FilterComponent />
        <button
          className="border border-gray-400 px-4 py-2 rounded"
          onClick={handleClick}
        >
          New Art
        </button>
        {/* {popup && <AddUser closePopup={closePopup} />} */}
      </div>
      <ArtGallery />
    </main>
  );
};

export default MainContent;
