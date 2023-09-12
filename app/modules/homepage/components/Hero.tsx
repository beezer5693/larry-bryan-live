import Image from "next/image";
import { IoTriangle, IoTriangleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero() {
  const animateDivVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.75,
      },
    },
  };

  return (
    <div className="relative flex w-full max-w-screen-2xl flex-col justify-between gap-8 pb-20 pt-32 sm:gap-12 md:py-32 xl:pt-60">
      <Image
        className="absolute hidden self-end md:block lg:right-0 lg:top-[2.5rem]"
        src={"/figure.png"}
        height={900}
        width={700}
        alt=""
      />
      <div className="relative flex w-full flex-col items-center gap-3 sm:gap-8">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25,
              duration: 0.75,
            },
          }}
          className="absolute left-[33.5rem] top-[3.20rem] z-10 hidden h-28 w-10 border-r border-t md:block md:border-r-2 md:border-t-2 lg:left-[40rem] lg:top-[4rem] lg:h-32 lg:w-16"
        ></motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.25,
              duration: 0.75,
            },
          }}
          className="absolute left-[22rem] top-8 hidden gap-4 md:flex lg:left-[27rem] lg:top-10"
        >
          <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          <IoTriangleOutline className="h-6 w-6 rotate-90 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.25,
              duration: 0.75,
            },
          }}
          className="absolute left-[34.7rem] top-[10.75rem] hidden md:block lg:left-[42.45rem] lg:top-[13rem]"
        >
          <IoTriangle className="h-6 w-6 rotate-180 fill-amber-500 stroke-black sm:h-10 sm:w-10 md:block lg:h-12 lg:w-12" />
        </motion.div>
        <motion.p
          key={"dare"}
          variants={animateDivVariants}
          initial="initial"
          animate="visible"
          className="divx-2 self-start rounded-xl border border-blue/30 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:text-8xl lg:text-9xl"
        >
          Dare
        </motion.p>
        <motion.p
          key={"to think"}
          variants={animateDivVariants}
          initial="initial"
          animate="visible"
          className="self-start rounded-xl border border-blue/30 px-4 text-center font-basement text-[3.5rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:text-7xl md:ml-[11rem] lg:text-8xl"
        >
          to think
        </motion.p>
        <motion.p
          key={"differently"}
          variants={animateDivVariants}
          initial="initial"
          animate="visible"
          className="self-start rounded-xl border border-blue/30 px-2 font-basement text-[3.25rem] text-white shadow-md shadow-black ring-1 ring-black/40 backdrop-blur-sm sm:px-7 sm:pb-4 sm:text-8xl lg:text-9xl"
        >
          Differently
        </motion.p>
        <motion.p
          key={"turning"}
          variants={animateDivVariants}
          initial="initial"
          animate="visible"
          className="max-w-[40ch] self-start text-lg font-light leading-6 tracking-wider text-amber-500 sm:text-3xl sm:leading-8 md:pl-10 md:text-3xl md:leading-10"
        >
          Turning your inner villains into your own{" "}
          <span className="relative bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text p-1 font-basement uppercase italic text-transparent">
            superhero.
          </span>
        </motion.p>
      </div>
    </div>
  );
}
