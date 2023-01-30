import Head from "next/head";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { About } from "../components/sections/About";
// import { Articles } from "../components/sections/Articles";
import { Contact } from "../components/sections/Contact";
import Landing from "../components/sections/Landing";
import { Projects } from "../components/sections/Projects";

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    import("../public/images/background/18.jpg").then(() => setImgLoaded(true));
  }, []);

  if (!imgLoaded) return <Loader />;

  return (
    <div className="h-full w-full min-w-screen text-gray-200 bg-[#1a1a1a]">
      <Head>
        <title>Charlie Carr</title>
        <meta name="description" content="Charlie Carr Web Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      {/* <Articles /> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
