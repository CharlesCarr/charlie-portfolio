import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Image from "next/image";

const Project = ({ title, image, description, github, demo, tech }: any) => {
  const gitHubClickHandler = () => {
    window.open(github);
  };

  const demoClickHandler = () => {
    window.open(demo);
  };

  return (
    <div className="h-full w-full flex flex-col sm:flex-row justify-center items-center">
      {/* left side project */}
      <div className="w-full sm:w-1/3 h-60 sm:h-full border-4 border-black flex flex-col justify-between items-center py-6 sm:py-14 px-2 lg:px-4 mr-2 bg-[#acafb5] mb-6 sm:mb-0">
        <h1 className="font-bold mb-2 text-base lg:text-2xl tracking-wide text-center">
          {title}
        </h1>
        <div className="w-full h-1 border-t-black border-b-0 border-x-0 border-4 mb-2"></div>
        <p className="text-sm text-center leading-6 px-3">{description}</p>
        <div className="w-full h-4 border-t-black border-b-0 border-x-0 border-4 mt-2"></div>
        <ul className="m-0 p-0 w-full flex justify-center items-center">
          <li>
            <FaGithub
              className="w-8 h-8 mr-3 cursor-pointer"
              onClick={() => gitHubClickHandler()}
            />
          </li>
          <li>
            <FiLink
              className="w-8 h-8 ml-3 cursor-pointer"
              onClick={() => demoClickHandler()}
            />
          </li>
        </ul>
      </div>

      {/* right side project */}
      <div className="w-full sm:w-2/3 h-full flex flex-col items-center justify-center">
        {/* change to video soon */}
        <div className="w-[360px] h-[200px] sm:h-[200px] md:w-[400px] md:h-[280px] lg:w-full lg:h-3/4 flex justify-center items-center border-t-black border-x-black border-b-0 border-4 relative bg-black">
          <Image
            src={image}
            layout="fill"
            alt="project"
            objectFit="contain"
            className="shrink-0"
          />
        </div>
        <ul className="w-[360px] h-14 lg:h-1/4 md:w-[400px] lg:w-full flex justify-around items-center  border-4 border-black shadow-inner">
          {tech.map((t: string) => (
            <li className="font-bold text-xs sm:text-sm lg:text-lg tracking-normal lg:tracking-wide">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
