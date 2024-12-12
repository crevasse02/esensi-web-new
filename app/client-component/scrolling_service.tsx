"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

// icon 1
import WebWindow from "@/public/icons/web-window.svg";
import ModernTv from "@/public/icons/modern-tv.svg";
import AppNotif from "@/public/icons/app-notification.svg";
import Pallete from "@/public/icons/palette.svg";
import ProfileCircle from "@/public/icons/profile-circle.svg";

// icon 2
import StatsReport from "@/public/icons/stats-report.svg";
import Tiktok from "@/public/icons/tiktok.svg";
import CenterAlign from "@/public/icons/center-align.svg";
import ModernTv4k from "@/public/icons/modern-tv4k.svg";

// icon 3
import MegaPhone from "@/public/icons/megaphone.svg";
import AlignRight from "@/public/icons/align-right.svg";
import SearchFont from "@/public/icons/text-magnifying-glass.svg";
import Network from "@/public/icons/network.svg";
import MenuScale from "@/public/icons/menu-scale.svg";

// icon 4
import User from "@/public/icons/user.svg";
import Frame from "@/public/icons/frame.svg";
import Code from "@/public/icons/code.svg";
import DataTransfer from "@/public/icons/data-transfer-check.svg";

export function ScrollingService() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        buttonText="I need this"
        titleComponent={
          <>
            <h1 className="text-4xl mb-4 font-semibold text-black dark:text-white">
              Branding Tools
            </h1>
            <p>
              Our expert team develops powerful branding tools tailored to your
              needs, ensuring that your brand stands out in a crowded market.
              From brand identity to visual storytelling, we help you craft a
              lasting impression.
            </p>
          </>
        }
        serviceDetailComponent={
          <>
            <ul className="text-white">
              <li className="flex gap-3 mb-4">
                <WebWindow className="opacity-50" /> Website Development
              </li>
              <li className="flex gap-3 mb-4">
                <ModernTv className="opacity-50" /> Web-App
              </li>
              <li className="flex gap-3 mb-4">
                <AppNotif className="opacity-50" /> Mobile-App
              </li>
              <li className="flex gap-3 mb-4">
                <Pallete className="opacity-50" /> Brand Guideline & Brand
                Identity
              </li>
              <li className="flex gap-3 ">
                <ProfileCircle className="opacity-50" /> Company Profile
              </li>
            </ul>
          </>
        }
      >
        <Image
          src={`/images/scrollingService/branding.webp`}
          alt="hero"
          fill
          className="mx-auto rounded-2xl object-fill h-auto w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <ContainerScroll
        buttonText="I need this"
        position="left"
        titleComponent={
          <>
            <h1 className="text-4xl mb-4 font-semibold text-black dark:text-white">
              Creative Marketing Campaign
            </h1>
            <p>
              We design innovative marketing campaigns that resonate with your
              target audience. With creativity and data-driven strategies, we
              bring ideas to life, creating memorable experiences that drive
              engagement.
            </p>
          </>
        }
        serviceDetailComponent={
          <>
            <ul className="text-white">
              <li className="flex gap-3 mb-4">
                <StatsReport className="opacity-50" /> Social Media Campaign
              </li>
              <li className="flex gap-3 mb-4">
                <Tiktok className="opacity-50" /> KOL Campaign
              </li>
              <li className="flex gap-3 mb-4">
                <CenterAlign className="opacity-50" /> Content Creation
              </li>
              <li className="flex gap-3">
                <ModernTv4k className="opacity-50" /> TVC
              </li>
            </ul>
          </>
        }
      >
        <Image
          src={`/images/scrollingService/creative.webp`}
          alt="hero"
          fill
          className="mx-auto rounded-2xl object-fill h-auto w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <ContainerScroll
        buttonText="I need this"
        titleComponent={
          <>
            <h1 className="text-4xl mb-4 font-semibold text-black dark:text-white">
              Digital Marketing Services
            </h1>
            <p>
              Our comprehensive digital marketing services encompass everything
              you need to grow online. With SEO, social media, and paid ads, we
              ensure that your brand reaches the right audience at the right
              time.
            </p>
          </>
        }
        serviceDetailComponent={
          <>
            <ul className="text-white">
              <li className="flex gap-3 mb-4">
                <MegaPhone className="opacity-50" /> Performance Marketing
                (media buying)
              </li>
              <li className="flex gap-3 mb-4">
                <AlignRight className="opacity-50" /> Programmatic Ads
              </li>
              <li className="flex gap-3 mb-4">
                <SearchFont className="opacity-50" /> Search Engine Optimization
              </li>
              <li className="flex gap-3 mb-4">
                <Network className="opacity-50" /> Social Media Content
                Management
              </li>
              <li className="flex gap-3">
                <MenuScale className="opacity-50" /> CRM Marketing
              </li>
            </ul>
          </>
        }
      >
        <Image
          src={`/images/scrollingService/digital-marketing.webp`}
          alt="hero"
          fill
          className="mx-auto rounded-2xl object-fill h-auto w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <ContainerScroll
        buttonText="I need this"
        position="left"
        titleComponent={
          <>
            <h1 className="text-4xl mb-4 font-semibold text-black dark:text-white">
              Lead Generation Campaign
            </h1>
            <p>
              Increase your business’s potential with targeted lead generation
              campaigns. We develop customized strategies to attract
              high-quality leads, ensuring a steady stream of potential
              customers.
            </p>
          </>
        }
        serviceDetailComponent={
          <>
            <ul className="text-white">
              <li className="flex gap-3 mb-4">
                <User className="opacity-50" /> Lead Magnet Strategy
              </li>
              <li className="flex gap-3 mb-4">
                <Frame className="opacity-50" /> Landing Page Optimization
              </li>
              <li className="flex gap-3 mb-4">
                <Code className="opacity-50" /> Conversion Rate Optimization
              </li>
              <li className="flex gap-3">
                <DataTransfer className="opacity-50" /> CRM Tools
              </li>
            </ul>
          </>
        }
      >
        <Image
          src={`/images/scrollingService/lead-generation.webp`}
          alt="hero"
          fill
          className="mx-auto rounded-2xl object-fill h-auto w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
