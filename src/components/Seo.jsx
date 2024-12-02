import Lottie from "lottie-react";
import line from "../assets/icons/line.svg";
import aboutAnimation from "../assets/lotties/about.json";
import { useState } from "react";
import { qsn } from "../constant";
import { motion } from "framer-motion";

const Seo = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container-p gap-5 grid grid-cols-2 max-md:grid-cols-1 place-items-center">
      {/* Left section with FAQ */}
      <div className="relative w-full order-1 max-md:order-2 max-md:px-2 max-md:mt-5">
        <h1 className="absolute top-[-15px] z-[-1] left-[-2px] uppercase text-7xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
          FAQ
        </h1>
        <div className="mx-6 w-14 mb-4">
          <img src={line} alt="----" />
        </div>
        <h1 className="text-3xl text-white font-semibold w-full max-w-[550px]">
          Find <span className="gradient-text">answers</span> to common{" "}
          <span className="text-primary">questions</span> about us.
        </h1>
        <p className="text-gray-400 mt-1 max-w-[400px]">
          Got questions? Our FAQ section provides quick answers to help you
          understand our services and how we can support your business goals.
        </p>

        <div className="w-full max-w-[450px] mt-6">
          {qsn.map((q) => (
            <div key={q.id} className="bg-[#292738]">
              <div
                onClick={() => toggleFAQ(q.id)}
                className="cursor-pointer border-b-[0.5px] border-gray-900 flex items-center justify-between py-2 px-3 text-lg font-medium text-white transition-all"
              >
                {q.qsn}
                <span className="text-xl">{activeId === q.id ? "-" : "+"}</span>
              </div>

              {/* Use Framer Motion for animation */}
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeId === q.id ? "auto" : 0,
                  opacity: activeId === q.id ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`text-gray-300 bg-[#232331] px-2.5 overflow-hidden ${
                  activeId === q.id ? "py-2" : "py-0"
                }`}
              >
                {activeId === q.id && <p>{q.ans}</p>}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Right section with animation */}
      <div className="w-full order-2 max-md:order-1 max-md:max-w-[300px]">
        <Lottie animationData={aboutAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Seo;
