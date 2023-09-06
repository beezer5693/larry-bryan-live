import React from "react";
import Navbar from "./NavBar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-14">
      <div className="flex w-full max-w-screen-2xl items-center justify-between py-5">
        <p className="bg-white/80 bg-clip-text font-basement text-2xl tracking-tighter text-transparent">
          L | B
        </p>
        <Navbar />
        <div className="group">
          <Button className="px-5 font-semibold uppercase transition-transform duration-500 ease-in-out group-hover:-translate-y-0.5 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white group-hover:text-blue group-hover:opacity-100">
            Book Larry
          </Button>
        </div>
      </div>
    </header>
  );
}
