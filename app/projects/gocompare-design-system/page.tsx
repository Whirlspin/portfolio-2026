import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Go Compare's design system • Jethro Edwards' portfolio website",
  description:
    "A simple design system constructed in Figma for all insurance question sets.",
};

export default function goCompareDesignSystem() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/goco-design-system-masthead.webp"
        subheading="Go.Compare"
        heading="Design system for all insurance question sets"
      />
      {/* Introduction  */}
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Go.Compare: Design system" />
        <h3>Summary</h3>
        <p>
          Go.Compare insurance journeys (question sets) generally follow a
          pattern of:{" "}
          <strong>1. Question 2. Help text 3. Answer choice.</strong> By
          utilising this framework, a design system was created in Figma to
          enhance the efficiency of crafting precise insurance journeys, ensure
          a uniform methodology, and serve as the definitive reference point for
          designers, product owners, and developers.
        </p>
        <h3>Background</h3>
        <p>
          The old Go.Compare design system is extensive, but not practical as it
          hadn't been kept up to date, so its accuracy had lapsed over time.
          Also it was clunky.
        </p>
        <h3>My role</h3>
        <p>
          Build all UI elements from scratch • Extend Figma's styles to
          component patterns with on & off switches • Build interchangeable
          assets between desktop & mobile views • Present to key stakeholders
          and get business buy-in
        </p>

        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Design & documentation</h5>
            <Tooltip
              tooltiptext="Figma"
              imageSrc="/tech-stack-figma.svg"
              altText="Figma"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Presentation</h5>
            <Tooltip
              tooltiptext="Google Sheets"
              imageSrc="/tech-stack-google-sheets.svg"
              altText="Google Sheets"
            />
          </div>
        </div>
      </main>

      {/* Atomic design  */}
      <section
        className="w-full bg-emerald-50 py-28"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0% 100%)",
        }}
      >
        <div className="container mx-auto max-w-4xl px-6 lg:px-0 pb-16">
          <h3>Atomic design: Start by defining all atoms</h3>
          <p>
            From a clean slate I defined all the individual elements (colours,
            typography, spacing and imagery) thereby establishing the foundation
            for a new design system. The next stage was bringing these elements
            (atoms) together to produce components, then patterns (organisms)
            and eventually fully defined pages.
          </p>
          <div className="flex justify-center mb-12">
            <Image
              src="/projects/goco-atomic-design.svg"
              width={516}
              height={135}
              alt="Atomic design"
            />
          </div>
          <h3>Card component example</h3>
          <Image
            src="/projects/goco-card-component.svg"
            width={713}
            height={260}
            alt="card component"
            className="-ml-4"
          />

          <p>
            Each component is built from the ground up from predefined elements
            (atoms).
          </p>
          <blockquote className="text-lg/7 text-stone-600 border-l-4 border-stone-200 pl-6">
            Its real strength is in its ability to pivot. Even though a design
            system is incredibly structured (rigid) it is also flexible as saved
            changes ripple through Figma documents thereby remaining a 'single
            source of truth' across the board.
            <br />
            <span className="text-stone-900">― Jethro Edwards</span>
          </blockquote>
        </div>
      </section>

      <figure className="container mx-auto max-w-5xl px-6 lg:px-0 py-28">
        <Image
          src="/projects/goco-design-system-switches.png"
          width={1112}
          height={1835}
          alt="Go.Compare switches"
        />
      </figure>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
