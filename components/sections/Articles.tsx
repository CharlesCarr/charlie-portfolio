import React from "react";
import Card from "../Card";

export const Articles = () => {
  return (
    <div className="h-80 w-full max-w-screen bg-gray-200 px-20 pt-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-black font-semibold mb-4">Recent Articles</h1>

      <div className="flex gap-4 justify-center items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
