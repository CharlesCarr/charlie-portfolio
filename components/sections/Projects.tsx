import { NewProject } from "../NewProject";
import Project from "../Project";

export const Projects = () => {
  const allProjects = [
    {
      id: 0,
      title: "NFL STATS DASHBOARD",
      image: "/images/projects/nfl-app.png",
      description:
        "NFL stats dashboard (full stack web app) using AWS's Next Gen NFL Stats for displaying and tracking passing data.",
      github: "https://github.com/CharlesCarr/nfl_nextgen_stats",
      demo: "https://react-nfl.onrender.com/",
      tech: ["Python/Flask", "TypeScript", "React/Redux", "TailwindCSS"],
    },
    {
      id: 1,
      title: "CRM WEB APP",
      image: "/images/projects/crm.png",
      description:
        "Sales prospecting CRM web app for sales professionals to track their accounts, prospects, and interactions in a seamless and modern UI/UX.",
      github: "https://github.com/CharlesCarr/full-stack-crm",
      demo: "",
      // demo: "https://react-nfl.onrender.com/",
      tech: ["MongoDB/Express/React.js/Node", "Apollo/GraphQL"],
    },
    {
      id: 2,
      title: "NFT WEBSITE",
      image: "/images/projects/nft-collection-screen-one.png",
      description:
        "NFT collection website with a clean and modern design. NFT images were created using StarryAI's AI generation.",
      github: "https://github.com/CharlesCarr/next-nft-landing-page",
      demo: "https://next-nft-landing-page.vercel.app/",
      tech: ["React JS", "TypeScript", "Next.js", "TailwindCSS"],
    },
    {
      id: 3,
      title: "WORKOUT APP",
      image: "/images/projects/WorkoutApp.png",
      description:
        "Custom workout tracker web app. Enabling users to create profiles and create, save, and edit workouts. Ability to select workout for the day to have on hand while at the gym.",
      github: "https://github.com/CharlesCarr/workout-v2",
      demo: "https://workout-tracker-faa13.web.app/",
      tech: ["React JS", "Material UI", "Firebase"],
    },
    {
      id: 4,
      title: "STOCKCHARTZ",
      image: "/images/projects/StockChartz.png",
      description:
        "Stock tracking chart web app. Users input stock ticker(s) to display and compare stock price chart data and percentage change.",
      github: "https://github.com/CharlesCarr/react-stock-chart",
      demo: "https://stockchartz.web.app/",
      tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-screen bg-neutral-800 px-20 pt-28">
      <h1 className="text-4xl font-semibold mb-4">Latest Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-6">
        {allProjects.map(
          ({ title, image, description, github, demo, tech }) => (
            <NewProject
              title={title}
              image={image}
              description={description}
              github={github}
              demo={demo}
              tech={tech}
            />
          )
        )}
      </div>
    </div>
  );
};
