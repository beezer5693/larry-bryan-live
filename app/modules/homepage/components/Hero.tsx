import React from "react";
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 sm:gap-12 lg:px-0">
      <div className="flex flex-col gap-1 sm:gap-8">
        <div className="relative flex">
          <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:text-8xl lg:text-9xl">
            Dare
          </p>
          <div className="absolute right-7 top-[2.75rem] z-10 h-20 w-8 border-r border-t sm:right-[4.75rem] sm:top-[3.25rem] sm:h-28 sm:w-12 sm:border-r-2 sm:border-t-2 lg:right-14 lg:top-[3.75rem] lg:h-36 lg:w-20"></div>
          <div className="absolute right-[4.5rem] top-8 flex gap-1.5 sm:right-[9.5rem] lg:right-[11rem] lg:top-9 lg:gap-7">
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          </div>
          <IoTriangle className="absolute right-4 top-[8.25rem] h-6 w-6 rotate-180 fill-amber-500 stroke-black shadow-sm sm:right-[3.6rem] sm:top-[10.75rem] sm:h-10 sm:w-10 lg:right-8 lg:top-[13.75rem] lg:h-12 lg:w-12" />
        </div>
        <p className="pr-12 text-center font-basement text-[3.5rem] text-white sm:pr-0 sm:text-7xl lg:text-8xl">
          to think
        </p>
        <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:pb-4 sm:text-8xl lg:text-9xl">
          Differently
        </p>
      </div>
      <p className="max-w-[30ch] text-center font-light leading-6 tracking-wider text-amber-500 sm:text-3xl sm:leading-8 md:text-3xl md:leading-10">
        Turning your inner villains into your own{" "}
        <span className="relative bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text p-1 font-basement uppercase italic text-transparent">
          superhero.
        </span>
      </p>
    </div>
  );
}
