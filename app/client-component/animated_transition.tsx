"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(true);

  useEffect(() => {
    setIsExiting(true);

    const timer = setTimeout(() => {
      setIsExiting(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);


  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{
          opacity: 0,
          filter: "blur(10px)",
          transition: { duration: 0.5 },
        }}
        transition={{
          duration: 0.5,
          delay: isExiting ? 1.2: 0,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
