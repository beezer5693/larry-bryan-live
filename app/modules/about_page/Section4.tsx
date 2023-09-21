import CarouselSlider from "./components/CarouselSlider";
import CarouselLayout2 from "./components/CarouselLayout2";
import { imageData } from "@/app/about/data/image_data/image-data";
import { stats } from "@/app/about/data/stats_data/stats-data";
import styles from "../../about/styles/styles.module.css";

export default function Section4() {
  return (
    <section className="overflow-x-hidden pt-20 md:pt-32 lg:pt-44">
      <CarouselSlider slideDirection={styles.slideReverse}>
        <CarouselLayout2 imageData={imageData.carousel2} statSet={stats.set1} />
        <CarouselLayout2 imageData={imageData.carousel2} statSet={stats.set1} />
        <CarouselLayout2 imageData={imageData.carousel2} statSet={stats.set1} />
        <CarouselLayout2 imageData={imageData.carousel2} statSet={stats.set1} />
      </CarouselSlider>
    </section>
  );
}
