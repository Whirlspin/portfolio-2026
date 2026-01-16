import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Footer from "@/app/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy • Jethro Edwards' portfolio website",
  description: "Privacy policy for Jethro Edwards' portfolio website.",
};

export default function privacyPolicy() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/privacy-policy-masthead.webp"
        subheading=""
        heading="Privacy Policy"
      />
      <div className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Privacy Policy" />
        <h3>Cookies</h3>
        <p className="mb-5">
          This site uses cookies - small text files that are placed on your
          machine to help the site provide a better user experience. In general,
          cookies are used to retain user preferences, store information for
          things like shopping carts, and provide anonymised tracking data to
          third party applications like Google Analytics.
        </p>

        <p>
          As a rule, cookies will make your browsing experience better. However,
          you may prefer to disable cookies. The most effective way to do this
          is to disable cookies in your browser. Consult the Help section of
          your browser or taking a look at the About Cookies website which
          offers guidance for all modern browsers.
        </p>

        <h3>Analytics</h3>
        <p>
          3rd-party audience data with Google Analytics is used on this website
          to improve user experience. The information is aggregated so one
          cannot identify you from it.
        </p>

        <h3>PostHog</h3>
        <p>
          3rd-party audience data with PostHog is used on this website to
          improve user experience. The information is aggregated so one cannot
          identify you from it.
        </p>
      </div>

      <Footer />
    </>
  );
}
