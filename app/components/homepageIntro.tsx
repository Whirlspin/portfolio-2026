"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Logo from "./logo";
import Image from "next/image";

export default function HomepageIntro() {
  const words = [
    "Design + Web development",
    "Being a dad",
    "Photography + Walking in nature",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="bg-stone-800">
      <Logo />

      {/* Intro animation */}
      <div className="px-3 pt-14 pb-48">
        <div className="container mx-auto lg:max-w-6xl lg:flex items-center">
          <motion.div
            className="relative z-50 px-12 lg:px-0 lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
          >
            <Image
              priority={true}
              src="/jetsetter.jpg"
              alt="Jethro Edwards surrounded by nature"
              width={524}
              height={524}
              className="rounded-lg shadow-xl border-2 border-stone-700"
            />
          </motion.div>
          <motion.div
            className="bg-stone-700/50 border-2 border-red-700 -mt-20 px-8 pb-10 pt-32 lg:mt-0 lg:w-200 lg:py-22 lg:px-20 lg:pl-50 lg:-ml-40"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
          >
            <Image
              src="/text-about-me.svg"
              width={239}
              height={42}
              alt="About me"
              className="mb-8"
            />
            <p className="text-white mb-7">
              With over 20 years of experience I have contributed from small,
              independent operations to leading a UX design team within a
              corporate environment.
            </p>

            <p className=" text-white mb-7">
              I consider myself a problem solver at the core as I enjoy turning
              obstacles into simple and intuitive designs. I have also built up
              a good front-end development skill set to bring designs to life on
              the web.
            </p>

            <p className=" text-white mb-10">
              I thrive in lead roles and am quite comfortable working from
              concept to completion on projects.
            </p>

            <div className="px-6 py-4 border-2 border-stone-700 bg-stone-800 rounded-lg flex items-center gap-4">
              {/* heart-shaped icon */}
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.23125 12.8475L10.7016 20.7735C11.0531 21.1024 11.5172 21.2857 12 21.2857C12.4828 21.2857 12.9469 21.1024 13.2984 20.7735L21.7687 12.8475C23.1938 11.5179 24 9.65269 24 7.7029V7.4304C24 4.14629 21.6328 1.34611 18.4031 0.805808C16.2656 0.448738 14.0906 1.14878 12.5625 2.68043L12 3.24422L11.4375 2.68043C9.90938 1.14878 7.73438 0.448738 5.59688 0.805808C2.36719 1.34611 0 4.14629 0 7.4304V7.7029C0 9.65269 0.80625 11.5179 2.23125 12.8475Z"
                  fill="#CC0000"
                />
              </svg>
              <AnimatePresence mode="wait">
                <motion.h5
                  className="text-white! text-lg! font-medium!"
                  key={words[index]}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { ease: "backIn" },
                  }}
                >
                  {words[index]}
                </motion.h5>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
