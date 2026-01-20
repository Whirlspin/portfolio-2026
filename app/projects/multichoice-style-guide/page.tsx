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
  title: "MultiChoice style guide • Jethro Edwards' portfolio website",
  description: "MultiChoice style guide project by Jethro Edwards.",
};

export default function multichoiceStyleGuide() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-styleguide-masthead.webp"
        subheading="MultiChoice"
        heading="Department style guide"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: Department style guide" />
        <p>
          The department style guide is an excellent resource for all work
          colleagues to reference the standards, corporate colours, font usage,
          frontend development guidelines and various downloads.
        </p>

        <h3>Individual exercise</h3>
        <p className="pb-5">
          Creative design (Fink Floyd album concept) • UI design • Copywriting •
          HTML5 & CSS (Bootstrap)
        </p>

        <Link
          className="group bg-white hover:bg-red-50 text-lg pl-4 pr-1 hover:pr-4 py-4 transition-all duration-300 border rounded-md uppercase"
          href="https://jethroedwards.com/TEMP/mca-styleguide/"
          target="_blank"
        >
          Visit website{" "}
          <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            &rsaquo;
          </span>
        </Link>

        <Image
          src="/projects/multichoice-styleguide-design.jpg"
          alt="MultiChoice style guide. Single page"
          width={1338}
          height={3590}
          className="py-28"
        />
      </main>

      <section className="container mx-auto max-w-7xl px-6 lg:px-0 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Image
            src="/projects/multichoice-styleguide-cellphone.jpg"
            width={961}
            height={922}
            alt="Mobile view of MultiChoice style guide"
          />
          <div className="bg-stone-100 p-12 border border-stone-300">
            <h3>Prism of colour</h3>
            <p>
              The colours in the spectrum of light through a prism is echoed in
              the MultiChoice logo so I wanted to bring this feature through in
              the style guide.
            </p>
            <Image
              src="/projects/multichoice-styleguide-pink-floyd.png"
              alt="Pink Floyd prism album concept"
              width={624}
              height={315}
              className="mb-8"
            />
            <h5 className="text-center">
              Pink Floyd - Dark Side of the Moon 1973
            </h5>
          </div>
        </div>
      </section>

      <CategoryListingFooter categoryChoose="Design" />

      <Footer />
    </>
  );
}
