import React from "react";
import ArtCard from "./ArtCard";
import dashboardImg from "../../img/dashboardimg.svg";
import FilterComponent from "./FilterComponent";

const MainContent = () => {
  return (
    <main className=" ">
      <div className="dash-img p-10 rounded-lg mx-8 mb-8 ">
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
      <FilterComponent />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mx-8">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>
    </main>
  );
};

export default MainContent;
