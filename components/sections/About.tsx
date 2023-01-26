import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen h-full w-full max-w-screen bg-[#1a1a1a] flex flex-col pt-32 relative overflow-hidden">
      <div className="absolute -top-44 left-20 w-full h-72 bg-green-500 rounded-full mix-blend-lighten filter blur-3xl opacity-[.06]"></div>

      <div className="w-full flex justify-center items-center">
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
      </div>

      <div className="flex w-full h-full justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center border-white border">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-6">
            <span className="mr-[5px]">&#127944;</span>ABOUT ME
          </p>
          <p className="text-white mb-2 text-lg">
            Product-focused full stack developer.
          </p>
          <p className="text-sm font-light mb-2 leading-6">
            I mostly work with JavaScript/TypeScript and have some Python
            knowledge. I enjoy working for small startups where I can add value
            in many different areas. Prior to life as a dev, I was a high
            performer on the GTM side of the industry at Oracle and Blend. From
            this experience, I bring strong communication skills and the ability
            to develop effectively through the lens of the customer / end user.
          </p>

          <div className="w-1/2 flex flex-col justify-center items-center">
            <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4 text-white">
              <span className="mr-[5px]">&#127944;</span>TECHNOLOGIES I'M
              EXCITED ABOUT
            </p>
            <ul className="text-sm list-disc ml-10 w-full flex flex-col gap-y-2">
              <li>Everything React/Next.js</li>
              <li>Data Fetching with React Query</li>
              <li>Building APIs with Apollo/GraphQL</li>
              <li>Data Visualization with D3.js</li>
              <li>Applying Framer Motion animations</li>
              <li>Tailwind CSS (best dev experience in the CSS game)</li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center border-white border">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-6">
            <span className="mr-[5px]">&#127944;</span>RECENT WORK EXPERIENCE
          </p>
          <p className="text-white mb-2 text-lg">
            Front End Software Developer @ Revelio Labs
          </p>
          <p className="text-sm font-light mb-2 leading-6">
            Member of front end enterprise dashboard team. Built new features
            and improved UI/UX. Created modern, performant data visualizations
            enabling financial services customers to gain insights.
          </p>
          <p className="font-light text-xs">
            TypeScript - React - Redux - D3.js - RxJS - Nx - Chakra UI
          </p>

          <div>
            <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4 text-white">
              <span className="mr-[5px]">&#127944;</span>2023 PERSONAL ROADMAP
            </p>
            <ul className="text-sm list-disc ml-10 w-full flex flex-col gap-y-2">
              <li>Currently seeking new position (revise)</li>
              <li>Technical Writing / Creating Content</li>
              <li>Diving deeper into Three.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
