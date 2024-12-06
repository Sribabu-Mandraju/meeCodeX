import { motion } from "framer-motion";
import line from "../assets/icons/line.svg";
import { FaRegCheckCircle } from "react-icons/fa";

const Membership = () => {
  return (
    <div className="container-p pt-2" id="join">
      <div className="mt-16 w-full flex items-center justify-center">
        <div className="flex flex-col relative items-center justify-center">
          <h1 className="absolute w-full top-[-20px] z-[-1] left-[57%] -translate-x-1/2 uppercase text-7xl max-md:text-4xl max-md:left-[80%] font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
            Join Us
          </h1>
          <div className="mx-6 w-14 mb-4">
            <img src={line} alt="----" />
          </div>
          <h1 className="text-2xl z-[1] text-center text-white font-semibold">
            Join Sepnoty Club <br />
            for exclusive{" "}
            <span className="text-[#F3CA49]">growth resources</span>
          </h1>
        </div>
      </div>

      <div className="mt-16 mb-6 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-16">
        {/* First Card with scroll-triggered animation */}
        <motion.div
          className="w-[98%] group cursor-pointer flex justify-center max-lg:justify-start max-md:justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          // viewport={{ once: true }}
        >
          <div className="w-full max-w-[480px] max-lg:max-w-[380px] max-md:max-w-[320px] rounded-lg text-white cardGradient px-6 py-10">
            <h3 className="text-xl font-semibold font-space-grotesk">Basic</h3>
            <h5 className="text-base font-[300]">Best for personal use.</h5>
            <h1
              className="mt-5 font-semibold text-3xl"
              style={{
                letterSpacing: "1.5px",
              }}
            >
              Free
            </h1>
            <div className="w-full my-6 mb-10 flex items-center justify-center py-2 rounded-md cursor-pointer group-hover:bg-[#2BFFFF] group-hover:text-black font-semibold bg-[#08192d]">
              <h1>Get Started</h1>
            </div>
            <div className="line mb-8 h-[0.5px] w-full bg-gray-700"></div>
            <h3 className="text-lg mb-3">What you will get</h3>
            <div className="flex flex-col text-gray-400 gap-3">
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Employee directory
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Task management
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Calendar integration
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                File storage
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Communication tools
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Reporting and analytics
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Card without delay */}
        <motion.div
          className="w-[98%] group cursor-pointer flex justify-center max-lg:justify-end max-md:justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
        >
          <div className="w-full max-w-[480px] max-lg:max-w-[380px] max-md:max-w-[320px] rounded-lg scale-105 max-lg:scale-100 text-white cardGradient px-6 py-10">
            <h3 className="text-xl font-semibold font-space-grotesk">
              Enterprise
            </h3>
            <h5 className="text-base font-[300]">
              For large teams & corporations.
            </h5>
            <h1
              className="mt-5 font-semibold text-3xl"
              style={{
                letterSpacing: "1.5px",
              }}
            >
              $20{" "}
              <span
                className="text-gray-400 text-sm"
                style={{ letterSpacing: "0.5px" }}
              >
                / per month
              </span>
            </h1>
            <div className="w-full my-6 mb-10 flex items-center justify-center py-2 rounded-md cursor-pointer group-hover:bg-[#2BFFFF] group-hover:text-black font-semibold bg-[#08192d]">
              <h1>Get Started</h1>
            </div>
            <div className="line mb-8 h-[0.5px] w-full bg-gray-700"></div>
            <h3 className="text-lg mb-3">What you will get</h3>
            <div className="flex flex-col text-gray-400 gap-3">
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Advanced Employee directory
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Project management
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Resource scheduling
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Version Control
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Team Collabration
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Advanced analytics
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Card with scroll-triggered animation */}
        <motion.div
          className="w-[98%] group cursor-pointer flex justify-center max-lg:justify-start max-md:justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          // viewport={{ once: true }}
        >
          <div className="w-full rounded-lg max-w-[480px] max-lg:max-w-[380px] max-md:max-w-[320px] text-white cardGradient px-6 py-10">
            <h3 className="text-xl font-semibold font-space-grotesk">
              Business
            </h3>
            <h5 className="text-base font-[300]">Best for business owners.</h5>
            <h1
              className="mt-5 font-semibold text-3xl"
              style={{
                letterSpacing: "1.5px",
              }}
            >
              $120{" "}
              <span
                className="text-gray-400 text-sm"
                style={{ letterSpacing: "0.5px" }}
              >
                / per month
              </span>
            </h1>
            <div className="w-full my-6 mb-10 flex items-center justify-center py-2 rounded-md cursor-pointer group-hover:bg-[#2BFFFF] group-hover:text-black font-semibold bg-[#08192d]">
              <h1>Get Started</h1>
            </div>
            <div className="line mb-8 h-[0.5px] w-full bg-gray-700"></div>
            <h3 className="text-lg mb-3">What you will get</h3>
            <div className="flex flex-col text-gray-400 gap-3">
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Customizabe Employee directory
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Client project management
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Client meeting schedule
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Compliance tracking
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Client communication
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCheckCircle />
                Create custom reports tailored
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;
