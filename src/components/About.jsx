import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/lotties/graph.json";
import personAnimation from "../assets/lotties/about.json";
import line from "../assets/icons/line.svg";
import check from "../assets/icons/check.svg";

const missions = [
  {
    name: "Helping Local Businesses Thrive",
    desc: "We specialize in designing and maintaining professional websites, implementing effective SEO strategies, and crafting digital marketing campaigns that amplify your online reach. Our goal is to empower local businesses to stand out in the digital marketplace, attract more customers, and grow sustainably.",
  },
  {
    name: "Supporting Startups and Entrepreneurs",
    desc: "We bring startup ideas to life with our MVP (Minimum Viable Product) Development Services. From concept to creation, we help startups validate their ideas quickly and cost-effectively. By delivering functional prototypes, we enable businesses to launch, test, and gather valuable feedback to achieve long-term success.",
  },
];

const About = () => {
  return (
    <>
      {/* First Section with Lottie */}
      <div
        id="about"
        className="container-p pt-6 pb-6 gap-5 grid grid-cols-5 max-md:grid-cols-1"
      >
        <div className="w-full flex items-center justify-center col-span-2 mb-12">
          <div className="w-full max-md:max-w-[300px] flex justify-start max-md:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Lottie animationData={personAnimation} loop={true} />
            </motion.div>
          </div>
        </div>

        <div className="w-full col-span-3 max-md:grid-cols-1 max-md:px-2 max-lg:mt-5 flex justify-end max-md:justify-start md:items-center">
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
                About Us
              </h1>
              <h1 className="text-3xl text-white font-semibold w-full max-w-[550px] max-md:max-w-full">
                <span className="gradient-text">Empowering</span> Businesses
                with Affordable Digital{" "}
                <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-zinc-400 mt-3 max-w-[500px] max-md:max-w-full">
                At AZLogic Solutions, Inc., we are dedicated to transforming
                your business ideas into reality. Our team of experts combines
                innovative strategies with cutting-edge technologies to deliver
                exceptional results. From website development to MVP creation,
                we are committed to being your reliable digital partner.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Section with another Lottie */}
      <div className="container-p pt-4 gap-5 grid grid-cols-5 max-md:grid-cols-1 place-items-center justify-center">
        <div className="relative w-full order-1 max-md:order-2 col-span-3 max-md:grid-cols-1 max-md:px-2 max-md:mt-8">
          <h1 className="absolute top-[-20px] z-[-1] left-[-10px] uppercase text-7xl max-md:text-4xl max-md:left-0 font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
            Our Mission
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
                <span className="gradient-text">What </span> We{" "}
                <span className="text-teritary">Do </span>
              </h1>
              <motion.div
                className="flex gap-2 mt-6 max-w-[600px] items-center flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {missions.map((item, index) => (
                  <motion.div
                    key={index}
                    className="px-4 mb-1 py-1.5 pb-2 rounded-md"
                    // bg-[#292738]
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <img src={check} alt="check" className="w-5 h-5 mt-1" />
                      <h1 className="font-semibold text-white">{item.name}</h1>
                    </div>
                    <p className="text-zinc-400 pt-2 text-sm">{item.desc}</p>
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
      <div className="pb-4"></div>
    </>
  );
};

export default About;
