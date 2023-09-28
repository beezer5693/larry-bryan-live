"use client";

import CarouselSlider from "./components/CarouselSlider";
import CarouselLayout1 from "./components/CarouselLayout1";
import { imageData } from "@/app/about/data/image_data/image-data";
import styles from "../../about/styles/styles.module.css";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Section2() {
  useEffect(() => {
    const sliders = document.querySelectorAll(".slider");
    const sliderContent = Array.from(sliders[0].children);
    sliderContent.forEach((slide) => {
      const duplicatedItem = slide.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      sliders[0].appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className={"pt-20 md:pt-32 lg:pt-44"}>
      <div className={cn("flex gap-5", styles.sliderContainer)}>
        <CarouselSlider styles={styles.slider}>
          <CarouselLayout1 imageData={imageData.carousel1} />
        </CarouselSlider>
      </div>
    </section>
  );
}
