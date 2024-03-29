import React from "react";
import RadialGradient from "../gradient/RadialGradient";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center overflow-hidden border-t border-neutral-800/50 pt-20 text-white">
      <RadialGradient
        className2={
          "-bottom-[55rem] blur-[200px] -left-96 -z-20 rotate-[10deg] h-[58rem] w-[90rem]"
        }
      />
      <RadialGradient
        className2={
          "-bottom-[53rem] blur-[200px] -right-96 -z-20 rotate-[-20deg] h-[55rem] w-[100rem]"
        }
      />
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-44 px-5 pb-20 sm:flex-row">
        <div className="space-y-10">
          <div className="space-y-6 text-center">
            <h1 className="font-basement text-4xl capitalize">larry bryan</h1>
            <p className="inline-flex flex-col">
              <span>151 N. Nob Hill Road Suite 350</span>
              <span>Plantation, FL 33324</span>
            </p>
          </div>
          <div className="space-y-5 text-center">
            <Link
              className="text-lg uppercase hover:text-amber-500 hover:underline"
              href={"mailto:larry@larrybryanlive.com"}
            >
              connect with larry
            </Link>
            <div className="flex items-center justify-center gap-3">
              <Link
                className="group"
                href="https://www.facebook.com/larrybryanmotivates/"
                target="_blank"
              >
                <FaFacebookF className="h-5 w-5 fill-neutral-200/90 group-hover:fill-amber-500" />
              </Link>
              <Link
                className="group"
                href="https://www.instagram.com/lblmotivates/"
                target="_blank"
              >
                <FaInstagram className="h-6 w-6 fill-neutral-200/90 text-lg group-hover:fill-amber-500" />
              </Link>
              <Link
                className="group"
                href="https://www.linkedin.com/in/larry-bryan-0618a986/"
                target="_blank"
              >
                <FaLinkedinIn className="h-6 w-6 fill-neutral-200/90 text-lg group-hover:fill-amber-500" />
              </Link>
              <Link
                className="group"
                href="https://twitter.com/larry_motivates"
                target="_blank"
              >
                <FaXTwitter className="h-5 w-5 fill-neutral-200/90 text-lg group-hover:fill-amber-500" />
              </Link>
              <Link
                className="group"
                href="https://www.youtube.com/@lblmotivates/videos"
                target="_blank"
              >
                <FaYoutube className="h-6 w-6 fill-neutral-200/90 text-lg group-hover:fill-amber-500" />
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center text-center">
            <p className="max-w-[20ch] text-center">
              website & marketing by Wisdom Studios
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-neutral-800/50 px-5 py-3">
        <p className="text-center text-[.65rem] text-neutral-400">
          <span className="text-sm">©</span> 2023 Larry Bryan Live, LLC. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
