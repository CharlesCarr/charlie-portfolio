// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { BsMoonFill, BsSunFill } from "react-icons/bs";

import Image from "next/image";

function Header() {
  // const [mounted, setMounted] = useState<boolean>(false);
  // const { systemTheme, theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

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

  // const openResume = () => {
  //   window.open("/CharlieCarrResumeJan2023.pdf");
  // };

  return (
    <header className="flex h-1/6 w-full items-center justify-between tracking-wide pt-10">
      <div className="flex gap-x-5 items-center">
        <div className="w-14 h-14 flex flex-col justify-center items-center relative">
          <Image
            src="/images/headshot.jpg"
            alt="headshot"
            fill
            priority
            // min-h-[250px]
            className="rounded-full object-cover overflow-hidden"
          />
        </div>

        <p>charlie-carr.com</p>
      </div>

      <div className="flex justify-center items-center gap-x-10 text-sm">
        <p>Projects</p>
        <p>Articles</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="flex justify-center items-center gap-x-6">
        {/* <p>test</p> */}
        <button className="bg-white text-black rounded-lg px-4 py-2">Resume</button>
      </div>
    </header>
  );
}

export default Header;
