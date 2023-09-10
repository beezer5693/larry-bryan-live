import React from "react";
import ServiceCards from "./components/ServiceCards";

type Props = {
  services: React.RefObject<HTMLElement>;
};

export default function Section6({ services }: Props) {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center overflow-hidden px-5 lg:px-10"
      ref={services}
    >
      <div className="relative w-full max-w-6xl space-y-5 text-white lg:space-y-8">
        <div className="flex w-full flex-col items-center gap-3 rounded-2xl bg-[#1b1b1b] bg-gradient-to-b from-[#262626] to-[#151515] p-6 shadow-2xl shadow-black/50">
          <h1 className="font-basement text-6xl sm:text-7xl md:text-8xl">
            Services
          </h1>
          <h2 className="font-basement text-lg italic md:text-xl lg:text-2xl">
            {"Let's see how I can best serve your next event."}
          </h2>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}
