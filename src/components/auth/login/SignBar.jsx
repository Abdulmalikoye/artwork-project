import React from "react";
import reactangleImg from "./../../../../src/img/Rectangle.svg";
import artlogin1 from "./../../../../src/img/artlogin1.svg";
import artlogin2 from "./../../../../src/img/artlogin2.svg";
import artlogin3 from "./../../../../src/img/artlogin3.svg";
import artlogin4 from "./../../../../src/img/artlogin-4.svg";
import artlogo from "./../../../../src/img/artlab-logo.svg";

const SignBar = () => {
  return (
    <>
      <div className="w-[50%] h-screen  md:rounded-l-lg md:p-0 p-4 md:block hidden">
        {/* Background image */}
        <div
          className="h-full bg-cover bg-center bg-no-repeat bg-[#1E2238] rounded-2xl flex items-center justify-center relative"
          style={{ backgroundImage: `url(${reactangleImg})` }}
        >
          <div className="absolute top-20 left-8">
            <img src={artlogo} alt="" className="inline-block" />
          </div>
          <div className="  flex flex-col items-start justify-between p-8">
            <div className=" flex flex-col gap-3  items-start text-white my-5  ">
              <h1 className="font-bold text-5xl  text-left">
                Ready to Sell Your Art? Start Here!
              </h1>
              <p className="text-lg text-left">
                Share your passion, showcase your masterpieces, and connect with
                potential buyers who appreciate your unique style.
              </p>
            </div>
            <div className="flex flex-start">
              <div className="cards space-x-2 flex p-4 mx-auto bg-[#2d3250c0]  items-start justify-between rounded-lg">
                <div className="">
                  <img src={artlogin1} alt="" />
                </div>
                <div className="">
                  <img src={artlogin2} alt="" />
                </div>
                <div className="">
                  <img src={artlogin3} alt="" />
                </div>
                <div className="">
                  <img src={artlogin4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignBar;
