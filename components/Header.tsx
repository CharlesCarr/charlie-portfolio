import { useState } from "react";
import { BsMoonFill, BsSunFill} from "react-icons/bs"

function Header() {
  const [lightMode, setLightMode] = useState<boolean>(true);

  return (
    <header className="flex h-16 w-full justify-between items-center px-12  border-b-black border-t-0 border-x-0 border-4 bg-[#e1e2e6]">
      {/* right header */}
      <div className="flex justify-center items-center">
        <p className="text-xl sm:text-3xl">charlie-carr.com</p>
      </div>

      {/* left header */}
      <div className="flex items-center justify-center">
        <div className="text-xs">
          {lightMode ? (
            <BsMoonFill
              className="w-6 h-6 cursor-pointer"
              onClick={() => setLightMode(!lightMode)}
            />
          ) : (
            <BsSunFill
              className="w-6 h-6 cursor-pointer"
              onClick={() => setLightMode(!lightMode)}
            />
          )}
        </div>
        <button className="border-2 ml-7 border-black py-1 px-3 text-base sm:text-lg">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;