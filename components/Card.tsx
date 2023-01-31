import { FaGithub, FaStar } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const Card = ({ type, tech, title, description, github, demo, link }: any) => {
  const iconClickHandler = (link: string) => {
    window.open(link);
  };

  return (
    <div className="z-50 h-52 w-[350px] md:w-[300px] lg:w-[310px] xl:w-[330px] flex flex-col p-4 text-sm rounded-md gap-y-1 relative bg-neutral-900/[.75] drop-shadow-2xl border">
      <div className="flex w-full justify-between items-center">
        <p className="font-bold">
          {type} <span className="font-extralight text-xs">| {tech}</span>
        </p>

        <FaStar className="w-6 h-6" />
      </div>

      <p className="font-bold text-xl tracking-wide">{title}</p>
      <p className="font-extralight text-xs leading-5">{description}</p>

      <div className="absolute bottom-3 flex flex-col">
        <div className="flex gap-4 mb-1">
          {github && (
            <button
              className="flex justify-center items-center gap-1 text-xs hover:text-orange-700 ease-in duration-200"
              onClick={() => iconClickHandler(github)}
            >
              <p>GitHub</p>
              <FaGithub className="w-4 h-4" />
            </button>
          )}

          {demo && (
            <button
              className="flex justify-center items-center gap-1 text-xs hover:text-orange-700 ease-in duration-200"
              onClick={() => iconClickHandler(demo)}
            >
              <p>Live Link</p>
              <HiExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>

        <p className="font-semibold text-sm">{link}</p>
      </div>
    </div>
  );
};

export default Card;
