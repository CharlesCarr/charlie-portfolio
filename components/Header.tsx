import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // const renderThemeChanger = () => {
  //   if (!mounted) return null;
  //   const currentTheme = theme === "system" ? systemTheme : theme;

  //   if (currentTheme === "dark") {
  //     return (
  //       <BsMoonFill
  //         className="w-6 h-6 cursor-pointer hover:scale-125"
  //         onClick={() => setTheme("light")}
  //       />
  //     );
  //   } else {
  //     return (
  //       <BsSunFill
  //         className="w-6 h-6 cursor-pointer hover:scale-125"
  //         onClick={() => setTheme("dark")}
  //       />
  //     );
  //   }
  // };

  const openResume = () => {
    window.open("/CharlieCarrResumeJan2023.pdf");
  };

  return (
    <header className="flex h-header-actual w-full justify-between items-center px-4 sm:px-12 border-b-gray-200 border-t-0 border-x-0 border-4 bg-neutral-800">
      {/* right header */}
      <div className="flex justify-center items-center">
        <p className="text-xl sm:text-3xl">charlie-carr.com</p>
      </div>

      {/* left header */}
      <div className="flex items-center justify-center">
        {/* <div className="text-xs">{renderThemeChanger()}</div> */}
        {/* <button className="border-2 ml-7 border-black dark:border-gray-200 py-1 px-3 text-base sm:text-lg">
          Resume
        </button> */}

        <button className="ml-5" onClick={() => openResume()}>
          <a
            // href="#_"
            className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all border-2 border-gray-200 group"
          >
            <span className="w-52 h-52 rounded rotate-[-40deg] bg-gray-200 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-neutral-800">
              Resume
            </span>
          </a>
        </button>
      </div>
    </header>
  );
}

export default Header;
