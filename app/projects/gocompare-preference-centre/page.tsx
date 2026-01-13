import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Go Compare's preference centre • Jethro Edwards' portfolio website",
  description:
    "A preference centre allowing users to manage their marketing communications.",
};

export default function goComparePreferenceCentre() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/goco-preference-masthead.webp"
        subheading="Go.Compare"
        heading="Email settings on the 'Preference Centre'"
      />
      {/* Introduction  */}
      <section className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="Go.Compare: Preference Centre" />
        <h3>Background</h3>
        <p>
          The 'Preference Centre' was introduced in 2024 as a tool for
          Go.Compare customers to tailor their eMail marketing and renewal
          reminders. This feature is new to Go.Compare but competitors like
          MoneySuperMarket & Compare the Market had something already in place.
        </p>
        <h3>Team effort</h3>
        <p>
          Competitor analysis and brainstorming sessions • Low & high fidelity
          designs (myself) • Interactive prototype with conditional logic in
          Figma (myself) • Examine, plot and refine the user journey • Iterate
          the design based on research findings (myself)
        </p>

        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Wireframes and documentation</h5>
            <Tooltip
              tooltiptext="Miro"
              imageSrc="/tech-stack-miro.svg"
              altText="Miro"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Working prototype</h5>
            <Tooltip
              tooltiptext="Figma"
              imageSrc="/tech-stack-figma.svg"
              altText="Figma"
            />
          </div>
        </div>
      </section>

      {/* The strategy */}
      <section className="w-full bg-green-50 py-28 mb-28">
        <div className="container mx-auto max-w-4xl px-6 lg:px-0 pb-16">
          <div className="flex flex-col md:flex-row gap-9">
            <div className="md:w-8/12">
              <h3>The strategy</h3>
              <p className="mb-5!">
                From a clean slate I defined all the individual elements
                (colours, typography, spacing and imagery) thereby establishing
                the foundation for a new design system. The next stage was
                bringing these elements (atoms) together to produce components,
                then patterns (organisms) and eventually fully defined pages.
              </p>
              <p className="mb-0!">
                It was agreed upon among the stakeholders to hypothesis then
                validate a <strong>fully working prototype</strong> with real
                users. This approach would provide the best user insights,
                especially for the 'unsubscribe from all' button and the
                disabled/enabled primary button logic that needed validating
                before release.
              </p>
            </div>

            <video
              className="md:w-4/12 h-auto max-w-full rounded border border-stone-300"
              autoPlay
              muted
              loop
            >
              <source
                src="/projects/goco-preference-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <Image
          src="/projects/goco-preference-wireframe.png"
          alt="Wireframes"
          width={856}
          height={963}
          className="mb-14"
        />
        <h3>User flow logic (wireframes)</h3>
        <ul>
          <li>
            The 'uncheck the box' or 'unsubscribe from all' checkbox feature was
            recommended as a requirement by the compliance department at
            Go.Compare.
          </li>
          <li>
            More importantly, from a UX perspective its best practice to use
            positive phrasing by hypothetically putting the word 'Yes' in front
            of the instruction. This would be applied to the 'unsubscribe from
            all' checkbox feature. See below.
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
          <Image
            src={"/projects/goco-preference-design-checkbox-1.png"}
            alt="UX example 1"
            width={455}
            height={144}
          />
          <Image
            src={"/projects/goco-preference-design-checkbox-2.png"}
            alt="UX example 2"
            width={455}
            height={144}
          />
        </div>

        <ul>
          <li>
            Default: While there are subscribed (checked) marketing comms and
            renewal reminders like 'Car insurance' etc. the 'unsubscribe from
            all' checkbox at the bottom of the list remains present and checked.
          </li>
          <li>
            The user essentially has a choice each time they wish to
            unsubscribe. They can unsubscribe individually by unchecking each
            checkbox element or to unsubscribe from all communication with a
            single 'unsubscribe from all' checkbox option which is a larger
            checkbox and stands outside of any category.
          </li>
          <li>
            Should a user re-activate a subscription then the 'unsubscribe from
            all' checkbox element reappears checked and is in full operation
            again.
          </li>
          <li>
            Important! The 'Update preferences' button remains disable until
            user interaction is detected. This will serve notice to the user
            that a change must be confirmed with an active button state. See
            above wireframe.
          </li>
        </ul>
      </section>

      <figure className="container mx-auto max-w-4xl px-6 lg:px-0 mb-28">
        <Image
          src={"/projects/goco-preference-design.png"}
          alt="Final design"
          width={1440}
          height={2828}
        />
      </figure>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
