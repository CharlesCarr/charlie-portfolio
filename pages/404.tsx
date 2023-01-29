import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white bg-[#1a1a1a]">
      <p className="text-3xl font-bold">Oooops.....</p>
      <p className="text-2xl">That page cannot be found.</p>
    </div>
  );
};

export default NotFound;
