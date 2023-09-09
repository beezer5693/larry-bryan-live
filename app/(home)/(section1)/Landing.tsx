import React from "react";
import Image from "next/image";
import Hero from "./Hero";
import mainBackground from "../../../public/assets/landing.png";

export default function Landing() {
  return (
    <section className="relative z-10 flex w-full items-center justify-center overflow-hidden pb-16 pt-32 sm:py-32 lg:py-44">
      <Image
        style={{ objectFit: "cover" }}
        src={mainBackground}
        sizes="100vw"
        quality={100}
        fill
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 h-[36rem] bg-gradient-to-b from-transparent to-black"></div>
      <Hero />
    </section>
  );
}
