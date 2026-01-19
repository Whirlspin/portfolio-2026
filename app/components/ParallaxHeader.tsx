"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxHeader({
  headerImage,
  heading,
  subheading,
}: {
  headerImage: string;
  heading: string;
  subheading: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [2, -2 * 200]);

  return (
    <div ref={ref} className="relative h-[120vh] -mt-23">
      <div
        className="sticky w-full h-screen bg-cover bg-center top-0"
        style={{
          backgroundImage: `url(${headerImage})`,
          // backgroundImage: "url(/balloons.png)",
        }}
      >
        <motion.div
          className="bg-stone-950/60 w-full h-full "
          style={{ opacity }}
        />
      </div>
      <motion.div
        className="absolute top-0 flex flex-col justify-center items-center w-full h-screen"
        style={{ y }}
      >
        <h2>{subheading}</h2>
        <h1 className="text-6xl! sm:text-7xl!">{heading}</h1>
      </motion.div>
    </div>
  );
}
