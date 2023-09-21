import { cn } from "@/lib/utils";
import styles from "../../../about/styles.module.css";

type CarouselSliderProps = {
  children: React.ReactNode;
  slideDirection: string;
};

export default function CarouselSlider({
  children,
  slideDirection,
}: CarouselSliderProps) {
  return <div className={cn("flex gap-5", slideDirection)}>{children}</div>;
}
