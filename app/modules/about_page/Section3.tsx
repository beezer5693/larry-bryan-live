"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const bioParagraphs = [
  {
    text: "My career began back in 1978 where I went to work for a life insurance company named EQUITABLE LIFE at the time, which is now known as AXA. I started as an individual sales producer on a commission only basis. I was tricked into choosing commissions only by none other than my parents, but that’s another story all in itself. I knew nothing about life insurance or the life insurance business when I first started but was recruited in by my future father-in-law at the time. He told me that if I did not come into the insurance business, he would not let me marry his daughter, who was beautiful and gorgeous both inside and out, and was coincidentally her high school homecoming queen. I guess he wanted to keep a close eye on me. Needless to say, and I did, “insurance industry here I come”! ",
  },
  {
    text: "It wasn’t long after joining EQUITABLE that I set my sights on outproducing my father-in-law. That happened sooner than we were both expecting, and as you all know, there is only one lion that is the leader of the pride, and I’m no follower. Within a few years I was in a partnership with three other individuals whereby we represented about 10 different insurance companies at the time and were independent sales producers in nature. That lasted a few years and was very successful, but I and two of the other partners wanted to go in different directions. We agreed, and both of my other partners went on to achieve superstar success and we are still friendly to this day.",
  },
  {
    text: "I then formed a separate entity in 1989 and began building and marketing through that entity, here in Florida, whereby we specialized in the high-end area of income, gift, and estate tax planning. By 1999, I had grown that business to where I opened approximately 30 individual office locations up and down the East Coast of the United States from Florida north to Fairfield Connecticut. I then wrote a business plan consisting of a roll up or consolidation whereby independent operations like mine would come together under one roof, creating economies of scale, and then eventually going public. Wall Street loved the idea, and my company was its first acquisition.",
  },
  {
    text: "After going public in 2005, and with no noncompete issues, I opened a second company here in South Florida. That company focused on life insurance sales and life settlements for the ultra-wealthy. For 2/3 of my career, I was a multi-million-dollar commissioned producer and in 2006, my best individual year ever, I generated over $52 million in life insurance commissions. That lasted about three years when I closed the company and basically retired in 2007.",
  },
];

export default function Section3() {
  return (
    <section className="mt-20 overflow-x-hidden px-5 pb-20 md:mt-32 lg:mt-44 lg:px-10">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1250px] flex-col items-center rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 text-white md:p-10 lg:p-20">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            className="font-basement text-3xl md:text-5xl lg:text-7xl"
          >
            Biography
          </motion.h1>
          <div className="mt-10 space-y-7 text-xs md:mt-14 md:text-center md:text-base lg:mt-20 lg:text-lg">
            {bioParagraphs.map((paragraph, index) => (
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
                hidden: { opacity: 0, y: 75 },
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
