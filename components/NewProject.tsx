import Image from "next/image";
import { useState } from "react";
import { FaCamera, FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

export const NewProject = ({
  title,
  image,
  description,
  github,
  demo,
  tech,
  path,
}: any) => {
  const [showImg, setShowImg] = useState(false);

  const iconClickHandler = (link: string) => {
    window.open(link);
  };

  return (
    <div
      className={`${
        showImg && "flex justify-center items-center"
      } border border-white rounded-md hover:text-white hover:scale-105 ease-in duration-200 relative z-40`}
    >
      {showImg ? (
        <div className="absolute top-3 left-4 flex justify-between w-full">
          <p className="text-2xl text-white">{title}</p>
          <IoMdCloseCircle
            className="w-8 h-8 cursor-pointer text-orange-700 hover:text-orange-800 z-50 mr-7"
            onClick={() => setShowImg(!showImg)}
          />
        </div>
      ) : (
        <FaCamera
          className="absolute top-6 right-6 w-6 h-6 cursor-pointer hover:text-orange-700 z-50 ease-in duration-200"
          onClick={() => setShowImg(!showImg)}
        />
      )}

      {showImg ? (
        <div className="h-[215px] w-[360px] flex justify-center items-center relative mt-10">
          <Image
            src={image}
            alt="project image"
            fill
            priority
            className="object-contain overflow-hidden rounded-lg"
          />
        </div>
      ) : (
        <div className="card min-h-[275px] h-full w-full flex flex-col p-6 text-sm gap-y-1 relative overflow-hidden">
          <div className="absolute inset-2/4 -translate-y-2/4 -translate-x-2/4 w-96 h-96 bg-slate-200 rounded-full mix-blend-lighten filter blur-3xl opacity-[.08] hover:opacity-[.12] ease-in duration-200"></div>

          <p className="font-bold text-2xl text-white">{title}</p>

          <div className="flex gap-3 text-xs font-extralight mb-2">
            {tech.map((t: string) => (
              <p>{t}</p>
            ))}
          </div>

          <p className="font-light text-sm leading-6">{description}</p>

          <div className="absolute bottom-5 w-64 flex justify-between items-center">
            {path ? (
              <p className="font-semibold text-orange-600 text-xl cursor-pointer hover:text-orange-700 ease-in duration-200">
                View Case Study &gt;
              </p>
            ) : (
              <div className="flex gap-6">
                <button
                  className="flex justify-center items-center gap-1 hover:text-orange-700 ease-in duration-200"
                  onClick={() => iconClickHandler(github)}
                >
                  <p>GitHub</p>
                  <FaGithub className="w-4 h-4" />
                </button>
                {demo && (
                  <button
                    className="flex justify-center items-center gap-1 hover:text-orange-700 ease-in duration-200"
                    onClick={() => iconClickHandler(demo)}
                  >
                    <p>Demo</p>
                    <HiExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
