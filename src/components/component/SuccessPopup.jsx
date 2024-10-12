import React from "react";
import congrats from "../../img/congrats.svg";
const SuccessPopup = ({ setPop }) => {
  const handlClose = () => {
    setPop(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center relative">
        <div onClick={handlClose} className="absolute top-2 right-2">
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <img src={congrats} alt="" />
        <h2 className="text-2xl font-bold mb-2">Congrats</h2>
        <p className="text-gray-600 mb-4">You just added your arts</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
