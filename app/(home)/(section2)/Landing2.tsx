import React from "react";
import Image from "next/image";
import VillainCards from "./VillainCards";

export default function Landing2() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-2 py-20 sm:px-10 md:mt-10">
      <Image
        className="absolute -left-14 -top-10 rotate-[70deg] object-cover"
        src={"/assets/landing2.png"}
        height={400}
        width={400}
        alt=""
      />
      <Image
        className="absolute -bottom-12 -right-10 rotate-[70deg] object-cover"
        src={"/assets/landing2.png"}
        height={400}
        width={400}
        alt=""
      />
      <div className="relative flex flex-col items-center justify-center gap-14 rounded-[3rem] bg-[#1f1f1f]/70 p-8 backdrop-blur-sm md:p-14">
        <h1 className="font-basement text-3xl text-white">
          Do Your Inner Villains Talk To You This Way?
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <VillainCards />
        </div>
      </div>
    </section>
  );
}
