import line from "../assets/icons/line.svg";
import { achievements } from "../constant";

const Achievements = () => {
  return (
    <div className="container-p max-md:mt-16">
      <div className="relative w-full max-md:px-2 max-md:mt-5">
        <h1 className="absolute top-[-15px] z-[-1] left-[2px] uppercase text-4xl font-bold text-transparent stroke-2 text-stroke stroke-gray-900">
          Achievements
        </h1>
        <div className="mx-6 w-14 mb-4">
          <img src={line} alt="----" />
        </div>
        <h1 className="text-3xl text-white font-semibold w-full max-w-[450px]">
          <span className="gradient-text">Explore</span> Our Company{" "}
          <span className="text-primary">Milestones</span>
        </h1>
        <p className="text-gray-400 mt-1 max-w-[500px]">
          Discover the milestones that have shaped our journey. Our achievements
          reflect our commitment to innovation, empathy, and creating meaningful
          impact.
        </p>
      </div>
      <div className="mt-14 mb-16 w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center">
        {achievements.map((a) => {
          return (
            <div
              key={a.id}
              className="w-full mt-5 py-16 bg-cardbg max-w-[300px] rounded-md -skew-y-6 transition-transform duration-300 hover:-skew-y-0 cursor-pointer flex items-center justify-center gap-2 flex-col"
            >
              <img src={a.img} alt={a.name} className="w-20 h-20" />
              <h1 className="text-4xl font-bold">{a.value.padStart(3)}+</h1>
              <h5 className="font-[300]">{a.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
