"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Squeeze as Hamburger } from "hamburger-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavTabs from "./NavTabs";
import logo from "../../../public/assets/logo.png";

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
          Larry Bryan
          {/* <Image src={logo} alt="logo" height={100} width={150} /> */}
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
