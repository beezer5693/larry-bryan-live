"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import brain from "../../../public/assets/brain.png";

export default function Landing3() {
  return (
    <section className="flex flex-col items-center px-5 pb-20 pt-10 sm:px-10 md:pt-40">
      <div className="flex w-full max-w-6xl flex-col items-center gap-5">
        <p className="inline-flex flex-col items-center gap-1 font-basement text-3xl uppercase text-white md:text-5xl">
          <span>harness the immense potential</span>
          <span className="font-basement text-xl uppercase text-white md:text-3xl">
            within you mind and create lasting change
          </span>
        </p>
        <h3 className="text-left font-light text-amber-500 md:text-2xl">
          {"It's time for you to become the superhero of your life."}
        </h3>
      </div>
      <Image className="mt-10" src={brain} alt="" />
      <div className="mt-10 flex w-full justify-center gap-5 md:gap-10 md:pt-8">
        <div className="group">
          <Button className="w-full border bg-gradient-to-r from-transparent to-transparent px-5 text-xs uppercase transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:text-black group-hover:opacity-100 md:h-16 md:px-10 md:text-xl">
            my services
          </Button>
        </div>
        <div className="group">
          <Button className="w-full px-5 text-xs uppercase transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:text-blue group-hover:opacity-100 md:h-16 md:px-10 md:text-xl">
            book larry
          </Button>
        </div>
      </div>
    </section>
  );
}
