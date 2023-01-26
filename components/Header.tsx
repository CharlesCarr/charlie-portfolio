import Image from "next/image";

function Header() {
  const openResume = () => {
    window.open("/CharlieCarrResumeJan2023.pdf");
  };

  return (
    <header className="flex h-1/6 w-full items-center justify-between tracking-wide pt-10">
      <div className="flex gap-x-5 items-center">
        <div className="w-14 h-14 flex flex-col justify-center items-center relative">
          <Image
            src="/images/headshot.jpg"
            alt="headshot"
            fill
            priority
            // min-h-[250px]
            className="rounded-full object-cover overflow-hidden"
          />
        </div>

        <p className="text-sm hidden md:block">charlie-carr.com</p>
      </div>

      <div className="flex justify-center items-center gap-x-2 md:gap-x-10 text-sm">
        {/* <p>Articles</p> */}
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100 hover:text-white text-gray-200 duration-500">
          <a href="#about">About</a>
        </p>
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100 hover:text-white text-gray-200 duration-500">
          <a href="#projects">Projects</a>
        </p>
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100 hover:text-white text-gray-200 duration-500">
          <a href="#contact">Contact</a>
        </p>
      </div>

      <div className="flex justify-center items-center gap-x-6">
        <button
          className="bg-white/[.6] text-black text-sm rounded-lg px-4 py-2 hover:drop-shadow-2xl hover:bg-white/[.90] ease-in duration-200"
          onClick={openResume}
        >
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
