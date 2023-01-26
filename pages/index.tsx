import Head from "next/head";
import { About } from "../components/sections/About";
import { Articles } from "../components/sections/Articles";
import { Contact } from "../components/sections/Contact";
import Landing from "../components/sections/Landing";
import { Projects } from "../components/sections/Projects";

export default function Home() {
  return (
    <div className="h-full w-screen text-gray-200 bg-[#1a1a1a]">
      <Head>
        <title>Charlie Carr</title>
        <meta name="description" content="Charlie Carr Web Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <Projects />
      {/* <Articles /> */}
      <About />
      <Contact />
    </div>
  );
}
