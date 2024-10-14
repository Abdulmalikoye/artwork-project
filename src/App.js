import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Dashboard from "./components/pages";
import { AuthProvider, useAuth } from "./contexts/authContext";
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
import DashboadLayout from "./layout/DashboardLayout";
import ListingLayout from "./layout/ListingLayout";
import Error404 from "./components/home/Error404";
import AddUser from "./components/component/AddUser";
import ViewDetails from "./components/pages/ViewDetails";
import GettingStarted from "./components/component/GettingStarted";
import MarketPlace from "./components/component/MarketPlace";
import Safety from "./components/component/Safety";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const currentUser = false;
  const RequireAuth = ({ children }) => {
    const { userLoggedIn } = useAuth();
    console.log("User logged in:", userLoggedIn);
    return userLoggedIn ? children : <Navigate to="/login" />;
  };
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
            <Route path="*" element={<Error404 />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <DashboadLayout
                    isOpen={sidebarOpen}
                    onClose={handleCloseSidebar}
                    onMenuClick={handleMenuClick}
                  />
                </RequireAuth>
              }
            >
              <Route path="" element={<Dashboard />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="viewdetails" element={<ViewDetails />} />
            </Route>
            <Route
              path="listing"
              element={
                <RequireAuth>
                  <ListingLayout
                    isOpen={sidebarOpen}
                    onClose={handleCloseSidebar}
                    onMenuClick={handleMenuClick}
                  />
                </RequireAuth>
              }
            >
              <Route path="" element={<Listing />} />
              <Route path="adduser" element={<AddUser />} />
              <Route path="viewdetails" element={<ViewDetails />} />
            </Route>
            {/* <Route
              path="listing"
              element={
                <RequireAuth>
                  <Listing
                    isOpen={sidebarOpen}
                    onClose={handleCloseSidebar}
                    onMenuClick={handleMenuClick}
                  />
                </RequireAuth>
              }
            /> */}
            <Route
              path="wallet"
              element={
                <RequireAuth>
                  <Wallet
                    isOpen={sidebarOpen}
                    onClose={handleCloseSidebar}
                    onMenuClick={handleMenuClick}
                  />
                </RequireAuth>
              }
            />
            <Route
              path="setting"
              element={
                <RequireAuth>
                  <Setting
                    isOpen={sidebarOpen}
                    onClose={handleCloseSidebar}
                    onMenuClick={handleMenuClick}
                  />
                </RequireAuth>
              }
            />
            <Route path="pricing" element={<Pricing />}>
              <Route path="" />
            </Route>
            <Route path="product" element={<Product />} />
            <Route
              path="help"
              element={
                <RequireAuth>
                  <HelpLayout
                    isOpen={sidebarOpen}
                    onClose={handleCloseSidebar}
                    onMenuClick={handleMenuClick}
                  />
                </RequireAuth>
              }
            >
              <Route path="" element={<Help />} />
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="marketplace" element={<MarketPlace />} />
              <Route path="safety" element={<Safety />} />
              <Route path="troubleshooting" element={<TroubleShootingPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
