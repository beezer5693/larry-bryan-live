"use client";

import { motion } from "framer-motion";
import keynote1 from "@/public/assets/services/keynote1.png";
import keynote2 from "@/public/assets/services/keynote2.png";
import breakout1 from "@/public/assets/services/breakout1.png";
import breakout2 from "@/public/assets/services/breakout2.png";
import ServiceCards from "./components/ServiceCards";

export default function Section3() {
  return (
    <section className="flex flex-col items-center justify-center md:pt-20">
      <div className="flex w-full max-w-[1250px] flex-col items-center space-y-10 text-center md:space-y-14">
        <div className="flex w-full flex-col gap-8 md:gap-10 lg:gap-12">
          <ServiceCards />
        </div>
      </div>
    </section>
  );
}
