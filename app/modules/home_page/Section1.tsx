import React from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import mainBackground from "@/public/assets/main-landing.jpeg";

export default function Section1() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden px-7">
      <Image
        className="-z-30 object-cover blur-[6px]"
        src={mainBackground}
        sizes="100vw"
        fill
        quality={65}
        priority
        alt="larry speaking in front of a crowd"
      />
      <Hero />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-[20rem] bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
}
