import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import BreadCrumbs from "../Components/BreadCrumbs";
import Navigation from "../components/header/Navigation";
import Header from "../components/header";
import Landing from "../components/home/Landing";

const RootLayout = () => {
  const location = useLocation(); // Get the current location
  const noHeaderRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/setting",
    "/wallet",
    "/listing",
    "/help",
    "/help/troubleshooting",
    "/dashboard/viewdetails",
    "/dashboard/adduser",
  ];
  return (
    <>
      {/* Conditionally render the Header based on the current route */}
      {!noHeaderRoutes.includes(location.pathname) && (
        <div className="">
          <Header />
          {/* <Landing /> */}
          {/* <Navigation /> */}
        </div>
      )}
      <Outlet />
      {/* <p>Rootlayout</p> */}
    </>
  );
};

export default RootLayout;
