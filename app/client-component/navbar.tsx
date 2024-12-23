"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedButtonRotateIcon } from "@/components/ui/animate_button";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [, setActive] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 pt-4 z-50 justify-center flex backdrop-blur-sm",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <Image
            src={"/images/logo.webp"}
            width={80}
            height={70}
            alt={"Logo Esensi"}
            className="flex-shrink-0 shadow-2xl px-2 mr-5"
          />
        </Link>
        {/* Dropdown menu for mobile */}
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            onClick={toggleDropdown}
            className="lg:hidden px-4 py-2 rounded-xl bg-white text-black hover:bg-blue-500 hover:text-white transition duration-200"
          >
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-white shadow-lg rounded-md w-full">
            <DropdownMenuItem onClick={toggleDropdown}>
              <HoveredLink from="head" href="/">
                Home
              </HoveredLink>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleDropdown}>
              <HoveredLink from="head" href="/about">
                About
              </HoveredLink>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleDropdown}>
              <HoveredLink from="head" href="/services">
                Services
              </HoveredLink>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleDropdown}>
              <HoveredLink from="head" href="/faq">
                Work
              </HoveredLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/contact"}>
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-blue-500 hover:text-white transition duration-200"
                >
                  Say hi
                </button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Horizontal menu for desktop */}
        <div className="hidden lg:flex">
          <div className="space-x-5 lg:flex items-center">
            <HoveredLink from="head" href="/">
              Home
            </HoveredLink>
            <HoveredLink from="head" href="/about">
              About
            </HoveredLink>
            <HoveredLink from="head" href="/services">
              Services
            </HoveredLink>
            <HoveredLink from="head" href="/work">
              Work
            </HoveredLink>
          </div>
          <Link href={"/contact"}>
            <AnimatedButtonRotateIcon text="Say hi"></AnimatedButtonRotateIcon>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
