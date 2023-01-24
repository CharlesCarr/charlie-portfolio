import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import LeftSection from "./LeftSection";

type LayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  const [filterState, setFilterState] = useState<string>("Latest Projects");

  return (
    <div className="h-full min-h-screen w-screen max-w-screen flex flex-col justify-center items-center bg-neutral-800 text-gray-200">
      <Head>
        <title>Charlie Carr</title>
        <meta name="description" content="Charlie Carr Web Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="h-5/6 w-full flex flex-col items-start px-20">
        <h1 className="mt-20 text-4xl">
          Full stack software developer, <br /> based in NYC
        </h1>

        <div className="mt-32 flex gap-4">
         <Card />
         <Card />
         <Card />
        </div>
      </div>

      {/* <div className="w-full h-full lg:h-header flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start">
        <LeftSection />
        <main className="w-full lg:w-3/4 h-full flex flex-col p-6 px-px sm:px-6 pt-10 sm:pt-6">
          <div className="flex justify-center items-end w-full h-1/6">
            <ul className="m-0 p-0 w-full flex justify-start items-end pl-5 pb-4 sm:pb-2 text-lg sm:text-xl lg:text-3xl">
              <li
                className={`${
                  filterState === "Latest Projects"
                    ? "border-b-2 lg:border-b-4 border-gray-200 font-bold"
                    : "font-light"
                } mr-8 lg:mr-16 cursor-pointer`}
                onClick={(e: any) => setFilterState(e.target.innerText)}
              >
                <Link href="/">Latest Projects</Link>
              </li>
              <li
                className={`${
                  filterState === "Skillset"
                    ? "border-b-2 lg:border-b-4 border-gray-200 font-bold"
                    : "font-light"
                } mr-8 lg:mr-16 cursor-pointer`}
                onClick={(e: any) => setFilterState(e.target.innerText)}
              >
                <Link href="/skillset">Skillset</Link>
              </li>
              <li
                className={`${
                  filterState === "About"
                    ? "border-b-2 lg:border-b-4 border-gray-200 font-bold"
                    : "font-light"
                } mr-8 lg:mr-16 cursor-pointer`}
                onClick={(e: any) => setFilterState(e.target.innerText)}
              >
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="w-full h-main mt-5 flex justify-around items-center p-6">
            {children}
          </div>
        </main>
      </div> */}
    </div>
  );
};

export default PageLayout;
