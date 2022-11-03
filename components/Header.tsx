import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Header() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsMoonFill
          className="w-6 h-6 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsSunFill
          className="w-6 h-6 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="flex h-header-actual w-full justify-between items-center px-12 border-b-black dark:border-b-gray-200 border-t-0 border-x-0 border-4 bg-[#e1e2e6] dark:bg-neutral-700">
      {/* right header */}
      <div className="flex justify-center items-center">
        <p className="text-xl sm:text-3xl">charlie-carr.com</p>
      </div>

      {/* left header */}
      <div className="flex items-center justify-center">
        <div className="text-xs">{renderThemeChanger()}</div>
        <button className="border-2 ml-7 border-black dark:border-gray-200 py-1 px-3 text-base sm:text-lg">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
