import { motion } from "framer-motion";
import line from "../assets/icons/line.svg";
import { project } from "../constant";
import git from "../assets/icons/github.png";

const Project = () => {
  return (
    <div id="projects" className="container-p max-md:mt-20 pt-12">
      {/* Heading Animation with whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: false }}
        className="relative w-full max-md:px-2 max-md:mt-5"
      >
        <h1 className="absolute top-[-15px] z-[-1] left-[-1%] max-md:left-[2px] uppercase text-7xl max-md:text-4xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
          Projects
        </h1>
        <div className="mx-6 w-14 mb-4">
          <img src={line} alt="----" />
        </div>
        <h1 className="text-3xl text-white font-semibold w-full max-w-[420px]">
          <span className="gradient-text">Checkout</span> Our Company{" "}
          <span className="text-primary">Projects</span>
        </h1>
        <p className="text-gray-400 mt-1 max-w-[500px]">
          Our team of skilled professionals is committed to executing projects
          with precision, innovation, and excellence, ensuring each milestone
          aligns with your vision and drives impactful results.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-14 mb-16 pb-10 rounded-lg w-full grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 place-items-center">
        {project.map((a, index) => (
          <motion.div
            key={a.id}
            className="relative mb-5 w-full max-w-[280px] bg-gray-900 p-4 rounded-md cursor-pointer flex flex-col items-start gap-3 transition-transform transform hover:scale-105 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 80,
            }}
          >
            <div
              className="w-full h-[200px] rounded-md bg-cover bg-center relative"
              style={{ backgroundImage: `url(${a.img})` }}
            >
              {a.github && (
                <div className="absolute top-2.5 right-2.5 w-8 h-8 flex items-center justify-center bg-white shadow text-white rounded-full">
                  <a
                    href={a.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img src={git} alt="github" className="w-8 h-8" />
                  </a>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white">{a.title}</h1>
            <h5 className="text-sm font-medium text-zinc-400 mt-[-10px]">
              {a.desc}
            </h5>
            <div className="flex items-center justify-start gap-2 flex-wrap">
              {a.lang.map((e, index) => (
                <p
                  key={index}
                  className={`text-sm font-medium rounded py-1 ${
                    (index + 1) % 2 === 0
                      ? "text-pink-500"
                      : (index + 1) % 3 === 0
                      ? "text-blue-500"
                      : "text-green-500"
                  }`}
                >
                  # {e}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
