import Image from "next/image";
import React from "react";
import blueshape1 from "../../../public/assets/blueshape1-services.png";
import blueshape2 from "../../../public/assets/blueshape2-services.png";
import blueshape3 from "../../../public/assets/blueshape3-services.png";
import ServiceCards from "./ServiceCards";

type Props = {
  services: React.RefObject<HTMLElement>;
};

export default function Landing6({ services }: Props) {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden px-5 lg:px-10 lg:py-10"
      ref={services}
    >
      <Image
        className="absolute left-0 top-20 rotate-[0deg] object-cover"
        src={blueshape1}
        height={350}
        width={350}
        alt=""
      />
      <Image
        className="absolute right-0 top-1/2"
        src={blueshape2}
        height={350}
        width={350}
        alt=""
      />
      <Image
        className="absolute bottom-0 left-0"
        src={blueshape3}
        height={350}
        width={350}
        alt=""
      />
      <div className="relative w-full max-w-6xl space-y-5 text-white lg:space-y-8">
        <div className="flex w-full flex-col items-center gap-3 rounded-2xl bg-[#1b1b1b] p-6 shadow-2xl shadow-black/50">
          <h1 className="font-basement text-6xl sm:text-7xl md:text-8xl">
            Services
          </h1>
          <h2 className="text-lg font-light italic text-amber-500 md:text-xl lg:text-2xl">
            {"Let's see how I can best serve your next event."}
          </h2>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}
