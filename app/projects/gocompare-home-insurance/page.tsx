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
  title:
    "Go Compare's home insurance journey • Jethro Edwards' portfolio website",
  description: "A home insurance journey for Go.Compare customers.",
};

export default function goCompareHomeInsurance() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/goco-home-masthead.webp"
        subheading="Go.Compare"
        heading="Home insurance question set"
      />
      {/* Introduction  */}
      <section className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Go.Compare: Home insurance" />
        <h3>Problem statement</h3>
        <p>
          Customers find the Home insurance journey (question set) far too long
          to complete comfortably (±80 questions in total, longer than any
          competitor). Besides the long length of the exercise, questions at
          times are guessed by customers as witnessed in a number of usability
          tests the research team conducted. This habit can result in inaccurate
          quotes which in turn leads to problems when making a claim. A serious
          concern for the business.
        </p>

        <h3>Reskin the Home insurance journey in Figma</h3>
        <p>
          To maintain a consistent approach on all Go.Compare's insurance
          journeys (question sets), my first task was reskinning the whole
          journey. By following the in-house{" "}
          <Link
            className="underline decoration-red-700 underline-offset-6 decoration-2 transition duration-300 hover:decoration-red-700/0 hover:text-red-700 font-medium"
            href="/projects/gocompare-design-system"
          >
            design system
          </Link>
          , developers are assured of a pixel perfect design reference that is
          consistent with other updated insurance journeys on the Go.Compare
          website.
        </p>

        <h3>Team effort</h3>
        <p>
          Competitor research • Extensive usability testing of the insurance
          journey • All findings and recommendations documented • Update the
          insurance journey's design style to Go.Compare's latest version
          (myself) • Design a new technique to speed the answer process up
          (myself)
        </p>

        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Research and documentation</h5>
            <Tooltip
              tooltiptext="Google Analytics"
              imageSrc="/tech-stack-analytics.svg"
              altText="Google Analytics"
            />
            <Tooltip
              tooltiptext="Miro"
              imageSrc="/tech-stack-miro.svg"
              altText="Miro"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Design</h5>
            <Tooltip
              tooltiptext="Figma"
              imageSrc="/tech-stack-figma.svg"
              altText="Figma"
            />
          </div>
        </div>
      </section>

      <figure className="container mx-auto max-w-6xl px-6 mb-28">
        <figcaption className="flex justify-around mb-8">
          <h4>Before</h4>
          <h4>After</h4>
        </figcaption>
        <Image
          src="/projects/goco-home-before-after.png"
          alt="Before and after redesign"
          width={1082}
          height={1157}
        />
      </figure>

      <article className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <h3>Problem areas identified, documented & solved collaboratively</h3>
        <p>
          Problems (pain points) are identified, then tested/validated with
          users and solved collaboratively with many iterations if necessary. A
          patient, yet thorough exercise.
        </p>
      </article>

      <figure className="container max-w-7xl mx-auto p-6 mb-28">
        <Image
          src="/projects/goco-home-sketches.png"
          alt="Sketches and research findings"
          width={1300}
          height={1304}
        />
      </figure>

      <article className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <h3>Project outcome & introduction of 'Summary view'</h3>
        <p className="mb-5!">
          I recreated the entire Home insurance application experience for
          desktop and mobile in the new design system for developers to
          accurately reference. Updated all the questions from the 1st to the
          3rd person so customers can also quote for friends and family members.
          I also introduced imagery to help users better identify their roof
          type, building type and lock. Explored different user journey options
          and help make recommendations for the next iteration (there were
          many).
        </p>

        <p>
          My standout contribution was the introduction of what became known as
          the <strong>'Summary view'</strong>. By using one's postcode, profile
          details and some well informed assumptions we're able to pre-fill some
          of the answers to the question set. Within the design system
          guidelines, I changed parts of the UI design to a summary of editable
          answers that would shorten the length of the Home insurance
          application process and also remove some of the guesswork from the
          exercise. <i>See below for more details.</i>
        </p>
      </article>

      <figure className="container max-w-7xl mx-auto p-6 mb-28">
        <Image
          src="/projects/goco-home-quote-select-summary-view.png"
          alt="Summary view example"
          width={1296}
          height={1203}
        />
      </figure>

      <figure className="container max-w-3xl mx-auto p-6 mb-28">
        <Image
          src="/projects/goco-home-quote-select-edit.png"
          alt="Edit view example"
          width={856}
          height={1567}
        />
      </figure>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
