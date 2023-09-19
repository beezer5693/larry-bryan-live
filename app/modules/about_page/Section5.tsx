"use client";

import React from "react";
import { motion } from "framer-motion";

const storyText = [
  {
    text: "Life didn't kick off in a grand way for me. My parents split when I was just three months old, and from then on, my father vanished from the scene faster than a magician's disappearing act. As I grew up, I had self-esteem, self-respect, and self-confidence issues. Fear, embarrassment, and procrastination? Oh, those were my specialties. And my conversations with myself were negative and depressing at best. Let's face it; a loser's mindset doesn't exactly lead to winning results.",
  },
  {
    text: "To add to the mix, my mom had a unique sense of style – at the age of 4, she dressed me like I was a professor, complete with a suit, bowtie, and wingtip shoes, and sent me off to preschool like that. You can imagine the first impressions I made! As I navigated through elementary and high school, I was a solid C+ student, if I'm being generous. My friends, on the other hand, were all A+ wizards, but their magical ways were beyond my grasp.",
  },
  {
    text: "When it came time to fill out college applications, I had about as many options as a vegetarian at a steakhouse. Thankfully, I squeaked into FSU. My friends, meanwhile, were off to Harvard, Yale, Stanford, and other elite institutions. The comparison was heart-wrenching, even though I kept my feelings to myself. Today, some of them are renowned in their fields of medicine and law, but back then, my internal GPS still had failure as its default setting. Unsurprisingly, I got the boot from FSU after my first year, sporting a robust 1.2 GPA. Ouch!",
  },
  {
    text: `My parents couldn't have been happier to see me leave college. Not really! They handed me a reality check with a job application attached and insisted I work 16 hours a day. Within a week, I was proudly holding the title of "janitor extraordinaire," cleaning office toilets from 8 AM to 4 PM. Then, from 5 PM to midnight, I had the glamorous gig of parking cars at the Diplomat Hotel in Hollywood, Florida.`,
  },
  {
    text: `But then, one day, it hit me like a bolt of lightning. I realized that how I spoke to myself, how I perceived things, what I thought, and how I interpreted the world around me would shape my actions and, ultimately, my destiny. Overnight, I decided to make a 180-degree turn in my life. Today, I talk about how you too can change your mindset, "literally overnight," if you have the right tools and knowledge. Don't get me wrong; I still stumble, and those stumbles have come with a hefty price tag. Think of me as the expert speaker who's on the same journey, continually working on himself. So, I say to you, let's embark on this transformation together!`,
  },
];

export default function Section5() {
  return (
    <section className="mt-20 overflow-x-hidden px-5 md:mt-32 lg:mt-44 lg:px-10">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1250px] flex-col items-center rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 text-white md:p-10 lg:p-20">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            className="font-basement text-3xl md:text-5xl lg:text-7xl"
          >
            My Story
          </motion.h1>
          <div className="mt-10 space-y-7 text-xs md:mt-14 md:text-center md:text-base lg:mt-20 lg:text-lg">
            {storyText.map((paragraph, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
              >
                {paragraph.text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
