// src/components/ViewDetails.js
import { useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";
// useLocation;

import ArtGallery from "../component/ArtGallery";
import BreadCrumbs from "../component/BreadCrumbs";
import SuccessPopup from "../component/SuccessPopup";

const ViewDetails = () => {
  const location = useLocation();
  const { title, description, price, imageUrl } = location.state || {};
  const [searchParams] = useSearchParams();
  const [pop, setPop] = useState(false);

  const handlePop = () => {
    setPop(true);
  };

  // Extracting parameters from the search params
  // const title = searchParams.get("title");
  // const description = searchParams.get("description");
  // const price = searchParams.get("price");
  // const imageUrl = searchParams.get("imageUrl");
  return (
    <div>
      <BreadCrumbs />
      <div className="flex w-full p-8">
        <div className="">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Main Artwork Image */}
            <div className="w-full">
              <img
                src={imageUrl}
                alt={title}
                className="w-full rounded-lg h-[400px]"
              />
            </div>

            {/* Artwork Details */}
            <div className="w-full">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="text-gray-600 mb-4">{description}</p>

              {/* Artist Name */}
              <div className="flex items-center gap-4 mb-4">
                {/* <div className="flex gap-3 items-center">
                  <img
                    src={artwork.artistImage || ""}
                    alt=""
                    className="w-[52px]"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Creator</p>
                    <p className="font-semibold">
                      {artwork.artist || "Unknown"}
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Price Details */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-xl font-bold">${price}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
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
            <h2 className="text-2xl font-bold mb-4">
              You may be interested in
            </h2>
            <ArtGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
