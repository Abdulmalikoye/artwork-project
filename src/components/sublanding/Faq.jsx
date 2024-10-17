import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Assuming you're using react-router-dom for NavLink

const Faq = () => {
  // State to keep track of the active FAQ index
  const [isActive, setIsActive] = useState(null);

  const faqData = [
    {
      question: "What is Artlab?",
      answer:
        "ArtLab is a vibrant online platform where artists and art enthusiasts connect. It allows you to buy, sell, and showcase unique artworks from talented creators worldwide.",
    },
    {
      question: "How do I get started on ArtLab?",
      answer:
        "Getting started is easy! Simply create an account, browse the diverse range of artworks, and start exploring your favorites. Whether you’re an artist or a collector, ArtLab has something for everyone.",
    },
    {
      question: "How do I create a new artwork?",
      answer:
        "Creating new artwork on ArtLab is simple! Use our user-friendly tools to upload your pieces, add descriptions, and set your prices. Join our community of artists and share your creativity with the world.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for new users.",
    },
  ];

  // Toggle the active state for each FAQ item
  const toggleQuestion = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <section className="  md:px-32 md:py-12 px-6 py-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        {faqData.map((item, index) => (
          <details
            key={index}
            className={`border-b p-4 ${
              isActive === index ? "bg-blue-50" : "bg-white"
            }`}
            open={isActive === index} // Set the `open` attribute based on the active state
            onClick={() => toggleQuestion(index)} // Toggle active state on click
          >
            <summary className="font-bold cursor-pointer flex justify-between items-center text-lg">
              {item.question}
              <NavLink className="text-xl">
                {isActive === index ? "-" : "+"}
              </NavLink>
            </summary>
            {isActive === index && ( // Conditionally render the answer paragraph
              <p className="mt-2 text-gray-700 text-sm md:text-base">
                {item.answer}
              </p>
            )}
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
