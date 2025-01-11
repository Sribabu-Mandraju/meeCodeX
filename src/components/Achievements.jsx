import { motion } from "framer-motion"; // Import framer-motion
import line from "../assets/icons/line.svg";
import { achievements } from "../constant";

const Achievements = () => {
  return (
    <div className="container-p max-md:mt-16">
      {/* Heading Animation with whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: false }}
        className="relative w-full max-md:px-2 max-md:mt-5"
      >
        <h1 className="absolute top-[-15px] z-[-1] left-[-1%] max-md:left-[2px] uppercase text-7xl max-md:text-4xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
          Achievements
        </h1>
        <div className="mx-6 w-14 mb-4">
          <img src={line} alt="----" />
        </div>
        <h1 className="text-3xl text-white font-semibold w-full max-w-[450px]">
          <span className="gradient-text">Explore</span> Our Company{" "}
          <span className="text-primary">Milestones</span>
        </h1>
        <p className="text-gray-400 mt-1 max-w-[500px]">
          Our team of skilled professionals is dedicated to delivering solutions
          that meet your specific business requirements and exceed your
          expectations.
        </p>
      </motion.div>

      {/* Cards Section with Animation (whileInView for staggered card animation) */}
      <div className="mt-14 mb-16 w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center">
        {achievements.map((a, index) => (
          <motion.div
            key={a.id}
            className="w-full mt-5 py-16 bg-cardbg max-w-[300px] rounded-md cursor-pointer flex items-center justify-center gap-2 flex-col"
            initial={{ opacity: 0, y: 50, skewY: 0 }} // Initial state: hidden, bottom, no skew
            whileInView={{
              opacity: 1,
              y: 0,
              skewY: -5,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{
              skewY: 0,
            }}
          >
            <img src={a.img} alt={a.name} className="w-20 h-20" />
            <h1 className="text-4xl font-bold">{a.value.padStart(3)}+</h1>
            <h5 className="font-[300]">{a.name}</h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
