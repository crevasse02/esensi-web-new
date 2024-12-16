import { ScrollAnimate } from "@/app/client-component/scroll_animate";
import { AnimatedArrowMove } from "@/components/ui/animate_arrow";
import { AnimatedButtonUpscale } from "@/components/ui/animate_button";
import { AnimatedCarousel } from "@/components/ui/animate_carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FeaturesCard } from "../client-component/features_card";
import HandIcon from "@/public/icons/hand-waving.svg";
import { InfiniteMovingCardsComponent } from "../client-component/infinite_card";
import { ScrollingService } from "../client-component/scrolling_service";
import { cards, faq } from "@/app/client-component/data";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AccordionSection } from "../client-component/accordion_section";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  return (
    <div>
      {/* hero ATF */}
      <div className="overflow-hidden ">
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
            <AnimatedButtonUpscale text="Say Hello" className="bg-black " />
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
      </div>

      {/* These companies trust us */}
      <section className=" overflow-hiddenpy-20  flex flex-col justify-center items-center relative">
        <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
          <span className="text-[#72716F]">These companies </span>trust us
        </h3>
        <AnimatedCarousel />
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
        <div className="mt-24">
          <FeaturesCard />
          <div className="place-items-center mt-6">
            <AnimatedButtonUpscale
              text="Book A Call"
              icon={<HandIcon />}
              className="bg-black "
            />
          </div>
        </div>
      </section>

      {/* Each specialty is distinct. We speak your industry’s language. */}
      <section className=" overflow-hidden py-20  flex flex-col justify-center items-center relative">
        <div className="text-center mt-40 md:w-[50%]">
          <Badge variant="outline" className="mb-5">
            Niches
          </Badge>
          <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
            <span className="text-[#72716F]">Each specialty is distinct. </span>
            We speak your industry’s language.
          </h3>
          <p className="text-center leading-normal mt-5 text-[#72716F]">
            No matter your field, our experience spans multiple niches, ensuring
            we understand your specific needs and challenges.
          </p>
        </div>
        <div className="mt-10">
          <InfiniteMovingCardsComponent />
        </div>
      </section>

      {/* Services */}
      <section className=" overflow-hidden bg-[#FCF9F5] py-20  flex flex-col justify-center items-center relative">
        <div className="text-center  md:w-[50%]">
          <Badge variant="outline" className="mb-5">
            Services
          </Badge>
          <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
            Ideas <span className="text-[#72716F]">that delivers</span>
          </h3>
          <p className="text-center leading-normal mt-5 text-[#72716F]">
            Experience end-to-end ideas services that help you stand out and
            achieve your business goals.
          </p>
        </div>
        <div className="place-items-center mt-6">
          <AnimatedButtonUpscale
            text="Book A Call"
            icon={<HandIcon />}
            className="bg-black "
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full mt-16">
          <div className="col-span-1  text-center  p-4 ">
            <h3 className="font-bold md:text-[44px] text-[22px]">350+</h3>
            <h5 className="md:text-[18px] text-[18px]">Our Happy Client</h5>
            <p className="text-gray-500 mt-5">
              Empowering startups and enterprises to secure <br /> over 350
              clients raised
            </p>
          </div>
          <div className="col-span-1  text-center  p-4 ">
            <h3 className="font-bold md:text-[44px] text-[22px]">97%</h3>
            <h5 className="md:text-[18px] text-[18px]">Success Rate</h5>
            <p className="text-gray-500 mt-5">
              Consistently delivering exceptional results that <br /> exceed
              client expectations.
            </p>
          </div>
          <div className="col-span-1  text-center  p-4 ">
            <h3 className="font-bold md:text-[44px] text-[22px]">7+ Years</h3>
            <h5 className="md:text-[18px] text-[18px]">In business</h5>
            <p className="text-gray-500 mt-5">
              Half a decade of shaping digital experiences and <br /> driving
              business growth.
            </p>
          </div>
        </div>
        <div className="max-w-[1600px]">
          <ScrollingService />
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-[#FCF9F5] py-20  flex flex-col justify-center items-center relative">
        <div className="text-center  md:w-[50%]">
          <Badge variant="outline" className="mb-5">
            Portfolio
          </Badge>
          <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
            A glimpse into our creative <br /> journey—projects that <br /> make
            us proud
          </h3>
        </div>

        <div >
          <ScrollAnimate />
        </div>
      </section>

      {/* Process*/}
      <section className=" max-w-[1600px] place-self-center overflow-hidden py-20  flex flex-col justify-center items-center relative">
        <div className="text-center mt-40 md:w-[50%]">
          <Badge variant="outline" className="mb-5">
            Process
          </Badge>
          <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
            How we bring your ideas to life
          </h3>
          <p className="text-center leading-normal mt-5 text-[#72716F]">
            Discover how our step-by-step process guides you from the initial
            idea to the final, polished product.
          </p>
        </div>
        <div className="md:px-10">
          <HoverEffect items={cards} />
        </div>
        <div className="mt-7">
          <AnimatedButtonUpscale
            text="Book A Call"
            icon={<HandIcon />}
            className="bg-black "
          />
        </div>
      </section>

      {/* Questions */}
      <section className="overflow-hidden py-20  flex flex-col justify-center items-center relative">
        <div className="text-center mt-40 md:w-[50%]">
          <Badge variant="outline" className="mb-5">
            Questions
          </Badge>
          <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
            <span className="text-[#72716F]">Got questions?</span> We&apos;ve got
            answers
          </h3>
          <p className="text-center leading-normal mt-5 text-[#72716F]">
            Explore our frequently asked questions to find the information you
            need about our services and process.
          </p>
        </div>
        <div className="mb-20 relative ">
          <div className="bg-[#ff542e] rounded-full blur-3xl h-[39px] overflow-hidden absolute bottom-[100px] left-0 w-full"></div>
          <div className="md:w-[700px] m-3 relative p-3 mt-5 bg-[#F0EEEB] rounded-3xl z-10">
            <AccordionSection items={faq} />
          </div>
        </div>
      </section>

      {/* before footer */}
      <section className="overflow-hidden pt-20  flex flex-col justify-center items-center relative">
        <BackgroundGradientAnimation>
          <div className="absolute z-10 inset-0 flex-col pointer-events-none mt-28  text-white font-bold px-4  text-center ">
            <p
              className={`${instrumentSerif.className}  bg-clip-text text-white md:text-[48px] text-[24px]`}
            >
              Why wait? Take the leap. Let&apos;s make your <br/> business essential
            </p>
            <div className="place-self-center pointer-events-auto mt-20">
              <AnimatedButtonUpscale
                text="Say Hello"
                className="bg-white text-black px-10 py-4 border-none"
              />
            </div>
          </div>
        </BackgroundGradientAnimation>
      </section>
    </div>
  );
}
