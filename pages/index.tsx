import Head from "next/head";
import Header from "../components/Header";
import RightSection from "../components/sections/RightSection";
import LeftSection from "../components/sections/LeftSection";

export default function Home() {
  return (
    <div className="h-full lg:h-screen lg:max-h-screen w-screen max-w-screen flex flex-col justify-center items-center bg-[#ced1d3]">
      <Head>
        <title>Charlie Carr</title>
        <meta name="description" content="Charlie Carr Web Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* main content */}
      <div className="w-full h-full lg:h-header flex flex-col lg:flex-row justify-center items-center">
        {/* LEFT SECTION */}
        <LeftSection />
        {/* RIGHT SECTION */}
        <RightSection />
      </div>
    </div>
  );
}
