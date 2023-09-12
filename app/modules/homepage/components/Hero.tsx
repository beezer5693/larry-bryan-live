import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex w-full max-w-screen-2xl justify-between gap-8 sm:gap-12">
      <Image
        className="absolute -top-[10rem] right-0"
        src={"/figure.png"}
        height={900}
        width={700}
        alt=""
      />
      <div className="relative flex w-full flex-col items-center gap-3 sm:gap-8">
        <p className="self-start rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:text-8xl lg:text-9xl">
          Dare
        </p>
        <p className="self-start rounded-xl border border-blue/30 px-4 text-center font-basement text-[3.5rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:text-7xl lg:text-8xl">
          to think
        </p>
        <p className="self-start rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:pb-4 sm:text-8xl lg:text-9xl">
          Differently
        </p>
        <p className="max-w-[40ch] self-start pl-10 font-light leading-6 tracking-wider text-amber-500 sm:text-3xl sm:leading-8 md:text-3xl md:leading-10">
          Turning your inner villains into your own{" "}
          <span className="relative bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text p-1 font-basement uppercase italic text-transparent">
            superhero.
          </span>
        </p>
      </div>
    </div>
  );
}
