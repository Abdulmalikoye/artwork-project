import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Assuming you're using react-router-dom for NavLink

const Faq = () => {
  // State to keep track of the active FAQ index
  const [isActive, setIsActive] = useState(null);

  const faqData = [
    {
      question: "What is Coca?",
      answer: "Odio aliquam arcu arcu dictumst justo eu placerat ornare purus.",
    },
    {
      question: "How does it work?",
      answer: "Our platform works by connecting people across various fields.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We support multiple payment options including credit card and PayPal.",
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
    <section className="px-8 md:px-16 py-16 bg-gray-50">
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
