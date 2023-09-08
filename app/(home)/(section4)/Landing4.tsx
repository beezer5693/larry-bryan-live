import React from "react";
import Image from "next/image";
import mindset from "../../../public/assets/characteristics/mindset.png";
import orangeShapeRight from "../../../public/assets/orangeshape.png";
import orangeShapeLeft from "../../../public/assets/orangeshapeleft.png";

export default function Landing4() {
  return (
    <section className="relative flex flex-col items-center px-5 py-32 lg:px-10">
      <Image
        className="absolute right-0 top-16 -z-10"
        src={orangeShapeRight}
        alt=""
      />
      <Image
        className="absolute bottom-0 left-0 -z-10"
        src={orangeShapeLeft}
        alt=""
      />
      <div className="flex w-full max-w-6xl flex-col items-center gap-14">
        <h1 className="font-basement text-4xl uppercase text-white">
          5 key characteristics of a superhero
        </h1>
        <div className="grid w-full grid-cols-2">
          <div className="col-span-2 flex h-[400px] flex-col md:h-[400px] md:flex-row">
            <div className="col-span-1 h-1/2 w-full basis-1/2 overflow-hidden bg-neutral-800 md:h-full">
              <Image
                className="h-full w-full object-cover object-center"
                src={mindset}
                alt="mindset"
              />
            </div>
            <div className="col-span-1 h-1/2 basis-1/2 bg-neutral-800 px-20 py-5 sm:px-10 md:h-full md:py-10 lg:px-12">
              <div className="flex h-full w-full flex-col justify-center gap-5 md:gap-10">
                <div className="flex items-center justify-between">
                  <h3 className="font-basement uppercase text-white sm:text-lg md:text-xl lg:text-2xl">
                    mindset
                  </h3>
                  <p className="text-lg text-white md:text-sm lg:text-xl">
                    /’mīn(d), set/
                  </p>
                </div>
                <p className="font-light text-white sm:text-lg md:text-xl lg:text-2xl">
                  A habitual or mental attitude that determines how you will
                  interpret and respond to situations.
                </p>
              </div>
              {/* Todo: Add remaining 4 characteristics */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
