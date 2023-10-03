import Image from "next/image";
import podcastHeroImage from "@/public/assets/podcast.jpg";
import Hero from "./components/Hero";

export default function Section1() {
  return (
    <section className="relative flex h-[300px] items-center justify-center overflow-hidden px-7 md:h-[500px] lg:h-[700px]">
      <Image
        className="object-cover"
        src={podcastHeroImage}
        alt="Podcast Hero Image"
        sizes="100vw"
        quality={65}
        fill
        priority
      />
      <Hero />
    </section>
  );
}
