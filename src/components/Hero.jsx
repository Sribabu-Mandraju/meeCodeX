import { motion } from "framer-motion";
import Header from "./Header";
import herobg from "../assets/herobg.jpg";
import heroAnimation from "../assets/lotties/hero.json";
import Lottie from "lottie-react";
import bulb from "../assets/icons/bulb.png";

const Hero = () => {
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
            <div className="absolute top-[-40px] right-0">
              <img alt="bulb" src={bulb} className="w-28 h-24" />
            </div>

            <h1
              className="text-3xl text-[2.2rem] font-primary text-white"
              style={{ lineHeight: "2.5rem" }}
            >
              Welcome to <br /> <span className="gradient-text">AZLogic</span>{" "}
              Solutions, Inc.
            </h1>
            <h1 className="text-2xl">
              Your Trusted{" "}
              <span className="text-primary font-semibold">Partner</span> for
              Digital Innovation
            </h1>

            <p className="mt-3 text-gray-400 pr-3 text-[0.9rem]">
              At AZLogic Solutions, Inc., we specialize in helping local
              businesses and startups succeed in the digital world. From A to Z,
              we provide cutting-edge software solutions tailored to your needs.
              Whether you’re looking to establish a strong online presence or
              bring your startup ideas to life, we’re here to make it happen.
            </p>
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
      </div>
    </>
  );
};

export default Hero;
