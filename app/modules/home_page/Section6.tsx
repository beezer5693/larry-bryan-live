import React from "react";
import ServiceCards from "./components/ServiceCards";

export default function Section6() {
  return (
    <section
      id="services"
      className="relative flex flex-col px-5 sm:items-center lg:px-10"
    >
      <div className="relative w-full max-w-[1250px] space-y-7 text-white lg:space-y-16">
        <div className="flex w-full flex-col gap-3 sm:items-center">
          <h1 className="font-basement text-4xl md:text-5xl xl:text-6xl">
            Services
          </h1>
          <h2 className=" italic text-amber-500 md:text-lg lg:text-xl">
            {"Let's see how I can best serve your next event."}
          </h2>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}
