import { StaticImageData } from "next/image";
import CarouselImage from "./CarouselImage";
import Stat from "./Stat";

type Carousel2Props = {
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
  statSet: {
    title: string;
    subtitle: string;
    subtitle2: string;
    titleClassName: string;
    subtitleClassName: string;
  }[];
};

export default function CarouselLayout2({
  imageData,
  statSet,
}: Carousel2Props) {
  return (
    <div className="flex gap-5">
      <CarouselImage imageData={imageData[0]} variant={2} />
      <div className="space-y-5">
        <Stat stat={statSet[0]} />
        <CarouselImage imageData={imageData[1]} variant={2} />
      </div>
      <CarouselImage imageData={imageData[2]} variant={2} />
      <div className="space-y-5">
        <CarouselImage imageData={imageData[3]} variant={2} />
        <Stat stat={statSet[1]} />
      </div>
      <CarouselImage imageData={imageData[4]} variant={2} />
      <div className="space-y-5">
        <Stat stat={statSet[2]} />
        <CarouselImage imageData={imageData[5]} variant={2} />
      </div>
      <CarouselImage imageData={imageData[6]} variant={2} />
      <div className="space-y-5">
        <CarouselImage imageData={imageData[7]} variant={2} />
        <Stat stat={statSet[3]} />
      </div>
    </div>
  );
}
