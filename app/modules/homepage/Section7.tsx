import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Section7() {
  return (
    <section className="mb-20 mt-5 flex w-full justify-center px-5 md:mb-40 lg:mb-52 lg:mt-16 lg:px-10">
      <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center space-y-5 md:space-y-8 lg:space-y-12">
        <p className="max-w-[30ch] bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-center font-basement text-2xl text-transparent md:text-4xl lg:leading-[3rem] xl:text-5xl">
          Will you keep the villains or choose to become the superhero of your
          own life? {"Come join me and I'll show you how."}
        </p>
        <div className="flex items-center gap-2 md:gap-6">
          <Button className="h-12 border bg-gradient-to-r from-transparent to-transparent px-5 text-xs uppercase transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black hover:opacity-100 md:h-16 md:px-10 md:text-xl">
            my services
          </Button>
          <Button className="group h-12 pl-5 pr-2 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:pr-2.5 md:text-xl">
            <span className="mr-3 md:mr-4">Book Larry</span>
            <span className="rounded-full border p-2 transition duration-500 ease-in-out group-hover:-rotate-45">
              <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
