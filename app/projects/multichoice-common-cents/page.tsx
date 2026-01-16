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
  title: "MultiChoice CommonCents • Jethro Edwards' portfolio website",
  description: "Creative design for 'CommonCents - it just makes sense'",
};

export default function multichoiceCommonCents() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-commoncents-masthead.webp"
        subheading="MultiChoice"
        heading="Creative design for 'Commoncents - it just makes sense'"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: CommonCents - It just sense" />
        <p>
          This design is a compilation of elements relevant to the brief's
          request (African continent, money, conservation/sustainability), which
          amalgamate together in a surreal composition. It also reminds one of
          nature conservation and like conserving our natural environment is the
          right thing to do, so too should we avoid unnecessary spending in the
          workplace.
        </p>

        <h3>My role</h3>
        <p>
          Creative design • 3D design • Photoshop manipulation • Logo design
        </p>
      </main>

      <div className="container mx-auto max-w-7xl px-6 lg:px-0 mb-28">
        <Image
          src="/projects/multichoice-commoncents-concept.jpg"
          width={1920}
          height={986}
          alt="MultiChoice CommonCents concept"
        />

        <Image
          src="/projects/multichoice-commoncents-webpage.jpg"
          width={1920}
          height={971}
          alt="MultiChoice CommonCents emample webpage"
        />

        <Image
          src="/projects/multichoice-commoncents-coins.png"
          width={1440}
          height={1005}
          alt="MultiChoice CommonCents emample webpage"
          className="w-full h-auto"
        />
      </div>

      <CategoryListingFooter categoryChoose="Design" />

      <Footer />
    </>
  );
}
