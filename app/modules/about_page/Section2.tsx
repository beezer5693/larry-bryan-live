import CarouselSlider from "./components/CarouselSlider";
import CarouselLayout1 from "./components/CarouselLayout1";
import { imageData } from "@/app/about/data/image_data/image-data";
import styles from "../../about/styles/styles.module.css";

export default function Section2() {
  return (
    <section className={"pt-20 md:pt-32 lg:pt-44"}>
      <CarouselSlider slideDirection={styles.slide}>
        <CarouselLayout1 imageData={imageData.carousel1} />
        <CarouselLayout1 imageData={imageData.carousel1} />
        <CarouselLayout1 imageData={imageData.carousel1} />
        <CarouselLayout1 imageData={imageData.carousel1} />
      </CarouselSlider>
    </section>
  );
}
