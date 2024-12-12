"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Correct import
import { useEffect, useState } from "react";

const images = [
  "/images/carousel/carousel1.webp",
  "/images/carousel/carousel2.webp",
  "/images/carousel/carousel3.webp",
  "/images/carousel/carousel4.webp",
  "/images/carousel/carousel5.webp",
  "/images/carousel/carousel6.webp",
  "/images/carousel/carousel7.webp",
  "/images/carousel/carousel8.webp",
  "/images/carousel/carousel9.webp",
  "/images/carousel/carousel10.webp",
  "/images/carousel/carousel11.webp",
  "/images/carousel/carousel12.webp",
  "/images/carousel/carousel13.webp",
  "/images/carousel/carousel14.webp",
  "/images/carousel/carousel15.webp",
  "/images/carousel/carousel16.webp",
  "/images/carousel/carousel17.webp",
  "/images/carousel/carousel18.webp",
];

export function AnimatedCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Update state based on the client's window width
    setIsMobile(window.innerWidth <= 768);
    setIsMounted(true);
  }, []);

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
          x: isMounted && isMobile ? ["0%", "-940%"] : ["0%", "-252%"], // Move images left to create infinite loop
        }}
        transition={{
          duration: 40, // Duration of the full transition (can be adjusted)
          ease: "linear", // Smooth linear transition
          repeat: Infinity, // Infinite loop
        }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.div key={index} className=" mx-10 ">
            {/* Use Image component correctly */}
            <div className="relative w-[100px] h-[100px]">
              <Image
                src={src}
                alt={`Carousel Image ${index}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
