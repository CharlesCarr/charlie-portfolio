import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import GradientImg from "../../public/images/background/18.jpg";

export const Contact = () => {
  const iconClickHandler = (link: string) => {
    window.open(link);
  };

  return (
    <div
      id="contact"
      className="min-h-screen max-h-screen w-full max-w-screen px-20 bg-[#1a1a1a] flex flex-col justify-center items-center relative"
    >
      <div className="block sm:hidden absolute m-auto top-44 w-full h-44 bg-gray-200 rounded-full mix-blend-lighten filter blur-3xl opacity-[.20]"></div>

      <Image
        src={GradientImg}
        alt="background-gradient"
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "10" }}
        className="hidden sm:block"
      />

      <h1 className="z-50 text-3xl sm:text-4xl md:text-5xl mb-6 text-white">
        Let's Connect!
      </h1>

      <div className="z-50 flex justify-center items-center gap-4 mb-6 text-gray-200">
        <div
          className="flex gap-1 hover:text-orange-700 ease-in duration-200 cursor-pointer"
          onClick={() =>
            iconClickHandler("https://www.linkedin.com/in/charliecarr4/")
          }
        >
          <p>LinkedIn</p>
          <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>

        <div
          className="flex gap-1 hover:text-orange-700 ease-in duration-200 cursor-pointer"
          onClick={() => iconClickHandler("https://github.com/CharlesCarr")}
        >
          <p>GitHub</p>
          <FaGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>

        <div
          className="flex gap-1 hover:text-orange-700 ease-in duration-200 cursor-pointer"
          onClick={() => iconClickHandler("https://twitter.com/local_host_cc")}
        >
          <p>Twitter</p>
          <FaTwitter className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>

        <div
          className="flex gap-1 hover:text-orange-700 ease-in duration-200 cursor-pointer"
          onClick={() => iconClickHandler("mailto:charliecarr4@gmail.com")}
        >
          <p>Email</p>
          <GrMail className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>
      </div>

      {/* <form className="flex flex-col">
        <label>Test</label>
        <input />
        <button className="bg-white/[.75] text-black text-sm rounded-lg px-4 py-2 mt-4">
          Send Message
        </button>
      </form> */}

      <div className="z-50 absolute m-auto sm:m-0 sm:left-2 bottom-2 flex justify-center items-center text-xs gap-6">
        <p>Designed & Developed by Charlie</p>

        <div
          className="flex justify-center items-center gap-1 text-gray-200 hover:text-orange-700 sm:hover:text-black ease-in duration-300 cursor-pointer"
          onClick={() =>
            iconClickHandler("https://github.com/CharlesCarr/charlie-portfolio")
          }
        >
          <p>View the Code</p>
          <FaGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>
      </div>
    </div>
  );
};
