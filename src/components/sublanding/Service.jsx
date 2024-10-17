import React, { useState, useEffect, useRef } from "react";
// import "animate.css"; // Import animate.css for animations
import img2 from "../../img/img-exp.svg";

const AnimatedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has occurred
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation if section is visible and has not animated yet
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Mark as animated after first view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="md:px-32 md:py-12 px-6 py-4 flex justify-center items-center"
    >
      <div>
        {/* Statistics Row */}
        <div className="flex items-center gap-4 justify-between md:py-12 pt-8 pb-4 ">
          <div>
            <h1 className="md:text-5xl text-2xl font-bold">1.5M</h1>
            <p className="md:text-lg text-sm">
              New visitors every <br /> month.
            </p>
          </div>
          <div></div>
          <div>
            <h1 className="md:text-5xl text-2xl font-bold">49%</h1>
            <p className="md:text-lg text-sm">
              Extra conversion on <br /> any art.
            </p>
          </div>
          <div></div>
          <div>
            <h1 className="md:text-5xl text-2xl font-bold">$2.5M</h1>
            <p className="md:text-lg text-sm">
              Extra saved by <br /> customers.
            </p>
          </div>
          <div></div>
          <div className="hidden md:block">
            <h1 className="md:text-5xl text-2xl font-bold">93%</h1>
            <p className="md:text-lg text-sm">
              Success rate on <br /> last 05 years.
            </p>
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="flex flex-col md:flex-row items-center  md:justify-between gap-3 py-12">
          {/* Image Container with Animation */}
          <div
            className={`md:w-[40%]    ${
              isVisible
                ? "animate__animated animate__slideInLeft overflow-hidden"
                : ""
            }`}
          >
            <img src={img2} alt="Image Description" />
          </div>

          {/* Text Container with Animation */}
          <div className="md:w-[50%]">
            <div
              className={`flex flex-col gap-4  ${
                isVisible
                  ? "animate__animated animate__fadeInRight overflow-hidden"
                  : ""
              }`}
            >
              <h1 className="font-bold md:text-5xl text-2xl">
                An Exceptionally unique experience Tailored to you
              </h1>
              <p className="text-[#656C7B] text-base md:text-lg">
                In a professional context, it often happens that private or
                corporate clients order a publication news while still not being
                ready.
              </p>
              <a
                href="/register"
                target="_blank"
                className="bg-[#6271EB] md:px-8 md:py-3 px-5 py-3 rounded-md text-base md:text-xl text-white w-fit"
              >
                Start 14 days free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
