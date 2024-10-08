import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import MainContent from "./MainContent";

const troubleshootingData = [
  {
    title: "I should have received NFTs, but I didn’t. How do I claim it?",
    description:
      "What's better than an NFT? A NFT that's fair. But you didn’t always want to miss 2 of 5 of the same artwork. Unfortunately, it can happen by accident. If you’re confident you qualify but don’t receive any in the weekly drop.",
    linkText: "See more details",
  },
  {
    title: "I think I minted duplicate NFTs. Is that even possible?",
    description:
      "What's better than an NFT? A NFT that's fair. But you don’t always want to mint 2 of 5 of the same artwork. Unfortunately, it can happen by accident. If you’re confident you qualify but don’t receive any in the drop.",
    linkText: "See more details",
  },
  {
    title: "The Marketplace isn’t working properly. Now what?",
    description:
      "Is our site or your profile not loading? Are you having issues when you try to create, buy, or sell NFTs? What about missing prompts and notifications? Try completing the following.",
    linkText: "See more details",
  },
  {
    title: "I think my NFT disappeared from Marketplace. Why?",
    description:
      "Don’t worry, Rarible can’t take anything out of your wallet or remove NFTs from any blockchain. Can’t see the artwork on your NFTs? If you’re confident you qualify for but don’t receive any in the weekly drop, please file a request.",
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
      <div className="mt-8 p-6 bg-purple-100 rounded-lg flex items-center justify-between">
        <span className="text-gray-700">
          Not finding what you need? Find category-specific content in the Help
          Center.
        </span>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default TroubleShooting;
