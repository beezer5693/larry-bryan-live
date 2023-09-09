import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import keynote1 from "../../../public/assets/services/keynote1.png";
import keynote2 from "../../../public/assets/services/keynote2.png";
import breakout1 from "../../../public/assets/services/breakout1.png";
import breakout2 from "../../../public/assets/services/breakout2.png";

type ServiceCardProps = {
  title: string;
  number: number;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    sizes?: string;
  };
};

const serviceCards = [
  {
    title: "Opening Keynote",
    number: 1,
    description: "Turning Your Inner Villains Into Your Own Superhero",
    image: {
      src: keynote1,
      alt: "keynote 1",
    },
  },
  {
    title: "Opening Keynote",
    number: 2,
    description: "The Mindset and Behaviors of Supersales People",
    image: {
      src: keynote2,
      alt: "keynote 1",
    },
  },
  {
    title: "Breakout",
    number: 1,
    description: "Saying Goodbye to Your Inner Villains",
    image: {
      src: breakout1,
      alt: "keynote 1",
    },
  },
  {
    title: "Breakout",
    number: 2,
    description: "The Five Key Characteristics of a Super Salesperson",
    image: {
      src: breakout2,
      alt: "keynote 1",
    },
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8">
      {serviceCards.map((card: ServiceCardProps, i: number) => (
        <div
          key={i}
          className="group col-span-1 cursor-pointer space-y-7 rounded-2xl border border-[#1b1b1b] bg-gradient-to-b from-[#1b1b1b] to-[#0b0b0b] p-8 shadow-2xl shadow-black/50 backdrop-blur-lg transition-all duration-300 ease-in hover:border-neutral-700/50 hover:bg-gradient-to-b hover:from-[#1f1f1f] hover:to-[#1f1f1f]"
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
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
              src={card.image.src}
              fill
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
