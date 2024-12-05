// import { ScrollAnimate } from "../client-component/scroll_animate";
import { AnimatedArrowMove } from "@/components/ui/animate_arrow";
import { AnimatedButtonUpscale } from "@/components/ui/animate_button";
import { AnimatedCarousel } from "@/components/ui/animate_carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FeaturesCard } from "../client-component/features_card";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* hero ATF */}
      <section
        className="h-screen flex flex-col  w-screen justify-center items-center bg-cover relative"
        style={{ backgroundImage: "url('/images/HeroHome.webp')" }}
      >
        <div className="left-0 bottom-0 absolute lg:-ml-[14%] 2xl:-ml-[11%] hidden lg:flex w-[350px] h-[350px] 2xl:w-[500px] 2xl:h-[500px]">
          <Image
            src="/images/leftHeroImage.webp"
            alt="Left Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="right-0 bottom-0 absolute lg:-mr-[10%] 2xl:-mr-[7%] hidden lg:flex w-[350px] h-[350px] 2xl:w-[500px] 2xl:h-[500px] overflow-hidden">
          <Image
            src="/images/rightHeroImage.webp"
            alt="Right Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="md:left-24 left-0 md:bottom-80 bottom-64 absolute">
          <AnimatedArrowMove
            text="Want Something New?"
            pos="left"
            bgcolor="#005490"
            color="white"
          />
        </div>

        <div className="md:right-64 right-52 md:bottom-80 bottom-40 absolute">
          <AnimatedArrowMove
            text="Your Search Ends Here"
            pos="right"
            bgcolor="#EAC87E"
            color="black"
          />
        </div>

        <div className="bg-[#ed9458] px-3 py-1 mb-7 rounded-full max-w-max">
          <ul className="list-disc text-white uppercase">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
              What Happened If...
            </li>
          </ul>
        </div>

        <h1 className="md:text-[83px] text-[43px] text-center leading-none lowercase font-bold">
          <span className="text-[#72716F]">Where</span> Ideas <br />{" "}
          <span className="text-[#72716F]">Meet</span> Formulas
        </h1>

        <p className="text-center leading-normal mt-5 text-[#72716F]">
          From concept to launch, we create seamless digital <br />
          experiences that resonate with your audience.
        </p>

        <div className="mt-7">
          <AnimatedButtonUpscale text="Say Hello" />
        </div>

        <div className="flex flex-col items-center mt-7">
          <Image
            src="/images/ourClient.webp"
            alt="Our Client"
            width={150}
            height={150}
          />
          <p className="text-center leading-normal text-[#72716F]">
            Trusted by 350+ companies
          </p>
        </div>
      </section>

      <section className="py-20  flex flex-col justify-center items-center relative">
        <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
          <span className="text-[#72716F]">These companies </span>trust us
        </h3>
        <AnimatedCarousel />
        <div className="text-center mt-40 w-[50%]">
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
        <div className="mt-24">
          <FeaturesCard />
        </div>
      </section>
    </div>
  );
}
