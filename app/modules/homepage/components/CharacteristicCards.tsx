import React from "react";
import Image, { StaticImageData } from "next/image";

type CharacteristicCardProps = {
  title: string;
  phonetic: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    sizes?: string;
  };
};

export default function CharacteristicCards({
  characteristicCards,
}: {
  characteristicCards: CharacteristicCardProps[];
}) {
  return (
    <div className="relative grid w-full grid-cols-2 gap-5 shadow-lg">
      <div className="bg-gradient-radial absolute -left-40 -top-40 -z-20 h-[50rem] w-[60rem]"></div>
      {characteristicCards.map((card: CharacteristicCardProps, i: number) => (
        <div
          key={i}
          className={
            i === 0
              ? "col-span-2 flex h-[400px] flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/70 md:flex-row"
              : "col-span-2 flex h-[400px] flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/70 sm:col-span-1 sm:h-[500px] md:h-[550px]"
          }
        >
          <div
            className={
              i === 0
                ? "relative h-1/2 w-full basis-1/2 bg-neutral-800 md:h-full"
                : "relative h-1/2 w-full basis-1/2 bg-neutral-800"
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
                ? "h-1/2 basis-1/2 bg-gradient-to-br from-[#333333] to-[#0b0b0b] px-7 sm:px-10 md:h-full"
                : "h-1/2 basis-1/2 bg-gradient-to-br from-[#333333] to-[#0b0b0b] px-7 py-5 lg:px-12"
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
