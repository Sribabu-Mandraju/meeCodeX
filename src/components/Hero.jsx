import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

import aws from "../assets/icons/brands/aws.svg";
import js from "../assets/icons/brands/js.svg";
import swift from "../assets/icons/brands/swift.svg";
import vite from "../assets/icons/brands/vite.svg";
import python from "../assets/icons/brands/python.svg";
import cloud from "../assets/icons/brands/cloud.svg";
import metamask from "../assets/icons/brands/metamask.svg";
import github from "../assets/icons/brands/github.svg";
import django from "../assets/icons/brands/django.svg";
import reactSvg from "../assets/icons/brands/react.svg";

const Hero = () => {
  const scrollContainerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(true);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const checkOverflow = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      if (container.scrollWidth > container.clientWidth) {
        setShowArrows(true);
      } else {
        setShowArrows(false);
      }
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

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
        <div className="w-full max-w-[1280px] overflow-hidden mx-auto mt-20 max-md:mt-0 px-8 max-md:px-2 grid grid-cols-2 max-md:grid-cols-1 place-items-center justify-items-center gap-2">
          <motion.div
            className="relative max-md:px-2 order-1 max-md:order-2 max-md:mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            // viewport={{ once: true }}
          >
            <div className="absolute top-[-80px] max-md:top-[-50px] right-0">
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
            <div className="flex gap-4 text-[0.9rem] text-gray-400 flex-wrap w-full mt-6">
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
          </motion.div>

          <motion.div
            className="order-2 max-md:order-1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
          >
            <Lottie animationData={heroAnimation} loop={true} />
          </motion.div>
        </div>

        {/* Brands */}
        <div
          id="brands"
          className="pt-16 mb-6 px-4 w-full max-w-[1000px] mx-auto flex flex-col gap-2"
        >
          <motion.div
            className="flex items-center justify-center max-md:flex-col gap-4 border-b pb-8 border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            // viewport={{ once: true }}
          >
            <div className="w-1/2 z-[1] max-md:w-full relative">
              <div className="mx-6 w-14 mb-4">
                <img src={line} alt="----" />
              </div>
              <h1 className="text-3xl z-[1] text-white font-semibold">
                AZ LOGIC: <span className="gradient-text">Building</span>{" "}
                Meaningful Connections{" "}
                <span className="text-primary">Worldwide..!</span>
              </h1>
              <h1 className="absolute top-[-20px] z-[-1] left-[-10px] uppercase text-7xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
                Brands
              </h1>
            </div>
            <div className="w-1/2 max-md:w-full">
              <p className="p-2 max-md:p-0 text-gray-400 text-[0.9rem]">
                At AZ LOGIC, we’re dedicated to creating impactful, empathetic AI
                solutions that connect people and brands across the globe,
                fostering growth and meaningful interactions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full mt-8 mb-6 flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
          >
            {showArrows && (
              <img
                src={chevronLeft}
                alt="chevron-left"
                className="w-8 h-8 cursor-pointer"
                onClick={handleScrollLeft}
              />
            )}

            <div
              className="overflow-x-auto w-full flex gap-4 items-center justify-around scroll-smooth"
              ref={scrollContainerRef}
            >
              {/* Add other brand logos here */}
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={aws} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={js} className="w-5 h-5" />
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
                <img src={python} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={cloud} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={metamask} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={github} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={django} className="w-5 h-5" />
              </div>
              <div className="bg-[#1E2235] min-w-[40px] p-2.5 pb-2 rounded-md">
                <img src={reactSvg} className="w-5 h-5" />
              </div>
            </div>

            {showArrows && (
              <img
                src={chevronRight}
                alt="chevron-right"
                className="w-8 h-8 cursor-pointer"
                onClick={handleScrollRight}
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
