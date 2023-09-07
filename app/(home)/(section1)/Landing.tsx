import React from "react";
import Image from "next/image";
import Hero from "./Hero";

export default function Landing() {
  return (
    <section className="relative z-10 flex w-full items-center justify-center overflow-hidden py-32 md:py-44">
      <Image src={"/assets/landing.png"} fill={true} alt="" />
      <span className="absolute bottom-0 left-0 right-0 h-[36rem] bg-gradient-to-b from-transparent to-black"></span>
      <Hero />
    </section>
  );
}
