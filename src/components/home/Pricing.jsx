import React, { useState, useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import Quarterly from "../subpricing/YearlyPricing";
import MonthlyPricing from "../subpricing/MonthlyPricing";
import Footer from "../sublanding/Footer";

const PricingPlan = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [searchParams, setSearchParams] = useSearchParams();

  // Ensure the default filter is "monthly" when the page loads
  useEffect(() => {
    if (!searchParams.get("filter")) {
      setSearchParams({ filter: "monthly" });
    }
  }, [searchParams, setSearchParams]);

  const getParam = (key, value) => {
    const sp = new URLSearchParams(searchParams);
    if (value == null) sp.delete(key);
    else sp.set(key, value);
    return `?${sp.toString()}`;
  };

  return (
    <div className="flex justify-center items-center bg-[#1E2238]">
      <div>
        <div className="flex flex-col gap-3 md:px-32 md:py-12 px-6 py-4 ">
          <div className="flex flex-col gap-6 md:gap-8  ">
            <h1 className="text-white font-bold md:text-6xl text-3xl text-center w-[90%] animate__animated animate__fadeInDown">
              Choose your right plan!
            </h1>
            <p className="text-center text-white text-base md:text-lg mb-3 ">
              Select from best plans, ensuring a perfect match. Need more or
              less? Customize your subscription for a seamless fit!
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-3 inline-flex">
              <Link
                className={`px-4 py-2 rounded-lg ${
                  billingCycle === "monthly"
                    ? "bg-[#6271EB] text-white"
                    : "text-gray-600"
                }`}
                onClick={() => setBillingCycle("monthly")}
                to={getParam("filter", "monthly")}
              >
                Monthly
              </Link>
              <Link
                className={`px-4 py-2 rounded-lg ${
                  billingCycle === "quarterly"
                    ? "bg-[#6271EB] text-white"
                    : "text-gray-600"
                }`}
                onClick={() => setBillingCycle("quarterly")}
                to={getParam("filter", "quarterly")}
              >
                Quarterly (save 10%)
              </Link>
            </div>
          </div>
          {/* Render based on the filter parameter in URL */}
          {searchParams.get("filter") === "quarterly" && <Quarterly />}
          {searchParams.get("filter") === "monthly" && <MonthlyPricing />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PricingPlan;
