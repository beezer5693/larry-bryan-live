"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="flex justify-center px-5 pt-32 md:pt-48 lg:px-10 lg:pt-60">
      <div className="max-w-[1250px] space-y-6 text-center md:space-y-10">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="font-basement text-4xl text-white md:text-6xl lg:text-7xl"
        >
          Meet Larry Bryan
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="text-sm text-amber-500 md:max-w-[85ch] md:text-base lg:text-lg"
        >
          Hi, my name is Larry Bryan. I am a professional speaker and serial
          entrepreneur. My vision is to help busy professional men and women
          discover their inner superhero, so that they can reach new levels of
          success in business, sales and life.
        </motion.p>
      </div>
    </section>
  );
}
