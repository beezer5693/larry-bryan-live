import React from "react";
import Image from "next/image";

const cardText = [
  "My fear sometimes holds me back from doing so many things and I don’t know how to overcome that way of thinking and feeling.",
  "I am accomplishing things in life but I could accomplish so much more if I didn’t have to listen to all that negative self-talk.",
  "I believe the world is always watching and judging and this causes me to never fully go for it.",
  "I know I am capable of so much more and I want to reach my full potential but I just can’t get started.",
  "I am embarrassed to try new things and I am afraid I will fail so I end up doing nothing.",
  "My decision choices don’t always bring me my desired outcomes and results.",
];

export default function VillainCards() {
  return (
    <>
      {cardText.map((text, index) => (
        <div
          key={index}
          className="relative col-span-1 flex items-center rounded-xl border border-blue/10 bg-gradient-to-br from-[#0e1648] to-[#0e1648]/20 px-10 py-3"
        >
          <Image
            className="absolute -left-5 -top-5"
            src={"/assets/chat-icon.png"}
            height={45}
            width={45}
            alt=""
          />
          <p className="text-sm text-white">{text}</p>
        </div>
      ))}
    </>
  );
}
