"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import brain from "../../../public/assets/brain.png";
import { ArrowRight } from "lucide-react";

type Props = {
  section: React.RefObject<HTMLElement>;
  scrollTo: (ref: React.RefObject<HTMLElement>) => void;
};

export default function Section3({ section, scrollTo }: Props) {
  return (
    <section className="relative flex flex-col items-center sm:px-10">
      <div className="relative flex w-full max-w-screen-xl flex-col gap-5 px-5 sm:px-0 lg:items-center">
        <p className="inline-flex max-w-[18ch] flex-col items-center gap-1 text-left font-basement text-3xl uppercase text-white sm:max-w-[100ch] md:text-4xl lg:text-center lg:text-6xl">
          <span>harness the immense potential</span>
          <span className="font-basement text-2xl uppercase text-white md:text-3xl lg:text-4xl">
            within your mind and create lasting change
          </span>
        </p>
        <h3 className="w-full max-w-[30ch] text-left text-lg italic text-amber-500 sm:max-w-[100ch] md:text-2xl lg:text-center">
          {"It's time for you to become the superhero of your own life."}
        </h3>
      </div>
      <Image className="mt-6 lg:mt-10" src={brain} alt="" />
      <div className="relative flex w-full justify-center gap-5 pt-14 md:gap-10 lg:pt-20">
        <Button
          className="h-12 border bg-gradient-to-r from-transparent to-transparent px-5 text-xs uppercase transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black hover:opacity-100 md:h-16 md:px-10 md:text-xl"
          onClick={() => scrollTo(section)}
        >
          my services
        </Button>
        <Button className="group h-12 pl-5 pr-2 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:pr-2.5 md:text-xl">
          <span className="mr-3 md:mr-4">Book Larry</span>
          <span className="rounded-full border p-2 transition duration-500 ease-in-out group-hover:-rotate-45">
            <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
          </span>
        </Button>
      </div>
    </section>
  );
}
