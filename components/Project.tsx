import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";

const Project = ({ title, image, description, github, demo, tech }: any) => {
  const gitHubClickHandler = () => {
    window.open(github);
  };

  const demoClickHandler = () => {
    window.open(demo);
  };

  return (
    <div className="h-full md:h-[450px] lg:h-full w-full flex flex-col sm:flex-row justify-center items-center mt-2 sm:mt-0">
      {/* left side project */}
      <div className="w-full sm:w-1/3 h-64 sm:h-full border-4 border-black dark:border-gray-200 flex flex-col justify-between items-center py-4 2xl:py-10 sm:px-2 lg:px-4 mr-0 sm:mr-2 bg-[#acafb5] dark:bg-neutral-900 mb-6 sm:mb-0">
        <h1 className="font-bold mb-2 text-base lg:text-2xl tracking-wide text-center">
          {title}
        </h1>
        <div className="w-full h-1 border-t-black dark:border-t-gray-200 border-b-0 border-x-0 border-4 mb-1"></div>
        <p className="text-sm 2xl:text-base text-center leading-6 2xl:leading-8 px-3">
          {description}
        </p>
        <div className="w-full h-4 border-t-black dark:border-t-gray-200 border-b-0 border-x-0 border-4 mt-1"></div>
        <ul className="m-0 p-0 w-full flex justify-center items-start">
          <li>
            <button
              onClick={() => gitHubClickHandler()}
              className="p-2 border-2 border-black dark:border-gray-200 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:scale-110 hover:shadow-lg"
            >
              <FaGithub className="w-8 h-8 " />
            </button>
          </li>
          <li>
            <button
              onClick={() => demoClickHandler()}
              className="p-2 border-2 border-black dark:border-gray-200 rounded-full flex justify-center items-center ml-3 cursor-pointer hover:scale-110 hover:shadow-lg"
            >
              <HiExternalLink className="w-8 h-8" />
            </button>
          </li>
        </ul>
      </div>

      {/* right side project */}
      <div className="w-full sm:w-2/3 h-64 sm:h-full flex flex-col items-center justify-center">
        {/* change to video soon */}
        <div className="w-full sm:w-[360px] h-[200px] sm:h-[200px] md:w-[400px] lg:w-full md:h-3/4 flex justify-center items-center border-t-black dark:border-t-gray-200 border-x-black dark:border-x-gray-200 border-b-0 border-4 relative bg-black">
          <Image
            src={image}
            alt="project"
            fill
            priority
            className="object-contain overflow-hidden cursor-pointer"
            onClick={() => gitHubClickHandler()}
          />
        </div>
        <ul className="w-full sm:w-[360px] h-14 md:h-1/4 md:w-[400px] lg:w-full flex justify-around items-center  border-4 border-black dark:border-gray-200 shadow-inner">
          {tech.map((t: string) => (
            <li className="font-normal xl:font-bold text-xs sm:text-sm lg:text-base xl:text-lg tracking-normal lg:tracking-wide">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
