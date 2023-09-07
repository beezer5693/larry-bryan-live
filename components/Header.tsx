"use client";

import React, { use } from "react";
import { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Button } from "./ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [topOfPage, setTopOfPage] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTopOfPage(window.scrollY > 25);
    });
  }, [topOfPage]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex justify-center px-5 lg:px-14",
        {
          "bg-black": topOfPage,
          "bg-transparent": !topOfPage,
        },
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-screen-2xl items-center justify-between",
          {
            "py-2": topOfPage,
            "py-5": !topOfPage,
          },
        )}
      >
        <p className="bg-gradient-to-r from-cyan-300/60 via-blue/40 to-cyan-300/60 bg-clip-text font-basement text-2xl tracking-tighter text-transparent">
          L | B
        </p>
        <Navbar />
        <div className="group">
          <Button className="hidden px-5 font-semibold uppercase transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white group-hover:text-blue group-hover:opacity-100 lg:inline-flex">
            Book Larry
          </Button>
        </div>
        <div className="lg:hidden">
          <Hamburger size={24} color="#ffffff" />
        </div>
      </div>
    </header>
  );
}
