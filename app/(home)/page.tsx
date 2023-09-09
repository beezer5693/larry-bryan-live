"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Landing from "./(section1)/Landing";
import Landing2 from "./(section2)/Landing2";
import Landing3 from "./(section3)/Landing3";
import Landing4 from "./(section4)/Landing4";
import Landing5 from "./(section5)/Landing5";
import Landing6 from "./(section6)/Landing6";

export default function Home() {
  const services = useRef<HTMLElement>(null);

  function scrollDown(ref: React.RefObject<HTMLElement>) {
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <section>
      <Header />
      <Landing />
      <Landing2 />
      <Landing3 section={services} scrollDown={scrollDown} />
      <Landing4 />
      <Landing5 />
      <Landing6 services={services} />
    </section>
  );
}
