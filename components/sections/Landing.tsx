import Image from "next/image";
import Card from "../Card";
import Header from "../Header";
import GradientImg from "../../public/images/background/18.jpg";
import { spotlights } from "../../data/spotlights";

const Landing = () => {
  return (
    <div className="h-full min-h-screen w-full max-w-screen px-10 md:px-20 bg-[#1a1a1a] pb-10 xl:pb-0">
      <Image
        src={GradientImg}
        alt="background-gradient"
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: "10" }}
        onLoadStart={() => console.log("Loading Started!")}
        onLoad={() => console.log("Image Loaded!!")}
      />

      <Header />

      <div className="h-5/6 w-full flex flex-col items-center md:items-start">
        <h1 className="mt-24 text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide z-50">
          Full stack software developer,
        </h1>
        <h1 className="mt-2 text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide z-50">
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
