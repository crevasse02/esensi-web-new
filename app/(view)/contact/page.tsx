import { ContactForm } from "@/app/client-component/contact_form";
import React from "react";
import { AnimatedButtonUpscale } from "@/components/ui/animate_button";
import HandIcon from "@/public/icons/hand-waving.svg";

const Contact = () => {
  return (
    <div>
      <div className="overflow-hidden ">
        <section
          className="bg-[#005490]  py-60  text-white bg-cover overflow-hidden bg-bottom flex flex-col justify-center items-center relative"
          style={{ backgroundImage: "url('/images/HeroContact.webp')" }}
        >
          <div className="bg-[#ED9458] px-3 py-1 mb-7 rounded-full max-w-max shadow-xl">
            <ul className="list-disc text-white ">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                2 spots left
              </li>
            </ul>
          </div>
          <div className="text-center  md:w-[50%]">
            <h3 className="md:text-[44px] text-[30px] text-center leading-none font-bold">
              Ready to bring your vision to life?
            </h3>
            <p className="text-center leading-normal mt-5 opacity-70 ">
              Connect with us to discuss how we can collaborate and turn your{" "}
              <br />
              ideas into impactful result
            </p>
          </div>

          <div className="mt-5">
            <ContactForm/>
          </div>
          <div className="mt-10 flex flex-col justify-center">
            <h6 className="text-[28px]">Or email us directly</h6>
            <AnimatedButtonUpscale
              link="/contact"
              text="Book A Call"
              icon={<HandIcon />}
              className="bg-[#005490] mt-5"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
