import { motion } from "framer-motion";
import line from "../assets/icons/line.svg";
import { services } from "../constant";

const Services = () => {
  return (
    <div id="services" className="container-p max-md:mt-20 pt-12">
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
          Services
        </h1>
        <div className="mx-6 w-14 mb-4">
          <img src={line} alt="----" />
        </div>
        <h1 className="text-3xl text-white font-semibold w-full max-w-[420px]">
          <span className="gradient-text">What</span> Our Company{" "}
          <span className="text-primary">Offers</span>
        </h1>
        <p className="text-gray-400 mt-1 max-w-[500px]">
          Our team provides tailored services with precision and innovation,
          ensuring impactful results that meet your unique needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-14 mb-16 rounded-lg w-full grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 place-items-center">
        {services.map((a, index) => (
          <motion.div
            key={index}
            className="relative mb-5 w-full h-[350px] max-w-[280px] bg-gray-900 p-6 rounded-md cursor-pointer flex flex-col items-center gap-3 transition-transform transform hover:scale-105 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 80,
            }}
          >
            <div className="text-teritary text-4xl">{<a.icon />}</div>
            <h1 className="text-xl font-semibold text-white text-center">
              {a.name}
            </h1>
            <div className="h-full flex items-center justify-center">
              <p className="text-sm font-medium text-zinc-400 text-center">
                {a.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
