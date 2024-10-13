import React from "react";
import artCard from "../../img/artcard.svg";
import { useNavigate } from "react-router-dom";

const ArtCard = ({ title, description, price, imageUrl }) => {
  const maxWord = 10;
  const words = description.split(" ");
  const navigate = useNavigate();

  const handlePay = () => {
    // navigate("/listing/viewdetails");
  };
  return (
    <div className="  rounded-lg art-card  mt-6">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={imageUrl}
          alt=""
          className="h-[260px] w-full bg-cover bg-repeat object-cover transform transition-transform duration-300 md:hover:scale-105"
        />
      </div>

      <h2 className="text-xl font-semibold my-2">{title}</h2>
      <p className="text-gray-600">
        {words.length > maxWord
          ? words.slice(0, maxWord).join(" ") + "..."
          : description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">${price}</span>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handlePay}
        >
          Place a Bid
        </button>
      </div>
    </div>
  );
};
export default ArtCard;
