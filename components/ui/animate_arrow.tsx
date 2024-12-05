"use client";
import { motion } from "framer-motion";
// import ArrowIcon from "@/public/icons/arrow_icon.svg";
import Image from "next/image";

interface AnimatedArrowProps {
  text: string; // Define the prop type for the button text
  pos: string;
  bgcolor: string;
  color: string;
}

export function AnimatedArrowMove({
  text,
  pos,
  bgcolor,
  color,
}: AnimatedArrowProps) {
  return (
    <motion.div
      animate={{
        x: pos === "left" ? [0, 30, 0] : pos === "right" ? [0, -10, 0, -50, 0] : [0], // Move right on the x-axis for 'right' position
        y: pos === "left" ? [0, -80, 0] : pos === "right" ? [0, -90, 0, 30, 0] : [0], // Move up (negative y) for both positions
      }}
      transition={{
        duration: 7, // Duration of the complete circular motion
        repeat: Infinity, // Loop the animation
        ease: "easeInOut",
      }}
      className={`absolute w-48 h-48 flex flex-col ${
        pos === "right" ? "items-start" : "items-end"
      } justify-center`}
    >
      {/* Arrow Icon Image */}
      <div className="relative md:w-8 md:h-8 w-6 h-6">
        <Image
          src="/icons/arrow_icon.webp"
          alt="arrow"
          layout="fill"
          objectFit="contain"
          className={pos === "right" ? "transform scale-x-[-1]" : ""}
        />
      </div>

      {/* Card below the image */}
      <div
        className={`-mt-2 ${
          pos === "right" ? "ml-8" : "mr-8"
        } w-full text-white  p-1 rounded-xl`}
        style={{ backgroundColor: bgcolor, color: color, border:'1px solid '+color }}
      >
        <p className="whitespace-nowrap text-center text-sm">
          {text }
        </p>
      </div>
    </motion.div>
  );
}
