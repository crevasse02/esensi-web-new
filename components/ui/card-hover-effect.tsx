"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 h-full w-full bg-[#005490] rounded-3xl"
                layoutId="hoverBackground"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          <motion.div
            className="rounded-2xl h-full w-full p-4 overflow-hidden border-4  relative z-20"
            initial={{
              backgroundColor: "#ffff",
              borderColor: "#E6E5E3",
              color: "black",
            }}
            whileHover={{
              backgroundColor: "#005490",
              borderColor: "#1469A6",
              color: "white",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-50">
              <div className="p-4">
                <div className="w-full h-60 relative">
                  <Image
                    fill
                    src={item?.image}
                    alt="image"
                    className={`border-4 ${
                      hoveredIndex === idx
                        ? "border-[#1469A6]"
                        : "border-[#E6E5E3]"
                    } rounded-2xl`}
                  />
                </div>
                <div className="mt-4">
                  <CardTitle className="text-[28px]">{item.title}</CardTitle>
                  <CardDescription className="text-[17px] ">
                    {item.description}
                  </CardDescription>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1 className={cn("font-bold tracking-wide mt-4", className)}>
      {children}
    </h1>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-8 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
