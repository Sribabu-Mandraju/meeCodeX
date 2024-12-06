// import textlogo from "../assets/textlogo.png";

const Header = () => {
  return (
    <div className="max-w-[1280px] py-8 px-8 max-md:px-2 bg-transparent mx-auto flex justify-between items-center gap-4">
      <a className="text-white font-semibold text-2xl logo">Sepnoty</a>
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
      <button className="bg-primary hover:bg-secondary text-white px-5 rounded-md py-2">
        Join Now
      </button>
    </div>
  );
};

export default Header;
