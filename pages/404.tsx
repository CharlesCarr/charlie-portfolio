import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="text-3xl font-bold">Oooops.....</p>
      <p className="text-2xl">That page cannot be found.</p>
    </div>
  );
};

export default NotFound;
