import RadialGradient from "@/components/shared/gradient/RadialGradient";
import VillainCards from "./components/VillainCards";

export default function Section2() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 px-5 pt-10 md:gap-14 md:pt-32 lg:px-10 lg:pt-40 xl:gap-20">
      <div className="absolute left-0 right-0 top-0 z-10 h-[20rem] bg-gradient-to-b from-black to-transparent"></div>
      <h1 className="relative z-20 font-basement text-3xl text-white md:text-4xl xl:text-5xl">
        Do Your Inner Villains Talk To You This Way?
      </h1>
      <div className=" flex w-full max-w-screen-2xl flex-col items-center justify-center rounded-2xl backdrop-blur-sm">
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <RadialGradient
            className2={
              "-left-[15rem] blur-[250px] rotate-[7deg] -top-[15rem] -z-20 h-[50rem] w-[60rem]"
            }
          />
          <RadialGradient
            className2={
              "-right-[18rem] blur-[250px] rotate-[7deg] -bottom-[15rem] -z-20 h-[50rem] w-[60rem]"
            }
          />
          <VillainCards />
        </div>
      </div>
    </section>
  );
}
