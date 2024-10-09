import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Dashboard from "./components/pages";
import { AuthProvider } from "./contexts/authContext";
import Navigation from "./components/header/Navigation";
import "./App.css";
import Pricing from "./components/home/Pricing";
import Product from "./components/home/Product";
import Landing from "./components/home/Landing";
import Listing from "./components/pages/Listing";
import Wallet from "./components/pages/Wallet";
import Setting from "./components/pages/Setting";
import Help from "./components/pages/Help";
import TroubleShootingPage from "./components/pages/TroubleShootingPage";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

const App = () => {
  // Define routes where you want to hide the header
  // State that controls the visibility of the Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Open");
  };

  // Function to close the sidebar (passed as a prop to Sidebar)
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="dashboard"
              element={
                <Dashboard
                  isOpen={sidebarOpen}
                  onClose={handleCloseSidebar}
                  onMenuClick={handleMenuClick}
                />
              }
            />
            <Route
              path="listing"
              element={
                <Listing
                  isOpen={sidebarOpen}
                  onClose={handleCloseSidebar}
                  onMenuClick={handleMenuClick}
                />
              }
            />
            <Route
              path="wallet"
              element={
                <Wallet
                  isOpen={sidebarOpen}
                  onClose={handleCloseSidebar}
                  onMenuClick={handleMenuClick}
                />
              }
            />
            <Route
              path="setting"
              element={
                <Setting
                  isOpen={sidebarOpen}
                  onClose={handleCloseSidebar}
                  onMenuClick={handleMenuClick}
                />
              }
            />
            <Route path="pricing" element={<Pricing />}>
              <Route path="" />
            </Route>
            <Route path="product" element={<Product />} />
            <Route
              path="help"
              element={
                <HelpLayout
                  isOpen={sidebarOpen}
                  onClose={handleCloseSidebar}
                  onMenuClick={handleMenuClick}
                />
              }
            >
              <Route path="" element={<Help />} />
              <Route path="troubleshooting" element={<TroubleShootingPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
