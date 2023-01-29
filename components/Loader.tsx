import Image from "next/image";
import ReactLoading from "react-loading";

export const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center text-gray-200 bg-[#1a1a1a] pt-32">
      <div className="w-44 h-44 flex flex-col justify-center items-center relative mb-4">
        <Image
          src="/images/headshot.jpg"
          alt="headshot"
          fill
          priority
          // min-h-[250px]
          className="rounded-full object-cover overflow-hidden z-50"
        />
        <div className="absolute w-96 h-96 bg-gray-200 rounded-full mix-blend-lighten filter blur-3xl opacity-[.20]"></div>
      </div>
      <h1 className="text-5xl mb-8 font-light">charlie-carr.com</h1>
      <ReactLoading
        type="spin"
        color="rgb(229 231 235)"
        height="40px"
        width="40px"
      />
    </div>
  );
};
