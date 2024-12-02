// import textlogo from "../assets/textlogo.png";

const Header = () => {
  return (
    <div className="max-w-[1280px] py-8 px-8 max-md:px-2 bg-transparent mx-auto flex justify-between items-center gap-4">
      <h1 className="text-white font-semibold text-xl">Sepnoty</h1>
      <div className="max-lg:hidden px-5 flex text-white items-center gap-5 text-[0.85rem] rounded-md py-3 bg-[rgba(255,255,255,0.05)]">
        <h1 className="cursor-pointer uline">Features</h1>
        <h1 className="cursor-pointer uline">Who We Are?</h1>
        <h1 className="cursor-pointer uline">Services</h1>
        <h1 className="cursor-pointer uline">Tepnoty App</h1>
        <h1 className="cursor-pointer uline">Membership</h1>
        <h1 className="cursor-pointer uline">Contact Us</h1>
      </div>
      <button className="bg-primary hover:bg-secondary text-white px-5 rounded-md py-2">
        Join Now
      </button>
    </div>
  );
};

export default Header;
