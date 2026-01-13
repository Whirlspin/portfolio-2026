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
  title: "Infinite Grace • Jethro Edwards' portfolio website",
  description:
    "Infinite Grace website design & WordPress build project by Jethro Edwards.",
};

export default function infiniteGrace() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/infinite-grace-masthead.webp"
        subheading="Infinite Grace"
        heading=" A full turnkey solution"
      />

      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Infinite Grace" />
        <p className="mb-5!">
          Infinite Grace, formerly known as 'Strokes of Grace', narrates the
          incredible journey of Yvonne Kgame as she triumphs over a
          life-threatening double stroke. Drawing from her experience, she
          offers inspiration through her books and online platforms.
        </p>

        <p>
          Infinite Grace continues to have a growing fan base through its social
          networking channels, a seasonal E-mail newsletter and published
          content. Also my longest standing client of 14 years.
        </p>

        <h3>Freelance work</h3>
        <p className="pb-5">
          Design & content publishing • E-mail marketing (MailChimp) • WordPress
          (Valenti Magazine WordPress Theme) • Domain, E-mail & hosting • SEO
          basics
        </p>

        <Link
          className="group bg-white hover:bg-red-50 text-lg pl-4 pr-1 hover:pr-4 py-4 transition-all duration-300 border rounded-md uppercase"
          href="https://infinitegrace.co.za"
          target="_blank"
        >
          Visit website{" "}
          <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
            &rsaquo;
          </span>
        </Link>

        <Image
          src={"/projects/infinitegrace-responsive.jpg"}
          alt="Infinite Grace responsive design"
          width={1550}
          height={965}
          className="mt-28"
        />
      </main>

      <figure className="max-w-xl mx-auto p-6 mb-28">
        <img
          src="/projects/infinite-grace-logo-designs.svg"
          alt="Infinite Grace logo design concepts"
          className="w-full h-auto mb-16"
        />
        <figcaption className="text-center bg-stone-100 p-4">
          <h5>Various logo design options</h5>
        </figcaption>
      </figure>

      <Image
        src="/projects/infinitegrace-ybk-ebooks.jpg"
        alt="Infinite Grace YBK eBooks"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />

      <Image
        src="/projects/infinitegrace-ybk-consulting-laptop.jpg"
        alt="YBK Consulting website homepage"
        width={1920}
        height={1122}
        className="w-full h-auto"
      />

      <figure className="grid grid-cols-1 md:grid-cols-2 mb-28">
        <Image
          src="/projects/infinitegrace-ybk-consulting-business-card.jpg"
          alt="Infinite Grace YBK Consulting business card"
          width={1024}
          height={687}
        />
        <div className="flex flex-col align-middle justify-around sm:max-h-[687px] bg-stone-100">
          <div />
          <button className="py-36 md:py-0">
            <Link
              className="group bg-white hover:bg-red-50 text-lg pl-4 pr-1 hover:pr-4 py-4 transition-all duration-300 border rounded-md uppercase"
              href="https://ybkconsulting.co.za/"
              target="_blank"
            >
              Visit YBK website{" "}
              <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                &rsaquo;
              </span>
            </Link>
          </button>
          <h5 className="text-center px-3 pb-8 md:pb-0">
            WordPress (BeTheme) • Domain, E-mail & hosting • SEO basics
          </h5>
        </div>
      </figure>

      <CategoryListingFooter categoryChoose="WordPress" />

      <Footer />
    </>
  );
}
