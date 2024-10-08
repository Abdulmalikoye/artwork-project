import React from "react";
import artCard from "../../img/artcard.svg";

const ArtCard = () => {
  return (
    <div className=" p-4 rounded-lg art-card">
      <img src={artCard} alt="" className="w-full rounded-lg mb-4" />

      <h2 className="text-xl font-semibold my-2">NFT Title</h2>
      <p className="text-gray-600">By Artist Name</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">18.99 ETH</span>
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          Place a Bid
        </button>
      </div>
    </div>
  );
};

export default ArtCard;
