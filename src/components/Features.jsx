import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/lotties/graph.json";
import personAnimation from "../assets/lotties/about.json";
import line from "../assets/icons/line.svg";
import empathetic from "../assets/icons/empathetic.svg";
import target from "../assets/icons/target.svg";
import graph from "../assets/icons/graph.svg";
import uiux from "../assets/icons/uiux.svg";
import check from "../assets/icons/check.svg";

const Features = () => {
  return (
    <>
      {/* First Section with Lottie */}
      <div
        id="features"
        className="container-p pt-12 gap-5 grid grid-cols-5 max-md:grid-cols-1"
      >
        <div className="w-full max-md:max-w-[300px] flex justify-start col-span-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Lottie animationData={personAnimation} loop={true} />
          </motion.div>
        </div>

        <div className="w-full col-span-3 max-md:grid-cols-1 max-md:px-2 max-lg:mt-5 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="mx-6 w-14 mb-4">
              <img src={line} alt="----" />
            </div>
            <div className="relative">
              <h1 className="absolute top-[-40px] z-[-1] left-[-10px] uppercase text-7xl max-md:text-4xl max-md:left-0 max-md:top-[-35px] font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
                Features
              </h1>
              <h1 className="text-3xl text-white font-semibold w-full max-w-[550px]">
                <span className="gradient-text">Explore</span> Our Professional
                Business <span className="text-primary">Solutions</span>
              </h1>
              <motion.div
                className="grid grid-cols-2 mt-4 max-sm:grid-cols-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Feature items with icon animations */}
                {[
                  {
                    img: empathetic,
                    title: "Empathetic AI",
                    subtitle: "Human-Centered Innovation",
                  },
                  {
                    img: target,
                    title: "Web & App Development",
                    subtitle: "Tailored Solutions",
                  },
                  {
                    img: graph,
                    title: "Digital Marketing",
                    subtitle: "Brand Growth",
                  },
                  {
                    img: uiux,
                    title: "UI/UX Design",
                    subtitle: "Intuitive Experiences",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-2.5 items-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <img src={item.img} alt={item.title} className="w-8 h-8" />
                    <div className="flex flex-col">
                      <h1 className="text-white font-semibold">{item.title}</h1>
                      <h3 className="text-sm text-[#67687A]">
                        {item.subtitle}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Section with another Lottie */}
      <div className="container-p gap-5 grid grid-cols-5 max-md:grid-cols-1 place-items-center">
        <div className="relative w-full order-1 max-md:order-2 col-span-3 max-md:grid-cols-1 max-md:px-2 max-md:mt-8">
          <h1 className="absolute top-[-20px] z-[-1] left-[-20px] uppercase text-7xl max-md:text-4xl max-md:left-0 font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
            WHO
          </h1>
          <div className="mx-6 w-14 mb-4">
            <img src={line} alt="----" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <h1 className="text-3xl text-white font-semibold w-full max-md:max-w-full max-w-[550px]">
                We blend <span className="gradient-text">Empathy </span> &{" "}
                <span className="text-primary">innovation </span>
                drive business growth with AI and{" "}
                <span className="text-teritary">innovation </span>
              </h1>
              <motion.div
                className="flex gap-2 mt-6 max-w-[600px] items-center flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {[
                  "Tech Solutions",
                  "IT Consulting",
                  "Web Solutions",
                  "Business Growth",
                  "Product Design",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="px-4 mb-1 py-1.5 pb-2 bg-[#292738] rounded-md flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                  >
                    <img src={check} alt="check" className="w-5 h-5 mt-1" />
                    <h1 className="font-semibold text-white">{item}</h1>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="w-full order-2 max-md:order-1 max-md:max-w-[300px] col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Lottie animationData={aboutAnimation} loop={true} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Features;
