'use client';

import Card from '@/components/ui/sticky-scroll-reveal';

interface StaticImage {
  src: string;
  color: string;
}

export function ScrollAnimate() {
  // Static data for three images
  const images: StaticImage[] = [
    {
      src: "MainBefore.jpg",  // Path to your image
      color: "#FF6347", // Example color
    },
    {
      src: "MainBefore.jpg",  // Path to your image
      color: "#4682B4", // Example color
    },
    {
      src: "MainBefore.jpg",  // Path to your image
      color: "#32CD32", // Example color
    },
  ];

  return (
    <main className="my-[50vh]">
      {images.map((image, i) => (
        <Card key={`p_${i}`} {...image} i={i} />
      ))}
    </main>
  );
}
