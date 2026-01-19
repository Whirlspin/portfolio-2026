"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function MyProjects() {
  return (
    <motion.section
      className="w-full my-36 px-6"
      initial={{ opacity: 0, y: 48, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto max-w-7xl lg:flex items-end">
        <div className="flex-1">
          <Image
            src="/text-featured-work.svg"
            width={373}
            height={41}
            alt="Featured work"
            className="mb-4"
          />
          <p className="mb-0!">
            From designing and building WordPress & React websites to creating
            user-tested interfaces that customers love to use.
          </p>
        </div>
        <div className="flex-1 lg:text-right align-bottom pb-4 pt-8">
          <Link
            href="/projects"
            className="font-semibold text-4xl underline decoration-red-700 underline-offset-16 decoration-2 transition duration-300 hover:decoration-red-700/0 hover:text-red-700"
          >
            See all projects &rsaquo;
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div className="container mx-auto max-w-7xl pt-16">
        <div className="grid lg:grid-cols-4 grid-rows-[repeat(8,282px)] lg:grid-rows-[repeat(4,282px)] gap-2">
          {/* inQuba  */}
          <div className="group bg-[url(/homepage-inquba.webp)] bg-center bg-cover border border-stone-300 lg:col-span-2 lg:row-span-2 rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg group-hover:bg-stone-500/20 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/inquba"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-800! mb-1">
                  inQuba
                </h6>
                <h5 className="text-2xl! text-black! font-bold! mb-3 group-hover:text-orange-600! transition-all duration-600">
                  Customer journey mapping software
                </h5>
                <p className="text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  UI designs • Customer journey mapping • Style guide •
                  Prototypes • Front-end components • Design process &rsaquo;
                </p>
              </div>
            </Link>
          </div>

          {/* Design system for Go.Compare */}
          <div className="group bg-[url(/homepage-design-system.webp)] bg-center bg-cover lg:col-span-2 rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg bg-linear-to-b from-black/0 to-black/40 group-hover:bg-stone-500/40 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/gocompare-design-system"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-100! mb-1">
                  Go.Compare
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-3 group-hover:text-green-400! transition-all duration-600">
                  Design system
                </h5>
                <p className="text-white text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  Build all UI elements • Extend Figma's styles to component
                  patterns with on/off switches • Build interchangeable assets
                  between devices
                </p>
              </div>
            </Link>
          </div>

          {/* MultiChoice style guide */}
          <div className="group bg-[url(/homepage-multichoice-styleguide.webp)] bg-center bg-cover rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg group-hover:bg-stone-500/30 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/multichoice-style-guide"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-100! mb-1">
                  MultiChoice
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-2 group-hover:text-yellow-300! transition-all duration-600">
                  Style guide
                </h5>
                <p className="text-white text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  Comprehensive style guide • Colours, typography, components
                </p>
              </div>
            </Link>
          </div>

          {/* Infinite Grace */}
          <div className="group bg-[url(/homepage-infinite-grace.webp)] bg-top-left bg-cover rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg bg-linear-to-b from-stone-950/0 to-stone-950/40 group-hover:bg-stone-500/40 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/infinite-grace"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-100! mb-1">
                  Freelance
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-2 group-hover:text-violet-300! transition-all duration-600">
                  Infinite Grace
                </h5>
                <p className="text-white text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  'Design-and-build' WordPress content publishing website
                </p>
              </div>
            </Link>
          </div>

          {/* MultiChoice landinging pages */}
          <div className="group bg-[url(/homepage-multichoice-laning-pages.webp)] bg-center bg-cover lg:col-span-2 rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg bg-linear-to-b from-black/0 to-black/40 group-hover:bg-stone-500/40 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/multichoice-landing-login-pages"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-100! mb-1">
                  MultiChoice
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-3 group-hover:text-teal-300! transition-all duration-600">
                  Landing & login pages
                </h5>
                <p className="text-white! text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  Original design • Frontend development - HTML5, CSS
                  (Bootstrap) & jQuery • Brand (logo) identity
                </p>
              </div>
            </Link>
          </div>

          {/* MultiChoice mobile app */}
          <div className="group bg-[url(/homepage-multichoice-self-service-app.webp)] bg-center bg-cover border border-stone-300 lg:col-span-2 lg:row-span-2 rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg bg-linear-to-b from-stone-950/0 to-stone-950/40 group-hover:bg-stone-600/60 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/multichoice-mobile-app"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-100! mb-1">
                  MultiChoice
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-3 group-hover:text-slate-400! transition-all duration-600">
                  Self service mobile app
                </h5>
                <p className="text-white! text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  Wireframing • UI design • Manage & delegate work among team
                  members • Interactive prototype in UXPin
                </p>
              </div>
            </Link>
          </div>

          {/* ThinkTank  */}
          <div className="group bg-[url(/homepage-thinktank.webp)] bg-center bg-cover rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg bg-linear-to-b from-stone-950/0 to-stone-950/40 group-hover:bg-stone-500/40 transition-all duration-600 group-hover:backdrop-blur-xs"
              href="/projects/multichoice-thinktank"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="font-semibold! uppercase text-stone-50! mb-1">
                  MultiChoice
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-2 group-hover:text-sky-300! transition-all duration-600">
                  ThinkTank
                </h5>
                <p className="text-white! text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  Headless CMS • WordPress custom theme
                </p>
              </div>
            </Link>
          </div>

          {/* Giftalot  */}
          <div className="group bg-[url(/homepage-giftalot.webp)] bg-center bg-cover rounded-lg">
            <Link
              className="w-full p-6 h-full flex flex-col justify-end text-center rounded-lg bg-linear-to-b from-stone-950/0 to-stone-950/40 group-hover:bg-stone-500/40 transition-all duration-600 group-hover:backdrop-blur-sm"
              href="/projects/giftalot-africa"
            >
              <div className="translate-y-18 group-hover:translate-y-0 transition-transform duration-600 mb-4">
                <h6 className="text-stone-100! font-semibold! uppercase mb-1">
                  Freelance
                </h6>
                <h5 className="text-white! text-2xl! font-bold! mb-2! group-hover:text-rose-300!  transition-all duration-600">
                  Giftalot
                </h5>
                <p className="text-white! text-base! leading-normal! opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1 h-12 mb-0!">
                  'Design-and-build' e-commerce WordPress website
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
