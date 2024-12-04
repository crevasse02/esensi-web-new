import { ScrollAnimate } from "../client-component/scroll_animate";
import { AnimatedButtonUpscale } from "@/components/ui/animate_button";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center">
      <main className=" gap-8 row-start-2 items-center sm:items-start">
        <section
          className="h-screen flex flex-col w-screen justify-center items-center bg-cover"
          style={{ backgroundImage: "url('/images/HeroHome.webp')" }}
        >
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
            From concept to launch, we create seamless digital <br /> experiences that
            resonate with your audience.
          </p>
          <div className="mt-7">

          <AnimatedButtonUpscale text="Say Hello"></AnimatedButtonUpscale>
          </div>
        </section>
        <ScrollAnimate></ScrollAnimate>
      </main>
    </div>
  );
}
