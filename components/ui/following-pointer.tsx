"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FollowerPointerCard = ({
  children,
  className,
  title,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  link: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  const updateRect = () => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  };

  useEffect(() => {
    updateRect(); // Initial computation of rect
    window.addEventListener("scroll", updateRect); // Update rect on scroll
    window.addEventListener("resize", updateRect); // Update rect on resize

    return () => {
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} link={link} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  link,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
  link: string;
}) => {
  // Smooth spring animation for cursor movement
  const smoothX = useTransform(x, (value) => value);
  const smoothY = useTransform(y, (value) => value);

  return (
    <motion.div
      className=" absolute z-50"
      style={{
        top: smoothY,
        left: smoothX,
        cursor: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {link ? (
        <Link href={link}>
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 1,
              cursor:'none',
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
            }}
            className="cursor-none text-white"
          >
            {title}
          </motion.div>
        </Link>
      ) : (
        ""
      )}
    </motion.div>
  );
};
