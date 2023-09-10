import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import keynote1 from "../../../../public/assets/services/keynote1.png";
import keynote2 from "../../../../public/assets/services/keynote2.png";
import breakout1 from "../../../../public/assets/services/breakout1.png";
import breakout2 from "../../../../public/assets/services/breakout2.png";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  sizes?: string;
};

type ServiceCardProps = {
  title: string;
  number: number;
  description: string;
  image: ImageProps;
};

const serviceCards: ServiceCardProps[] = [
  {
    title: "Opening Keynote",
    number: 1,
    description: "Turning Your Inner Villains Into Your Own Superhero",
    image: {
      src: keynote1,
      alt: "keynote 1",
      sizes:
        "(min-width: 1320px) 494px, (min-width: 1040px) 36.92vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 106px)",
    },
  },
  {
    title: "Opening Keynote",
    number: 2,
    description: "The Mindset and Behaviors of Supersales People",
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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8">
      {serviceCards.map((card: ServiceCardProps, i: number) => (
        <div
          key={i}
          className="group col-span-1 cursor-pointer space-y-7 rounded-2xl border border-[#1b1b1b] bg-gradient-to-br from-[#0b2583] to-[#03081c] p-8 shadow-2xl shadow-black/50 backdrop-blur-lg transition-all duration-300 ease-in hover:border-neutral-500/50 hover:bg-gradient-to-b hover:from-[#2e2e2e] hover:to-[#2e2e2e]"
        >
          <div
            className={`relative rounded-lg bg-gradient-to-r from-45% to-transparent p-[1px] ${
              i < 2 ? "from-blue" : "from-amber-600"
            }`}
          >
            <div
              className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-lg border bg-[#1b1b1b] px-7 py-4 ${
                i < 2 ? "border-blue" : "border-amber-600"
              }`}
            >
              <p className="font-basement text-xl">{card.number}</p>
            </div>
            <div className="rounded-lg bg-[#1b1b1b] py-3 pl-4">
              <p className="font-basement text-xl text-white">{card.title}</p>
            </div>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl group-hover:shadow-xl group-hover:shadow-neutral-900/80">
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
            <div className="rounded-full border p-2">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
