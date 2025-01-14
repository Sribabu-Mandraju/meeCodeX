import Lottie from "lottie-react";
import callAnimation from "../assets/lotties/call.json";
import line from "../assets/icons/line.svg";
import { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        id="contact"
        className="container-p gap-8 grid grid-cols-2 max-md:grid-cols-1 place-items-center justify-content-center"
      >
        {/* Left section with Lottie animation */}
        <motion.div
          className="w-full mt-2 max-md:max-w-[300px] mb-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Lottie animationData={callAnimation} loop={true} />
        </motion.div>

        {/* Right section with form */}
        <motion.div
          className="w-full max-md:px-2 max-lg:mt-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <div className="mx-6 w-14 mb-4">
            <img src={line} alt="----" />
          </div>
          <div className="relative">
            <h1 className="absolute top-[-40px] z-[-1] left-[-10px] uppercase text-7xl max-md:text-6xl max-md:top-[-40px] font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
              Call
            </h1>
            <h1 className="text-3xl text-white font-semibold w-full max-w-[550px]">
              Ready to <span className="gradient-text">Work </span>
              Together In New <span className="text-primary">Projects ?</span>
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full mt-8 max-w-[500px] max-md:max-w-full"
            >
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  placeholder="Last Name"
                  className="w-full rounded px-2 py-1.5 border border-gray-800 bg-gray-900 text-white outline-none"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <input
                  placeholder="First Name"
                  className="w-full rounded px-2 py-1.5 border border-gray-800 bg-gray-900 text-white outline-none"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <input
                placeholder="Email"
                className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-gray-900 text-white outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Phone Number"
                className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-gray-900 text-white outline-none"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-gray-900 text-white outline-none"
                value={message}
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="Submit"
                className="flex items-center rounded justify-center gap-2 w-full mt-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Send it to us <IoIosRocket />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
