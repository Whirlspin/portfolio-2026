"use client";

import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { use, useRef } from "react";

interface parallaxProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: React.ReactNode;
}

export default function TextParallaxContentExample() {
  return (
    <div className="bg-amber-300">
      <TextParallaxContent
        imgUrl="balloons.png"
        subheading="Collaborate"
        heading="Build and build"
      />
    </div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: parallaxProps) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        {/* Image to come */}
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: parallaxProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      style={{
        // backgroundImage: "url({imgUrl})",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="bg-[url(/homepage-inquba.webp)] bg-cover bg-center sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-stone-950/70 " />
    </motion.div>
  );
};

// https://youtu.be/UUhoCb5nagY?si=-UXN42EJq2KVR5Oc&t=719
