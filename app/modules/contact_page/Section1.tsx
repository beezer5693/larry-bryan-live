"use client";

import RadialGradient from "@/components/shared/gradient/RadialGradient";
import { motion } from "framer-motion";
import Image from "next/image";
import figure from "@/public/assets/contact.jpg";
import ContactForm from "./components/ContactForm";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { AtSign, Phone } from "lucide-react";
import { PiWechatLogo } from "react-icons/pi";

export default function Section1() {
  return (
    <section className="flex justify-center overflow-x-hidden px-5 py-32 lg:px-10">
      <div className="relative flex w-full max-w-[1250px] flex-col items-center space-y-10 md:space-y-20">
        <RadialGradient
          className2={
            "-right-[15rem] blur-[225px] rotate-[7deg] -top-[2rem] h-[40rem] w-[50rem]"
          }
        />
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="relative font-basement text-4xl text-white md:text-6xl lg:text-7xl"
        >
          {"Let's Chat"}
        </motion.h1>
        <div className="relative flex w-full overflow-hidden rounded-2xl border border-neutral-700/50">
          <div className="relative hidden w-full flex-col justify-end overflow-hidden lg:flex">
            <Image
              className="rounded-bl-2xl rounded-tl-2xl object-cover"
              src={figure}
              fill
              sizes="(min-width: 1420px) 603px, calc(40.28vw + 39px)"
              alt="Larry"
            />
            <div className="relative flex h-[15rem] w-full flex-col items-center justify-center gap-5 bg-black/80 text-white backdrop-blur-lg">
              <p className="font-basement">GET IN TOUCH</p>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center">
                  <Link
                    className="flex items-center hover:underline"
                    href={"mailto:larry@larrybryanlive.com"}
                  >
                    <AtSign className="mr-1.5 h-5 w-5" />
                    <p className="text-sm">larry@larrybryanlive.com</p>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <p className="text-sm">954.240.6900</p>
                </div>
                <div className="flex items-center">
                  <Link
                    className="flex items-center hover:underline"
                    href={"https://api.whatsapp.com/send?phone=19542406900"}
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    <p className="text-sm">WhatsApp</p>
                  </Link>
                </div>
                <div className="flex items-center">
                  <PiWechatLogo className="mr-2 h-[25px] w-[25px]" />
                  <p className="text-sm">larry8355</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-10 bg-gradient-to-br from-neutral-800 to-neutral-950 p-7 md:p-10">
            <div className="w-full space-y-10 md:w-10/12 lg:max-w-md">
              <div className="space-y-3">
                <p className="w-full text-center font-basement text-base text-white md:text-2xl">
                  Book Me For Your Next Event
                </p>
                <div className="flex w-full justify-center">
                  <p className="max-w-[50ch] text-center text-sm text-white/80 md:text-base">
                    Complete the information in the form below and I will be in
                    contact with you shortly.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-5 pt-5 text-white backdrop-blur-lg lg:hidden">
              <p className="font-basement">GET IN TOUCH</p>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center">
                  <AtSign className="mr-1.5 h-5 w-5" />
                  <p className="text-sm">larry@larrybryanlive.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <p className="text-sm">954.240.6900</p>
                </div>
                <div className="flex items-center">
                  <Link
                    className="flex items-center"
                    href={"https://api.whatsapp.com/send?phone=19542406900"}
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    <p className="text-sm">WhatsApp</p>
                  </Link>
                </div>
                <div className="flex items-center">
                  <PiWechatLogo className="mr-2 h-[25px] w-[25px]" />
                  <p className="text-sm">larry8355</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
