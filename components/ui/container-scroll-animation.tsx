"use client";
import React, { ReactNode, useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  titleComponent: ReactNode;
}
interface ButtonProps {
  buttonText: ReactNode;
}

export const ContainerScroll = ({
  titleComponent,
  serviceDetailComponent,
  buttonText,
  children,
  position,
}: {
  titleComponent: string | React.ReactNode;
  serviceDetailComponent: string | React.ReactNode;
  buttonText: string | React.ReactNode;
  position?: string;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [1, 0.9] : [1, 0.9];
  };
  const translateDimensions = () => {
    return isMobile ? [-100, 0] : [0, -500];
  };

  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], translateDimensions());

  return (
    <div
      className="h-[60rem] md:h-[80rem] md:-mt-32 lg:-mt-20   flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className={`py-10 flex md:flex-row flex-col gap-20 md:py-40 w-full relative ${
          position === "left" ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-[40%]">
          <Header titleComponent={titleComponent} />
          <Button buttonText={buttonText} />
        </div>
        <div className={`md:w-[60%]`}>
          <Card scale={scale}>{children}</Card>
          <ServiceDetail
            translate={translate}
            serviceDetailComponent={serviceDetailComponent}
          ></ServiceDetail>
        </div>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }: HeaderProps) => {
  return <motion.div className="div mx-auto">{titleComponent}</motion.div>;
};

export const Button = ({ buttonText }: ButtonProps) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <motion.button
      className="relative overflow-hidden rounded-3xl group mt-5 "
      onMouseEnter={() => setIsHover(true)} // Set hover state on enter
      onMouseLeave={() => setIsHover(false)} // Reset hover state on leave
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#FC5E42] rounded-3xl" />

      {/* Button Content */}
      <div className="relative flex items-center justify-between gap-3 pl-6 pr-1 bg-[#005490] text-white transition duration-200">
        {/* Button Text */}
        <h3 className="relative z-10">{buttonText}</h3>

        {/* Animated Background */}
        <motion.div
          className="absolute right-0 top-0 bottom-0  z-0 "
          animate={{
            width: isHover ? "200px" : "40px",
            borderRadius: isHover ? "40px" : "40px",
            backgroundColor: isHover ? "#FC5E42" : "white",
            margin: isHover ? "0px" : "2px",
          }}
          initial={{
            width: "40px",
            borderRadius: "40px",
            backgroundColor: "white",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Arrow Icon */}
        <div className="relative z-10  rounded-3xl h-[40px] w-[40px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {!isHover && (
              <motion.div
                key="arrow1"
                initial={{ x: 30, opacity: 0 }} // Start off-screen to the right
                animate={{ x: 0, opacity: 1 }} // Move to center
                exit={{ x: 30, opacity: 1 }} // Exit to the left
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                <ArrowRightIcon className="h-6 w-6 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {isHover && (
              <motion.div
                key="arrow2"
                initial={{ x: -30, opacity: 0 }} // Start off-screen to the left
                animate={{ x: 0, opacity: 1 }} // Move to center
                exit={{ x: -30, opacity: 0 }} // Exit to the right
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                <ArrowRightIcon className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  );
};

export const Card = ({
  scale,
  children,
}: {
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        scale,
      }}
      className="mx-auto w-full lg:h-[450px] md:h-[300px] h-[200px] rounded-[30px] shadow-2xl relative"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};

export const ServiceDetail = ({
  serviceDetailComponent,
  translate,
}: {
  translate: MotionValue<number>;
  serviceDetailComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        y: translate,
      }}
      className="p-10 w-full rounded-[30px]  "
    >
      <div className="relative w-full  p-5 rounded-2xl shadow-2xl md:rounded-2xl bg-[#333333]">
        {serviceDetailComponent}
      </div>
    </motion.div>
  );
};
