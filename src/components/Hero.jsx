import Header from "./Header";
import herobg from "../assets/herobg.jpg";
import heroAnimation from "../assets/lotties/hero.json";
import Lottie from "lottie-react";

import icon1 from "../assets/icons/lock.svg";
import icon2 from "../assets/icons/heart.svg";
import icon3 from "../assets/icons/clock.svg";

import bulb from "../assets/icons/bulb.png";
import line from "../assets/icons/line.svg";

import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";

import swift from "../assets/icons/swift.svg";
import vite from "../assets/icons/vite.svg";
import { useRef } from "react";

const Hero = () => {
  // Create a reference to the scrollable container
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: "-100%",
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: "100%", behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${herobg}')`,
        }}
      >
        <Header />

        {/* Hero */}
        <div className="w-full max-w-[1280px] mx-auto mt-20 px-8 max-md:px-2 grid grid-cols-2 max-lg:grid-cols-1 place-items-center justify-items-center gap-2">
          <div className="relative max-lg:px-2">
            <div className="absolute top-[-80px] right-0">
              <img alt="bulb" src={bulb} className="w-28 h-24" />
            </div>

            <h1 className="text-4xl text-[2.5rem] font-primary text-white">
              Connect <span className="gradient-text">Share</span> Grow{" "}
              <span className="text-primary">Instantly</span>
            </h1>

            <p className="mt-3 text-gray-400 pr-3 text-[0.9rem]">
              Join a community that values empathy, connection, and meaningful
              support. Discover AI-driven solutions designed to uplift and
              empower every interaction.
            </p>
            <div className="flex gap-4 text-[0.9rem] text-gray-400 flex-wrap w-full mt-6 ">
              <div className="flex items-center gap-2">
                <img src={icon1} alt="icon1" className="w-4 h-4" />
                <h1>Secure AI Conversations</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon2} alt="icon1" className="w-4 h-4" />
                <h1>Seamless Connection Experience</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon3} alt="icon1" className="w-4 h-4" />
                <h1>Instant Empathy Chats</h1>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden">
            <Lottie animationData={heroAnimation} loop={true} />
          </div>
        </div>

        {/* Brands */}
        <div className="mt-16 mb-6 px-4 w-full max-w-[1000px] mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-center max-lg:flex-col gap-4 border-b pb-8 border-gray-800">
            <div className="w-1/2 z-[1] max-lg:w-full relative">
              <div className="mx-6 w-14 mb-4">
                <img src={line} alt="----" />
              </div>
              <h1 className="text-3xl z-[1] text-white font-semibold">
                Sepnoty: <span className="gradient-text">Building</span>{" "}
                Meaningful Connections{" "}
                <span className="text-primary">Worldwide..!</span>
              </h1>
              <h1 className="absolute top-[-20px] z-[-1] left-[-10px] uppercase text-7xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
                Brands
              </h1>
            </div>
            <div className="w-1/2 max-lg:w-full">
              <p className="p-2 max-lg:p-0 text-gray-400 text-[0.9rem]">
                At Sepnoty, we’re dedicated to creating impactful, empathetic AI
                solutions that connect people and brands across the globe,
                fostering growth and meaningful interactions.
              </p>
            </div>
          </div>

          <div className="w-full mt-8 mb-6 flex items-center gap-4">
            <img
              src={chevronLeft}
              alt="chevron-left"
              className="w-8 h-8 cursor-pointer"
              onClick={handleScrollLeft}
            />
            <div
              className="overflow-x-auto flex gap-4 items-center scroll-smooth"
              ref={scrollContainerRef}
            >
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={vite} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={swift} className="w-5 h-5" />
              </div>
            </div>
            <img
              src={chevronRight}
              alt="chevron-right"
              className="w-8 h-8 cursor-pointer"
              onClick={handleScrollRight}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
