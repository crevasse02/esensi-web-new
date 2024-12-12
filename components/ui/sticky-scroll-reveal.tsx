"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";
import { Badge } from "@/components/ui/badge";
import { FollowerPointerCard } from "./following-pointer";
import EyeIcon from "@/public/icons/eye.svg";

interface CardProps {
  i: number;
  title: string;
  tags: string;
  src: string;
  link: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  tags,
  src,
  link,
  progress,
  range,
  targetScale,
}) => {
  const container: RefObject<HTMLDivElement> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <FollowerPointerCard title={<TitleComponent title="Explore Project" />} link={link}>
        <motion.div
          style={{
            backgroundColor: "#212121",
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={`${styles.card} shadow-2xl`}
        >
          <div className="flex gap-2">
            {tags.split(",").map((tag, index) => (
              <Badge key={index} variant="outline" className="mb-5 text-white">
                {tag.trim()}
              </Badge>
            ))}
          </div>
          <div className={styles.body}>
            <div className={styles.description}>
              <h2 className="md:text-6xl text-2xl font-bold">{title}</h2>
            </div>

            <div className={styles.imageContainer}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <Image fill src={`/images/${src}`} alt="image" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </FollowerPointerCard>
    </div>
  );
};

const TitleComponent = ({ title }: { title: string }) => (
  <div className="bg-black bg-opacity-50 backdrop-blur-lg text-white p-2 rounded-3xl flex items-center gap-3">
    {title} <EyeIcon />
  </div>
);

export default Card;
