"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function WorkCard({
  title,
  subtitle,
  image,
  link,
}: {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState(false);

  return (
    <div>
      <Link href={link} passHref>
        <motion.div
          onMouseEnter={() => setHoveredIndex(true)}
          onMouseLeave={() => setHoveredIndex(false)}
          className="rounded-xl px-7 py-10 cursor-pointer"
          style={{
            backgroundColor: hoveredIndex
              ? "rgba(128, 128, 128, 0.5)" // Gray with 50% opacity
              : "rgba(128, 128, 128, 0.20)", // Gray with 25% opacity
          }}
          transition={{ duration: 0.3 }} // Smooth animation
        >
          <div className="rounded-xl w-[500px] h-[350px] relative">
            <motion.div
              animate={{
                scale: hoveredIndex ? 0.97 : 1, // Shrink the image when hovered
              }}
              transition={{ duration: 0.3 }} // Smooth scale transition
              className="relative w-full h-full"
            >
              <Image
                src={image}
                alt="hero"
                fill
                className="mx-auto rounded-xl object-fill h-auto w-full object-left-top shadow-lg"
                draggable={false}
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="flex flex-row items-center justify-between mt-2">
          <h2 className="text-[28px]">{title}</h2>
          <h3 className="opacity-50">{subtitle}</h3>
        </div>
      </Link>
    </div>
  );
}
