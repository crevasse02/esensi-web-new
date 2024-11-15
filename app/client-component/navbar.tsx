"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-8 inset-x-0 mx-10 z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/services">Services</HoveredLink>
        <HoveredLink href="/case-study">Case Study</HoveredLink>
        <HoveredLink href="/faq">FAQ</HoveredLink>
      </Menu>
    </div>
  );
}
