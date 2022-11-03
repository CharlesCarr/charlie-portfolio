import Project from "../Project";
import { useState } from "react";

const allProjects = [
  {
    title: "NFL STATS DASHBOARD",
    image: "/images/projects/nfl-app.png",
    description:
      "NFL stats dashboard (full stack web app) using AWS's Next Gen NFL Stats for displaying and tracking passing data.",
    github: "https://github.com/CharlesCarr/nfl_nextgen_stats",
    demo: "https://react-nfl.onrender.com/",
    tech: ["Python/Flask", "TypeScript", "React/Redux", "TailwindCSS"],
  },
  {
    title: "NFT WEBSITE",
    image: "/images/projects/nft-collection-screen-one.png",
    description:
      "NFT collection website with a clean and modern design. NFT images were created using StarryAI's AI generation.",
    github: "https://github.com/CharlesCarr/next-nft-landing-page",
    demo: "https://next-nft-landing-page.vercel.app/",
    tech: ["React JS", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    title: "MY WORKOUT APP",
    image: "/images/projects/WorkoutApp.png",
    description:
      "Custom workout tracker web app. Enabling users to create profiles and create, save, and edit workouts. Ability to select workout for the day to have on hand while at the gym.",
    github: "https://github.com/CharlesCarr/workout-v2",
    demo: "https://workout-tracker-faa13.web.app/",
    tech: ["React JS", "Material UI", "Firebase"],
  },
  {
    title: "STOCKCHARTZ",
    image: "/images/projects/StockChartz.png",
    description:
      "Stock tracking chart web app. Users input stock ticker(s) to display and compare stock price chart data and percentage change.",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  },
];

function Projects() {
  // will be based off of the project index (need to add that to the data)
  const [projectSelected, setProjectSelected] = useState<number>(0);

  return (
    <div className="h-full w-full relative">
      <ul className="absolute flex justify-center items-center -top-8 left-0">
        <li
          className={`${
            projectSelected === 0 ? "bg-black" : null
          } mr-4 border-2 border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(0)}
        ></li>
        <li
          className={`${
            projectSelected === 1 ? "bg-black" : null
          } mr-4 border-2 border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(1)}
        ></li>
        <li
          className={`${
            projectSelected === 2 ? "bg-black" : null
          } mr-4 border-2 border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(2)}
        ></li>
        <li
          className={`${
            projectSelected === 3 ? "bg-black" : null
          } mr-4 border-2 border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(3)}
        ></li>
      </ul>
      {/* Individual Project One */}
      {projectSelected === 0 && (
        <Project
          title={allProjects[0].title}
          image={allProjects[0].image}
          description={allProjects[0].description}
          github={allProjects[0].github}
          demo={allProjects[0].demo}
          tech={allProjects[0].tech}
        />
      )}
      {projectSelected === 1 && (
        <Project
          title={allProjects[1].title}
          image={allProjects[1].image}
          description={allProjects[1].description}
          github={allProjects[1].github}
          demo={allProjects[1].demo}
          tech={allProjects[1].tech}
        />
      )}
      {projectSelected === 2 && (
        <Project
          title={allProjects[2].title}
          image={allProjects[2].image}
          description={allProjects[2].description}
          github={allProjects[2].github}
          demo={allProjects[2].demo}
          tech={allProjects[2].tech}
        />
      )}
      {projectSelected === 3 && (
        <Project
          title={allProjects[3].title}
          image={allProjects[3].image}
          description={allProjects[3].description}
          github={allProjects[3].github}
          demo={allProjects[3].demo}
          tech={allProjects[3].tech}
        />
      )}
    </div>
  );
}

export default Projects;
