import { NewProject } from "../NewProject";

export const Projects = () => {
  const allProjects = [
    {
      id: 0,
      title: "NFL NEXT GEN DASH",
      image: "/images/projects/nfl-app.png",
      description:
        "NFL stats dashboard (full stack web app) using AWS's Next Gen NFL Stats for displaying and tracking fantasy player performance data.",
      github: "https://github.com/CharlesCarr/nfl_nextgen_stats",
      demo: "https://react-nfl.onrender.com/",
      tech: ["Python", "TypeScript", "MERN/Redux", "D3.js"],
      path: null,
    },
    {
      id: 1,
      title: "CRM WEB APP",
      image: "/images/projects/crm.png",
      description:
        "Sales prospecting CRM web app for sales professionals to track their accounts, prospects, and interactions in a seamless and modern UI/UX.",
      github: "https://github.com/CharlesCarr/full-stack-crm",
      demo: null,
      // demo: "https://react-nfl.onrender.com/",
      tech: ["MERN", "Apollo/GraphQL"],
      path: null,
    },
    {
      id: 2,
      title: "NFT WEBSITE",
      image: "/images/projects/nft-collection-screen-one.png",
      description:
        "NFT collection website with a clean and modern design. NFT images were created using StarryAI's AI generation.",
      github: "https://github.com/CharlesCarr/next-nft-landing-page",
      demo: "https://next-nft-landing-page.vercel.app/",
      tech: ["React", "TypeScript", "Next.js", "Tailwind"],
      path: null,
    },
    {
      id: 3,
      title: "WORKOUT TRACKER",
      image: "/images/projects/WorkoutApp.png",
      description:
        "Custom workout tracker web app. Enabling users to create profiles and create, save, and edit workouts. Ability to select workout for the day to have on hand while at the gym.",
      github: "https://github.com/CharlesCarr/workout-v2",
      demo: "https://workout-tracker-faa13.web.app/",
      tech: ["React", "JavaScript", "Material UI", "Firebase"],
      path: null,
    },
    {
      id: 4,
      title: "STOCKCHARTZ",
      image: "/images/projects/StockChartz.png",
      description:
        "Stock tracking chart web app. Users input stock ticker(s) to display and compare stock price chart data and percentage change.",
      github: "https://github.com/CharlesCarr/react-stock-chart",
      demo: "https://stockchartz.web.app/",
      tech: ["React", "Chakra UI", "Polygon API"],
      path: null,
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen w-full max-w-screen bg-[#1a1a1a] px-6 md:px-20 pt-24 flex flex-col items-start pb-44 relative overflow-hidden"
    >
      <div className="absolute -bottom-64 left-20 w-full h-72 bg-slate-200 rounded-full mix-blend-lighten filter blur-3xl opacity-[.06]"></div>

      <div className="mb-10">
        <h1 className="text-4xl font-light tracking-wide text-white">Latest Projects</h1>
        <div className="bg-white h-px w-80 md:w-96 mt-3"></div>
      </div>

      {/* h-[600px] */}
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {allProjects.map(
          ({ title, image, description, github, demo, tech, path }) => (
            <NewProject
              key={title}
              title={title}
              image={image}
              description={description}
              github={github}
              demo={demo}
              tech={tech}
              path={path}
            />
          )
        )}
      </div>
    </div>
  );
};
