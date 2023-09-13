import RadialGradient from "@/components/shared/gradient/RadialGradient";
import VillainCards from "./components/VillainCards";

export default function Section2() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 px-5 pt-10 md:gap-14 md:pt-20 lg:px-10  xl:gap-20">
      <div className="absolute left-0 right-0 top-0 z-10 h-[20rem] bg-gradient-to-b from-black to-transparent"></div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="relative z-20 max-w-[1250px] font-basement text-3xl text-white md:text-4xl xl:text-5xl">
          Do Your Inner Villains Talk To You This Way?
        </h1>
        <p className="text relative z-20 max-w-[90ch] text-white md:text-lg lg:text-center xl:text-xl">
          In life are greatest achievements are just a stones throw away, but
          our inner villains tend to prevent us from picking up the stone in the
          first place. Sound familiar?
        </p>
      </div>
      <div className=" flex w-full max-w-[1250px] flex-col items-center justify-center backdrop-blur-sm">
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
