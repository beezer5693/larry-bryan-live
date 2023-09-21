import CarouselImage from "./CarouselImage";
import { cn } from "@/lib/utils";
import styles from "../../../about/styles.module.css";
import { StaticImageData } from "next/image";

type Carousel1Props = {
  imageData: {
    id: number;
    src: StaticImageData;
    alt: string;
    fill: boolean;
    sizes: string;
    className: string;
    priority: boolean;
    blurDataURL: string;
  }[];
};

export default function CarouselLayout1({ imageData }: Carousel1Props) {
  return (
    <div className="flex gap-5">
      <div className="space-y-5">
        <CarouselImage imageData={imageData[0]} variant={1} />
        <CarouselImage imageData={imageData[1]} variant={1} />
      </div>
      <CarouselImage imageData={imageData[2]} variant={1} />
      <div className="space-y-5">
        <CarouselImage imageData={imageData[3]} variant={1} />
        <CarouselImage imageData={imageData[4]} variant={1} />
      </div>
      <CarouselImage imageData={imageData[5]} variant={1} />
      <div className="space-y-5">
        <CarouselImage imageData={imageData[6]} variant={1} />
        <CarouselImage imageData={imageData[7]} variant={1} />
      </div>
      <CarouselImage imageData={imageData[8]} variant={1} />
    </div>
  );
}
