import { Button } from "@/components/ui/button";
import React from "react";

export default function Section7() {
  return (
    <section className="flex w-full justify-center px-5 lg:px-10">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center space-y-10">
        <p className="text-center font-basement text-4xl text-white sm:text-5xl">
          {
            "It's time to make an everlasting positive change in your life, come join me and I'll show you how."
          }
        </p>
        <div className="group">
          <Button className="h-16 w-full px-10 text-xl uppercase transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white group-hover:text-blue group-hover:opacity-100">
            book larry
          </Button>
        </div>
      </div>
    </section>
  );
}
