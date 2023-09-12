"use client";

import { useEffect, useState } from "react";
import NavTabs from "./NavTabs";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BsTriangle } from "react-icons/bs";
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
          "flex w-full max-w-screen-2xl items-center justify-between py-2 lg:py-4",
        )}
      >
        <Link href="/">
          <p className="font-basement text-2xl tracking-tighter text-white">
            L | B
          </p>
        </Link>
        <NavTabs />
        <Button
          className={cn(
            "group hidden h-14 justify-between pl-5 pr-2 font-semibold uppercase transition-transform duration-500 ease-in-out lg:inline-flex",
          )}
        >
          <span className="mr-4">Book Larry</span>
          <span className="rounded-full border p-2 transition duration-500 ease-in-out group-hover:-rotate-45">
            <ArrowRight className="h-6 w-6 text-white" />
          </span>
        </Button>
        <div className="lg:hidden">
          <Hamburger size={28} color="#ffffff" />
        </div>
      </div>
    </header>
  );
}
