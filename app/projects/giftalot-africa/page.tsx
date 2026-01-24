import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Giftalot Africa • Jethro Edwards' portfolio website",
  description:
    "'Design-and-build' eCommerce WordPress website. Photography, web design, corporate branding, e-mail marketing & hosting for a small business selling gift items online.",
};

export default function giftalotAfrica() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/giftalot-header.webp"
        subheading="Giftalot Africa"
        heading="eCommerce WordPress website"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 pt-28">
        <BreadcrumbNav projectTitle="Giftalot Africa: eCommerce WordPress website" />
        <h3>Summary</h3>
        <p>
          Giftalot Africa is a small business selling gift items online. The
          website was designed and built using WordPress with WooCommerce to
          handle the eCommerce functionality. The site features a clean,
          user-friendly design, easy navigation, and secure payment options.
        </p>
        <h3>Freelance work</h3>
        <p>
          All photography • Web design • Corporate branding • WordPress
          (BeTheme) • E-mail marketing (Mailchimp) • Domain, E-mail & hosting •
          SEO basics
        </p>
        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Photo-editing & design</h5>
            <Tooltip
              tooltiptext="Photoshop"
              imageSrc="/tech-stack-photoshop.svg"
              altText="Photoshop"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Website & Email build</h5>
            <Tooltip
              tooltiptext="WordPress"
              imageSrc="/tech-stack-wordpress.svg"
              altText="WordPress"
            />
            <Tooltip
              tooltiptext="WooCommerce"
              imageSrc="/tech-stack-woocommerce.svg"
              altText="WooCommerce"
            />
            <Tooltip
              tooltiptext="Mailchimp"
              imageSrc="/tech-stack-mailchimp.svg"
              altText="Mailchimp"
            />
          </div>
        </div>
        <div className="flex align-center justify-center my-28">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Who says you need a fancy studio to achieve quality product shots?{" "}
              <a href="https://twitter.com/hashtag/homestudio?src=hash&amp;ref_src=twsrc%5Etfw">
                #homestudio
              </a>{" "}
              <a href="https://t.co/949SQ0xzby">pic.twitter.com/949SQ0xzby</a>
            </p>
            &mdash; Jethro Edwards (@Jethro_Edwards){" "}
            <a href="https://twitter.com/Jethro_Edwards/status/1176149883830624256?ref_src=twsrc%5Etfw">
              September 23, 2019
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </main>

      <div className="container mx-auto max-w-7xl mb-28">
        <Image
          src="/projects/giftalot-merry-giftmas.jpg"
          alt="Giftalot Africa website screenshot 1"
          width={1280}
          height={720}
          className="rounded"
        />

        <Image
          src={"/projects/giftalot-tablet-cellphone.jpg"}
          alt="Giftalot Africa website screenshot 2"
          width={1280}
          height={720}
          className="rounded my-12"
        />
      </div>

      <div className="container max-w-2xl mx-auto p-4">
        <Image
          src="/projects/giftalot-combo.jpg"
          alt="Giftalot Africa email marketing photograph"
          width={720}
          height={540}
          className="rounded border border-stone-100 mb-6"
        />
        <h5 className="p-4 bg-stone-100">
          On a shoestring budget all photography was completed in the spare
          bedroom against a plain white voile curtain that provided an 'infinity
          backdrop'. <i>See the end result below.</i>
        </h5>
        <Image
          src="/projects/giftalot-coupon-emailer.jpg"
          alt="Giftalot Africa Email marketing"
          width={720}
          height={1882}
          className="rounded border border-stone-200 mt-6 mb-28"
        />
      </div>

      <CategoryListingFooter categoryChoose="WordPress" />

      <Footer />
    </>
  );
}
