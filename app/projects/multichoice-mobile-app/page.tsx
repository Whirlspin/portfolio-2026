import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "MultiChoice Mobile Application • Jethro Edwards' portfolio website",
  description:
    "A self service mobile application designed for MultiChoice customers to manage their accounts and services on the go.",
};

export default function multichoiceMobileApp() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-mobile-app-masthead.webp"
        subheading="MultiChoice"
        heading="Self service mobile application"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: Self service mobile application" />
        <h3>Customers spoke, we listened</h3>
        <p>
          This initiative started in the CX department at MultiChoice Africa and
          led to the creation of a mobile app that is both highly optimised and
          packed with features, designed specifically for customer needs.
        </p>
        <h3>Collaborative exercise</h3>
        <p>
          Wireframing • UI design • Manage & delegate work among team members •
          Interactive prototype in UXPin
        </p>
        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Prototyping tools</h5>
            <Tooltip
              tooltiptext="Balsamiq Wireframes"
              imageSrc="/tech-stack-balsamiq.svg"
              altText="Balsamiq Wireframes"
            />
            <Tooltip
              tooltiptext="UXPin"
              imageSrc="/tech-stack-uxpin.svg"
              altText="UXPin"
            />
          </div>
        </div>
      </main>

      <section className="bg-[#6C757C] pt-28 w-full">
        <Image
          src="/projects/multichoice-mobile-app-wireframe.jpg"
          width={1920}
          height={825}
          alt="wireframes"
          className="w-full h-auto mb-16"
        />

        <div className="container mx-auto max-w-3xl px-6 lg:px-0 pb-8">
          <h3 className="text-white!">From wireframes to final design</h3>
          <p className="text-white!">
            By using wireframes in an iterative fashion we were able to refine
            user journeys, pay careful attention to functionality and pave the
            way for a pleasant user experience.
          </p>
        </div>

        <Image
          src="/projects/multichoice-mobile-app-design.jpg"
          width={1920}
          height={984}
          alt="designs"
          className="w-full h-auto pb-102"
        />
      </section>

      <div className="container mx-auto max-w-2xl -mt-80 mb-28 p-6">
        <Image
          src="/projects/multichoice-mobile-app-handheld-design.jpg"
          width={1195}
          height={1123}
          alt="Handheld device"
          className="rounded-xl border-2 border-stone-900/10 drop-shadow-lg/30"
        />
      </div>

      <div className="container max-w-96 mx-auto p-6 text-center mb-28">
        <video
          className="w-full h-auto max-w-full rounded border border-stone-300"
          autoPlay
          muted
          loop
        >
          <source
            src="/projects/multichoice-mobile-app-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h5 className="mt-8 uppercase bg-stone-50 p-6">
          Interactive prototype
        </h5>
      </div>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
