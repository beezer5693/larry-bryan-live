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

export default function Section2() {
  return (
    <section className="mt-20 overflow-x-hidden md:mt-32 lg:mt-44">
      <div className="slide flex gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="flex flex-grow gap-5">
              <div className="space-y-5">
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image1}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image2}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image3}
                  className="object-cover"
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
                    className="object-cover object-center"
                    src={image4}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image5}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image6}
                  className="object-cover"
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
                    className="object-cover"
                    src={image7}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-40px]"
                    src={image8}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image9}
                  className="object-cover"
                  fill
                  alt="Larry and Suzanne Wedding"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center">
            <div className="flex flex-grow gap-5">
              <div className="space-y-5">
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image1}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image2}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image3}
                  className="object-cover"
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
                    className="object-cover object-center"
                    src={image4}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image5}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image6}
                  className="object-cover"
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
                    className="object-cover"
                    src={image7}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-40px]"
                    src={image8}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image9}
                  className="object-cover"
                  fill
                  alt="Larry and Suzanne Wedding"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center">
            <div className="flex flex-grow gap-5">
              <div className="space-y-5">
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image1}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image2}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image3}
                  className="object-cover"
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
                    className="object-cover object-center"
                    src={image4}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-top"
                    src={image5}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image6}
                  className="object-cover"
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
                    className="object-cover"
                    src={image7}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-40px]"
                    src={image8}
                    fill
                    alt="Larry lying on table"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[275px] overflow-hidden rounded-2xl">
                <Image
                  src={image9}
                  className="object-cover"
                  fill
                  alt="Larry and Suzanne Wedding"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
