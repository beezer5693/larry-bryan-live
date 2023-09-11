import React from "react";
import RadialGradient from "../gradient/RadialGradient";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center border-t border-neutral-800/50 pt-20 text-white">
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
        <div className="space-y-14">
          <div className="space-y-4 text-center">
            <h1 className="font-basement capitalize">larry bryan live</h1>
            <p className="inline-flex flex-col text-xs">
              <span>151 N. Nob Hill Road Suite 350</span>
              <span>Plantation, FL 33324</span>
            </p>
          </div>
          <div className="space-y-5 text-center">
            <p className="text-sm uppercase">connect with larry</p>
            <div className="flex items-center justify-center gap-3">
              <Link className="group" href="https://www.facebook.com/">
                <FaFacebookF className="fill-neutral-200/90 group-hover:fill-white" />
              </Link>
              <Link className="group" href="https://www.instagram.com/">
                <FaInstagram className="fill-neutral-200/90 text-lg group-hover:fill-white" />
              </Link>
              <Link className="group" href="https://www.linkedin.com/">
                <FaLinkedinIn className="fill-neutral-200/90 text-lg group-hover:fill-white" />
              </Link>
              <Link className="group" href="https://www.youtube.com/">
                <FaYoutube className="fill-neutral-200/90 text-lg group-hover:fill-white" />
              </Link>
            </div>
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
