import { cn } from "@/lib/utils";

type CarouselSliderProps = {
  children: React.ReactNode;
  styles?: string;
};

export default function CarouselSlider({
  children,
  styles,
}: CarouselSliderProps) {
  return <div className={cn("slider flex gap-5", styles)}>{children}</div>;
}
