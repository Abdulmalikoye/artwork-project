// HowItWorks.js
import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Getting started",
    links: [
      { name: "What is ArtLab?", path: "getting-started" },
      { name: "How do I get started on ArtLab?", path: "getting-started" },
      {
        name: "What is a wallet? Why do I need one?",
        path: "getting-started",
      },
      {
        name: "How do I create a new artwork?",
        path: "getting-started",
      },
    ],
  },
  {
    title: "Using ArtLab Marketplace",
    links: [
      {
        name: "What arts does ArtLab support?",
        path: "marketplace",
      },
      { name: "Why should I use the ArtLab marketplace?", path: "marketplace" },
      {
        name: "Can sellers place a bid?",
        path: "marketplace",
      },
      {
        name: "Can I post multiple artworks?",
        path: "marketplace",
      },
    ],
  },
  {
    title: "Safety, Security, and Policies",
    links: [
      { name: "Is connecting my wallet secure?", path: "safety" },
      {
        name: "I bought an artwork, but I think I was scammed. What should I do?",
        path: "safety",
      },
      {
        name: "My verification request was rejected. Can I reapply?",
        path: "safety",
      },
      {
        name: "What are your community rules and guidelines?",
        path: "safety",
      },
    ],
  },
  {
    title: "Troubleshooting",
    links: [
      {
        name: "I purchased art, but it hasn’t appeared in my collection. What should I do?",
        path: "troubleshooting",
      },
      {
        name: "I think I accidentally bought the same artwork twice. Is that possible?",
        path: "troubleshooting",
      },
      {
        name: "The platform isn’t functioning properly. What now?",
        path: "troubleshooting",
      },
      {
        name: "Why can’t I find an artwork I previously bought?",
        path: "troubleshooting",
      },
    ],
  },
];

function MainHow() {
  return (
    <>
      <div className="w-full">
        <div className="p-8 bg-white">
          <h1 className="text-3xl font-bold mb-6">How it works</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
            {articles.map((section, index) => (
              <div key={index} className="p-6 bg-[#EBF0F0] rounded-3xl">
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <div className="flex flex-col space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      to={link.path} // Updated to use the path from the link object
                      key={linkIndex}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      {link.name}{" "}
                      {/* Updated to use the name from the link object */}
                    </Link>
                  ))}
                </div>
                <a
                  href="#"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  See more articles
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHow;
