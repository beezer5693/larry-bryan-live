"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const careerText = [
  {
    text: "In 1978, I embarked on my career journey, joining Equitable Life, now known as AXA. Initially, I entered as an individual sales producer, working solely on commission. Interestingly, my decision to opt for a commission-based role was influenced by a humorous anecdote involving my parents. I ventured into the insurance industry with little knowledge, driven by the encouragement of my future father-in-law. His playful assertion was that if I didn't enter the insurance field, he wouldn't allow me to marry his daughter, who happened to be a stunning high school homecoming queen. I playfully accepted the challenge. ",
  },
  {
    text: "Soon after joining Equitable, I aimed high. Surprisingly, I achieved my goals sooner than anticipated. As the saying goes, once you hit your first set of goals immediately set the next ones much higher. After a few years, I formed a partnership with three others, representing multiple insurance companies as independent sales producers. While this venture was successful, two partners and I decided to pursue different paths amicably.",
  },
  {
    text: "In 1989, I established a separate entity in Florida, specializing in high-end income, gift, and estate tax planning. By 1999, this business had expanded to include approximately 30 individual office locations along the East Coast of the United States, from Florida to Fairfield, Connecticut. I developed a business plan that involved consolidating similar independent operations, attracting the interest of Wall Street, resulting in my company's acquisition and subsequent public offering in 2005.",
  },
  {
    text: "Following this, I launched a second company in South Florida, focusing on life insurance sales and life settlements for ultra-wealthy clients. For two-thirds of my career, I thrived as a multi-million-dollar commissioned producer, culminating in my best year in 2006, generating over $52 million in life insurance commissions. In 2007, I decided to close the company and effectively retire.",
  },
];

export default function Section3() {
  return (
    <section className="overflow-x-hidden px-5 pt-20 md:pt-32 lg:px-10 lg:pt-44">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 60 },
          }}
          className="font-basement text-4xl text-white md:text-6xl lg:text-7xl"
        >
          My Career
        </motion.h1>
        <div className="flex w-full max-w-[1250px] flex-col items-center rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-10 text-white md:p-14 lg:p-20">
          <div className="space-y-7 text-xs md:text-center md:text-base lg:text-lg">
            {careerText.map((paragraph, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
              >
                {paragraph.text}
              </motion.p>
            ))}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
              }}
              className="relative flex w-full justify-center gap-5 pt-5 md:gap-10 md:pt-10"
            >
              <Button className="h-12 border bg-gradient-to-r from-transparent to-transparent text-xs uppercase transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black hover:opacity-100 md:h-16 md:px-8 md:text-sm">
                my services
              </Button>
              <Button className="group h-12 pl-3.5 pr-2 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:pl-5 md:pr-2.5 md:text-sm">
                <span className="mr-2.5 md:mr-3.5">Book Larry</span>
                <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
                  <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
