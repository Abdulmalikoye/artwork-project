import React from "react";
import artCard from "../../img/artcard.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ArtCard = ({ title, description, price, imageUrl }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPath = location.pathname.includes("/dashboard")
    ? "/dashboard"
    : "/listing";

  const maxWord = 13;
  const words = description.split(" ");
  const handlePay = () => {
    navigate(`${locationPath}/viewdetails`, {
      state: {
        title,
        description,
        price,
        imageUrl,
      },
    });
  };

  // const handlePay = () => {
  //   navigate("/listing/viewdetails");
  // };
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
      <p className="text-gray-600 md:h-30  lg:20 h-16">
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
