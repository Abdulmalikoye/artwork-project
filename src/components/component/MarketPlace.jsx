import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import MainContent from "./MainContent";

const marketplaceData = [
  {
    title: "What arts does ArtLab support?",
    description:
      "ArtLab supports a diverse range of art forms, including paintings, sculptures, photography, digital art, and more. Whether you're an artist or a collector, you’ll find a variety of styles and mediums to explore.",
    linkText: "Discover supported arts",
  },
  {
    title: "Why should I use the ArtLab marketplace?",
    description:
      "ArtLab offers a unique marketplace where artists can showcase their work and connect with art enthusiasts. With a user-friendly interface, secure transactions, and a vibrant community, it’s the perfect place to buy and sell art.",
    linkText: "Learn about the marketplace",
  },
  {
    title: "Can sellers place a bid?",
    description:
      "Yes! Sellers can place bids on artworks, allowing for a dynamic buying and selling experience. This feature encourages engagement and helps artists gauge interest in their creations.",
    linkText: "Find out more about bidding",
  },
  {
    title: "Can I post multiple artworks?",
    description:
      "Absolutely! Artists can post multiple artworks to showcase their collection. There’s no limit to how many pieces you can display, so feel free to share all your creative expressions!",
    linkText: "Start posting your artworks",
  },
];

function MarketPlace() {
  return (
    <div className="p-8 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Using ArtLab Marketplace</h1>

      {/* Content Sections */}
      <div className="space-y-6">
        {marketplaceData.map((item, index) => (
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
      <div className="mt-8 p-6 bg-purple-100 rounded-lg flex items-center justify-between">
        <span className="text-gray-700 md:text-lg text-sm">
          Not finding what you need? Find category-specific content in the Help
          Center.
        </span>
        <button className="bg-purple-600 text-white md:px-4 px-3 py-2 rounded-lg hover:bg-purple-700">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default MarketPlace;
