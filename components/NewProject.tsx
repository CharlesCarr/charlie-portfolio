import Image from "next/image";

export const NewProject = ({
  title,
  image,
  description,
  github,
  demo,
  tech,
  path,
}: any) => {
  return (
    <div className="h-full w-full flex flex-col p-6 text-sm gap-y-1 relative">
      <p className="font-bold text-2xl text-white">{title}</p>

      <div className="flex gap-3 text-xs font-extralight mb-2">
        {tech.map((t: string) => (<p>{t}</p>))}
      </div>

      <p className="font-light text-sm">{description}</p>

      <div className="absolute bottom-5 w-64 flex justify-between items-center">
        {path ? (
          <p className="font-semibold">View Case Study &gt;</p>
        ) : (
          <div className="flex gap-6">
            <p>GitHub</p>
            <p>Demo</p>
          </div>
        )}
      </div>
    </div>
  );
};
