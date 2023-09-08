import React from "react";
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 sm:gap-12 lg:px-0">
      <div className="flex flex-col gap-1 sm:gap-8">
        <div className="relative flex">
          <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:text-8xl">
            Dare
          </p>
          <div className="absolute right-7 top-[2.75rem] z-10 h-20 w-8 border-r border-t sm:right-12 sm:top-12 sm:h-28 sm:w-14"></div>
          <div className="absolute right-[4.5rem] top-8 flex gap-1.5 sm:right-[8.5rem] sm:top-8 sm:gap-5">
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-8 sm:w-8" />
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-8 sm:w-8" />
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-8 sm:w-8" />
          </div>
          <IoTriangle className="absolute right-4 top-[8.25rem] h-6 w-6 rotate-180 fill-orange-400 stroke-black shadow-sm sm:right-8 sm:top-[10.5rem] sm:h-8 sm:w-8" />
        </div>
        <p className="pr-12 text-center font-basement text-[3.5rem] text-white sm:pr-0 sm:text-7xl">
          to think
        </p>
        <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:pb-4 sm:text-8xl">
          Differently
        </p>
      </div>
      <p className="max-w-[30ch] text-center text-lg font-light leading-8 tracking-wider text-amber-500 md:text-[1.4rem] md:leading-10">
        Turning your inner villains into your own{" "}
        <span className="relative bg-gradient-to-r from-amber-400 to-amber-700 p-1 font-basement italic text-black">
          Superhero.
        </span>
      </p>
    </div>
  );
}
