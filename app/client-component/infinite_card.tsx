"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsComponent() {
  return (
    <div className=" rounded-md antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Electronic",
    active: true
  },
  {
    name: "Travel",
  },
  {
    name: "F&B",
  },
  {
    name: "Homebuilders",
  },
  {
    name: "Restaurants",
  },
];
