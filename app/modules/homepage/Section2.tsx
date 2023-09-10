import VillainCards from "./components/VillainCards";

export default function Section2() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-5 pb-14 pt-24 md:py-24 md:pt-44 lg:px-10">
      <div className="absolute left-0 right-0 top-0 h-[20rem] bg-gradient-to-b from-[#03081c] to-transparent"></div>
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-14 rounded-2xl border border-blue/10 bg-gradient-to-b from-[#090f33] to-[#0e1648]/20  p-8 backdrop-blur-sm md:p-14">
        <h1 className="font-basement text-4xl text-white">
          Do Your Inner Villains Talk To You This Way?
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <VillainCards />
        </div>
      </div>
    </section>
  );
}
