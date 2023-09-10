"use client";

import { useEffect, useState } from "react";
import NavTabs from "./NavTabs";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [topOfPage, setTopOfPage] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

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
          "bg-black/70 backdrop-blur-lg": topOfPage,
          "bg-transparent": !topOfPage,
        },
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-screen-2xl items-center justify-between py-4",
        )}
      >
        <Link href="/">
          <p className="font-basement text-2xl tracking-tighter text-white">
            L | B
          </p>
        </Link>
        <NavTabs activeTab={activeTab} handleTabChange={setActiveTab} />
        <div className="group">
          <Button
            className={cn(
              "hidden px-5 font-semibold uppercase transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white group-hover:text-blue group-hover:opacity-100 lg:inline-flex",
            )}
          >
            Book Larry
          </Button>
        </div>
        <div className="lg:hidden">
          <Hamburger size={28} color="#ffffff" />
        </div>
      </div>
    </header>
  );
}
