"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { serviceCards } from "../../../services/data/services-data";
import { motion } from "framer-motion";

export default function cardData() {
  return (
    <>
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
          Keynote Options
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
          className="text-sm text-white md:max-w-[90ch] md:text-base lg:text-lg"
        >
          {
            "The opening keynote sets the tone for the entire event. This means it's important to get it right so that we put the audience in a great mood and ready for your spectacular conference. I offer two signature keynote speeches that are fantastic openers."
          }
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: "some",
        }}
        transition={{ duration: 1, delay: serviceCards[0].number * 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        className="flex w-full flex-col items-center gap-10 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 md:p-10"
      >
        <div className="relative w-full rounded-lg bg-gradient-to-r from-blue from-40% to-transparent p-[1px]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border border-blue bg-neutral-950 px-7 py-4">
            <p className="font-basement text-xl text-white">
              {serviceCards[0].number}
            </p>
          </div>
          <div className={cn("rounded-lg bg-neutral-950 py-3 pl-4")}>
            <p className="text-left font-basement text-xl text-white">
              {serviceCards[0].title}
            </p>
          </div>
        </div>
        <div className="relative h-[275px] w-full md:h-[400px] lg:h-[600px]">
          <Image
            className="rounded-2xl object-cover"
            src={serviceCards[0].image.src}
            fill
            alt=""
          />
        </div>
        <div className="w-full space-y-5 md:space-y-8 lg:space-y-10 lg:pt-5">
          <h2 className="font-basement text-xl text-white md:text-2xl lg:text-4xl">
            {serviceCards[0].description}
          </h2>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[0].paragraph1}
          </p>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[0].paragraph2}
          </p>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[0].paragraph3}
          </p>
          <div>
            <Link href="/contact">
              <Button className="group h-12 justify-between gap-3 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:text-sm">
                <span className="">book a discovery call</span>
                <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
                  <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{
          once: true,
          amount: "some",
        }}
        transition={{ duration: 1, delay: serviceCards[1].number * 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        className="flex w-full flex-col items-center gap-10 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 md:p-10"
      >
        <div className="relative w-full rounded-lg bg-gradient-to-r from-blue from-40% to-transparent p-[1px]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border border-blue bg-neutral-950 px-7 py-4">
            <p className="font-basement text-xl text-white">
              {serviceCards[1].number}
            </p>
          </div>
          <div className={cn("rounded-lg bg-neutral-950 py-3 pl-4")}>
            <p className="text-left font-basement text-xl text-white">
              {serviceCards[1].title}
            </p>
          </div>
        </div>
        <div className="relative h-[275px] w-full md:h-[400px] lg:h-[600px]">
          <Image
            className="rounded-2xl object-cover"
            src={serviceCards[1].image.src}
            fill
            alt=""
          />
        </div>
        <div className="w-full space-y-5 md:space-y-8 lg:space-y-10 lg:pt-5">
          <h2 className="font-basement text-xl text-white md:text-2xl lg:text-4xl">
            {serviceCards[1].description}
          </h2>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[1].paragraph1}
          </p>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[1].paragraph2}
          </p>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[1].paragraph3}
          </p>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[1].paragraph4}
          </p>
          <div>
            <Link href="/contact">
              <Button className="group h-12 justify-between gap-3 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:text-sm">
                <span className="">book a discovery call</span>
                <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
                  <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col items-center gap-7 pt-5 text-center md:pt-24 lg:pt-32">
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
          Breakout Options
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
          className="text-sm text-white md:max-w-[90ch] md:text-base lg:text-lg"
        >
          {
            "Breakout sessions are a great way for audience members to explore in more detail one of my two Keynote speeches. I have two breakout sessions that pair nicely with my Keynotes."
          }
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: "some",
        }}
        transition={{ duration: 1, delay: serviceCards[2].number * 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        className="flex w-full flex-col items-center gap-10 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 md:p-10"
      >
        <div className="relative w-full rounded-lg bg-gradient-to-r from-amber-600 from-40% to-transparent p-[1px]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border border-amber-600 bg-neutral-950 px-7 py-4">
            <p className="font-basement text-xl text-white">
              {serviceCards[2].number}
            </p>
          </div>
          <div className={cn("rounded-lg bg-neutral-950 py-3 pl-4")}>
            <p className="text-left font-basement text-xl text-white">
              {serviceCards[2].title}
            </p>
          </div>
        </div>
        <div className="relative h-[275px] w-full md:h-[400px] lg:h-[600px]">
          <Image
            className="rounded-2xl object-cover"
            src={serviceCards[2].image.src}
            fill
            alt=""
          />
        </div>
        <div className="w-full space-y-5 md:md:space-y-8 lg:space-y-10 lg:pt-5">
          <h2 className="font-basement text-xl text-white md:text-2xl lg:text-4xl">
            {serviceCards[2].description}
          </h2>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[2].paragraph1}
          </p>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[2].paragraph2}
          </p>
          <div>
            <Link href="/contact">
              <Button className="group h-12 justify-between gap-3 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:text-sm">
                <span className="">book a discovery call</span>
                <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
                  <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{
          once: true,
          amount: "some",
        }}
        transition={{ duration: 1, delay: serviceCards[1].number * 0.1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
        className="flex w-full flex-col items-center gap-10 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 md:p-10"
      >
        <div className="relative w-full rounded-lg bg-gradient-to-r from-amber-600 from-40% to-transparent p-[1px]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border border-amber-600 bg-neutral-950 px-7 py-4">
            <p className="font-basement text-xl text-white">
              {serviceCards[3].number}
            </p>
          </div>
          <div className={cn("rounded-lg bg-neutral-950 py-3 pl-4")}>
            <p className="text-left font-basement text-xl text-white">
              {serviceCards[3].title}
            </p>
          </div>
        </div>
        <div className="relative h-[275px] w-full md:h-[400px] lg:h-[600px]">
          <Image
            className="rounded-2xl object-cover"
            src={serviceCards[3].image.src}
            fill
            alt=""
          />
        </div>
        <div className="w-full space-y-5 md:space-y-8 lg:space-y-10 lg:pt-5">
          <h2 className="font-basement text-xl text-white md:text-2xl lg:text-4xl">
            {serviceCards[3].description}
          </h2>
          <p className="text-xs text-white md:text-base lg:text-xl">
            {serviceCards[3].paragraph1}
          </p>
          <div>
            <Link href="/contact">
              <Button className="group h-12 justify-between gap-3 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:text-sm">
                <span className="">book a discovery call</span>
                <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
                  <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
