import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valverde Country Hotel • Jethro Edwards' portfolio website",
  description: "Valverde Country Hotel website design & marketing material.",
};

export default function valverdeCountryHotel() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/valverde-masthead.jpg"
        subheading="Freelance"
        heading="Valverde Country Hotel"
      />

      <main className="container mx-auto max-w-4xl px-6 lg:px-0 pt-28 mb-20">
        <BreadcrumbNav projectTitle="Valverde Country Hotel" />

        <h3>All marketing material</h3>
        <p className="pb-5">
          Graphic design • Brand identity • Responsive WordPress theming •
          E-mail marketing • 20+ years ago
        </p>

        <Image
          src="/projects/valverde-responsive.jpg"
          alt="Valverde Country Hotel responsive website design"
          width={1600}
          height={678}
        />
      </main>

      <div className="container max-w-xl mx-auto p-6 mb-18">
        <div className="flex flex-col-reverse sm:flex-row justify-center gap-6">
          <Image
            src="/projects/valverde-tree.png"
            alt="Valverde Country Hotel logo design"
            width={390}
            height={385}
          />

          <Image
            src="/projects/valverde-cradle-aquaponics.png"
            alt="Valverde Country Hotel logo design"
            width={390}
            height={390}
          />
        </div>
      </div>

      <div className="container max-w-3xl mx-auto p-6 mb-28">
        <div className="grid gap-6">
          <Image
            src="/projects/valverde-wedding.jpg"
            alt="Valverde Country Hotel banner design 1"
            width={970}
            height={308}
          />

          <Image
            src="/projects/valverde-accommodation.jpg"
            alt="Valverde Country Hotel banner design 2"
            width={970}
            height={308}
          />

          <Image
            src="/projects/valverde-christmas.jpg"
            alt="Valverde Country Hotel banner design 3"
            width={970}
            height={308}
          />

          <Image
            src="/projects/valverde-new-years.jpg"
            alt="Valverde Country Hotel banner design 4"
            width={970}
            height={308}
          />

          <Image
            src="/projects/valverde-print.jpg"
            alt="Valverde Country Hotel print example"
            width={1920}
            height={1785}
          />
        </div>
      </div>

      <CategoryListingFooter categoryChoose="WordPress" />

      <Footer />
    </>
  );
}
