import React from "react";
import ServiceCards from "./components/ServiceCards";

type Props = {
  services: React.RefObject<HTMLElement>;
};

export default function Section6({ services }: Props) {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center overflow-hidden px-5 py-14 lg:px-10"
      ref={services}
    >
      <div className="relative w-full max-w-screen-2xl space-y-7 text-white lg:space-y-16">
        <div className="flex w-full flex-col items-center gap-3 rounded-2xl">
          <h1 className="font-basement text-6xl sm:text-7xl md:text-8xl">
            Services
          </h1>
          <h2 className="text-center font-basement text-lg italic md:text-xl lg:text-2xl">
            {"Let's see how I can best serve your next event."}
          </h2>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}
