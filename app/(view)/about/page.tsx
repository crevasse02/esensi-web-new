import { FeaturesCard } from "@/app/client-component/features_card";
import { InfiniteMovingCardsComponentAbout } from "@/app/client-component/infinite_card";
import { AnimatedButtonUpscale } from "@/components/ui/animate_button";
import Image from "next/image";
import React from "react";
import HandIcon from "@/public/icons/hand-waving.svg";
import { Badge } from "@/components/ui/badge";
import { AnimatedCarousel } from "@/components/ui/animate_carousel";

const about = () => {
  return (
    <div>
      {/* Hero ATF */}
      <div className="overflow-hidden ">
        <section
          className="h-screen py-52 flex flex-col bg-[#FBF9F5] w-screen justify-center items-center bg-cover relative"
          style={{ backgroundImage: "url('/images/HeroAbout.webp')" }}
        >
          <h5 className="md:text-[36px] text-[20px] text-center leading-tight max-w-[640px]">
            We are <b>Esensi Digital</b>, esensi means essentials, It’s not just
            about the basics; it’s about making those essentials powerful. Just
            like your business, we value your essence and make your business
            essential-transforming your core values into a force that drivers
            success. With over 5 years of expertise, we specialize in
            transforming ideas into visually stunning and user-friendly designs,
            from startups to established brands.
          </h5>
          <div className="mt-10 place-items-center">
            <InfiniteMovingCardsComponentAbout />
          </div>
        </section>
      </div>

      {/* Our Story */}
      <section className="bg-white overflow-hidden py-20 md:px-36 px-5 flex flex-col relative">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="md:text-[44px] text-[30px] leading-tight font-bold">
              Innovators. Strategists. <br />{" "}
              <span className="text-[#72716F]">
                Trailblazers in Creativity.
              </span>
            </h3>
            <h4 className="mt-7 md:text-[28px] text-[25px] leading-tight font-semibold">
              Our Story
            </h4>
            <p className="text-[#72716F]">
              Born from a passion for creativity and a dedication to measurable
              impact, Esensi Digital has grown from a small collective of
              visionaries into one of Indonesia’s leading creative marketing
              agencies. Over the years, we’ve collaborated with both emerging
              and established brands, crafting performance-driven campaigns,
              bespoke content, and innovative digital solutions. Our journey is
              defined by the perfect balance of artistry and strategy—delivering
              results that inspire and endure.
            </p>
            <h4 className="mt-7 md:text-[28px] text-[25px] leading-tight font-semibold">
              About Us
            </h4>
            <p className="text-[#72716F]">
              We believe creativity isn’t just an asset—it’s the engine of
              growth. Our team is a vibrant mix of artists and analysts,
              strategists and storytellers, all united by a mission to transform
              ideas into meaningful connections. From creating dynamic brand
              identities to launching impactful campaigns and optimizing digital
              performance, we bring expertise, passion, and a tailored approach
              to every project. Together, we build not just campaigns, but
              experiences that resonate and drive success.
            </p>
            <AnimatedButtonUpscale text="Say Hello" className="bg-black mt-7" />
          </div>
          <div className=" w-full h-auto flex justify-center items-center">
            <Image
              src="/images/PhotoAbout.webp"
              alt="Image"
              layout="intrinsic"
              width={500}
              height={580}
              objectFit="contain"
              className="shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* These companies trust us */}
      <section
        className="bg-[#FCF9F5] bg-cover overflow-hidden py-20 bg-bottom flex flex-col justify-center items-center relative"
        style={{ backgroundImage: "url('/images/BottomBg.webp')" }}
      >
        <div className="text-center mt-40 md:w-[50%]">
          <Badge variant="outline" className="mb-5">
            Features
          </Badge>
          <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
            What sets us apart?
          </h3>
          <p className="text-center leading-normal mt-5 text-[#72716F]">
            Every detail counts. Discover how our tailored solutions elevate
            your brand, ensuring flawless execution and stunning results.
          </p>
        </div>
        <div className="mt-24 px-5">
          <FeaturesCard />
          <div className="my-14 flex justify-center">
            <AnimatedButtonUpscale
              text="Book A Call"
              icon={<HandIcon />}
              className="bg-black "
            />
          </div>
        </div>
        <AnimatedCarousel />
      </section>
    </div>
  );
};

export default about;
