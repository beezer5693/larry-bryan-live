"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const storyText = [
  {
    text: "So life didn't kick off in a grand way for me. My parents split when I was just three months old, and from then on, my father vanished from the scene faster than a magician's disappearing act. As I grew up, I had self-esteem, self-respect, and self-confidence issues. Fear, embarrassment, and procrastination? Oh, those were my specialties. And my conversations with myself were negative and depressing at best. Let's face it; a loser's mindset doesn't exactly lead to winning results.",
  },
  {
    text: "Now add to the mix, my mom had a unique sense of style – at the age of 4, she always dressed me like I was a professor, complete with a suit, bowtie, and wingtip shoes, and then sent me off to preschool like that. You can imagine the first impressions I made! As I navigated through elementary and high school, I was a solid C+ student, if I'm being generous. My friends, on the other hand, were all A+ wizards, but their magical ways were beyond my grasp.",
  },
  {
    text: "When it came time to fill out college applications, I had about as many options as a vegetarian at a steakhouse. Thankfully, I squeaked into FSU. My friends, meanwhile, were off to Harvard, Yale, Stanford, and other elite institutions. The comparison was heart-wrenching, even though I kept my feelings to myself. Today, some of them are renowned in their fields of medicine and law, but back then, my internal GPS still had failure as its default setting. Unsurprisingly, I got the boot from FSU after my first year, sporting a robust 1.2 GPA. Ouch!",
  },
  {
    text: `My parents couldn't have been happier to see me leave college. Not really! They handed me a reality check with a job application attached and insisted I work 16 hours a day. Within a week, I was proudly holding the title of "JD", and that did not stand for Juris Doctorate either, but instead "JANITORIAL DYNAMO", cleaning toilets in office buildings from 8 AM to 4 PM. Then, from 5 PM to midnight, I had the glamorous gig of parking cars at the Diplomat Hotel in Hollywood, Florida.`,
  },
  {
    text: `But then, one day, it hit me like a bolt of lightning. I realized that how I spoke to myself, how I perceived things, what I thought, and how I interpreted the world around me would shape my actions and, ultimately, my destiny. Overnight, I decided to make a 180-degree turn in my life. Today, I talk about how you too can change your mindset, "literally overnight," if you have the right tools and knowledge. Don't get me wrong; I still stumble, and those stumbles have come with a hefty price tag. Think of me as the expert speaker who's on the same journey as you, continually working on himself. So, I say to you, let's embark on this transformation together!`,
  },
];

export default function Section5() {
  return (
    <section className="overflow-x-hidden px-5 pt-20 md:pt-32 lg:px-10 lg:pt-44">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 60 },
          }}
          className="font-basement text-4xl text-white md:text-6xl lg:text-7xl"
        >
          My Story
        </motion.h1>
        <div className="flex w-full max-w-[1250px] flex-col items-center rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-10 text-white md:p-14 lg:p-20">
          <div className="space-y-7 text-xs md:text-center md:text-base lg:text-lg">
            {storyText.map((paragraph, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
              >
                {paragraph.text}
              </motion.p>
            ))}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
              }}
              className="relative flex w-full justify-center gap-5 pt-5 md:gap-10 md:pt-10"
            >
              <Link href={"/services"}>
                <Button
                  variant={"secondary"}
                  className="h-12 border text-xs uppercase md:h-16 md:px-8 md:text-sm"
                >
                  my services
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="group h-12 pl-3.5 pr-2 text-xs uppercase transition-transform duration-300 ease-in-out md:h-16 md:pl-5 md:pr-2.5 md:text-sm">
                  <span className="mr-2.5 md:mr-3.5">Book Larry</span>
                  <span className="rounded-full border p-1.5 transition duration-500 ease-in-out group-hover:-rotate-45 md:p-2">
                    <ArrowRight className="h-5 w-5 text-white md:h-7 md:w-7" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
