import React, { useState } from "react";
import artCard from "../../img/artcard.svg";
import ArtCard from "../component/ArtCard";
import SuccessPopup from "../component/SuccessPopup";
import BreadCrumbs from "../component/BreadCrumbs";
import profileImg from "../../img/profileimg.png";

const ViewDetails = () => {
  const [pop, setPop] = useState(false);
  const handlePop = () => {
    setPop(true);
  };
  return (
    <>
      <BreadCrumbs />
      <div className="w-full p-8">
        <div className="flex flex-col md:flex-row gap-8  items-center">
          {/* Main NFT Image */}
          <div className="w-full">
            <img src={artCard} alt="" className="w-full rounded-lg " />
          </div>

          {/* NFT Details */}
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-2">Dayco Serpentine Belt</h1>
            <p className="text-gray-600 mb-4">
              Open repair of infrarenal aortic aneurysm or dissection, plus
              repair of associated arterial trauma, following unsuccessful
              endovascular repair; tube prosthesis...
            </p>

            {/* Creator and Owner */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-3 items-center">
                <img src={profileImg} alt="" className="w-[52px]" />
                <div>
                  <p className="text-sm text-gray-500">Creator</p>
                  <p className="font-semibold">Abdulmalik Oyeyemi</p>
                </div>
              </div>
            </div>

            {/* Auction Details */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">Auction End In</p>
                <p className="text-xl font-bold">03 : 12 : 42</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Bid</p>
                <p className="text-xl font-bold">3.89 ETH</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-red-100 text-white p-2 rounded-full">
                ❤️
              </button>
              <button
                className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={handlePop}
              >
                Place A Bid
              </button>
              {pop && <SuccessPopup setPop={setPop} />}
            </div>
          </div>
        </div>

        {/* More Works Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">You may be interested in</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ArtCard />
            <ArtCard />
            <ArtCard />
            <ArtCard />
            <ArtCard />
            <ArtCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
