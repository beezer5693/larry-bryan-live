import React from "react";
import Image from "next/image";
import image1 from "../../../public/assets/carousel3/carousel-1.jpeg";
import image2 from "../../../public/assets/carousel3/carousel-2.jpg";
import image3 from "../../../public/assets/carousel3/carousel-3.png";
import image4 from "../../../public/assets/carousel3/carousel-4.jpeg";
import image5 from "../../../public/assets/carousel3/carousel-5.jpeg";
import image6 from "../../../public/assets/carousel3/carousel-6.jpeg";
import image7 from "../../../public/assets/carousel3/carousel-7.jpeg";
import image8 from "../../../public/assets/carousel3/carousel-8.jpeg";
import styles from "../../about/styles.module.css";
import { cn } from "@/lib/utils";

export default function Section6() {
  return (
    <section className="my-20 overflow-x-hidden md:my-32 lg:my-44">
      <div className={cn("flex gap-5", styles.slide)}>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
              <Image
                src={image1}
                className="scale-105 object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="600px"
                fill
                alt="Larry and Jimmy as kids"
              />
            </div>
            <div className="space-y-5">
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-7xl text-transparent">
                  23
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>countries visited</span>
                  <span>throughout my career</span>
                </p>
              </div>
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image2}
                  sizes="300px"
                  fill
                  alt="Larry in Africa"
                />
              </div>
            </div>
            <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
              <Image
                className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                src={image3}
                sizes="300px"
                fill
                alt="Larry being silly"
              />
            </div>
            <div className="space-y-5">
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image4}
                  sizes="300px"
                  fill
                  alt="Larry with wife in kitchen"
                />
              </div>
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-7xl text-transparent">
                  7
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>advanced educational</span>
                  <span>degrees earned</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
              <Image
                src={image5}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="600px"
                fill
                alt="Larry at the great wall of china"
              />
            </div>
            <div className="space-y-5">
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-5xl text-transparent">
                  6 Weeks
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>after meeting my</span>
                  <span>wife I proposed</span>
                </p>
              </div>
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image6}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
            </div>
            <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
              <Image
                className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                src={image7}
                sizes="300px"
                fill
                alt="Larry lying on table"
              />
            </div>
            <div className="space-y-5">
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image8}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-[1.75rem] text-transparent">
                  3 Hours 41 mins
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>time to complete the</span>
                  <span>Orange Bowl Marathon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
              <Image
                src={image1}
                className="scale-105 object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="600px"
                fill
                alt="Larry and Jimmy as kids"
              />
            </div>
            <div className="space-y-5">
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-7xl text-transparent">
                  23
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>countries visited</span>
                  <span>throughout my career</span>
                </p>
              </div>
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image2}
                  sizes="300px"
                  fill
                  alt="Larry in Africa"
                />
              </div>
            </div>
            <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
              <Image
                className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                src={image3}
                sizes="300px"
                fill
                alt="Larry being silly"
              />
            </div>
            <div className="space-y-5">
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image4}
                  sizes="300px"
                  fill
                  alt="Larry with wife in kitchen"
                />
              </div>
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-7xl text-transparent">
                  7
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>advanced educational</span>
                  <span>degrees earned</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
              <Image
                src={image5}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="600px"
                fill
                alt="Larry at the great wall of china"
              />
            </div>
            <div className="space-y-5">
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-5xl text-transparent">
                  6 Weeks
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>after meeting my</span>
                  <span>wife I proposed</span>
                </p>
              </div>
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image6}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
            </div>
            <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
              <Image
                className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                src={image7}
                sizes="300px"
                fill
                alt="Larry lying on table"
              />
            </div>
            <div className="space-y-5">
              <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image8}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-[1.75rem] text-transparent">
                  3 Hours 41 mins
                </h2>
                <p className="inline-flex flex-col text-center text-lg text-white">
                  <span>time to complete the</span>
                  <span>Orange Bowl Marathon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
