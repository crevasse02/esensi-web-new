"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import EnterIcon from "@/public/icons/entericon.svg";

interface AnimatedButtonProps {
  text: string; // Define the prop type for the button text
}

export function AnimatedButtonRotateIcon({ text }: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex items-center gap-2 px-4 ml-14 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-[#005490] hover:text-white transition duration-200 shadow-inner-shadow"
    >
      <motion.div
        animate={hovered ? { rotate: 360 } : { rotate: 0 }} // Rotate only when hovered
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="inline-block"
      >
        <EnterIcon className="hover:text-white" />
      </motion.div>
      {text}
    </motion.button>
  );
}

export function AnimatedButtonUpscale({ text }: AnimatedButtonProps) {

  return (
    <motion.button
      whileHover={{
        scale: 1.1, 
        translateY: -3,
        boxShadow: "0 0 0 6px rgba(0, 0, 0, 0.1)", 
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="items-center px-6 hover:bg-opacity-80 py-2 rounded-xl border border-neutral-600 text-white bg-black shadow-inner-shadow"
    >
      {text}
    </motion.button>
  );
}
