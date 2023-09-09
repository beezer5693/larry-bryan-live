import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gradient-to-b from-black to-blue/50 px-5 py-32 text-white lg:pb-44">
      <div className="flex max-w-6xl flex-col gap-5">
        <h1 className="font-basement text-5xl capitalize">larry bryan</h1>
        <p className="inline-flex flex-col items-center">
          <span>151 N. Nob Hill Road, Suite 350</span>
          <span>Plantation, Florida 33324</span>
        </p>
      </div>
    </footer>
  );
}
