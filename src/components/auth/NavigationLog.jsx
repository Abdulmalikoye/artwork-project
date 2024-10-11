import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/artlab-logo.svg";

const NavigationLog = () => {
  // State to control whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between sm:hidden  items-center  px-6 md:px-32 py-5 bg-[#1E2238] text-white">
      {/* Logo */}
      <Link
        to="/"
        className="h-12 font-semibold flex justify-center items-center"
      >
        <img src={logo} alt="ArtLab Logo" className=" w-auto md:h-10 h-5" />
      </Link>

      {/* Desktop Menu - Hidden on small screens */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white hover:text-white">
          Home
        </Link>
        <Link to="/pricing" className="text-white hover:text-white">
          Pricing
        </Link>
        <Link to="/product" className="text-white hover:text-white">
          Product
        </Link>
      </div>

      {/* Sign In Button - Hidden on small screens */}
      <Link
        to="/login"
        target="_blank"
        className="hidden md:block border-2 border-white px-6 py-2 rounded-md text-white hover:bg-white hover:text-[#1E2238] transition"
      >
        Sign in
      </Link>

      {/* Hamburger Icon for Mobile - Visible on small screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
      >
        {/* Icon: if menu is open, show "X", otherwise show "≡" */}
        {isMenuOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>

      {/* Mobile Menu - Shown when `isMenuOpen` is true */}
      {isMenuOpen && (
        <div className="animate__animated animate__slideInRight h-screen z-10 absolute top-16 left-0 w-full bg-[#1E2238] flex flex-col items-center justify-center space-y-6 py-6 md:hidden">
          <Link
            to="/"
            className="text-white hover:text-white"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="text-white hover:text-white"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/product"
            className="text-white hover:text-white"
            onClick={toggleMenu}
          >
            Product
          </Link>
          <Link
            to="/login"
            target="_blank"
            className="border-2 border-white px-6 py-2 rounded-md text-white hover:bg-white hover:text-[#1E2238] transition"
            onClick={toggleMenu}
          >
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationLog;
