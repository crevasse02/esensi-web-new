'use client'
import { projects } from './data';
import Card from '@/components/ui/sticky-scroll-reveal';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface Project {
  // Define the properties of a project based on your data structure
  title: string;
  tags: string;
  src: string;
  link: string;
  // Add other properties as needed
}

export function ScrollAnimate(): JSX.Element {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="my-[50vh] relative ">
      {
        projects.map((project: Project, i: number) => {
          const targetScale: number = 1 - ((projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })
      }
    </div>
  );
}