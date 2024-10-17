import React from "react";
import artGallery from "../../img/artgallery.svg";

const Footer = () => {
  return (
    <section className="bg-[#1E2238]  md:px-32 px-6 py-6  flex flex-col justify-center items-center text-white">
      <div className="w-full max-w-5xl md:px-32 md:py-12 px-6">
        <div className="text-center mb-8">
          <p className="md:text-lg text-xs mb-4">NEWSLETTER</p>
          <h1 className="md:text-4xl text-2xl font-bold mb-4">
            Sign Up for ArtLab’s Newsletter
          </h1>
          <p className="text-base max-w-2xl mx-auto">
            Always be informed about ArtLab’s latest dates, exhibitions and most
            exciting projects. Sign up for the newsletter and become part of a
            vibrant community that celebrates art, creativity and inspiration.
          </p>
        </div>

        {/* Input fields and button */}
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center  md:w-[80%]">
            <div className="flex flex-col items-center justify-center space-y-4 ">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative w-full max-w-lg">
                {/* Input field */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 pl-4 rounded-lg border-2 border-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 text-black"
                />

                {/* Button inside the input */}
                <button className="absolute right-1 top-1 bottom-1 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Submit &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={artGallery} alt="" />
      </div> */}

      {/* Footer */}
      <footer className="w-full mt-16 md:p-8 p-6 flex items-center justify-center">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Marketplace */}
            <div className="space-y-4">
              <h4 className="font-bold">Marketplace</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Platform Status
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h4 className="font-bold">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Favorites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Watchlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    My Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Rankings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Activity
                  </a>
                </li>
              </ul>
            </div>

            {/* Region */}
            <div className="space-y-4">
              <h4 className="font-bold">Region</h4>
              <p className="text-sm">
                The world’s first marketplace for collectibles and non-fungible
                tokens (NFTs) where anything is possible and all are welcome.
              </p>
              <select className="px-4 py-2 bg-white text-black rounded-lg">
                <option>Currency - USD</option>
                <option>Currency - EUR</option>
                <option>Currency - GBP</option>
              </select>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-8 flex md:flex-row flex-col items-start justify-between md:items-center border-t border-gray-500 pt-4">
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-500">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500">
                License
              </a>
              <a href="#" className="hover:text-blue-500">
                API
              </a>
            </div>
            <div className="text-gray-500">&copy; 2021 All rights reserved</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
