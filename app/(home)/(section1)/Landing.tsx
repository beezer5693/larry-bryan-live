import React from "react";
import Image from "next/image";
import Hero from "./Hero";

export default function Landing() {
  return (
    <section className="relative z-10 flex w-full items-center justify-center pt-40">
      <Image src={"/assets/landing.png"} fill={true} priority={true} alt="" />
      <span className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></span>
      <Hero />
    </section>
  );
}
