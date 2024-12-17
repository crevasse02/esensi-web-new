"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import AsteriskIcon from "@/public/icons/asterisk.svg";

export function InfiniteMovingCardsComponentHome() {
  return (
    <div className=" rounded-md antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className="border flex-shrink-0 border-slate-700 px-8 py-6"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
        className="border flex-shrink-0 border-slate-700 px-8 py-6"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className="border flex-shrink-0 border-slate-700 px-8 py-6"
      />
    </div>
  );
}

export function InfiniteMovingCardsComponentAbout() {
  return (
    <div
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.5%, rgb(0, 0, 0) 82.5%, rgba(0, 0, 0, 0) 100%)",
      }}
      className=" md:max-w-[640px] max-w-[400px] rounded-md antialiased bg-opacity-10 bg-[#454545] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={aboutList}
        direction="right"
        speed="fast"
        pauseOnHover={false}
        className="flex-shrink-0 px-8 py-4 bg-white"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Electronic",
    active: true,
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

const aboutList = [
  {
    name: "Branding Tools",
    icon: <AsteriskIcon />,
  },
  {
    name: "Creative Marketing Campaign",
    icon: <AsteriskIcon />,
  },
  {
    name: "Digital Marketing Services",
    icon: <AsteriskIcon />,
  },
  {
    name: "Lead Generation Campaign",
    icon: <AsteriskIcon />,
  },
];
