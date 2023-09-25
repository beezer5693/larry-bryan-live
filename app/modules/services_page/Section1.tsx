"use client";

import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="flex items-center justify-center pb-20 pt-32 md:pt-48">
      <div className="flex w-full max-w-[1250px] flex-col items-center space-y-6 text-center md:space-y-14">
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
          className="text-sm text-amber-500 md:max-w-[95ch] md:text-base lg:text-lg"
        >
          Embark on a journey of personal growth and empowerment with my
          exceptional range of services designed to help you and your team
          harness your innate power. My keynote speeches and immersive breakout
          sessions are meticulously crafted to guide you in conquering your
          inner villains - those self-limiting thoughts, destructive habits, and
          dormant character traits - and unleash the true superhero that resides
          within you.
        </motion.p>
      </div>
    </section>
  );
}
