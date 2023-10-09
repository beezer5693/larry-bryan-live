"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type EventCardProps = {
  data: { label: string; text: string };
  index: number;
};

export default function EventCard({ data, index }: EventCardProps) {
  return (
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
      className="flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-700 to-neutral-950 md:flex-row"
    >
      <div
        className={cn(
          "flex basis-2/5 items-center justify-center bg-gradient-to-b from-blue to-[#00073d] py-5 shadow-lg shadow-black md:rounded-r-2xl md:p-24 lg:px-28 lg:py-32",
        )}
      >
        <p className="w-full font-basement text-xl text-white md:text-2xl lg:text-4xl">
          {data.label}
        </p>
      </div>
      <div className="flex basis-3/5 items-center justify-center p-8 md:px-20">
        <p className="max-w-[50ch] text-left text-white md:text-lg lg:text-2xl">
          {data.text}
        </p>
      </div>
    </motion.div>
  );
}
