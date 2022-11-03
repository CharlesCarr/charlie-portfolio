const SkillSub = ({ category, skills }: any) => {
  return (
    <div className="flex md:flex-col justify-center items-center py-6 px-3 bg-[#acafb5] h-full">
      <p className="text-base md:text-lg font-bold border-2 md:border-0 md:border-b-4 border-black w-32 md:w-full text-center mb-4 pb-3 tracking-wider self-start">
        {category}
      </p>
      <div className="flex justify-center items-center w-full h-full mt-3">
        <ul
          className={`grid ${
            category === "LANGUAGES"
              ? "grid-cols-2 md:grid-cols-1"
              : "grid-cols-3 md:grid-cols-2"
          } w-full h-full list-none gap-y-4 text-center`}
        >
          {skills.map((skill: string) => (
            <li className="text-sm sm:text-lg md:text-base text-center font-bold tracking-wider flex justify-center items-center">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillSub;
