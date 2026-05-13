"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

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
  const y = useTransform(scrollYProgress, [0, 1], [2, -2 * 100]);
  const arrow = useTransform(scrollYProgress, [0, 1], [1, 8 * 150]);

  return (
    <div ref={ref} className="relative h-[180vh] -mt-23">
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
        <h2 className="opacity-75">{subheading}</h2>
        <h1>{heading}</h1>
      </motion.div>
      <motion.div
        className="absolute w-full -mt-16 flex justify-center"
        style={{ opacity, y: arrow }}
      >
        <Link href="#main" aria-label="Scroll down">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path
              d="M20.4 0C21.3548 0 22.2705 0.379285 22.9456 1.05442C23.6207 1.72955 24 2.64522 24 3.6V20.4C24 21.3548 23.6207 22.2705 22.9456 22.9456C22.2705 23.6207 21.3548 24 20.4 24H3.6C2.64522 24 1.72955 23.6207 1.05442 22.9456C0.379285 22.2705 0 21.3548 0 20.4V3.6C0 2.64522 0.379285 1.72955 1.05442 1.05442C1.72955 0.379285 2.64522 0 3.6 0H20.4ZM12 6C11.6817 6 11.3765 6.12643 11.1515 6.35147C10.9264 6.57652 10.8 6.88174 10.8 7.2V13.902L8.0484 11.1516L7.9356 11.052C7.69441 10.8655 7.39128 10.7778 7.08777 10.8067C6.78426 10.8356 6.50314 10.979 6.3015 11.2077C6.09986 11.4363 5.99282 11.7332 6.00213 12.0379C6.01143 12.3427 6.13638 12.6325 6.3516 12.8484L11.1516 17.6484L11.2644 17.748L11.3748 17.8248L11.4924 17.8872L11.6244 17.94L11.7588 17.976L11.91 17.9964L12 18L12.1404 17.9916L12.3192 17.9568L12.4452 17.9148L12.5808 17.85L12.714 17.7648C12.7618 17.7296 12.8067 17.6907 12.8484 17.6484L17.6484 12.8484L17.748 12.7356C17.9271 12.5047 18.0158 12.2164 17.9975 11.9248C17.9791 11.6332 17.855 11.3582 17.6484 11.1516L17.5356 11.052C17.3047 10.8729 17.0164 10.7842 16.7248 10.8025C16.4332 10.8209 16.1582 10.945 15.9516 11.1516L13.2 13.902V7.2L13.1916 7.0596C13.1572 6.7677 13.0169 6.49857 12.7972 6.30326C12.5776 6.10795 12.2939 6.00004 12 6Z"
              fill="white"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
