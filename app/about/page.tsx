import Header from "@/components/shared/header/Header";
import React from "react";
import Section1 from "../modules/about_page/Section1";
import Section2 from "../modules/about_page/Section2";
import Section3 from "../modules/about_page/Section3";
import Section4 from "../modules/about_page/Section4";
import Section5 from "../modules/about_page/Section5";
import Footer from "@/components/shared/footer/Footer";
import Section6 from "../modules/about_page/Section6";

export default function page() {
  return (
    <div>
      <Header />
      <main className="overflow-x-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
}
