import React from "react";
import Image from "next/image";
import Hero from "./Hero";

export default function Landing() {
  return (
    <section className="relative z-10 flex w-full items-center justify-center overflow-hidden py-44">
      <Image
        className="absolute inset-0"
        src={"/assets/landing3.png"}
        layout="fill"
        alt=""
      />
      <span className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-black"></span>
      <Hero />
    </section>
  );
}
