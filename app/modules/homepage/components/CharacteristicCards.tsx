import React from "react";
import Image, { StaticImageData } from "next/image";
import RadialGradient from "@/components/shared/gradient/RadialGradient";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  sizes?: string;
};

type CharacteristicCardProps = {
  title: string;
  phonetic: string;
  description: string;
  image: ImageProps;
};

export default function CharacteristicCards({
  characteristicCards,
}: {
  characteristicCards: CharacteristicCardProps[];
}) {
  return (
    <div className="relative grid w-full grid-cols-2 gap-5 shadow-lg">
      <RadialGradient
        className2={
          "-left-[15rem] rotate-[30deg] -top-[10rem] -z-20 h-[50rem] w-[60rem]"
        }
      />
      <RadialGradient
        className2={
          "-right-[13rem] rotate-[-50deg] top-[50rem] -z-20 h-[50rem] w-[60rem]"
        }
      />
      {characteristicCards.map((card: CharacteristicCardProps, i: number) => (
        <div
          key={i}
          className={
            i === 0
              ? "shadow-blue/200 relative z-50 col-span-2 flex h-[400px] flex-col overflow-hidden rounded-2xl border border-blue/10 shadow-2xl md:flex-row"
              : "shadow-blue/200 relative z-50 col-span-2 flex h-[400px] flex-col overflow-hidden rounded-2xl border border-blue/10 shadow-2xl sm:col-span-1 sm:h-[500px] md:h-[550px]"
          }
        >
          <div
            className={
              i === 0
                ? "relative h-1/2 w-full basis-1/2 md:h-full"
                : "relative h-1/2 w-full basis-1/2"
            }
          >
            <Image
              className={`h-full w-full object-cover ${
                i === 2 ? "object-[0px_-60px]" : "object-center"
              }`}
              src={card.image.src}
              sizes={card.image.sizes}
              fill
              alt={card.image.alt}
            />
          </div>
          <div
            className={
              i === 0
                ? "h-1/2 basis-1/2 bg-gradient-to-br from-[#0e1648] to-[#0e1648]/20 px-7 sm:px-10 md:h-full"
                : "h-1/2 basis-1/2 bg-gradient-to-br from-[#0e1648] to-[#0e1648]/20 px-7 py-5 lg:px-12"
            }
          >
            <div className="flex h-full w-full flex-col justify-center gap-2 md:gap-10">
              <div className="flex items-center justify-between">
                <h3 className="font-basement uppercase text-white sm:text-lg lg:text-xl">
                  {card.title}
                </h3>
                <p className="text-lg text-white md:text-sm lg:text-xl">
                  {card.phonetic}
                </p>
              </div>
              <p className="font-light text-white lg:text-xl">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
