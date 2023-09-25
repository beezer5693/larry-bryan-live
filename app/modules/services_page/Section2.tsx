"use client";

import { motion } from "framer-motion";
import EventCards from "./components/EventCards";

const eventCards = [
  {
    label: "THEME",
    text: "Do you have a theme for your event? I will help you select one of my topics that best fits within your theme.",
  },
  {
    label: "TYPE",
    text: "What type of talk are you looking at for your event? Do you want informative or inspirational? I will help you decide what may fit best.",
  },
  {
    label: "AUDIENCE",
    text: "What are the demographics of your audience? This will also help inform which talk might fit best.",
  },
  {
    label: "TIME SLOT",
    text: "What time slot is available? Depending on the time of the day and where the slot fits in your agenda will help us decide on the best topic.",
  },
];

export default function Section2() {
  return (
    <section className="flex flex-col items-center justify-center pb-20 md:pt-20">
      <div className="flex w-full max-w-[1250px] flex-col items-center space-y-10 text-center md:space-y-14">
        <div className="flex flex-col items-center gap-7 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            className="max-w-[15ch] font-basement text-4xl text-white md:text-6xl lg:text-7xl"
          >
            Where Do I Best Fit In To Your Event?
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
            className="text-sm text-amber-500 md:max-w-[90ch] md:text-base lg:text-lg"
          >
            {
              "You're planning out your event and you have a few key spots that you want to supercharge. Here are the 4 key components to selecting the best speaker and talk you can:"
            }
          </motion.p>
        </div>
        <EventCards cardData={eventCards} />
      </div>
    </section>
  );
}
