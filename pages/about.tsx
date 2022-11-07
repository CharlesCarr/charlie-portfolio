const AboutSection = () => {
  return (
    <div className="w-full h-[650px] sm:h-[450px] lg:h-full flex flex-col justify-center items-center py-3 text-sm 2xl:text-base text-center sm:text-start px-6 sm:px-0 sm:pl-2 border-black dark:border-gray-200 border-4 bg-[#acafb5] dark:bg-neutral-800 dark:text-gray-200">
      {/* <h1 className="text-3xl xl:text-4xl mb-4 w-full sm:pr-8 xl:pr-0">Hi there!</h1> */}
      <p className="w-full xl:w-3/4 mb-2 leading-8 sm:pr-8 xl:pr-0 text-2xl 2xl:text-4xl font-bold">
        Hi there!
      </p>
      <p className="w-full xl:w-3/4 mb-2 leading-8 sm:pr-8 xl:pr-0">
        My name is <span className="font-bold">Charlie Carr</span> and I am a <span className="font-bold">NYC-based software developer</span>. I am
        currently pursuing my next opportunity and open to both <span className="font-bold">remote and
        in-office work</span>.
      </p>
      <p className="w-full xl:w-3/4 mb-2 leading-8 sm:pr-8 xl:pr-0">
        I have spent my <span className="font-bold">career in tech</span> working in enterprise software for both
        small startups as well as large tech corporations. After starting in
        software sales, my passion and curiosity for these products fueled my
        desire to become more technical and attend a <span className="font-bold">full stack web development
        coding bootcamp</span>.
      </p>
      <p className="w-full xl:w-3/4 leading-8 sm:pr-8 xl:pr-0">
        I recently finished my first engineering role as a <span className="font-bold">front end development
        intern</span> at{" "}
        <a
          href="https://www.reveliolabs.com/"
          target="_blank"
          className="underline font-bold text-[#2d426a] dark:text-[#4bc679]"
        >
          Revelio Labs
        </a>
        , a labor market data platform, where I actively contributed to the
        front end enterprise dashboard in a <span className="font-bold">React/TypeScript code base</span>.
      </p>
    </div>
  );
};

export default AboutSection;
