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
    "/listing/viewdetails",
    "/dashboard/viewdetails",
    "/dashboard/adduser",
    "/listing/adduser",
    "/help/getting-started",
    "/help/marketplace",
    "/help/safety",
    // "/help/troubleshooting",
  ];
  return (
    <>
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
