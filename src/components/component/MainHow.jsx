// HowItWorks.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const articles = [
  {
    title: "Getting started",
    links: [
      "What is an NFT?",
      "What are Proof of Work blockchains?",
      "What is a wallet? Why do I need one?",
      "How to get all UI8 files from ui8free.com?",
    ],
  },
  {
    title: "Using NFT Marketplace",
    links: [
      "Which blockchains does marketplace support?",
      "Why should I use Ethereum?",
      "Why should I use Flow on this marketplace?",
      "Why should I use Tezos on this marketplace?",
    ],
  },
  {
    title: "Safety, Security, and Policies",
    links: [
      "Is connecting my wallet secure?",
      "I bought an NFT, but I think I was scammed?",
      "My verification request was rejected. Can I reapply?",
      "What are your community rules and guidelines?",
    ],
  },
  {
    title: "Troubleshooting",
    links: [
      "I should have received NFT. How do I claim it?",
      "I think I minted duplicate NFTs",
      "Marketplace isn't working properly. Now what?",
      "I think my NFT disappeared. Why?",
    ],
  },
];

function MainHow() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">How it works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  gap-8">
        {articles.map((section, index) => (
          <div key={index} className="p-6 bg-[#EBF0F0] rounded-3xl">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className=" flex flex-col space-y-2">
              {section.links.map((link, linkIndex) => (
                <Link
                  to="troubleshooting"
                  key={linkIndex}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </div>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">
              See more articles
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainHow;
