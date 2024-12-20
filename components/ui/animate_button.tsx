"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import EnterIcon from "@/public/icons/entericon.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AnimatedButtonProps {
  text: string; // Define the prop type for the button text
  icon?: ReactNode;
  className?: string;
  link?: string;
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

export function AnimatedButtonUpscale({
  link,
  text,
  icon,
  className,
}: AnimatedButtonProps) {
  return (
    <Link href={link || "#"} passHref className="justify-center flex">
      <motion.button
        whileHover="hover" // Trigger the "hover" variant
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={cn(
          "items-center flex gap-2 px-6 hover:bg-opacity-80 py-2 font-medium rounded-xl border border-neutral-600 text-white shadow-inner-shadow",
          className
        )}
        variants={{
          hover: {
            scale: 1.1,
            translateY: -3,
            boxShadow: "0 0 0 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {icon ? (
          <motion.span
            variants={{
              hover: {
                rotate: [0, 10, -10, 10, -10, 0], // Shake effect triggered by the button's "hover"
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.span>
        ) : null}

        <span>{text}</span>
      </motion.button>
    </Link>
  );
}
