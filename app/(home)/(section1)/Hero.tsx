import React from "react";
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center gap-6 px-5 md:gap-12 lg:px-0">
      <div className="flex flex-col gap-3 md:gap-8">
        <div className="relative flex">
          <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.75rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm md:px-7 md:text-8xl">
            Dare
          </p>
          <div className="absolute right-7 top-[3rem] z-10 h-20 w-8 border-r border-t md:right-12 md:top-12 md:h-28 md:w-14"></div>
          <div className="absolute right-[4.85rem] top-9 flex gap-3 md:right-[8.5rem] md:top-8 md:gap-5">
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white md:h-8 md:w-8" />
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white md:h-8 md:w-8" />
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white md:h-8 md:w-8" />
          </div>
          <IoTriangle className="absolute right-4 top-[8.75rem] h-6 w-6 rotate-180 fill-orange-400 stroke-black shadow-sm md:right-8 md:top-[10.5rem] md:h-8 md:w-8" />
        </div>
        <p className="pr-12 text-center font-basement text-[3.5rem] text-white md:pr-0 md:text-7xl">
          to think
        </p>
        <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.75rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm md:px-7 md:pb-4 md:text-8xl">
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
