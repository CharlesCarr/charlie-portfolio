import { useState } from "react";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";

function RightSection() {
  const [filterState, setFilterState] = useState<string>("Latest Projects");

  return (
    <main className="w-full lg:w-3/4 h-full flex flex-col p-6 px-px sm:px-6">
      <div className="flex justify-center items-end w-full h-1/6">
        <ul className="m-0 p-0 w-full flex justify-start items-end pl-5 pb-2 text-lg sm:text-xl lg:text-3xl">
          <li
            className={`${
              filterState === "Latest Projects"
                ? "border-b-2 lg:border-b-4 border-black dark:border-gray-200 font-bold"
                : "font-light"
            } mr-8 lg:mr-16 cursor-pointer`}
            onClick={(e: any) => setFilterState(e.target.innerText)}
          >
            Latest Projects
          </li>
          <li
            className={`${
              filterState === "Skillset"
                ? "border-b-2 lg:border-b-4 border-black dark:border-gray-200 font-bold"
                : "font-light"
            } mr-8 lg:mr-16 cursor-pointer`}
            onClick={(e: any) => setFilterState(e.target.innerText)}
          >
            Skillset
          </li>
          <li
            className={`${
              filterState === "About"
                ? "border-b-2 lg:border-b-4 border-black dark:border-gray-200 font-bold"
                : "font-light"
            } mr-8 lg:mr-16 cursor-pointer`}
            onClick={(e: any) => setFilterState(e.target.innerText)}
          >
            About
          </li>
        </ul>
      </div>

      <div className="w-full h-main mt-5 flex justify-around items-center p-6">
        {/* Component for Projects State */}
        {filterState === "Latest Projects" && <ProjectsSection />}
        {/* Component for Skillset State */}
        {filterState === "Skillset" && <SkillsSection />}
        {/* Component for About State */}
        {filterState === "About" && <AboutSection />}
      </div>
    </main>
  );
}

export default RightSection;
