import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const Contact = () => {
  const iconClickHandler = (link: string) => {
    window.open(link);
  };

  return (
    <div className="min-h-screen max-h-screen w-full max-w-screen px-20 bg-gradient-one bg-center bg-cover flex flex-col justify-center items-center relative">
      <h1 className="text-5xl mb-6">Let's Connect!</h1>

      <div className="flex justify-center items-center gap-4 mb-6 ">
        <div
          className="flex gap-1 hover:text-black cursor-pointer"
          onClick={() =>
            iconClickHandler("https://www.linkedin.com/in/charliecarr4/")
          }
        >
          <p>LinkedIn</p>
          <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>

        <div
          className="flex gap-1 hover:text-black ease-in cursor-pointer"
          onClick={() =>
            iconClickHandler("https://www.linkedin.com/in/charliecarr4/")
          }
        >
          <p>GitHub</p>
          <FaGithub
            className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6"
            onClick={() => iconClickHandler("https://github.com/CharlesCarr")}
          />
        </div>

        <div
          className="flex gap-1 hover:text-black ease-in cursor-pointer"
          onClick={() => iconClickHandler("https://twitter.com/CHAR_CARR_DEV")}
        >
          <p>Twitter</p>
          <FaTwitter className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>

        <div
          className="flex gap-1 hover:text-black ease-in cursor-pointer"
          onClick={() => iconClickHandler("mailto:charliecarr4@gmail.com")}
        >
          <p>Email</p>
          <GrMail className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6" />
        </div>
      </div>

      <form className="flex flex-col">
        <label>Test</label>
        <input />
        <button className="bg-white/[.75] text-black text-sm rounded-lg px-4 py-2 mt-4">
          Send Message
        </button>
      </form>

      <div className="absolute left-2 bottom-2 flex justify-center items-center text-xs gap-6">
        <p>Designed & Developed by Charlie</p>

        <div
          className="flex justify-center items-center gap-1 hover:text-black ease-in cursor-pointer"
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
