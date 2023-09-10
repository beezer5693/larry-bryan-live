import VillainCards from "./components/VillainCards";

export default function Section2() {
  return (
    <section className="relative z-30 flex items-center justify-center overflow-hidden px-5 lg:px-10">
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-14 rounded-2xl border border-neutral-700/50 bg-[#1f1f1f]/70 p-8 backdrop-blur-sm md:p-14">
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
