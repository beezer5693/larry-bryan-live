"use client";

import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import awareness from "../../../public/assets/characteristics/awareness.png";
import courage from "../../../public/assets/characteristics/courage.png";
import grit from "../../../public/assets/characteristics/grit.png";
import leadership from "../../../public/assets/characteristics/leadership.png";
import mindset from "../../../public/assets/characteristics/mindset.png";
import CharacteristicCards from "./components/CharacteristicCards";

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

const characteristicCards: CharacteristicCardProps[] = [
  {
    title: "mindset",
    phonetic: "/’mīn(d), set/",
    description:
      "A set of behaviors and actions, through self-example will influence, inspire, and motivate others to achieve a desired result.",
    image: {
      src: mindset,
      alt: "mindset",
      sizes:
        "(min-width: 1300px) 576px, (min-width: 780px) calc(41.2vw + 49px), calc(100vw - 40px)",
    },
  },
  {
    title: "grit",
    phonetic: "/grit/",
    description:
      "The character or trait that possesses an individual to act with passion, perserverance, and determination toward the attainment of their goal.",
    image: {
      src: grit,
      alt: "grit",
      sizes:
        "(min-width: 1280px) 566px, (min-width: 640px) 44.52vw, calc(100vw - 40px)",
    },
  },
  {
    title: "courage",
    phonetic: "/’kərij/",
    description:
      "One’s ability to step forward and through their fears to accomplish what they believe is right, necessary, or desired.",
    image: {
      src: courage,
      alt: "courage",
      sizes:
        "(min-width: 1280px) 566px, (min-width: 640px) 44.52vw, calc(100vw - 40px)",
    },
  },
  {
    title: "awareness",
    phonetic: "/əˈwer-nəs/",
    description:
      "Being able to see, acknowledge, and understand when things are happening within your own life and the environments around you.",
    image: {
      src: awareness,
      alt: "awareness",
      sizes:
        "(min-width: 1280px) 566px, (min-width: 640px) 44.52vw, calc(100vw - 40px)",
    },
  },
  {
    title: "leadership",
    phonetic: "/’lēdərˌSHip/",
    description:
      "A set of behaviors used to help people align their direction,to execute strategic plans, and to continually renew a society, team, or organization.",
    image: {
      src: leadership,
      alt: "leadership",
      sizes:
        "(min-width: 1280px) 566px, (min-width: 640px) 44.52vw, calc(100vw - 40px)",
    },
  },
];

export default function Section4() {
  return (
    <section className="relative flex flex-col items-center px-5 lg:px-10">
      <div className="relative flex w-full max-w-[1250px] flex-col items-center gap-7 md:gap-14">
        <div className="flex flex-col items-center gap-5">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            className="font-basement text-3xl uppercase text-white md:text-4xl xl:text-5xl"
          >
            5 key characteristics of a{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text pr-2.5 italic text-transparent">
              superhero
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            className="text relative z-20 max-w-[90ch] text-white md:text-lg lg:text-center xl:text-xl"
          >
            There are 5 key characteristics that make up the superhero mindset.
            You must possess all 5 to reach your full potential. Through
            practice and self-discipline all five can be achieved and I am going
            to show you how.
          </motion.p>
        </div>
        <CharacteristicCards characteristicCards={characteristicCards} />
      </div>
    </section>
  );
}
