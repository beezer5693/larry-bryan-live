import React from "react";

export default function Section1() {
  return (
    <section className="mt-32 flex justify-center px-5 md:mt-48 lg:mt-60 lg:px-10">
      <div className="max-w-[1250px] space-y-6 text-center md:space-y-10">
        <h1 className="font-basement text-4xl text-white md:text-6xl lg:text-7xl">
          Meet Larry Bryan
        </h1>
        <p className="text-sm text-amber-500 md:max-w-[85ch] md:text-base lg:text-lg">
          Hi, my name is Larry Bryan. I am a professional speaker and serial
          entrepreneur. My vision is to help busy professional men and women
          discover their inner superhero, so that they can reach new levels of
          success in business, sales and life.
        </p>
      </div>
    </section>
  );
}
