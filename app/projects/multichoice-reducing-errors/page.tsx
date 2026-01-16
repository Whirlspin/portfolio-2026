import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MultiChoice reducing errors • Jethro Edwards' portfolio website",
  description: "Reducing errors & failures on MultiChoice Africa platforms",
};

export default function multichoiceReducingErrors() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/multichoice-reducing-errors-masthead.webp"
        subheading="MultiChoice"
        heading="Reducing errors & failures on MultiChoice Africa platforms"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="MultiChoice: Reducing errors" />
        <h3>Problem: Unhappy Users = Higher Support Costs</h3>
        <p>
          Please read my extensive report on examining practical ways in which
          errors and failures on MultiChoice Africa's various Self Service
          platforms can be reduced, thereby lowering the number of calls the
          service centre receive each day. Special attention was paid in
          identifying usability problems, findability issues, inefficiencies
          (bottlenecks) that prevent users from completing their tasks.
        </p>

        <h3>Team effort</h3>
        <p className="pb-5">
          User research • UX strategy & design • Information architecture •
          Usability testing
        </p>

        <Link
          className="group bg-white hover:bg-red-50 text-lg pl-4 pr-1 hover:pr-4 py-4 transition-all duration-300 border rounded-md uppercase"
          href="https://docs.google.com/presentation/d/1UBaBZGyDNiQkp_LrchdWsiru1gSvjUPlNFIY-Bpaots/edit?usp=sharing"
          target="_blank"
        >
          Read my report{" "}
          <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            &rsaquo;
          </span>
        </Link>

        <blockquote className="text-lg/7 text-stone-600 border-l-4 border-stone-200 pl-6 mt-18">
          You've got to start with the customer experience and work back towards
          the technology - not the other way around.
          <br />
          <span className="text-stone-900">― Steve Jobs</span>
        </blockquote>
      </main>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
