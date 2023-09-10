import React from "react";
import RadialGradient from "../gradient/RadialGradient";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center border-t border-neutral-800/50 py-20 text-white">
      <RadialGradient
        className2={
          "-bottom-[50rem] -left-96 -z-20 rotate-[10deg] h-[60rem] w-[90rem]"
        }
      />
      <div className="flex w-full max-w-6xl items-center justify-between gap-5">
        <div className="space-y-4">
          <h1 className="font-basement text-5xl capitalize">larry bryan</h1>
          <p className="inline-flex flex-col">
            <span>151 N. Nob Hill Road, Suite 350</span>
            <span>Plantation, Florida 33324</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
