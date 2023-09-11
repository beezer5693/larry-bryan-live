import React from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import mainBackground from "../../../public/assets/landing.png";

export default function Section1() {
  return (
    <section className="sm: relative z-10 flex w-full items-center justify-center overflow-hidden pb-24 pt-32 md:pt-52">
      <Image
        style={{ objectFit: "cover", objectPosition: "top" }}
        src={mainBackground}
        sizes="100vw"
        quality={100}
        fill
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 h-[36rem] bg-gradient-to-b from-transparent to-[#03081c]"></div>
      <Hero />
    </section>
  );
}
