import { FiChevronsRight } from "react-icons/fi";
import { social } from "../constant";

const Footer = () => {
  return (
    <footer className="mt-12 py-8 w-full border-t-[0.5px] border-gray-800">
      <div className="max-w-[1280px] mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 px-8 max-md:px-4 max-md:grid-cols-1">
        <div className="max-md:mb-10">
          <h1 className="text-2xl font-semibold mb-8">Sepnoty</h1>
          <h2 className="text-base mb-2.5 text-gray-300">Follow Us</h2>
          <div className="flex items-center gap-2.5">
            {social.map((s) => {
              const IconComponent = s.icon;
              return (
                <a key={s.id} href={s.link}>
                  <div className="rounded-full p-2 bg-gray-900 cursor-pointer border border-gray-800">
                    <IconComponent size={13} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="max-md:mb-10">
          <h1 className="text-xl font-semibold mb-3">Services</h1>
          <div className="flex flex-col gap-3">
            <h2 className="font-[400] text-gray-300">Product Design</h2>
            <h2 className="font-[400] text-gray-300">Business Consulting</h2>
            <h2 className="font-[400] text-gray-300">Custome Service</h2>
            <h2 className="font-[400] text-gray-300">Brand Identity</h2>
            <h2 className="font-[400] text-gray-300">SEO Optimization</h2>
          </div>
        </div>
        <div className="max-md:mb-10">
          <h1 className="text-xl font-semibold mb-3">Contact</h1>
          <div className="flex flex-col gap-3">
            <h2 className="font-[400] text-gray-300">
              785 Main Street, 2nd Block melbourne, australia
            </h2>
            <h2 className="font-[400] text-gray-300">support@gmail.com</h2>
            <h2 className="font-[400] text-gray-300">+000 (123) 456 88</h2>
          </div>
        </div>
        <div className="max-md:mb-10">
          <h1 className="text-lg mb-3">Newsletter</h1>
          <h2 className="text-xl font-semibold">
            Get Every Single Update to Join Our Newsletter
          </h2>
          <div className="relative w-full">
            <input
              className="w-full mt-4 py-1 px-0.5 bg-transparent outline-none border-b-[1px] border-b-gray-600"
              placeholder="Enter Your Email"
            />
            <div className="absolute bottom-2 cursor-pointer right-0">
              <FiChevronsRight />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full text-center text-gray-400">
        <p>© 2024 Sepnoty Technologies Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
