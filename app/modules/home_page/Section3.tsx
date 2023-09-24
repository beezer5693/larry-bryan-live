"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import brain from "../../../public/assets/brain.png";
import Link from "next/link";

export default function Section3() {
  return (
    <section className="relative flex flex-col items-center sm:px-10">
      <div className="relative flex w-full max-w-screen-xl flex-col gap-5 px-5 sm:px-0 lg:items-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="inline-flex max-w-[18ch] flex-col items-center gap-1 text-left font-basement text-3xl uppercase text-white sm:max-w-[100ch] md:text-4xl lg:text-center lg:text-5xl"
        >
          <span>harness the immense potential</span>
          <span className="font-basement text-2xl uppercase text-white md:text-3xl lg:text-4xl">
            within your mind and create lasting change
          </span>
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="w-full max-w-[30ch] text-left text-lg italic text-amber-500 sm:max-w-[100ch] md:text-2xl lg:text-center"
        >
          {"It's time for you to become the superhero of your own life."}
        </motion.p>
      </div>
      <Image className="mt-6 lg:mt-10" src={brain} alt="" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        className="relative flex w-full justify-center gap-5 pt-14 md:gap-10 lg:pt-20"
      >
        <Link href="/services">
          <Button
            variant={"secondary"}
            className="h-12 border text-xs uppercase md:h-16 md:px-8 md:text-sm"
          >
            my services
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="group h-12 pl-3.5 pr-2 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:pl-5 md:pr-2.5 md:text-sm">
            <span className="mr-2.5 md:mr-3.5">book larry</span>
            <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
              <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
            </span>
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
