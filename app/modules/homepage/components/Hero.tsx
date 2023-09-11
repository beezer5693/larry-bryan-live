export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center gap-8 sm:gap-12 lg:px-0">
      <div className="flex flex-col items-center gap-3 sm:items-start sm:gap-8">
        <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:text-8xl lg:text-9xl">
          Dare
        </p>
        <p className="self-center rounded-xl border border-blue/30 px-4 text-center font-basement text-[3.5rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:text-7xl lg:text-8xl">
          to think
        </p>
        <p className="rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:pb-4 sm:text-8xl lg:text-9xl">
          Differently
        </p>
      </div>
      <p className="max-w-[30ch] text-center font-light leading-6 tracking-wider text-amber-500 sm:text-3xl sm:leading-8 md:text-3xl md:leading-10">
        Turning your inner villains into your own{" "}
        <span className="relative bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text p-1 font-basement uppercase italic text-transparent">
          superhero.
        </span>
      </p>
    </div>
  );
}
