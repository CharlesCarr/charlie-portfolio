import { NewProject } from "../NewProject";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full max-w-screen bg-[#1a1a1a] px-6 md:px-20 pt-24 flex flex-col items-start pb-44 relative overflow-hidden"
    >
      <div className="absolute -bottom-64 left-20 w-full h-72 bg-slate-200 rounded-full mix-blend-lighten filter blur-3xl opacity-[.06]"></div>

      <div className="mb-10">
        <h1 className="text-4xl font-light tracking-wide text-white">
          Latest Projects
        </h1>
        <div className="bg-white h-px w-80 md:w-96 mt-3"></div>
      </div>

      {/* h-[600px] */}
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(
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
