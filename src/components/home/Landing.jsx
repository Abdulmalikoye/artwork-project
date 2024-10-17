import React from "react";
import heroImg1 from "../../img/hero-img1.svg";
import heroImg2 from "../../img/hero-img2.svg";
import heroImg3 from "../../img/hero-img3.svg";
import h1img from "../../img/h1img.svg";
import h2img from "../../img/h2img.svg";
import h3img from "../../img/h3img.svg";

import imgOpp1 from "../../img/img-opp1.svg";
import imgOpp2 from "../../img/img-opp2.svg";
import imgOpp3 from "../../img/img-opp3.svg";
import imgOpp4 from "../../img/img-opp4.svg";
import shape from "../../img/shape.svg";
import { Link } from "react-router-dom";
import Service from "../sublanding/Service";
import ArtProfileGallery from "../sublanding/ArtProfileGallery";
import Faq from "../sublanding/Faq";
import Footer from "../sublanding/Footer";

const Landing = () => {
  return (
    <div className=" ">
      <section className="md:px-32 h-screen md:h-auto overflow-hidden md:py-12 px-6 py-0 bg-[#1E2238] flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center md:gap-8 gap-2 md:py-12 py-6">
          <h1 className="text-white font-bold md:text-7xl text-3xl text-center md:w-[90%] animate__animated animate__fadeInDown">
            Discover
            <span className="inline-block mx-4">
              <img
                src={h1img}
                alt=""
                className="inline md:h-[80px] h-[32px] md:blur-sm hover:blur-none transition duration-300 ease-in-out"
              />
            </span>
            and sell artworks
            <span className="inline-block mx-4">
              <img
                src={h2img}
                alt=""
                className="inline md:h-[80px] h-[32px] md:blur-sm hover:blur-none transition duration-300 ease-in-out"
              />
            </span>
            from creators
            <span className="inline-block mx-4">
              <img
                src={h3img}
                alt=""
                className="inline md:h-[80px] h-[32px] md:blur-sm hover:blur-none transition duration-300 ease-in-out"
              />
            </span>
          </h1>
          <p className="text-center text-white md:w-[50%]">
            The first art marketplace to allow content creators to select and
            pin licenses for the best art to showcase
          </p>
          <Link to="/register" target="_blank" className=" button">
            <span className="button-content">Explore Now</span>
          </Link>
        </div>

        <div className="container h-[50%]  mt-8">
          <div className="  ">
            <img
              src={heroImg1}
              alt=""
              //   className=" transition-transform duration-300 ease-in-out"
              className="h-full md:block hidden"
            />
          </div>
          <div className="  ">
            <img
              src={heroImg2}
              alt=""
              // className=" z-10 transition-all duration-300 ease-in-out hover:mx-1  "
              className="h-[500px] md:auto animate__animated animate__fadeIn"
            />
          </div>
          <div className="  z-0">
            <img
              src={heroImg3}
              alt=""
              //   className=" transition-all duration-300 ease-in-out "
              className="md:block hidden"
            />
          </div>
        </div>
      </section>
      <Service />

      <section className="md:px-32 md:py-12 px-6 py-4 flex items-center justify-center">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-bold md:text-5xl text-2xl md:w-[50%] ">
              Principles that guide every action we take
            </h1>
            <p className="text-[#656C7B] md:w-[40%] md:text-lg text-base">
              Creating a well-defined course of action for each endeavor by
              incorporating essential foundational principles.
            </p>
          </div>
          <div className="container mx-auto  py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="card-first border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 text-4xl mb-4">
                  {/* Icon 1 */}⚡
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Passionate Artists Community
                </h3>
                <p className="text-gray-600">
                  ArtLab thrives on passion and creativity, where every artist
                  pours their heart into their work.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-[#EDEDED] rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 text-4xl mb-4">
                  {/* Icon 2 */}
                  💡
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Collaborative Curators
                </h3>
                <p className="text-gray-600">
                  At ArtLab, teamwork is key. Our collaborative approach allows
                  artists and curators to work together, design exhibitions
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 text-4xl mb-4">
                  {/* Icon 3 */}
                  🔧
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Innovative Art Solutions
                </h3>
                <p className="text-gray-600">
                  ArtLab leverages technology and creativity to bring new ways
                  of experiencing and showcasing art.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 text-4xl mb-4">
                  {/* Icon 4 */}
                  🔍
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Creative Problem-Solving in Art
                </h3>
                <p className="text-gray-600">
                  ArtLab’s community thrives on overcoming challenges with
                  creative flair, ensuring every piece of art reaches its
                  potential
                </p>
              </div>

              {/* Card 5 */}
              <div className="border border-[#EDEDED] rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 text-4xl mb-4 animated hover:animate__bounce">
                  {/* Icon 5 */}
                  💬
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Collector Satisfaction
                </h3>
                <p className="text-gray-600">
                  At ArtLab, collectors’ happiness is paramount. We ensure that
                  each experience, from discovering to purchasing art
                </p>
              </div>

              {/* Card 6 */}
              <div className="border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 text-4xl mb-4 animated hover:animate__bounce">
                  {/* Icon 6 */}
                  💖
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Smooth Interaction for Buyers and Artists
                </h3>
                <p className="text-gray-600">
                  ArtLab focuses on simplifying the art-buying and showcasing
                  process, ensuring smooth, intuitive interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-32 md:py-12 px-6 py-12 mt-5   relative bg-[#E5E8FF] flex items-center justify-center">
        <div>
          <img
            src={shape}
            alt=""
            className="absolute md:top-6 md:right-8 w-[24px] right-2 top-2"
          />
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center mb-4">
            <div className="flex flex-col gap-4 md:w-[70%] mb-6">
              <h1 className="font-bold md:text-5xl text-2xl ">
                Enhance your vision with the services offered by{" "}
                <span className="text-[#6271EB]">Artlab.</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                ArtLab’s community thrives on overcoming challenges with
                creative flair, ensuring every piece of art reaches its
                potential and speaks to its audience.
              </p>
            </div>
            <Link
              to="/register"
              target="_blank"
              className="bg-[#6271EB] px-8 py-3 rounded-md text-white"
            >
              See more works
            </Link>
          </div>
          <div className="grid md:grid-cols-2 md:gap-14 gap-8 pt-4 justify-center">
            <div className="">
              <img src={imgOpp1} alt="" className="w-full" />
              <div className="flex flex-col gap-4 mb-3 mt">
                <h1 className="font-bold md:text-3xl text-2xl mt-3">
                  Collaborative Art Collections
                </h1>
                <p className="w-full">
                  Enable users to create and share collaborative collections,
                  allowing multiple people to curate a list of favorite
                  artworks.
                </p>
              </div>
              <button className="learn">
                <p>Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <img src={imgOpp2} alt="" className="w-full" />
              <div className="flex flex-col gap-4 mb-3 mt-3">
                <h1 className="font-bold md:text-3xl text-2xl">
                  Evaluating Investment Potential.
                </h1>
                <p>
                  Conducting Comprehensive ROI Analysis and Projections for
                  Various Investment Options to Maximize Returns.
                </p>
              </div>
              <button className="learn">
                <p>Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <img src={imgOpp3} alt="" className="w-full" />
              <div className="flex flex-col gap-4 mb-3 mt-3">
                <h1 className="font-bold md:text-3xl text-2xl">
                  Personalized Art Recommendations
                </h1>
                <p>
                  Based on user preferences, browsing history, and favorite
                  categories, ArtLab recommend similar or trending artworks
                </p>
              </div>
              <button className="learn">
                <p>Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <img src={imgOpp4} alt="" className="w-full" />
              <div className="flex flex-col gap-4 mb-3 mt-3">
                <h1 className="font-bold md:text-3xl text-2xl">
                  Live Auctions and Bidding System
                </h1>
                <p>
                  Offer a live auction feature where users can participate in
                  real-time bidding for exclusive artworks
                </p>
              </div>
              <button className="learn">
                <p>Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ArtProfileGallery />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
