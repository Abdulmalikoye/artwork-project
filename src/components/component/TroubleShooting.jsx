import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import MainContent from "./MainContent";

const troubleshootingData = [
  {
    title:
      "I purchased art, but it hasn’t appeared in my collection. What should I do?",
    description:
      "Sometimes, transactions can take a moment to process. If you're sure you completed your purchase but can't find the artwork in your collection, please check your transaction history or refresh the page.",
    linkText: "See more details",
  },
  {
    title:
      "I think I accidentally bought the same artwork twice. Is that possible?",
    description:
      "Mistakes can happen! If you believe you’ve made a duplicate purchase, please review your purchase history. If you need further assistance, reach out to our support team.",
    linkText: "See more details",
  },
  {
    title: "The platform isn’t functioning properly. What now?",
    description:
      "If our site or your profile isn't loading correctly, or if you're facing issues creating, buying, or selling art, try clearing your cache or using a different browser. If the problem persists, please contact support.",
    linkText: "See more details",
  },
  {
    title: "Why can’t I find an artwork I previously bought?",
    description:
      "Don’t worry! If an artwork is missing from your collection, it could be a temporary glitch. Ensure your account is connected properly. If you still can’t find it, please submit a support request.",
    linkText: "See more details",
  },
];

function TroubleShooting() {
  return (
    <div className="p-8 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Troubleshooting</h1>

      {/* Content Sections */}
      <div className="space-y-6">
        {troubleshootingData.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-[#CFDBD5 rounded-xl"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a href="#" className="text-blue-500 hover:underline">
              {item.linkText}
            </a>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-8 p-6 bg-[#E5E8FF] rounded-lg flex items-center justify-between">
        <span className="text-gray-700 md:text-lg text-sm">
          Not finding what you need? Find category-specific content in the Help
          Center.
        </span>
        <button className="bg-[#6271EB] text-white md:px-4 px-3 py-2 rounded-lg hover:bg-[#4d61fd]">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default TroubleShooting;
