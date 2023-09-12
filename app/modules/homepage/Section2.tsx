import VillainCards from "./components/VillainCards";

export default function Section2() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-5 md:pt-40 lg:px-10 lg:pt-20">
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
