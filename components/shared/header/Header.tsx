"use client";

import Link from "next/link";
import NavTabs from "./NavTabs";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Squeeze as Hamburger } from "hamburger-react";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [topOfPage, setTopOfPage] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTopOfPage(window.scrollY > 100);
    });
  }, [topOfPage]);

  return (
    <header
      className={cn(
        "absolute left-0 right-0 top-0 z-[100] flex items-start justify-center px-5 lg:px-14",
        {
          "is-sticky fixed bg-[#03081c]/80 backdrop-blur-lg": topOfPage,
          "bg-transparent": !topOfPage,
        },
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-screen-2xl items-center justify-between py-2",
        )}
      >
        <Link
          className="rounded-full px-4 py-3 font-basement text-xl text-white"
          href="/"
        >
          L|B
        </Link>
        <NavTabs />
        <Button
          className={cn(
            "group hidden h-12 justify-between pl-3.5 pr-2 text-xs font-semibold uppercase transition-transform duration-500 ease-in-out lg:inline-flex",
          )}
        >
          <span className="mr-2.5">Book Larry</span>
          <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45">
            <ArrowRight className="h-5 w-5 text-white" />
          </span>
        </Button>
        <div className="lg:hidden">
          <Hamburger size={28} color="#ffffff" />
        </div>
      </div>
    </header>
  );
}
