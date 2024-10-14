import React, { useState } from "react";
// import { useAuth } from '../../contexts/authContext'
import Sidebar from "../component/Sidebar";
import NavHead from "../component/NavHead";
import MainContent from "../component/MainContent";
import FilterComponent from "../component/FilterComponent";
import ArtCard from "../component/ArtCard";
import AddUser from "../component/AddUser";
import { useNavigate } from "react-router-dom";
import ArtGallery from "../component/ArtGallery";

const Listing = ({ isOpen, onClose, onMenuClick }) => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    navigate("/listing/adduser");
  };
  const closePopup = () => {
    return setPopup(false);
  };
  return (
    <>
      <div className="flex flex-col w-full ">
        <h1 className="text-3xl font-bold mb-6 px-8">Listing</h1>
        <div className="flex items-center justify-between gap-12 px-8 w-full">
          <FilterComponent handlePopup={handlePopup} />
          <button
            className=" bg-[#6271EB] text-white  px-4 py-2 rounded"
            onClick={handlePopup}
          >
            New Art
          </button>
          {/* {popup && <AddUser closePopup={closePopup} />} */}
        </div>
        <div className=" px-8 ">
          <ArtGallery />
          {/* <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard /> */}
        </div>
      </div>
    </>
  );
};

export default Listing;
