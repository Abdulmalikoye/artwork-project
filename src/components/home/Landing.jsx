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
            The first NFT marketplace to allow content creators to select and
            pin licenses for the best NFTs to showcase
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

      <section className="md:px-32 md:py-12 px-6 py-4">
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
                Intensely Passionate Worker
              </h3>
              <p className="text-gray-600">
                Passion for work is an enthusiasm and excitement for what you
                do.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#EDEDED] rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4">
                {/* Icon 2 */}
                💡
              </div>
              <h3 className="text-xl font-bold mb-2">
                Innovative Team Contributors
              </h3>
              <p className="text-gray-600">
                A creative team is to design and execute campaigns & encourage.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4">
                {/* Icon 3 */}
                🔧
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation Solutions</h3>
              <p className="text-gray-600">
                Using either completely concepts finding new ways of using
                existing.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4">
                {/* Icon 4 */}
                🔍
              </div>
              <h3 className="text-xl font-bold mb-2">
                Creative Problem-Solving
              </h3>
              <p className="text-gray-600">
                Product quality refers to how well a product satisfies our
                customer.
              </p>
            </div>

            {/* Card 5 */}
            <div className="border border-[#EDEDED] rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4 animated hover:animate__bounce">
                {/* Icon 5 */}
                💬
              </div>
              <h3 className="text-xl font-bold mb-2">Client Contentment</h3>
              <p className="text-gray-600">
                Happy customers are delighted because of the customer services.
              </p>
            </div>

            {/* Card 6 */}
            <div className="border border-[#EDEDED] rounded-lg p-6 text-center  hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-500 text-4xl mb-4 animated hover:animate__bounce">
                {/* Icon 6 */}
                💖
              </div>
              <h3 className="text-xl font-bold mb-2">Smooth Interaction</h3>
              <p className="text-gray-600">
                Simplicity is used loosely to refer to the need to minimize a
                process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-32 md:py-12 px-6 py-12 mt-5 relative bg-[#E5E8FF]">
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
              Easily create custom landing pages with Fastland that convert more
              visitors than any other website. Fast & Effortless.
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
        <div className="grid md:grid-cols-2 gap-8 pt-4 justify-center">
          <div className="w-[90%]">
            <img src={imgOpp1} alt="" />
            <div className="flex flex-col gap-4 mb-3 mt">
              <h1 className="font-bold md:text-3xl text-2xl mt-3">
                Evaluating Investment Potential.
              </h1>
              <p className="w-full">
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
            <img src={imgOpp2} alt="" />
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
            <img src={imgOpp3} alt="" />
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
            <img src={imgOpp4} alt="" />
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
        </div>
      </section>
      <ArtProfileGallery />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
