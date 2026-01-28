import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "MultiChoice iConnect Africa • Jethro Edwards' portfolio website",
  description: "",
};

export default function multichoiceIconnectAfrica() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-iconnect-masthead.webp"
        subheading="MultiChoice"
        heading="Creative design for iConnect Africa"
      />

      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: iConnect Africa" />
        <p>
          iConnect Africa is a SharePoint intranet for MultiChoice employees. I
          was tasked to design the logo, construct the information architecture
          on the home page and then create original and exciting themes that
          change periodically.
        </p>
        <h3>Individual exercise</h3>
        <p>
          Creative design • Photoshop manipulation • 3D design • UI design •
          Logo design
        </p>
      </main>

      <figure className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <Image
          src="/projects/multichoice-iconnect-cricket-bat.jpg"
          alt="iConnect Africa Cricket Bat Theme"
          width={1124}
          height={310}
          className="md:w-8/12 mx-auto mb-16"
        />
        <figcaption className="md:w-8/12 mx-auto">
          <h5 className="bg-stone-100 p-4 text-center">
            The original cricket bat sourced from a Google search result.
            Cricket World Cup 2015 - see masthead image above for Photoshopped
            result.
          </h5>
        </figcaption>
      </figure>

      <section className="container max-w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mb-28">
        <Image
          src="/projects/multichoice-iconnect-theme-1.jpg"
          alt="iConnect Africa Theme 1"
          width={1920}
          height={1082}
        />
        <Image
          src="/projects/multichoice-iconnect-theme-2.jpg"
          alt="iConnect Africa Theme 2"
          width={1920}
          height={1082}
        />
        <Image
          src="/projects/multichoice-iconnect-theme-3.jpg"
          alt="iConnect Africa Theme 3"
          width={1920}
          height={1082}
        />
        <Image
          src="/projects/multichoice-iconnect-theme-4.jpg"
          alt="iConnect Africa Theme 4"
          width={1920}
          height={1082}
        />
      </section>

      <figure className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <Image
          src="/projects/multichoice-iconnect-theme-fullsize.jpg"
          alt="iConnect Africa full size image"
          width={1124}
          height={310}
          className="mb-8"
        />
        <figcaption>
          <h5 className="bg-stone-100 p-4 text-center">
            Full size home page design.
          </h5>
        </figcaption>
      </figure>

      <section className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 mb-28">
        <Image
          src="/projects/multichoice-iconnect-wireframe.jpg"
          alt="iConnect Africa layout"
          width={960}
          height={878}
        />

        <Image
          src="/projects/multichoice-iconnect-logo.jpg"
          alt="iConnect Africa logo"
          width={960}
          height={878}
        />

        <Image
          src="/projects/multichoice-iconnect-africa-rising.jpg"
          alt="Africa rising 1"
          width={960}
          height={958}
        />

        <Image
          src="/projects/multichoice-iconnect-africa-rising-3D.jpg"
          alt="Africa rising 2"
          width={960}
          height={958}
        />
      </section>

      <CategoryListingFooter categoryChoose="Design" />

      <Footer />
    </>
  );
}
