import RadialGradient from "@/components/shared/gradient/RadialGradient";
import VillainCards from "./components/VillainCards";

export default function Section2() {
  return (
    <section className="relative flex items-center justify-center px-5 pt-10 md:pt-32 lg:px-10 lg:pt-40">
      <RadialGradient
        className2={
          "left-[10rem] blur-[250px] rotate-[7deg] top-[7rem] -z-20 h-[50rem] w-[60rem]"
        }
      />
      <RadialGradient
        className2={
          "right-[10rem] blur-[250px] rotate-[7deg] -bottom-[7rem] -z-20 h-[50rem] w-[60rem]"
        }
      />
      <div className="relative flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8 rounded-2xl backdrop-blur-sm md:gap-14 xl:gap-20">
        <h1 className="font-basement text-3xl text-white md:text-4xl xl:text-5xl">
          Do Your Inner Villains Talk To You This Way?
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <VillainCards />
        </div>
      </div>
    </section>
  );
}
