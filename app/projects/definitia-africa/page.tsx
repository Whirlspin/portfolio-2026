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
  title: "Definitia Africa • Jethro Edwards' portfolio website",
  description:
    "Definitia Africa website design & WordPress build project by Jethro Edwards.",
};

export default function definitiaAfrica() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/definitia-masthead.webp"
        subheading="Definitia Africa"
        heading=" Website design & WordPress build"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Definitia Africa" />
        <p className="mb-5!">
          I love an independent website request like this one where the client
          is an entrepreneur, looking to get their business off the ground and
          you're tasked to help launch it. A clean slate where you're directing
          operations into something great (hopefully).
        </p>

        <p>
          The budget was really small, but the whole project felt genuine and
          authentic.
        </p>

        <h3>Freelance work</h3>
        <p className="pb-5">
          Website design • Photoshop • Logo design • WordPress (BeTheme) •
          Domain, E-mail & hosting • SEO basics
        </p>
      </main>

      <figure className="grid grid-cols-1 md:grid-cols-3">
        <Image
          src="/projects/definitia-business-card.jpg"
          alt="Definitia Africa logo"
          width={1024}
          height={1024}
        />
        <Image
          src="/projects/definitia-photoshoot.jpg"
          alt="Definitia Africa model photoshoot"
          width={1024}
          height={1024}
        />
        <Image
          src="/projects/definitia-office-branding.jpg"
          alt="Definitia Africa office branding"
          width={1024}
          height={1024}
        />
      </figure>

      <Image
        src="/projects/definitia-laptop.webp"
        alt="Definitia Africa website homepage"
        width={1920}
        height={1540}
        className="w-full h-auto"
      />

      <CategoryListingFooter categoryChoose="WordPress" />

      <Footer />
    </>
  );
}
