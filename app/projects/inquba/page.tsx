import type { Metadata } from "next";
import Logo from "@/app/components/logo";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Image from "next/image";
import Tooltip from "@/app/components/tooltip";
import Footer from "@/app/components/footer";
import CategoryListingFooter from "@/app/components/categoryListingFooter";

export const metadata: Metadata = {
  title:
    "inQuba: Customer journey software • Jethro Edwards' portfolio website",
  description:
    "B2B SaaS customer journey management software company based in South Africa with clients worldwide.",
};

export default function inQuba() {
  return (
    <>
      <Logo />
      {/* <TextParallaxContentExample /> */}
      <Image
        src="/projects/inquba-tablet.jpg"
        alt="inQuba tablet view"
        width={1920}
        height={1080}
      />
      <div className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="inQuba: Customer journey software" />
        <h3>About the role</h3>
        <p>
          <strong>inQuba</strong> (employed: 2020 - 2023) is a fast paced
          software company (B2B SaaS) where one must get stuck in and start
          ideating immediately with wireframes so as to solve business
          requirements. Being a small organisation and seeing I'm the
          only/principal product designer, its rewarding when my UI designs come
          to life within a software production environment. My work below
          highlight the design process I use.
        </p>
        <h3>Freelance work</h3>
        <p>Original website design & logo • WordPress</p>
        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Design</h5>
            <Tooltip
              tooltiptext="Photoshop"
              imageSrc="/tech-stack-photoshop.svg"
              altText="Photoshop"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Website</h5>
            <Tooltip
              tooltiptext="WordPress"
              imageSrc="/tech-stack-wordpress.svg"
              altText="WordPress"
            />
          </div>
        </div>

        <Image
          src="/projects/gia-webpage.webp"
          alt="gia agency webpage"
          width={1920}
          height={5665}
          className="my-28 rounded border border-stone-200 mb-28"
        />
      </div>

      <CategoryListingFooter categoryChoose="WordPress" />

      <Footer />
    </>
  );
}
