const SkillSub = ({ category, skills }: any) => {
  return (
    <div className="flex-col justify-center items-center py-6 px-3 bg-[#acafb5] dark:bg-neutral-800 h-[300px] sm:h-full">
      <p className="text-lg font-bold md:border-0 md:border-b-4 border-black dark:border-gray-200 w-full text-center mb-0 sm:mb-4 pb-0 sm:pb-3 tracking-wider">
        {category}
      </p>
      <div className="flex justify-center items-center w-full h-full mt-3">
        <ul
          className={`grid ${
            category === "LANGUAGES"
              ? "grid-cols-2 md:grid-cols-1"
              : "grid-cols-3 md:grid-cols-2"
          } w-full h-full list-none gap-y-0 text-center m-0 p-0`}
        >
          {skills.map((skill: string) => (
            <li className="text-base sm:text-lg text-center tracking-wider flex justify-center items-start">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillSub;
