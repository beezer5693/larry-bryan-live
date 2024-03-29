"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import breakout1 from "../../../../public/assets/services/breakout1.png";
import breakout2 from "../../../../public/assets/services/breakout2.png";
import keynote1 from "../../../../public/assets/services/keynote1.png";
import keynote2 from "../../../../public/assets/services/keynote2.png";
import Link from "next/link";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  sizes?: string;
};

type ServiceCardProps = {
  title: string;
  number: number;
  description: string;
  url: string;
  image: ImageProps;
};

const serviceCards: ServiceCardProps[] = [
  {
    title: "Keynote",
    number: 1,
    description: "Turning Your Inner Villains Into Your Own Superhero",
    url: "/services/#keynote1",
    image: {
      src: keynote1,
      alt: "keynote 1",
      sizes:
        "(min-width: 1320px) 494px, (min-width: 1040px) 36.92vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 106px)",
    },
  },
  {
    title: "Keynote",
    number: 2,
    description: "The Mindset and Behaviors of Supersales People",
    url: "/services/#keynote2",
    image: {
      src: keynote2,
      alt: "keynote 1",
      sizes:
        "(min-width: 1320px) 494px, (min-width: 1040px) 36.92vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 106px)",
    },
  },
  {
    title: "Breakout",
    number: 1,
    description: "Saying Goodbye to Your Inner Villains",
    url: "/services/#breakout1",
    image: {
      src: breakout1,
      alt: "keynote 1",
      sizes:
        "(min-width: 1320px) 494px, (min-width: 1040px) 36.92vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 106px)",
    },
  },
  {
    title: "Breakout",
    number: 2,
    description: "The Five Key Characteristics of a Super Salesperson",
    url: "/services/#breakout2",
    image: {
      src: breakout2,
      alt: "keynote 1",
      sizes:
        "(min-width: 1320px) 494px, (min-width: 1040px) 36.92vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 106px)",
    },
  },
];

export default function ServiceCards() {
  return (
    <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8">
      {serviceCards.map((card: ServiceCardProps, i: number) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 1, delay: i * 0.1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 0 },
          }}
          className={cn(
            "group col-span-1 cursor-pointer rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-6 shadow-2xl shadow-black/50 backdrop-blur-lg transition-all duration-300 ease-in-out hover:border-neutral-500/50 hover:bg-gradient-to-b md:p-8",
            {
              "hover:from-[#0b206e] hover:to-[#060b1d]": i < 2,
              "hover:border-amber-600 hover:from-amber-700 hover:to-amber-950":
                i >= 2,
            },
          )}
        >
          <Link className="space-y-7" href={card.url} scroll={true}>
            <div
              className={`relative rounded-lg bg-gradient-to-r from-40% to-transparent p-[1px] ${
                i < 2 ? "from-blue" : "from-amber-600"
              }`}
            >
              <div
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border px-7 py-4",
                  {
                    "border-blue bg-neutral-950": i < 2,
                    "border-amber-600 bg-neutral-950": i >= 2,
                  },
                )}
              >
                <p className="font-basement text-xl">{card.number}</p>
              </div>
              <div className={cn("rounded-lg bg-neutral-950 py-3 pl-4")}>
                <p className="font-basement text-xl text-white">{card.title}</p>
              </div>
            </div>
            <div className="relative h-[225px] w-full overflow-hidden rounded-xl transition duration-300 ease-in-out lg:h-[350px]">
              <Image
                className="object-cover transition duration-300 ease-in group-hover:scale-110"
                src={card.image.src}
                fill
                sizes={card.image.sizes}
                alt={card.image.alt}
              />
            </div>
            <div className="flex items-center justify-between gap-5">
              <p>{card.description}</p>
              <div className="rounded-full border p-3">
                <ArrowRight size={24} />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
