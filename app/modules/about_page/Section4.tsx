import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/carousel2/carousel-1.jpg";
import image2 from "../../../public/assets/carousel2/carousel-2.jpeg";
import image3 from "../../../public/assets/carousel2/carousel-3.jpg";
import image4 from "../../../public/assets/carousel2/carousel-4.png";
import image5 from "../../../public/assets/carousel2/carousel-5.jpeg";
import image6 from "../../../public/assets/carousel2/carousel-6.jpeg";
import image7 from "../../../public/assets/carousel2/carousel-7.jpeg";
import image8 from "../../../public/assets/carousel2/carousel-8.jpeg";

export default function Section4() {
  return (
    <section className="mt-20 overflow-x-hidden md:mt-32 lg:mt-44">
      <div className="slide-reverse flex gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="flex flex-grow gap-5">
              <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
                <Image
                  src={image1}
                  className="scale-105 object-cover object-[0px_-100px] transition-all duration-500 ease-in-out hover:scale-125"
                  fill
                  alt="Larry and Rick"
                />
              </div>
              <div className="space-y-5">
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-5xl text-transparent">
                    $52m
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>gross commission</span>
                    <span>generated in 2006</span>
                  </p>
                </div>
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                    src={image2}
                    fill
                    alt="Larry skydiving"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image3}
                  fill
                  alt="Larry younger"
                />
              </div>
              <div className="space-y-5">
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-75px] transition-all duration-500 ease-in-out hover:scale-125"
                    src={image4}
                    fill
                    alt="Larry with wife"
                  />
                </div>
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-5xl text-transparent">
                    30 years
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>commission based</span>
                    <span>sales expertise</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="flex flex-grow gap-5">
              <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
                <Image
                  src={image5}
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  fill
                  alt="Larry at the great wall of china"
                />
              </div>
              <div className="space-y-5">
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-5xl text-transparent">
                    20 Years
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>earning over $1 million</span>
                    <span>in commission income</span>
                  </p>
                </div>
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                    src={image6}
                    fill
                    alt="Larry with friends"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image7}
                  fill
                  alt="Larry lying on table"
                />
              </div>
              <div className="space-y-5">
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-75px] transition-all duration-500 ease-in-out hover:scale-125"
                    src={image8}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-[2.35rem] text-transparent">
                    30 Offices
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>opened from Florida</span>
                    <span>to Connecticut</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="flex flex-grow gap-5">
              <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
                <Image
                  src={image1}
                  className="scale-105 object-cover object-[0px_-100px] transition-all duration-500 ease-in-out hover:scale-125 "
                  fill
                  alt="Larry and Rick"
                />
              </div>
              <div className="space-y-5">
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-5xl text-transparent">
                    $52m
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>gross commission</span>
                    <span>generated in 2006</span>
                  </p>
                </div>
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                    src={image2}
                    fill
                    alt="Larry skydiving"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image3}
                  fill
                  alt="Larry younger"
                />
              </div>
              <div className="space-y-5">
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-75px] transition-all duration-500 ease-in-out hover:scale-125"
                    src={image4}
                    fill
                    alt="Larry with wife"
                  />
                </div>
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-5xl text-transparent">
                    30 years
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>commission based</span>
                    <span>sales expertise</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="flex flex-grow gap-5">
              <div className="relative h-auto w-[600px] overflow-hidden rounded-2xl">
                <Image
                  src={image5}
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                  fill
                  alt="Larry at the great wall of china"
                />
              </div>
              <div className="space-y-5">
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-amber-400 from-30% to-amber-700 bg-clip-text font-basement text-5xl text-transparent">
                    20 Years
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>earning over $1 million</span>
                    <span>in commission income</span>
                  </p>
                </div>
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover transition-all duration-500 ease-in-out hover:scale-125"
                    src={image6}
                    fill
                    alt="Larry with friends"
                  />
                </div>
              </div>
              <div className="relative h-auto w-[300px] overflow-hidden rounded-2xl">
                <Image
                  className="object-cover object-top transition-all duration-500 ease-in-out hover:scale-125"
                  src={image7}
                  fill
                  alt="Larry lying on table"
                />
              </div>
              <div className="space-y-5">
                <div className="relative h-[210px] w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    className="object-cover object-[0px_-75px] transition-all duration-500 ease-in-out hover:scale-125"
                    src={image8}
                    fill
                    alt="Larry with friends"
                  />
                </div>
                <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
                  <h2 className="bg-gradient-to-br from-blue from-50% to-blue/30 bg-clip-text font-basement text-[2.35rem] text-transparent">
                    30 Offices
                  </h2>
                  <p className="inline-flex flex-col text-center text-lg text-white">
                    <span>opened from Florida</span>
                    <span>to Connecticut</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
