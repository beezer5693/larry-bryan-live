import CarouselSlider from "./components/CarouselSlider";
import CarouselLayout2 from "./components/CarouselLayout2";
import { imageData } from "@/app/about/data/image_data/image-data";
import { stats } from "@/app/about/data/stats_data/stats-data";
import styles from "../../about/styles/styles.module.css";

export default function Section6() {
  return (
    <section className="overflow-x-hidden py-20 md:py-32 lg:py-44">
      <CarouselSlider slideDirection={styles.slide}>
        <CarouselLayout2 imageData={imageData.carousel3} statSet={stats.set2} />
        <CarouselLayout2 imageData={imageData.carousel3} statSet={stats.set2} />
        <CarouselLayout2 imageData={imageData.carousel3} statSet={stats.set2} />
        <CarouselLayout2 imageData={imageData.carousel3} statSet={stats.set2} />
      </CarouselSlider>
    </section>
  );
}
