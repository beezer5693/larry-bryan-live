import { ArrowDown } from "lucide-react";
import EventCard from "./EventCard";

type EventCardProps = {
  cardData: {
    label: string;
    text: string;
  }[];
};

export default function EventCards({ cardData }: EventCardProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-7 md:gap-10">
      {cardData.map((card, i) => (
        <EventCard key={i} data={card} index={i} />
      ))}
    </div>
  );
}
