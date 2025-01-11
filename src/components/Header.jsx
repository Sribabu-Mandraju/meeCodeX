import { useState } from "react";
import textlogo from "../assets/az.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-[1280px] py-8 px-8 max-md:px-2 bg-transparent mx-auto flex justify-between items-center gap-4">
      <a className="text-white font-semibold logo flex gap-[10px] sm:gap-[20px] items-center text-[12px] sm:text-[24px]">
        <img
          src={textlogo}
          className="sm:h-[40px] h-[50px] sm:w-[40px] w-[50px]"
          alt="AZ LOGIC logo"
        />
        <span className="audiowide-regular tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          AZ LOGIC
        </span>
      </a>

      <div className="lg:hidden flex items-center gap-4">
        <button className="bg-primary hover:bg-secondary text-white px-2 sm:px-5 rounded-md py-[1px] sm:py-2">
          Join Now
        </button>
        <button
          className="flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${
                              isMenuOpen
                                ? "rotate-45 translate-y-1"
                                : "-translate-y-0.5"
                            }`}
          />
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm my-0.5 ${
                              isMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
          />
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${
                              isMenuOpen
                                ? "-rotate-45 -translate-y-1"
                                : "translate-y-0.5"
                            }`}
          />
        </button>
      </div>

      <div className="max-lg:hidden px-5 flex text-white items-center gap-5 text-[0.85rem] rounded-md py-3 bg-[rgba(255,255,255,0.05)]">
        <a href="#brands" className="cursor-pointer text-lg uline">
          Brands
        </a>
        <a href="#features" className="cursor-pointer text-lg uline">
          Features
        </a>
        <a href="#join" className="cursor-pointer text-lg uline">
          Join Us
        </a>
        <a href="#faq" className="cursor-pointer text-lg uline">
          FAQ
        </a>
        <a href="#testimonials" className="cursor-pointer text-lg uline">
          Testimonials
        </a>
        <a href="#contact" className="cursor-pointer text-lg uline">
          Contact Us
        </a>
      </div>
      <button className="max-lg:hidden bg-primary hover:bg-secondary text-white px-5 rounded-md py-2">
        Join Now
      </button>

      <div
        className={`lg:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col text-white items-center gap-5 text-[0.85rem] rounded-md py-3 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] fixed top-20 right-4 left-4 z-50`}
      >
        <a
          href="#brands"
          className="cursor-pointer text-lg uline w-full text-center hover:bg-[rgba(255,255,255,0.1)] py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Brands
        </a>
        <a
          href="#features"
          className="cursor-pointer text-lg uline w-full text-center hover:bg-[rgba(255,255,255,0.1)] py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Features
        </a>
        <a
          href="#join"
          className="cursor-pointer text-lg uline w-full text-center hover:bg-[rgba(255,255,255,0.1)] py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Join Us
        </a>
        <a
          href="#faq"
          className="cursor-pointer text-lg uline w-full text-center hover:bg-[rgba(255,255,255,0.1)] py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          FAQ
        </a>
        <a
          href="#testimonials"
          className="cursor-pointer text-lg uline w-full text-center hover:bg-[rgba(255,255,255,0.1)] py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="cursor-pointer text-lg uline w-full text-center hover:bg-[rgba(255,255,255,0.1)] py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Header;
