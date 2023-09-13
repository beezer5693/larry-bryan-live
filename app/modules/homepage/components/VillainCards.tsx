import React from "react";
import Image from "next/image";

const cardText = [
  {
    label: "Fear",
    description:
      "My fear sometimes holds me back from doing so many things and I don’t know how to overcome that way of thinking and feeling.",
  },
  {
    label: "Negative Self-Talk",
    description:
      "I am accomplishing things in life but I could accomplish so much more if I didn’t have to listen to all that negative self-talk.",
  },
  {
    label: "Judgment",
    description:
      "I believe the world is always watching and judging and this causes me to never fully go for it.",
  },
  {
    label: "Lost",
    description:
      "I know I am capable of so much more and I want to reach my full potential but I just can’t get started.",
  },
  {
    label: "Embarrassment",
    description:
      "I am embarrassed to try new things and I am afraid I will fail so I end up doing nothing.",
  },
  {
    label: "Poor Decisions",
    description:
      "My decision choices don’t always bring me my desired outcomes and results.",
  },
];

export default function VillainCards() {
  return (
    <>
      {cardText.map((card, index) => (
        <div
          key={index}
          className="relative col-span-1 flex flex-col gap-5 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5 transition duration-300 ease-out hover:scale-125 xl:gap-10"
        >
          {/* <Image
            className="absolute -left-5 -top-5"
            src={"/assets/chat-icon.png"}
            height={60}
            width={60}
            alt=""
          /> */}
          <p className="font-basement text-white">{card.label}</p>
          <p className="text-xs text-white">{card.description}</p>
        </div>
      ))}
    </>
  );
}
