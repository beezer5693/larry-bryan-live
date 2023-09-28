"use client";

import CarouselSlider from "./components/CarouselSlider";
import CarouselLayout2 from "./components/CarouselLayout2";
import { imageData } from "@/app/about/data/image_data/image-data";
import { stats } from "@/app/about/data/stats_data/stats-data";
import styles from "../../about/styles/styles.module.css";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Section6() {
  useEffect(() => {
    const sliders = document.querySelectorAll(".slider");
    const sliderContent = Array.from(sliders[2].children);
    sliderContent.forEach((slide) => {
      const duplicatedItem = slide.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      sliders[2].appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="py-20 md:py-32 lg:py-44">
      <div className={cn("flex gap-5", styles.sliderContainer)}>
        <CarouselSlider styles={styles.slider2}>
          <CarouselLayout2
            imageData={imageData.carousel3}
            statSet={stats.set2}
          />
        </CarouselSlider>
      </div>
    </section>
  );
}
