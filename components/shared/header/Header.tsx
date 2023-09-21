"use client";

import { useEffect, useState } from "react";
import NavTabs from "./NavTabs";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Squeeze as Hamburger } from "hamburger-react";
import { ArrowRight } from "lucide-react";
import logo from "@/public/assets/logo-w.png";

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
        "absolute left-0 right-0 top-0 z-[100] flex items-start justify-center px-5 lg:px-10",
        {
          "is-sticky fixed bg-black/80 backdrop-blur-lg": topOfPage,
          "bg-transparent": !topOfPage,
        },
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[1250px] items-center justify-between py-2",
        )}
      >
        <Link
          className="rounded-full py-3 font-basement text-xl text-white"
          href="/"
        >
          <Image src={logo} alt="logo" height={100} width={150} />
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
