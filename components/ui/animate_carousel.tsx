"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Correct import

const images = [
  "/images/carousel1.webp",
  "/images/carousel2.webp",
  "/images/carousel3.webp",
  "/images/carousel4.webp",
  "/images/carousel5.webp",
  "/images/carousel6.webp",
  "/images/carousel7.webp",
];

export function AnimatedCarousel() {
  return (
    <div
      className="relative overflow-hidden w-[90%] mt-10"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.5%, rgb(0, 0, 0) 82.5%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />
      <motion.div
        className="flex w-full "
        animate={{
          x: window.innerWidth <= 768 ? ["0%",  "-338%"] : ["0%",  "-196.8%"], // Move images left to create infinite loop
        }}
        transition={{
          duration: 20, // Duration of the full transition (can be adjusted)
          ease: "linear", // Smooth linear transition
          repeat: Infinity, // Infinite loop
        }}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <motion.div key={index} className=" mx-10 ">
            {/* Use Image component correctly */}
            <div className="relative w-[100px] h-[100px]">
              <Image
                src={src}
                alt={`Carousel Image ${index}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
