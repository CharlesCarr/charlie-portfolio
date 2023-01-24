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
    <header className="flex h-1/6 w-full items-center justify-between px-20">
      <div className="bg-neutral-800 w-16 h-16 flex flex-col justify-center items-center relative">
        <Image
          src="/images/headshot.jpg"
          alt="headshot"
          fill
          priority
          // min-h-[250px]
          className="rounded-full object-cover overflow-hidden"
        />
      </div>

      <div className="flex justify-center items-center gap-x-10 text-sm">
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </header>
  );
}

export default Header;
