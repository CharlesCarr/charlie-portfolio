import Image from "next/image";
import Card from "../Card";
import Header from "../Header";
import { spotlights } from "../../data/spotlights";
import { useEffect, useState } from "react";
import GradientImg from "../../public/images/background/18.jpg";
import { Loader } from "../Loader";

const Landing = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const imageLoadedHandler = () => {
    console.log("Image Loading Completed");
    setImgLoaded(true);
  };

  return (
    <div className="h-full min-h-screen w-full max-w-screen px-2 md:px-20 bg-[#1a1a1a] pb-10 xl:pb-0">
      <Image
        src={GradientImg}
        alt="background-gradient"
        fill
        className={`hidden sm:block ${imgLoaded && "z-0"}`}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: "10",
        }}
        onLoad={() => imageLoadedHandler()}
      />

      {!imgLoaded ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className="h-5/6 w-full flex flex-col items-center md:items-start relative">
            <div className="absolute top-10 w-full h-44 bg-gray-200 rounded-full mix-blend-lighten filter blur-3xl opacity-[.15]"></div>

            <h1 className="static sm:hidden mt-24 text-6xl font-light text-white tracking-wide mb-4">
              Charlie Carr
            </h1>

            <h1 className="sm:mt-24 text-base sm:text-4xl lg:text-5xl text-gray-300 sm:text-white tracking-wide z-50">
              Full stack software developer,
            </h1>
            <h1 className="mt-2 text-base sm:text-4xl lg:text-5xl text-gray-300 sm:text-white tracking-wide z-50">
              based in NYC
            </h1>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {spotlights.map(
                ({
                  type,
                  tech,
                  title,
                  description,
                  github,
                  demo,
                  link,
                }: any) => (
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
        </>
      )}
    </div>
  );
};

export default Landing;
