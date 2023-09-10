"use client";

import { Button } from "@/components/ui/button";

type Props = {
  section: React.RefObject<HTMLElement>;
  scrollTo: (ref: React.RefObject<HTMLElement>) => void;
};

export default function Section3({ section, scrollTo }: Props) {
  return (
    <section className="relative flex flex-col items-center py-14 sm:px-10 md:py-24">
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-5 px-5 sm:px-0">
        <p className="inline-flex max-w-[18ch] flex-col items-center gap-1 text-center font-basement text-4xl uppercase text-white sm:max-w-[100ch] md:text-left md:text-5xl">
          <span>harness the immense potential</span>
          <span className="font-basement text-2xl uppercase text-white md:text-3xl">
            within your mind and create lasting change
          </span>
        </p>
        <h3 className="max-w-[30ch] text-center text-lg italic text-amber-500 sm:max-w-[100ch] md:text-2xl">
          {"It's time for you to become the superhero of your life."}
        </h3>
      </div>
      <div className="relative flex w-full justify-center gap-5 pt-8 md:gap-10">
        <div className="group">
          <Button
            className="w-full border bg-gradient-to-r from-transparent to-transparent px-5 text-xs uppercase transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:text-black group-hover:opacity-100 md:h-16 md:px-10 md:text-xl"
            onClick={() => scrollTo(section)}
          >
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
