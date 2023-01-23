import Image from "next/image";
import { FaMapPin, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function LeftSection() {
  const iconClickHandler = (link: string) => {
    window.open(link);
  };

  return (
    <section className="w-full lg:w-1/4 h-header flex flex-col sm:flex-col-reverse md:flex-row lg:flex-col justify-center md:justify-around items-center lg:border-r-4 border-gray-200 border-0 border-b-4 lg:border-b-0 px-6 py-6 bg-neutral-900">
      <div className="bg-neutral-800 rounded-2xl w-52 h-60 sm:w-60 sm:mt-5 sm:h-1/2 lg:w-full lg:h-left flex flex-col justify-center items-center relative">
        <Image
          src="/images/headshot.jpg"
          alt="headshot"
          fill
          priority
          // min-h-[250px]
          className="rounded-2xl object-cover xl:object-contain overflow-hidden"
        />
      </div>

      <div className="w-full lg:w-full sm:w-1/2 sm:h-1/2 h-60 flex flex-col justify-between items-center border-4 border-gray-200 mt-4 px-2 lg:px-4 py-6 shadow-inner bg-neutral-800">
        <p className="text-3xl sm:text-2xl 2xl:text-4xl mb-2 tracking-wide text-center">
          CHARLIE CARR
        </p>
        <ul className="w-full flex justify-center items-center m-0 p-0">
          <li className="mr-5">
            <FaLinkedin
              className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 cursor-pointer hover:scale-125"
              onClick={() =>
                iconClickHandler("https://www.linkedin.com/in/charliecarr4/")
              }
            />
          </li>
          <li className="mr-5">
            <FaGithub
              className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 cursor-pointer hover:scale-125"
              onClick={() => iconClickHandler("https://github.com/CharlesCarr")}
            />
          </li>
          <li>
            <GrMail
              className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 cursor-pointer hover:scale-125"
              onClick={() => iconClickHandler("mailto:charliecarr4@gmail.com")}
            />
          </li>
        </ul>
        <div className="w-full flex justify-between items-center mt-3 md:px-2 lg:px-0">
          <p className="font-light text-base md:text-lg lg:text-sm xl:text-base">
            Software Developer
          </p>
          <div className="flex items-center justify-center">
            <FaMapPin className="text-red-600 w-4 h-4" />
            <p className="text-base md:text-lg lg:text-sm ml-px xl:text-base">
              NYC
            </p>
          </div>
        </div>

        <div className="w-full h-4 border-b-2 border-gray-200"></div>

        <ul className="w-full m-0 p-0 mt-3 flex flex-col justify-center items-center lg:block">
          <li className="text-sm lg:text-xs 2xl:text-sm font-light mb-2">
            Prev. Front End Dev @ Revelio Labs
          </li>
          <li className="text-sm lg:text-xs 2xl:text-sm font-light mb-2">
            React / TypeScript Enthusiast
          </li>
          <li className="text-sm lg:text-xs 2xl:text-sm font-light">
            Customer Focused
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LeftSection;
