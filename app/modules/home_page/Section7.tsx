"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Section7() {
  return (
    <section className="mb-20 mt-14 flex w-full justify-center px-7 md:mb-32 lg:mt-24">
      <div className="flex w-full max-w-[1250px] flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-12">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="max-w-[30ch] bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-center font-basement text-2xl text-transparent md:text-3xl lg:text-4xl lg:leading-[2.75rem]"
        >
          Will you keep the villains or choose to become the superhero of your
          own life? {"Come join me and I'll show you how."}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="flex items-center gap-4 md:gap-6"
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
      </div>
    </section>
  );
}
