"use client";
import Image from "next/image";
import styles from "./style.module.css";

interface CardProps {
  src: string;
  color: string;
  i: number;
}

const Card: React.FC<CardProps> = ({
  src,
  color,
  i,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className={styles.imageContainer}>
          <div className={styles.inner}>
            <Image fill src={`/images/${src}`} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
