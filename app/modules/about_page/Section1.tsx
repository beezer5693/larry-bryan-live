"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="flex justify-center px-5 pt-32 md:pt-48 lg:px-10 lg:pt-60">
      <div className="max-w-[1250px] space-y-6 text-center md:space-y-14">
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
        <div className="space-y-5">
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
            I am a graduate of the University of Miami, where I earned a BA in
            Accounting and Finance. I also completed my MBA in Finance at Nova
            Southeastern University. In addition to my academic achievements, I
            hold several prestigious insurance designations, including CLU,
            CHFC, CFP, and RHU. Moreover, I was licensed for both fixed and
            variable life insurance and possessed investment licenses such as
            series 6, 7, 23, and 24.
          </motion.p>
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
            For nearly three decades, my career in the life insurance and
            investment industry operated solely on a commission-generated basis,
            meaning that my income was directly tied to my sales performance.
            This high-pressure environment instilled a sense of motivation and
            responsibility, as my ability to provide for my family depended on
            my sales success.
          </motion.p>
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
            Today, my focus has shifted towards full-time public speaking, where
            I empower sales and marketing professionals to cultivate a SUPERHERO
            mindset. This mindset equips them to achieve meteoric levels of
            success in both their business endeavors and personal lives.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
