"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/public/assets/services-bg.jpeg";

export default function Section1() {
  return (
    <section className="relative mb-10 flex items-center justify-center px-7 py-40 lg:mb-20 lg:py-72">
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover object-top"
          src={heroImage}
          quality={65}
          sizes="100vw"
          alt=""
          fill
        />
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      <div className="relative flex w-full max-w-[1250px] flex-col items-center space-y-6 text-center md:space-y-14">
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
          My Services
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
          className="font-medium text-amber-500 md:max-w-[95ch] md:text-lg lg:text-2xl"
        >
          Experience personal growth and empowerment through my tailored
          services, including keynote speeches and immersive breakout sessions,
          designed to help you overcome self-limiting thoughts, destructive
          habits, and unlock your inner superhero.
        </motion.p>
      </div>
    </section>
  );
}
