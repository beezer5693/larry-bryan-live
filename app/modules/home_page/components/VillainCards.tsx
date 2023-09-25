import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardText = [
  {
    label: "Fear",
    description:
      "My fear sometimes holds me back from doing so many things and I don’t know how to overcome that way of thinking and feeling.",
  },
  {
    label: "Negative Self-Talk",
    description:
      "I am accomplishing things in life but I could accomplish so much more if I didn’t have to listen to all that negative self-talk.",
  },
  {
    label: "Judgment",
    description:
      "I believe the world is always watching and judging and this causes me to never fully go for it.",
  },
  {
    label: "Lost",
    description:
      "I know I am capable of so much more and I want to reach my full potential but I just can’t get started.",
  },
  {
    label: "Embarrassment",
    description:
      "I am embarrassed to try new things and I am afraid I will fail so I end up doing nothing.",
  },
  {
    label: "Poor Decisions",
    description:
      "My decision choices don’t always bring me my desired outcomes and results.",
  },
];

export default function VillainCards() {
  return (
    <>
      {cardText.map((card, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          key={index}
          className={cn(
            "relative col-span-1 flex flex-col gap-5 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-14 md:p-16 xl:gap-10 xl:p-20",
          )}
        >
          <p className="font-basement text-2xl text-white xl:text-3xl">
            {card.label}
          </p>
          <p className="text-sm text-white md:text-base xl:text-lg">
            {card.description}
          </p>
        </motion.div>
      ))}
    </>
  );
}
