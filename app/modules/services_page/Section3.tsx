"use client";

import RadialGradient from "@/components/shared/gradient/RadialGradient";
import ServiceCards from "./components/ServiceCards";

export default function Section3() {
  return (
    <section className="relative flex flex-col items-center justify-center md:pt-20">
      <RadialGradient className2="-left-[15rem] blur-[250px] rotate-[7deg] -top-[5rem] -z-20 h-[50rem] w-[60rem]" />
      <div className="flex w-full max-w-[1250px] flex-col items-center space-y-10 text-center md:space-y-14">
        <div className="flex w-full flex-col gap-8 md:gap-10 lg:gap-12">
          <ServiceCards />
        </div>
      </div>
    </section>
  );
}
