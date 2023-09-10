import Image, { StaticImageData } from "next/image";
import awareness from "../../../public/assets/characteristics/awareness.png";
import courage from "../../../public/assets/characteristics/courage.png";
import grit from "../../../public/assets/characteristics/grit.png";
import leadership from "../../../public/assets/characteristics/leadership.png";
import mindset from "../../../public/assets/characteristics/mindset.png";
import orangeShapeRight from "../../../public/assets/orangeshape.png";
import orangeShapeLeft from "../../../public/assets/orangeshapeleft.png";
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
      "A habitual or mental attitude that determines how you will interpret and respond to situations.",
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
      <div className="absolute -top-20 left-0 right-0 h-[15rem] bg-gradient-to-b from-black to-transparent"></div>
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-14">
        <h1 className="font-basement text-[2rem] uppercase text-white sm:text-[2.5rem]">
          5 key characteristics of a{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text pr-2.5 italic text-transparent">
            superhero
          </span>
        </h1>
        <CharacteristicCards characteristicCards={characteristicCards} />
      </div>
    </section>
  );
}