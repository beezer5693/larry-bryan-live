import React from "react";
import { motion } from "framer-motion";

export default function Section5() {
  return (
    <section className="relative flex justify-center to-100% px-5 lg:px-10">
      <div className="relative flex w-full max-w-[1250px] flex-col items-center gap-8 lg:gap-12">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="font-basement text-xl text-white md:text-center md:text-2xl lg:text-4xl"
        >
          Come join me as we discover together how to turn your inner villains
          into{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text pr-2 italic text-transparent">
            a dynamic superhero
          </span>
          , ready to conquer {"life's"} challenges. We will investigate the
          mindset and negative inner dialogue of your own villains and see how
          they are affecting your life.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="font-basement text-xl text-white md:text-center md:text-2xl lg:text-4xl"
        >
          Embark on an exhilarating and laugh filled journey as we explore the
          five key characteristics of an inner superhero. You will understand
          the individual components of each trait and learn how they synergize
          together to{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text italic text-transparent">
            create a powerhouse within you.
          </span>
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="font-basement text-xl text-white md:text-center md:text-2xl lg:text-4xl"
        >
          Armed with this knowledge, you will be braced and ready for your{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text italic text-transparent">
            ultimate transformation.
          </span>{" "}
          You will learn what you need to do right now to begin creating your
          new inner superhero who will be ready to unleash the potential within
          you that {"you've"} always possessed.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 },
          }}
          className="font-basement text-xl text-white md:text-center md:text-2xl lg:text-4xl"
        >
          With your new superhero identity and mindset, you will begin to soar
          to{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text italic text-transparent">
            extraordinary levels of success.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
