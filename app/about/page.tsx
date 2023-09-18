import Header from "@/components/shared/header/Header";
import React from "react";
import Section1 from "../modules/about_page/Section1";
import Section2 from "../modules/about_page/Section2";

export default function page() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
    </div>
  );
}
