import React from "react";
import { Triangle } from "lucide-react";
import { IoTriangleOutline, IoTriangle } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="relative flex w-full max-w-xl flex-col gap-12">
      <div className="absolute right-8 top-12 z-10 h-24 w-16 border-r border-t"></div>
      <IoTriangleOutline
        size={34}
        className="absolute right-[7.25rem] top-8 rotate-90 text-white"
      />
      <IoTriangleOutline
        size={34}
        className="absolute right-[10.5rem] top-8 rotate-90 text-white"
      />
      <IoTriangleOutline
        size={34}
        className="absolute right-[13.75rem] top-8 rotate-90 text-white"
      />
      <IoTriangle
        size={34}
        className="absolute right-4 top-[9.75rem] rotate-180 fill-orange-400 stroke-black shadow-sm"
      />
      <div className="space-y-8">
        <div className="flex">
          <div className="border-blue/30 rounded-xl border px-7 shadow-md shadow-black backdrop-blur-lg">
            <p className="font-basement text-8xl tracking-tighter text-white">
              Dare
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-basement text-7xl text-white">to think</p>
        </div>
        <div className="flex justify-center">
          <div className="border-blue/30 rounded-xl border px-7 pb-4 shadow-md shadow-black/70 backdrop-blur-lg">
            <p className="font-basement text-8xl tracking-tighter text-white">
              Differently
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-[1.4rem] font-light leading-10 tracking-wider text-amber-500">
        Turning your inner villains
        <br />
        into your own{" "}
        <span className="font-basement relative bg-gradient-to-r from-amber-400 to-amber-700 p-1 italic text-black">
          Superhero.
        </span>
      </p>
    </div>
  );
}
