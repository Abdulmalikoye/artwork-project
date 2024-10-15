import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import MainContent from "./MainContent";

const gettingStartedData = [
  {
    title: "What is ArtLab?",
    description:
      "ArtLab is a vibrant online platform where artists and art enthusiasts connect. It allows you to buy, sell, and showcase unique artworks from talented creators worldwide.",
    linkText: "Learn more about ArtLab",
  },
  {
    title: "How do I get started on ArtLab?",
    description:
      "Getting started is easy! Simply create an account, browse the diverse range of artworks, and start exploring your favorites. Whether you’re an artist or a collector, ArtLab has something for everyone.",
    linkText: "Get started now",
  },
  {
    title: "What is a wallet? Why do I need one?",
    description:
      "A wallet is a secure digital tool that allows you to store your artworks and manage your transactions on ArtLab. You need a wallet to buy, sell, and showcase your art, ensuring your creations and purchases are safe.",
    linkText: "Learn about wallets",
  },
  {
    title: "How do I create a new artwork?",
    description:
      "Creating new artwork on ArtLab is simple! Use our user-friendly tools to upload your pieces, add descriptions, and set your prices. Join our community of artists and share your creativity with the world.",
    linkText: "Start creating art",
  },
];

function GettingStarted() {
  return (
    <div className="p-8 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Get Started</h1>

      {/* Content Sections */}
      <div className="space-y-6">
        {gettingStartedData.map((item, index) => (
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

export default GettingStarted;
