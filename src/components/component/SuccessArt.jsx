import React from "react";
import congrats from "../../img/congrats.svg";
import { useNavigate } from "react-router-dom";
const SuccessArt = ({ setPop }) => {
  const navigate = useNavigate();
  const handlClose = () => {
    setPop(false);
  };
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-6  text-center relative md:w-[40%] md:h-[40%]  w-[70%] h-[40%] flex items-center justify-center">
        <div onClick={handlClose} className="absolute top-2 right-2">
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={congrats} alt="" />
          <h2 className="text-2xl font-bold mb-2">Congratulations</h2>
          <p className="text-gray-600 mb-4">
            You just added your art, go to the listing page to view it
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Go to Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessArt;
