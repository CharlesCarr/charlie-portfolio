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
        "Python",
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
      skillCat: "ADDITIONAL",
      skillArr: [
        "TailwindCSS",
        "Figma",
        "Git",
        "GitHub",
        "Firebase",
        "Vercel",
        "Chakra UI",
        "Material UI",
        "Bootstrap",
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
      <div className="h-full w-full md:w-1/4 border-black dark:border-gray-200 border-4 mr-2 md:mr-2 mb-4 md:mb-0">
        <SkillSub
          category={allSkills[0].skillCat}
          skills={allSkills[0].skillArr}
        />
      </div>
      <div className="h-full w-full md:w-2/4 border-black dark:border-gray-200 border-4 mr-2 mb-4 md:mb-0">
        <SkillSub
          category={allSkills[1].skillCat}
          skills={allSkills[1].skillArr}
        />
      </div>
      <div className="h-full w-full md:w-2/4 border-black dark:border-gray-200 border-4 mr-2 mb-4 md:mb-0">
        <SkillSub
          category={allSkills[2].skillCat}
          skills={allSkills[2].skillArr}
        />
      </div>
    </div>
  );
};

export default Skills;
