// import Lottie from "lottie-react";
// import formAnimation from "../assets/lotties/about.json";
// import line from "../assets/icons/line.svg";
// import { motion } from "framer-motion";

// const YourReq = () => {
//   return (
//     <div className="container-p gap-8 grid md:grid-cols-2 grid-cols-1 place-items-center justify-content-center">
//       <motion.div
//         className="w-full max-md:px-2 max-lg:mt-5  order-2 md:order-1"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: false }}
//       >
//         <div className="relative">
//           <h1 className="absolute md:top-[-40px] z-[-1] left-[-10px]  md:text-7xl text-6xl :top-[-30px] font-bold text-transparent stroke-2 text-stroke stroke-[#111827]">
//             FORM
//           </h1>
//           <div className="mx-6 w-14 mb-4">
//             <img src={line} alt="----" />
//           </div>
//           <h1 className="text-3xl text-white font-semibold w-full md:w-[550px] mt-[50px] md:mt-0">
//             Share Your <span className="gradient-text">Requirements</span> with
//             Us
//           </h1>
//           <form className="w-full mt-8 md:w-[500px] ">
//             <div className="grid grid-cols-2 gap-2.5">
//               <input
//                 placeholder="Full Name"
//                 className="w-full rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
//               />
//               <input
//                 placeholder="Email Address"
//                 className="w-full rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
//               />
//             </div>
//             <input
//               placeholder="Mobile Number"
//               className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
//             />
//             <textarea
//               placeholder="Project Details"
//               className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
//               rows={4}
//             ></textarea>
//             <select className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none">
//               <option value="" disabled selected>
//                 Select Solution Type
//               </option>
//               <option value="webDevelopment">Web Development</option>
//               <option value="appDevelopment">App Development</option>
//               <option value="uiUxDesign">UI/UX Design</option>
//               <option value="seo">SEO</option>
//               <option value="digitalMarketing">Digital Marketing</option>
//             </select>
//             <button
//               type="Submit"
//               className="flex items-center rounded justify-center gap-2 w-full mt-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </motion.div>

//       <motion.div
//         className="w-full mt-2 max-md:max-w-[300px] mb-12 order-1 md:order-2"
//         initial={{ opacity: 0, x: 100 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <Lottie animationData={formAnimation} loop={true} />
//       </motion.div>
//     </div>
//   );
// };

// export default YourReq;









import Lottie from "lottie-react";
import formAnimation from "../assets/lotties/about.json";
import line from "../assets/icons/line.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const YourReq = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    projectDetails: "",
    solutionType: "",
  });
  const [buttonText, setButtonText] = useState("Submit");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, mobileNumber, projectDetails, solutionType } = formData;

    if (!fullName || !email || !mobileNumber || !projectDetails || !solutionType) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    setButtonText("Sending...");
    setIsButtonDisabled(true);

    try {
      const response = await axios.post("http://127.0.0.1:8890/news/dashboard/azlogic/requirements", formData);

      if (response.status === 201) {
        toast.success("Requirement successfully sent!");
        setFormData({
          fullName: "",
          email: "",
          mobileNumber: "",
          projectDetails: "",
          solutionType: "",
        });
      } else {
        toast.error("Failed to send requirements. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setButtonText("Submit");
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="container-p gap-8 grid md:grid-cols-2 grid-cols-1 place-items-center justify-content-center">
      <motion.div
        className="w-full max-md:px-2 max-lg:mt-5 order-2 md:order-1"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <div className="relative">
          <h1 className="absolute md:top-[-40px] z-[-1] left-[-10px] md:text-7xl text-6xl :top-[-30px] font-bold text-transparent stroke-2 text-stroke stroke-[#111827]">
            FORM
          </h1>
          <div className="mx-6 w-14 mb-4">
            <img src={line} alt="----" />
          </div>
          <h1 className="text-3xl text-white font-semibold w-full md:w-[550px] mt-[50px] md:mt-0">
            Share Your <span className="gradient-text">Requirements</span> with Us
          </h1>
          <form className="w-full mt-8 md:w-[500px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2.5">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
              />
            </div>
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
            />
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              placeholder="Project Details"
              className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
              rows={4}
            ></textarea>
            <select
              name="solutionType"
              value={formData.solutionType}
              onChange={handleInputChange}
              className="w-full mt-3 rounded px-2 py-1.5 border border-gray-800 bg-[#111827] text-white outline-none"
            >
              <option value="" disabled>
                Select Solution Type
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="SEO">SEO</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`flex items-center rounded justify-center gap-2 w-full mt-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        className="w-full mt-2 max-md:max-w-[300px] mb-12 order-1 md:order-2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Lottie animationData={formAnimation} loop={true} />
      </motion.div>
    </div>
  );
};

export default YourReq;
