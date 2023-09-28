"use client";

import { useEffect } from "react";
import CarouselSlider from "./components/CarouselSlider";
import CarouselLayout2 from "./components/CarouselLayout2";
import { imageData } from "@/app/about/data/image_data/image-data";
import { stats } from "@/app/about/data/stats_data/stats-data";
import styles from "../../about/styles/styles.module.css";
import { cn } from "@/lib/utils";

export default function Section4() {
  useEffect(() => {
    const sliders = document.querySelectorAll(".slider");
    const sliderContent = Array.from(sliders[1].children);
    sliderContent.forEach((slide) => {
      const duplicatedItem = slide.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      sliders[1].appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="pt-20 md:pt-32 lg:pt-44">
      <div className={cn("flex gap-5", styles.sliderContainer)}>
        <CarouselSlider styles={styles.slideReverse}>
          <CarouselLayout2
            imageData={imageData.carousel2}
            statSet={stats.set1}
          />
        </CarouselSlider>
      </div>
    </section>
  );
}
