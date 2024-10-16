import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import notification from "../../img/notification.svg";
import profileImg from "../../img/profileimg.png";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";
import Navigation from "../header/Navigation";

const NavHead = ({ onMenuClick, sidebarOpen }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();
  const [isOpen, setIsopen] = useState(false);
  const togglePopup = () => {
    setIsopen(!isOpen);
  };
  const closePopup = () => {
    setIsopen(false);
  };

  return (
    <>
      <header className="w-full bg-white flex justify-between items-center relative p-8">
        <div className="flex gap-2 ">
          {/* Hello
        {currentUser.displayName ? currentUser.displayName : currentUser.email},
        you are now logged in. */}
          <button
            className={` ${
              sidebarOpen ? "hidden" : "p-2 text-gray-600 md:hidden"
            }`} // Hide button on desktop
            onClick={onMenuClick}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <SearchBar />
        </div>

        <div className="flex items-center space-x-4 gap-3">
          <div className=" p-4 rounded-full bg-white border-2 border-[#F3F3F3]">
            <img src={notification} alt="" />
          </div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={togglePopup}
          >
            <img src={profileImg} alt="" className="w-[52px]" />
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="absolute top-24 z-10 mt-2 w-56 right-5 bg-white rounded-lg shadow-lg">
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Profile</h2>
              <button onClick={closePopup} className="text-gray-500">
                &times;
              </button>
            </div>
            <div className="mt-4">
              <img
                src={profileImg}
                alt="Profile"
                className="h-10 rounded-full mx-auto"
              />
              {/* Check if currentUser exists before accessing email */}
              <p className="text-center">
                {currentUser
                  ? currentUser.email
                    ? currentUser.email
                    : ""
                  : "No user logged in"}
              </p>
            </div>

            <div className="mt-4 flex justify-center">
              {userLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      doSignOut().then(() => {
                        navigate("/login");
                      });
                    }}
                    className="text-sm text-white  px-6 py-3 rounded-sm bg-blue-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                // <>
                //   <Link className="text-sm text-blue-600 underline" to={"/login"}>
                //     Login
                //   </Link>
                //   <Link className="text-sm text-blue-600 underline" to={"/register"}>
                //     Register New Account
                //   </Link>
                // </>
                <Navigation />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavHead;
