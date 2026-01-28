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
  title:
    "Multichoice: Landing & Login Pages • Jethro Edwards' portfolio website",
  description:
    "Multichoice Africa Applications (MCA Apps) is a website portal hosting all the applications that are released for the MultiChoice operational departments and verified technicians across the continent.",
};

export default function multichoiceLandingLoginPages() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-web-portal-masthead.webp"
        subheading="Multichoice"
        heading="Landing & login pages"
      />

      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Multichoice: Landing & login pages" />
        <h3>Web portal applications</h3>
        <p>
          MultiChoice Africa Applications (MCA Apps) is a website portal hosting
          all the applications that are released for the MultiChoice operational
          departments and verified technicians across the continent.
        </p>
        <h3>Individual exercise</h3>
        <p className="pb-5">
          Original design • Frontend development - HTML5, CSS (Bootstrap) &
          jQuery • Brand (logo) identity
        </p>

        <Link
          className="group bg-white hover:bg-red-50 text-lg pl-4 pr-1 hover:pr-4 py-4 transition-all duration-300 border rounded-md uppercase"
          href="https://www.mcaapps.com/"
          target="_blank"
        >
          Visit website{" "}
          <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            &rsaquo;
          </span>
        </Link>
      </main>

      <figure className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <Image
          src="/projects/multichoice-webportal-wireframe.png"
          alt="Multichoice web portal wireframe"
          width={1280}
          height={1168}
        />
        <figcaption className="text-center mt-8">
          <h5>Wireframe to pitch and sell the concept to stakeholders.</h5>
        </figcaption>
      </figure>

      <figure className="container mx-auto max-w-sm px-6 lg:px-0 mb-28">
        <Image
          src="/projects/multichoice-webportal-icons.jpg"
          alt="Multichoice web portal logos"
          width={900}
          height={411}
        />
        <figcaption className="text-center mt-6">
          <h5>Individually designed icons for each application.</h5>
        </figcaption>
      </figure>

      <Image
        src="/projects/multichoice-webportal-tablet.jpg"
        alt="Multichoice web portal on tablet"
        width={1920}
        height={1288}
        className="w-full h-auto"
      />

      <Image
        src="/projects/multichoice-webportal-mega-login.jpg"
        alt="Multichoice web portal mega login"
        width={1920}
        height={857}
        className="w-full h-auto"
      />

      <Image
        src="/projects/multichoice-webportal-decoder-repair.jpg"
        alt="Multichoice web portal decoder repair"
        width={1920}
        height={1133}
        className="w-full h-auto"
      />

      <Image
        src="/projects/multichoice-webportal-mega-dealer.jpg"
        alt="Multichoice web portal mega dealer"
        width={1812}
        height={1100}
        className="w-full h-auto border-t-stone-200 border-t"
      />

      <Image
        src="/projects/multichoice-webportal-ambient-occlusion.jpg"
        alt="Multichoice web portal ambient occlusion"
        width={1920}
        height={1622}
        className="w-full h-auto mb-28"
      />

      <CategoryListingFooter categoryChoose="Design" />

      <Footer />
    </>
  );
}
