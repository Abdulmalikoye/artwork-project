import React from "react";
import { Link, useNavigate } from "react-router-dom";
import error from "../../img/error-404.svg";
import Footer from "../sublanding/Footer";

const Error404 = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col gap-12  bg-[#1E2238]">
        <div className="flex flex-col gap-12 md:px-32 md:py-12 px-6 py-4 ">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8  md:py-12 py-6">
            <h1 className="text-white font-bold md:text-5xl lg:text-7xl text-3xl text-center md:w-[50%] animate__animated animate__fadeInDown mb-4">
              Go home, you are drunk!
            </h1>
            <button
              onClick={handleNavigate}
              className="bg-[#6271EB] px-8 py-3 rounded-md text-white"
            >
              Go home
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img src={error} alt="" className="h-[90%] items-center" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Error404;
