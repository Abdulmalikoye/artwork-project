import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import MainContent from "./MainContent";

const safetyData = [
  {
    title: "Is connecting my wallet secure?",
    description:
      "Yes, connecting your wallet to ArtLab is secure. We utilize industry-standard encryption and security protocols to ensure your data and transactions are protected. Your peace of mind is our priority.",
    linkText: "Learn more about wallet security",
  },
  {
    title: "I bought an artwork, but I think I was scammed. What should I do?",
    description:
      "If you believe you've been scammed, please reach out to our support team immediately. Provide any relevant details of the transaction, and we will investigate the issue and assist you in resolving it.",
    linkText: "Report a scam",
  },
  {
    title: "My verification request was rejected. Can I reapply?",
    description:
      "Yes, if your verification request was rejected, you can reapply. We recommend reviewing the verification requirements and ensuring all submitted information is accurate before reapplying.",
    linkText: "Reapply for verification",
  },
  {
    title: "What are your community rules and guidelines?",
    description:
      "Our community rules and guidelines are designed to create a safe and respectful environment for all users. We encourage you to familiarize yourself with these guidelines to ensure a positive experience on ArtLab.",
    linkText: "View community rules",
  },
];

function Safety() {
  return (
    <div className="p-8 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">
        Safety, Security, and Policies
      </h1>

      {/* Content Sections */}
      <div className="space-y-6">
        {safetyData.map((item, index) => (
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

export default Safety;
