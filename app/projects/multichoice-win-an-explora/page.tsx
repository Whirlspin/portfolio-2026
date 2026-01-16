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
  title: "MultiChoice: Win an Explora • Jethro Edwards' portfolio website",
  description: "Win an Explora web and poster campaign project.",
};

export default function multichoiceWinAnExplora() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-qr-code-masthead.webp"
        subheading="MultiChoice"
        heading="Win an Explora. Web and poster campaign"
      />
      <div className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: Win an Explora" />

        <p>
          By scanning the competition poster's QR Code (machine readable code)
          with the aid of a SmartPhone, customers could then enter their details
          on the website to stand a chance of winning the main prize of a DStv
          decoder.
        </p>

        <h3>Individual exercise</h3>
        <p className="pb-5">
          Concept • 3D graphic image • Mobile design • Poster design
        </p>

        <Image
          src="/projects/multichoice-qr-code-walkthrough.png"
          alt="MultiChoice Win an Explora walkthrough"
          width={1477}
          height={507}
          className="mb-8"
        />
        <h5 className="text-center">Concept walk through</h5>
      </div>

      <div className="bg-rose-50 w-full py-28 mb-28">
        <div className="container mx-auto max-w-2xl px-6">
          <Image
            src="/projects/multichoice-qr-code-cell.png"
            alt="MultiChoice Win an Explora mobile design"
            width={450}
            height={923}
            className="mb-8 mx-auto w-6/12 lg:w-5/12"
          />
          <h5 className="text-center">
            Members of the public were requested to watch an embedded YouTube
            video, answer a related question and fill-in their personal details
            in order to stand a chance of winning the main prize.
          </h5>
        </div>
      </div>

      <div className="container max-w-2xl mx-auto mb-28">
        <Image
          src="/projects/multichoice-qr-code-print.jpg"
          alt="MultiChoice Win an Explora poster design"
          width={814}
          height={974}
        />
        <h5 className="text-center mt-12">
          The competition poster I designed.
        </h5>
      </div>

      <CategoryListingFooter categoryChoose="Design" />

      <Footer />
    </>
  );
}
