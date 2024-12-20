"use client";
import React from "react";
import { HoveredLink } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButtonUpscale } from "@/components/ui/animate_button";
import HandIcon from "@/public/icons/hand-waving.svg";
import FbIcon from "@/public/icons/facebook-logo.svg";
import IgIcon from "@/public/icons/instagram-logo.svg";
import LinkedinIcon from "@/public/icons/linkedin-logo.svg";

export function Footer({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#005490] py-10 md:px-24 px-5 w-full", className)}>
      <div className="grid md:grid-cols-12 md:gap-4 gap-16 text-white">
        {/* Esensi Digital Section */}
        <div className="md:col-span-8">
          <h1 className="text-xl font-bold">Esensi Digital</h1>
          <p className="opacity-50">Make it essential.</p>
          <AnimatedButtonUpscale
            link="/contact"
            text="Book A Call"
            icon={<HandIcon />}
            className="bg-[#005490] p-2 text-sm border-transparent mt-5"
          />
        </div>

        {/* Navigation Section */}
        <div className="md:col-span-2 ">
          <h4 className="font-semibold mb-4">Navigation</h4>
          <div className="flex flex-col space-y-2">
            <HoveredLink from="foot" href="/">
              Home
            </HoveredLink>
            <HoveredLink from="foot" href="/case-study">
              About
            </HoveredLink>
            <HoveredLink from="foot" href="/services">
              Services
            </HoveredLink>
            <HoveredLink from="foot" href="/faq">
              Work
            </HoveredLink>
          </div>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-2">
          <h4 className=" font-semibold mb-4">Contact</h4>
          <div className="flex flex-col space-y-2">
            <Link
              className="opacity-50 hover:opacity-100"
              href="https://wa.me/6287876481981?text=Halo,%20mohon%20info%20lebih%20lanjut%20tentang%20servis%20di%20Esensi%20Digital."
            >
              +62 878 7648 1981
            </Link>
            <Link
              className="opacity-50 hover:opacity-100"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@esensidigital.com"
            >
              hello@esensidigital.com
            </Link>
          </div>
          {/* Add contact information or links here if needed */}
        </div>
      </div>

      {/* Logo Section */}
      <div className="grid md:grid-cols-12 mt-40 mb-20 gap-4 text-white">
        <div className="md:col-span-4 md:text-left text-center">
          <p className="opacity-50 text-sm">© 2024 All rights reserved</p>
        </div>
        <div className="md:col-span-4  justify-self-center">
          <Image
            src="/images/logo-white.webp"
            width={150}
            height={100}
            alt="Logo Esensi"
            className="flex-shrink-0 shadow-2xl px-2"
          />
        </div>
        <div className="md:col-span-4 flex gap-3 md:justify-self-end justify-self-center">
          <Link
            className="opacity-50 hover:opacity-100"
            href="https://www.facebook.com/esensidigital/"
          >
            <FbIcon className="w-7 h-7" />
          </Link>
          <Link
            className="opacity-50 hover:opacity-100"
            href="https://www.instagram.com/esensidigital/?hl=en"
          >
            <IgIcon className="w-7 h-7" />
          </Link>
          <Link
            className="opacity-50 hover:opacity-100"
            href="https://id.linkedin.com/company/esensi-digital"
          >
            <LinkedinIcon className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}
