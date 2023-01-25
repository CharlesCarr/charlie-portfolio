export const NewProject = ({
  title,
  image,
  description,
  github,
  demo,
  tech,
}: any) => {
  return (
    <div className="h-52 w-80 flex flex-col p-4 text-sm rounded-md gap-y-1 relative bg-neutral-900/[.75] drop-shadow-2xl border">
      <p className="font-bold">
        {title}
        {/* <span className="font-extralight text-xs">
          |{" "}
          <ul className="w-full sm:w-[360px] h-14 md:h-1/4 md:w-[400px] lg:w-full flex justify-around items-center  border-4 border-gray-200 shadow-inner">
            {tech.map((t: string) => (
              <li className="font-normal xl:font-bold text-xs sm:text-sm lg:text-base xl:text-lg tracking-normal lg:tracking-wide">
                {t}
              </li>
            ))}
          </ul>
        </span> */}
      </p>
      <p className="font-bold text-lg">{title}</p>
      <p className="font-extralight text-xs">{description}</p>
      <p className="font-semibold absolute bottom-5">View in schedule &gt;</p>
    </div>
  );
};
