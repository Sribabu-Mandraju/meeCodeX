import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
import testimonalbg from "../assets/testimonalbg.png";
import line from "../assets/icons/line.svg";
import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";
import quotes from "../assets/icons/quotes.svg";
import msg from "../assets/icons/msg.svg";
import { testimonials } from "../constant";

const Testimonals = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  // eslint-disable-next-line
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleResize = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(
        ".testimonial-card"
      );
      if (card) {
        setCardWidth(card.offsetWidth);
      }
      setContainerWidth(scrollContainerRef.current.offsetWidth);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current && scrollPosition > 0) {
      scrollContainerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
      setScrollPosition((prev) => Math.max(prev - 1, 0));
    } else {
      scrollContainerRef.current.scrollTo({
        left: containerWidth * (testimonials.length - 1),
        behavior: "smooth",
      });
      setScrollPosition(testimonials.length - 1);
    }
  };

  const handleScrollRight = () => {
    if (
      scrollContainerRef.current &&
      scrollPosition < testimonials.length - 1
    ) {
      scrollContainerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
      setScrollPosition((prev) => Math.min(prev + 1, testimonials.length - 1));
    } else {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      setScrollPosition(0);
    }
  };

  // Disable mouse scroll
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault(); // Prevent scrolling with mouse
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        scrollContainerRef.current &&
        scrollPosition < testimonials.length - 1
      ) {
        scrollContainerRef.current.scrollBy({
          left: containerWidth,
          behavior: "smooth",
        });
        setScrollPosition((prev) =>
          Math.min(prev + 1, testimonials.length - 1)
        );
      } else {
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setScrollPosition(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [scrollPosition, containerWidth, testimonials.length]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Add wheel event listener to disable mouse scroll
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);

      // Clean up the wheel event listener
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      id="testimonials"
      className="container-p py-8 bg-cover bg-center max-lg:bg-none"
      style={{
        backgroundImage: `url('${testimonalbg}')`,
      }}
    >
      {/* Heading animation: Bottom to Top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-10 pt-16 w-full flex items-center justify-center"
      >
        <div className="flex flex-col relative items-center justify-center">
          <h1 className="absolute w-full top-[-20px] z-[-1] left-[0%] max-md:left-[40%] -translate-x-1/2 uppercase text-7xl max-md:text-4xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
            Testimonials
          </h1>
          <div className="mx-6 w-14 mb-2">
            <img src={line} alt="----" />
          </div>
          <h1 className="text-2xl z-[1] text-center text-white font-semibold">
            People’s Say About Our <br />
            Support <span className="text-[#F3CA49]">& Services</span>
          </h1>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="mt-14 flex items-center gap-8 py-[30px]">
        <img
          src={chevronLeft}
          alt="chevron-left"
          className="w-10 max-md:hidden max-md:w-8 h-10 max-md:h-8 cursor-pointer"
          onClick={handleScrollLeft}
        />
        <motion.div
          ref={scrollContainerRef}
          className="w-full min-h-[400px] flex items-center overflow-x-auto p-[30px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card flex items-center justify-center min-w-[50%] max-lg:min-w-full p-2"
            >
              <div className="flex relative bg-cardbg justify-center  max-w-[420px] items-center h-full py-8 px-8 rounded-xl">
                <div className="absolute h-[100px] w-[100px] rounded-full bg-white top-[-35px] border-[2px]"></div>
                <div className="text-white text-xl font-semibold">
                  <img src={quotes} alt="Quotes" className="w-10 h-10" />
                  <p className="text-lg py-1 font-[400] text-gray-400">
                    {testimonial.content}
                  </p>
                  <div className="line my-5 h-[1px] w-full bg-gray-600"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-semibold mt-3">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">
                        {testimonial.position}
                      </p>
                    </div>
                    <div>
                      <img src={msg} alt="message" className="w-16 h-16" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <img
          src={chevronRight}
          alt="chevron-right"
          className="w-10 max-md:hidden max-md:w-8 h-10 max-md:h-8 cursor-pointer"
          onClick={handleScrollRight}
        />
      </div>
    </div>
  );
};

export default Testimonals;
