import Card from "../Card";
import Header from "../Header";
// import Background from "../../public/images/background/18.jpg";

const spotlights = [
  {
    type: "Full Stack Web App",
    tech: "MERN",
    title: "NFL Next Gen Dash",
    description:
      "NFL stats dashboard using AWS Next Gen Stats data for displaying and tracking fantasy players",
    github: "https://github.com/CharlesCarr/nfl_nextgen_stats",
    demo: "https://react-nfl.onrender.com/",
    link: "Case Study Coming Soon...",
  },
  {
    type: "Dev.to Article",
    tech: "React.js",
    title: "Fetching Data in React",
    description:
      "Technical article discussing the different approaches of fetching data in React applications",
    github: null,
    demo: null,
    link: "Article Coming Soon...",
  },
  {
    type: "Chrome Extension",
    tech: "JavaScript",
    title: "MultiCopy",
    description:
      "Simplify repetitive tasks by enabling users to store multiple snippets of text in one place for easy copy/paste",
    github: "https://github.com/CharlesCarr/copy-paste-chrome-ext",
    demo: null,
    link: "Releasing in Chrome Web Store Soon...",
  },
];

const Landing = () => {
  return (
    <div className="h-full min-h-screen w-full max-w-screen px-10 md:px-20 bg-gradient-one bg-center bg-cover pb-10 xl:pb-0">
      <Header />

      <div className="h-5/6 w-full flex flex-col items-center md:items-start">
        <h1 className="mt-24 text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide">
          Full stack software developer,
        </h1>
        <h1 className="mt-2 text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide">
          based in NYC
        </h1>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spotlights.map(
            ({ type, tech, title, description, github, demo, link }: any) => (
              <Card
                key={title}
                type={type}
                tech={tech}
                title={title}
                description={description}
                github={github}
                demo={demo}
                link={link}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
