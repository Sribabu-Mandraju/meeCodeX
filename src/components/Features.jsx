import Lottie from "lottie-react";
import aboutAnimation from "../assets/lotties/about.json";
import line from "../assets/icons/line.svg";
import empathetic from "../assets/icons/empathetic.svg";
import target from "../assets/icons/target.svg";
import graph from "../assets/icons/graph.svg";
import uiux from "../assets/icons/uiux.svg";
import check from "../assets/icons/check.svg";

const Features = () => {
  return (
    <>
      <div className="container-p gap-5 grid grid-cols-5 max-md:grid-cols-1 place-items-center justify-content-center">
        <div className="w-full max-md:max-w-[300px] col-span-2 mb-12">
          <Lottie animationData={aboutAnimation} loop={true} />
        </div>
        <div className="w-full col-span-3 max-md:grid-cols-1 max-md:px-2 max-lg:mt-5">
          <div className="mx-6 w-14 mb-4">
            <img src={line} alt="----" />
          </div>
          <div className="relative">
            <h1 className="absolute top-[-40px] z-[-1] left-[-10px] uppercase text-7xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
              Features
            </h1>
            <h1 className="text-3xl text-white font-semibold w-full max-w-[550px]">
              <span className="gradient-text">Explore</span> Our Professional
              Business <span className="text-primary">Solutions</span>
            </h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
              <div className="flex gap-2.5 items-center mt-8 mb-4">
                <img src={empathetic} alt="Empathetic" className="w-8 h-8" />
                <div className="flex flex-col">
                  <h1 className="text-white font-semibold">Empathetic AI</h1>
                  <h3 className="text-sm text-[#67687A]">
                    Human-Centered Innovation
                  </h3>
                </div>
              </div>

              <div className="flex gap-2.5 items-center mt-4">
                <img src={target} alt="Empathetic" className="w-8 h-8" />
                <div className="flex flex-col">
                  <h1 className="text-white font-semibold">
                    Web & App Development
                  </h1>
                  <h3 className="text-sm text-[#67687A]">Tailored Solutions</h3>
                </div>
              </div>

              <div className="flex gap-2.5 items-center mt-4">
                <img src={graph} alt="Empathetic" className="w-8 h-8" />
                <div className="flex flex-col">
                  <h1 className="text-white font-semibold">
                    Digital Marketing
                  </h1>
                  <h3 className="text-sm text-[#67687A]">Brand Growth</h3>
                </div>
              </div>

              <div className="flex gap-2.5 items-center mt-4">
                <img src={uiux} alt="Empathetic" className="w-8 h-8" />
                <div className="flex flex-col">
                  <h1 className="text-white font-semibold">UI/UX Design</h1>
                  <h3 className="text-sm text-[#67687A]">
                    Intuitive Experiences
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* digital */}
      <div className="container-p gap-5 grid grid-cols-5 max-md:grid-cols-1 place-items-center">
        <div className="w-full order-1 max-md:order-2 col-span-3 max-md:grid-cols-1 max-md:px-2 max-md:mt-8">
          <div className="mx-6 w-14 mb-4">
            <img src={line} alt="----" />
          </div>
          <div className="relative">
            <h1 className="text-3xl text-white font-semibold w-full max-w-[550px]">
              We blend <span className="gradient-text">Empathy </span> &{" "}
              <span className="text-primary">innovation </span>
              drive business growth with AI and{" "}
              <span className="text-teritary">innovation </span>
            </h1>
            <div className="flex gap-2 mt-6 items-center flex-wrap">
              <div className="px-4 mb-1 py-1.5 pb-2 bg-[#292738] rounded-md flex items-center gap-2">
                <img src={check} alt="check" className="w-5 h-5 mt-1" />
                <h1 className="font-semibold text-white">Tech Solutions</h1>
              </div>
              <div className="px-4 py-1.5 pb-2 bg-[#292738] rounded-md flex items-center gap-2">
                <img src={check} alt="check" className="w-5 h-5 mt-1" />
                <h1 className="font-semibold text-white">IT Consulting</h1>
              </div>
              <div className="px-4 py-1.5 pb-2 bg-[#292738] rounded-md flex items-center gap-2">
                <img src={check} alt="check" className="w-5 h-5 mt-1" />
                <h1 className="font-semibold text-white">Web Solutions</h1>
              </div>
              <div className="px-4 py-1.5 pb-2 bg-[#292738] rounded-md flex items-center gap-2">
                <img src={check} alt="check" className="w-5 h-5 mt-1" />
                <h1 className="font-semibold text-white">Bussiness Growth</h1>
              </div>
              <div className="px-4 py-1.5 pb-2 bg-[#292738] rounded-md flex items-center gap-2">
                <img src={check} alt="check" className="w-5 h-5 mt-1" />
                <h1 className="font-semibold text-white">Product Design</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full order-2 max-md:order-1 max-md:max-w-[300px] col-span-2">
          <Lottie animationData={aboutAnimation} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Features;
