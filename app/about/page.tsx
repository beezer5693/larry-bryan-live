import Header from "@/components/shared/header/Header";
import React from "react";
import Section1 from "../modules/about_page/Section1";
import Section2 from "../modules/about_page/Section2";
import Section3 from "../modules/about_page/Section3";
import Section4 from "../modules/about_page/Section4";

export default function page() {
  return (
    <div className="h-screen">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
