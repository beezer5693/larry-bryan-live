"use client";

import { useRef } from "react";
import Header from "@/components/shared/header/Header";
import Section1 from "../modules/homepage/Section1";
import Section2 from "../modules/homepage/Section2";
import Section3 from "../modules/homepage/Section3";
import Section4 from "../modules/homepage/Section4";
import Section5 from "../modules/homepage/Section5";
import Section6 from "../modules/homepage/Section6";
import Footer from "@/components/shared/footer/Footer";
import Section7 from "../modules/homepage/Section7";

export default function Home() {
  const services = useRef<HTMLElement>(null);

  function scrollTo(ref: React.RefObject<HTMLElement>) {
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <main className="">
        <Section1 />
        <Section2 />
        <Section3 section={services} scrollTo={scrollTo} />
        <Section4 />
        <Section5 />
        <Section6 services={services} />
        <Section7 />
      </main>
      <Footer />
    </div>
  );
}
