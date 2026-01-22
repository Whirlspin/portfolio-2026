import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MultiChoice ThinkTank • Jethro Edwards' portfolio website",
  description: "",
};

export default function multichoiceThinkTank() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-thinktank-laptop.webp"
        subheading="MultiChoice"
        heading="Headless CMS for ThinkTank"
      />

      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: ThinkTank" />
        <p>
          <strong>ThinkTank</strong> is a digital tool designed to empower
          MultiChoice employees to find solutions to common business challenges.
          Built as a 'headless' WordPress website, this community-based platform
          has grown from strength to strength and features many capabilities
          such as: filtered reporting, 2-way conversations, blogging,
          communities, personal profiles and a ranking system.
        </p>

        <h3>My role</h3>
        <p className="pb-5">
          WordPress custom theme (All CSS styling) • Responsive web design •
          Print design (marketing) • Logo creation
        </p>

        <Link
          className="group bg-white hover:bg-red-50 text-lg pl-4 pr-1 hover:pr-4 py-4 transition-all duration-300 border rounded-md uppercase"
          href="https://thinktank.jetandjess.co.za/"
          target="_blank"
        >
          Visit demo website{" "}
          <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            &rsaquo;
          </span>
        </Link>
      </main>

      <div className="container mx-auto max-w-7xl px-6 lg:px-0 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Mobile view  */}
          <Image
            src="/projects/multichoice-thinktank-mobile.jpg"
            width={960}
            height={750}
            alt="Mobile view of MultiChoice ThinkTank"
          />
          <figure>
            <Image
              src="/projects/multichoice-thinktank-logo.jpg"
              width={960}
              height={750}
              alt="MultiChoice ThinkTank logos"
            />
            <figcaption className="text-center -mt-18">
              <h5>Early logo design options.</h5>
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/projects/multichoice-thinktank-prizes.jpg"
              width={960}
              height={954}
              alt="MultiChoice ThinkTank prizes"
            />
            <figcaption className="text-center -mt-14">
              <h5>Some of the prizes to be won.</h5>
            </figcaption>
          </figure>

          <Image
            src="/projects/multichoice-thinktank-poster.jpg"
            width={960}
            height={954}
            alt="MultiChoice ThinkTank prizes"
          />

          <Image
            src="/projects/multichoice-thinktank-lightbulb.jpg"
            width={959}
            height={650}
            alt="ThinkTank lightbulb 3D design"
          />
        </div>
      </div>

      <CategoryListingFooter categoryChoose="WordPress" />

      <Footer />
    </>
  );
}
