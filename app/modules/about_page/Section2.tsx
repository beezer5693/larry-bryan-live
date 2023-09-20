"use client";

import React from "react";
import Image from "next/image";
import image1 from "../../../public/assets/carousel/carousel-1.jpg";
import image2 from "../../../public/assets/carousel/carousel-2.jpg";
import image3 from "../../../public/assets/carousel/carousel-3.jpeg";
import image4 from "../../../public/assets/carousel/carousel-4.jpeg";
import image5 from "../../../public/assets/carousel/carousel-5.jpeg";
import image6 from "../../../public/assets/carousel/carousel-6.jpeg";
import image7 from "../../../public/assets/carousel/carousel-7.jpeg";
import image8 from "../../../public/assets/carousel/carousel-8.png";
import image9 from "../../../public/assets/carousel/carousel-9.png";
import styles from "../../about/styles.module.css";
import { cn } from "@/lib/utils";

export default function Section2() {
  return (
    <section className={"overflow-x-hidden pt-20 md:pt-32 lg:pt-44"}>
      <div className={cn("flex gap-5", styles.slide)}>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="scale-105 object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image1}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image2}
                  sizes="300px"
                  fill
                  alt="Larry lying on table"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image3}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="275px"
                fill
                alt="Larry and Suzanne Wedding"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-center transition-all duration-500 ease-in-out hover:scale-125"
                  src={image4}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image5}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image6}
                className="scale-[2.3] object-cover object-[5px_-38px] transition-all duration-500 ease-in-out hover:scale-[2.75]"
                sizes="275px"
                fill
                alt="Larry as a child"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image7}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-[0px_-40px] transition-all duration-500 ease-in-out hover:scale-125"
                  src={image8}
                  sizes="300px"
                  fill
                  alt="Larry with mother"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image9}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="275px"
                fill
                alt="Larry with alcoholic beverage"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="scale-105 object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image1}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image2}
                  sizes="300px"
                  fill
                  alt="Larry lying on table"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image3}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="275px"
                fill
                alt="Larry and Suzanne Wedding"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-center transition-all duration-500 ease-in-out hover:scale-125"
                  src={image4}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image5}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image6}
                className="scale-[2.3] object-cover object-[5px_-38px] transition-all duration-500 ease-in-out hover:scale-[2.75]"
                sizes="275px"
                fill
                alt="Larry as a child"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image7}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-[0px_-40px] transition-all duration-500 ease-in-out hover:scale-125"
                  src={image8}
                  sizes="300px"
                  fill
                  alt="Larry with mother"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image9}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="275px"
                fill
                alt="Larry with alcoholic beverage"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="scale-105 object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image1}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image2}
                  sizes="300px"
                  fill
                  alt="Larry lying on table"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image3}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="275px"
                fill
                alt="Larry and Suzanne Wedding"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-center transition-all duration-500 ease-in-out hover:scale-125"
                  src={image4}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image5}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image6}
                className="scale-[2.3] object-cover object-[5px_-38px] transition-all duration-500 ease-in-out hover:scale-[2.75]"
                sizes="275px"
                fill
                alt="Larry as a child"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-grow gap-5">
            <div className="space-y-5">
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  src={image7}
                  sizes="300px"
                  fill
                  alt="Larry with friends"
                />
              </div>
              <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-[0px_-40px] transition-all duration-500 ease-in-out hover:scale-125"
                  src={image8}
                  sizes="300px"
                  fill
                  alt="Larry with mother"
                />
              </div>
            </div>
            <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
              <Image
                src={image9}
                className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                sizes="275px"
                fill
                alt="Larry with alcoholic beverage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
