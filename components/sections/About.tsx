import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen h-full w-full max-w-screen bg-[#1a1a1a] flex pt-32">
      <div className="flex flex-col justify-start items-center min-h-screen h-full w-1/2 pt-20">
        <div className="flex w-full justify-center items-center gap-10">
          <h1 className="text-4xl font-light tracking-wide text-white pl-10">
            Charlie Carr
          </h1>

          <div className="h-px w-16 bg-gray-200"></div>

          <div className="h-[175px] w-[175px] flex justify-center items-center relative bg-[#1a1a1a]">
            <Image
              src="/images/headshot-square.jpg"
              alt="headshot"
              fill
              priority
              className="object-cover overflow-hidden rounded-lg"
            />
          </div>
        </div>

        <div className="w-full pt-16 px-20">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-6">
            <span className="mr-[5px]">&#127944;</span>RECENT WORK EXPERIENCE
          </p>
          <p className="text-white mb-2 text-lg">
            Front End Software Developer @ Revelio Labs
          </p>
          <p className="text-sm font-light mb-2">
            Member of front end enterprise dashboard team. Built new features
            and improved UI/UX. Created modern, performant data visualizations
            enabling financial services customers to gain insights.
          </p>
          <p className="font-light text-xs">
            TypeScript - React - Redux - D3.js - RxJS - Nx - Chakra UI
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start min-h-screen h-full w-1/2 py-20">
        <div className="w-full min-h-1/2 h-1/2 pt-10 px-20 font-light">
          <div className="pb-20">
            <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4 text-white">
              <span className="mr-[5px]">&#127944;</span>TECHNOLOGIES I'M
              EXCITED ABOUT
            </p>
            <ul className="text-sm list-disc ml-10 w-full">
              <li className="mb-2">Everything React/Next.js</li>
              <li className="mb-2">Data Fetching with React Query</li>
              <li className="mb-2">Building APIs with Apollo/GraphQL</li>
              <li className="mb-2">Data Visualization with D3.js</li>
              <li className="mb-2">Applying Framer Motion animations</li>
              <li>Tailwind CSS (best dev experience in the CSS game)</li>
            </ul>
          </div>

          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4 text-white">
            <span className="mr-[5px]">&#127944;</span>2023 PERSONAL ROADMAP
          </p>
          <ul className="text-sm list-disc ml-10 w-full">
            <li className="mb-2">Currently seeking new position (revise)</li>
            <li>Technical Writing / Creating Content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
