import React from "react";
import Image, { StaticImageData } from "next/image";
import RadialGradient from "@/components/shared/gradient/RadialGradient";
import { motion } from "framer-motion";

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
    <div className="relative grid w-full grid-cols-2 gap-5">
      <RadialGradient
        className2={
          "-left-[10rem] blur-[200px] rotate-[7deg] -top-[7rem] -z-20 h-[40rem] w-[50rem]"
        }
      />
      <RadialGradient
        className2={
          "-right-[10rem] blur-[200px] rotate-[50deg] top-[60rem] -z-20 h-[40rem] w-[50rem]"
        }
      />
      {characteristicCards.map((card: CharacteristicCardProps, i: number) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          key={i}
          className={
            i === 0
              ? "relative z-50 col-span-2 flex h-[400px] flex-col overflow-hidden rounded-2xl border border-neutral-800/50 shadow-2xl shadow-black/50 md:flex-row"
              : "relative z-50 col-span-2 flex h-[450px] flex-col overflow-hidden rounded-2xl border border-neutral-800/50 shadow-2xl shadow-black/50 sm:col-span-1"
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
                i === 2 ? "md:object-[0px_-60px]" : "object-center"
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
                ? "h-1/2 basis-1/2 bg-gradient-to-br from-neutral-800 to-neutral-950 px-7 sm:px-10 md:h-full"
                : "h-1/2 basis-1/2 bg-gradient-to-br from-neutral-800 to-neutral-950 px-7 py-5 lg:px-12"
            }
          >
            <div className="flex h-full w-full flex-col justify-center gap-8">
              <div className="flex items-center justify-between">
                <h3 className="font-basement uppercase text-white sm:text-lg md:text-xl xl:text-xl">
                  {card.title}
                </h3>
                <p className="text-sm text-white md:text-base lg:text-lg xl:text-xl">
                  {card.phonetic}
                </p>
              </div>
              <p className="text-sm font-light text-white md:text-base lg:text-lg xl:text-xl">
                {card.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
