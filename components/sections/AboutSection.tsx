const AboutSection = () => {
  return (
    <div className="w-full h-[650px] lg:h-full flex flex-col justify-center items-center sm:items-start text-sm xl:text-base text-center sm:text-start px-5 sm:px-0 sm:pl-32 border-black border-4 bg-[#acafb5]">
      <h1 className="text-3xl xl:text-4xl mb-4">Hi there!</h1>
      <p className="w-full xl:w-3/4 mb-4 leading-7 sm:pr-8 xl:pr-0">
        My name is Charlie Carr and I am a NYC-based software developer. I am
        currently pursuing my next opportunity and open to both remote and
        in-office work.
      </p>
      <p className="w-full xl:w-3/4 mb-4 leading-7 sm:pr-8 xl:pr-0">
        I have spent my career in tech working in enterprise software for both
        small startups as well as large tech corporations. After starting in
        software sales, my passion and curiosity for these products fueled my
        desire to become more technical and attend a full stack web development
        coding bootcamp.
      </p>
      <p className="w-full xl:w-3/4 leading-7 sm:pr-8 xl:pr-0">
        I recently finished my first engineering role as a front end development
        intern at{" "}
        <a
          href="https://www.reveliolabs.com/"
          target="_blank"
          className="underline"
        >
          Revelio Labs
        </a>
        , a labor market data platform, where I actively contributed to the
        front end enterprise dashboard in a React/TypeScript code base.
      </p>
    </div>
  );
};

export default AboutSection;
