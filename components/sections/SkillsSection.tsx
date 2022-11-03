import SkillSub from "../SkillSub";

const Skills = () => {
  const allSkills = [
    {
      skillCat: "LANGUAGES",
      skillArr: [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Python (Learning)",
      ],
    },
    {
      skillCat: "FRAMEWORKS / LIBRARIES",
      skillArr: [
        "React",
        "Redux",
        "Next.js",
        "Node",
        "Express",
        "Mongoose",
        "D3",
        "RxJS",
        "Mocha",
        "Jest",
      ],
    },
    {
      skillCat: "UI / UX DESIGN",
      skillArr: [
        "Tailwind CSS",
        "Chakra UI",
        "Material UI",
        "Bootstrap",
        "Figma",
      ],
    },
    {
      skillCat: "VERSION CONTROL / HOSTING",
      skillArr: ["Git", "GitHub", "Firebase", "Vercel"],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="h-[250px] lg:h-full w-full md:w-1/4 border-black border-4 mr-2 mb-4 md:mb-0">
        <SkillSub
          category={allSkills[0].skillCat}
          skills={allSkills[0].skillArr}
        />
      </div>
      <div className="h-[250px] lg:h-full w-full md:w-2/4 border-black border-4 mr-2 mb-4 md:mb-0">
        <SkillSub
          category={allSkills[1].skillCat}
          skills={allSkills[1].skillArr}
        />
      </div>
      <div className="h-[250px] lg:h-full w-full md:w-1/4 border-black border-4 flex flex-col justify-center items-center">
        <div className="h-1/2 w-full">
          <SkillSub
            category={allSkills[2].skillCat}
            skills={allSkills[2].skillArr}
          />
        </div>
        <div className="h-1/2 w-full">
          <SkillSub
            category={allSkills[3].skillCat}
            skills={allSkills[3].skillArr}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
