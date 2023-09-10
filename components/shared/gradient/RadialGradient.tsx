import { cn } from "@/lib/utils";
import React from "react";

type RadialGradientProps = {
  className2?: string;
};

export default function RadialGradient({ className2 }: RadialGradientProps) {
  return <div className={cn("absolute bg-gradient-radial", className2)}></div>;
}
