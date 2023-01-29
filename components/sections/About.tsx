import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen h-full w-full max-w-screen bg-[#1a1a1a] flex flex-col pt-20 md:pt-44 pb-32 relative overflow-hidden"
    >
      <div className="absolute -top-44 left-20 w-full h-72 bg-green-500 rounded-full mix-blend-lighten filter blur-3xl opacity-[.06]"></div>

      <div className="w-full flex justify-center items-center">
        <div className="flex w-full justify-center items-center gap-4 sm:gap-10 px-4 sm:px-0">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-white">
            Charlie Carr
          </h1>

          <div className="h-px w-16 bg-gray-200 hidden sm:block"></div>

          <div className="h-[100px] w-[100px] sm:h-[175px] sm:w-[175px] flex justify-center items-center relative bg-[#1a1a1a]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full mt-20 gap-y-10 md:gap-x-20 lg:gap-x-16 px-6 sm:px-14 lg:px-32 xl:px-44">
        {/* Section 1 className="lg:pl-44" */}
        <div className="xl:px-16">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4">
            <span className="mr-[5px]">&#128526;</span>ABOUT ME
          </p>
          <p className="text-white mb-2 text-lg">
            Product-focused full stack developer.
          </p>
          <p className="text-sm font-light mb-2 leading-6">
            I primarily work in JavaScript/TypeScript and am currently learning
            more Python. I enjoy working for small startups where I can add
            value in many different areas. Prior to life as a dev, I was a high
            performer on the GTM side of the industry at Oracle and Blend. From
            this experience, I bring strong communication skills and the ability
            to build effectively through the lens of the customer/end user.
          </p>
        </div>

        {/* Section 2 className="lg:pl-32 lg:pr-20" */}
        <div className="xl:px-16">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4">
            <span className="mr-[5px]">&#128187;</span>RECENT WORK EXPERIENCE
          </p>
          <p className="text-white mb-2 text-lg">
            Front End Software Developer @ Revelio Labs
          </p>
          <p className="text-sm font-light mb-2 leading-6">
            Member of front end enterprise dashboard team. Built new features
            and improved UI/UX. Created modern, performant data visualizations
            enabling financial services customers to gain insights.
          </p>
          <p className="font-extralight text-sm">
            TypeScript - React - Redux - D3.js - RxJS - Nx - Chakra UI
          </p>
        </div>

        {/* Section 3 className="w-full lg:pl-44"*/}
        <div className="xl:px-16">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4 text-white">
            <span className="mr-[5px]">&#129302;</span>TECHNOLOGIES I'M EXCITED
            ABOUT RN
          </p>

          <div className="w-full flex justify-center font-light gap-x-6">
            <ul className="text-sm list-disc w-full min-w-52 flex flex-col gap-y-2 ml-6">
              <li>Everything React/Next.js !</li>
              <li>Data Fetching with React Query</li>
              <li>Building APIs with Apollo/GraphQL</li>
            </ul>
            <ul className="text-sm list-disc w-full min-w-64 flex flex-col gap-y-2">
              <li>Data Visualization with D3.js</li>
              <li>Framer Motion Animations</li>
              <li>Styling with Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Section 4 className="w-full lg:pl-32 lg:pr-20"*/}
        <div className="xl:px-16">
          <p className="w-fit text-xs border rounded-lg font-light px-2 py-1 mb-4 text-white">
            <span className="mr-[5px]">&#128640;</span>2023 PERSONAL ROADMAP
          </p>

          <div className="w-full flex justify-center font-light gap-x-6">
            <ul className="text-sm list-disc w-full min-w-52 flex flex-col gap-y-2 ml-6">
              <li>Actively seeking new front end or full stack position</li>
              <li>
                Complete more projects with Prisma, Next, PostgreSQL stack
              </li>
              <li>Technical Writing / Creating Dev Content</li>
              <li>Learn Docker & Kubernetes</li>
              <li>Dive deeper into Three.js</li>
            </ul>
            {/* <ul className="text-sm list-disc w-full min-w-64 flex flex-col gap-y-2">
              <li>Data Visualization with D3.js</li>
              <li>Applying Framer Motion animations</li>
              <li>Styling with Tailwind CSS</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};
