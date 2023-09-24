import React from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import mainBackground from "../../../public/assets/landing.png";

export default function Section1() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden px-7">
      <Image
        className="object-cover object-top blur-[50px]"
        src={mainBackground}
        sizes="100vw"
        quality={100}
        fill
        priority
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 h-[36rem] bg-gradient-to-b from-transparent to-black"></div>
      <Hero />
    </section>
  );
}
