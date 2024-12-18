"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HoveredLinkProps {
  href: string;
  children: React.ReactNode;
  from: string;
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.85, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={transition}
      onMouseLeave={() => setActive(null)} // resets the state
      className="inline-flex -pb-4 items-center mx-4 w-full md:max-w-max relative rounded-xl border border-transparent bg-white bg-opacity-60 backdrop-blur-lg shadow-[0px_0px_1px_0px] shadow-black md:justify-center justify-between p-2 gap-5"
    >
      {children}
    </motion.nav>
  );
};

export const HoveredLink = ({
  children,
  href,
  from,
  ...rest
}: HoveredLinkProps) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      {...rest}
      href={href}
      className={`font-medium hover:underline underline-offset-4 decoration-2  text-[14px]  ${
        isActive
          ? from === "head"
            ? "text- underline"
            : "text-white underline "
          : ""
      }`}
    >
      <motion.div
        whileHover={{ scale: from === "head" ? "1.1" : "1" }}
        whileTap={{ scale: 1 }}
        onHoverEnd={() => {}}
        className={`${from == "foot" ? "hover:opacity-100 opacity-50" : ""}`}
      >
        {children}
      </motion.div>
    </Link>
  );
};
