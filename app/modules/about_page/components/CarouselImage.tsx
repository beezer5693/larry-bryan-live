import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type CarouselImageProps = {
  imageData: {
    id: number;
    src: StaticImageData;
    alt: string;
    fill: boolean;
    sizes: string;
    className: string;
    priority: boolean;
    blurDataURL: string;
  };
  variant: 1 | 2;
};

export default function CarouselImage({
  imageData,
  variant,
}: CarouselImageProps) {
  return (
    <div
      className={cn(
        "relative h-[210px] w-[300px] overflow-hidden rounded-2xl",
        {
          "h-full w-[275px]": variant === 1 && imageData.id % 3 === 3 - 1,
          "h-full w-[300px]":
            variant === 2 &&
            imageData.id % 2 === 0 &&
            imageData.id !== 0 &&
            imageData.id % 5 !== 5 - 1,
          "h-[210px] w-[300px]": variant === 2 && imageData.id % 2 !== 0,
          "h-full w-[600px]":
            variant === 2 && (imageData.id === 0 || imageData.id % 5 === 5 - 1),
        },
      )}
    >
      <Image
        src={imageData.src}
        alt={imageData.alt}
        fill={imageData.fill}
        sizes={imageData.sizes}
        className={imageData.className}
        priority={imageData.priority}
        placeholder="blur"
      />
    </div>
  );
}
