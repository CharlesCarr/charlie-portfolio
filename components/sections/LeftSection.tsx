import Image from "next/image";
import { FaMapPin, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function LeftSection() {
  const iconClickHandler = (link: string) => {
    window.open(link);
  };

  return (
    <section className="w-full lg:w-1/4 h-header flex-col md:flex lg:flex-col justify-center md:justify-around items-center lg:border-r-4 border-black dark:border-gray-200 border-0 border-b-4 lg:border-b-0 px-6 py-6 bg-[#acafb5] dark:bg-neutral-800">
      <div className="bg-black rounded-2xl w-44 h-44 sm:w-60 sm:h-80 lg:w-full lg:h-left flex flex-col justify-center items-center relative">
        <Image
          src="/images/headshot.jpeg"
          alt="headshot"
          fill
          priority
          className="rounded-2xl object-contain overflow-hidden"
        />
      </div>

      <div className="w-1/2 lg:w-full h-60 flex flex-col justify-between items-center border-4 border-black dark:border-gray-200 mt-4 px-2 lg:px-4 py-6 shadow-inner bg-[#ced1d3] dark:bg-neutral-700">
        <p className="text-lg sm:text-xl lg:text-2xl mb-2 tracking-wide">
          CHARLIE CARR
        </p>
        <ul className="w-full flex justify-center items-center m-0 p-0">
          <li className="mr-3">
            <FaLinkedin className="w-6 h-6 cursor-pointer" onClick={() => iconClickHandler("https://www.linkedin.com/in/charliecarr4/")} />
          </li>
          <li className="mr-3">
            <FaGithub className="w-6 h-6 cursor-pointer" onClick={() => iconClickHandler("https://github.com/CharlesCarr")} />
          </li>
          <li>
            <GrMail className="w-6 h-6 cursor-pointer" onClick={() => iconClickHandler("mailto:charliecarr4@gmail.com")} />
          </li>
        </ul>
        <div className="w-full flex justify-between items-center mt-3">
          <p className="font-light text-sm sm:text-base md:text-sm">
            Software Developer
          </p>
          <div className="flex items-center justify-center">
            <FaMapPin className="text-red-600 w-4 h-4" />
            <p className="text-sm sm:text-base md:text-sm ml-px">NYC</p>
          </div>
        </div>

        <div className="w-full h-4 border-b-2 border-black dark:border-gray-200"></div>

        <ul className="w-full m-0 p-0 mt-3 flex flex-col justify-center items-center lg:block">
          <li className="text-xs font-light mb-2">
            Prev. Front End Intern @ Revelio Labs
          </li>
          <li className="text-xs font-light mb-2">
            React / TypeScript Enthusiast
          </li>
          <li className="text-xs font-light">Customer Focused</li>
        </ul>
      </div>
    </section>
  );
}

export default LeftSection;
