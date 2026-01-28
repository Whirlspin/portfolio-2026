import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

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
      <ParallaxHeader
        headerImage="/projects/inquba-tablet.webp"
        subheading="inQuba"
        heading="Customer journey mapping software"
      />
      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="inQuba: Customer journey mapping software" />
        <h3>About the role</h3>
        <p>
          <strong>inQuba</strong> (employed: 2020 - 2023) is a fast paced
          software company (B2B SaaS) where one must get stuck in and start
          ideating immediately with wireframes so as to solve business
          requirements. Being a small organisation and seeing I'm the
          only/principal product designer, its rewarding when my UI designs come
          to life within a software production environment.
          <i> My work below highlight the design process I use.</i>
        </p>
        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Design</h5>
            <Tooltip
              tooltiptext="Figma"
              imageSrc="/tech-stack-figma.svg"
              altText="Figma"
            />
            <Tooltip
              tooltiptext="Adobe XD"
              imageSrc="/tech-stack-xd.svg"
              altText="Adobe XD"
            />
            <Tooltip
              tooltiptext="Miro"
              imageSrc="/tech-stack-miro.svg"
              altText="Miro"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Development</h5>
            <Tooltip
              tooltiptext="HTML5"
              imageSrc="/tech-stack-html5.svg"
              altText="HTML5"
            />
            <Tooltip
              tooltiptext="CSS3"
              imageSrc="/tech-stack-css3.svg"
              altText="CSS3"
            />
            <Tooltip
              tooltiptext="JavaScript"
              imageSrc="/tech-stack-js.svg"
              altText="JavaScript"
            />
            <Tooltip
              tooltiptext="Bootstrap"
              imageSrc="/tech-stack-bootstrap.svg"
              altText="Bootstrap"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Documentation</h5>
            <Tooltip
              tooltiptext="Google Docs"
              imageSrc="/tech-stack-google-docs.svg"
              altText="Google Docs"
            />
          </div>
        </div>
      </main>

      {/* UX approach  */}
      <section className="w-full bg-stone-100 py-28">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 lg:px-0 ">
          <div className="mx-auto sm:mx-0 w-8/12 sm:w-full">
            <Image
              src="/projects/inquba-icon-binoculars.svg"
              alt="Binoculars"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="font-bold! mb-1">1. Discover</h4>
            <ul className="list-none!">
              <li className="ml-0! pl-0!">User research</li>
              <li className="ml-0! pl-0!">Stakeholder interviews</li>
              <li className="ml-0! pl-0!">Competitive analysis</li>
            </ul>
          </div>

          <div className="mx-auto sm:mx-0 w-8/12 sm:w-full">
            <Image
              src="/projects/inquba-icon-target.svg"
              alt="Target"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="font-bold! mb-1">2. Define</h4>
            <ul className="list-none!">
              <li className="ml-0! pl-0!">Personas</li>
              <li className="ml-0! pl-0!">Affinity graphs</li>
              <li className="ml-0! pl-0!">User journey mapping</li>
            </ul>
          </div>

          <div className="mx-auto sm:mx-0 w-8/12 sm:w-full">
            <Image
              src="/projects/inquba-icon-lightbulb.svg"
              alt="Lightbulb"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="font-bold! mb-1">3. Ideate</h4>
            <ul className="list-none!">
              <li className="ml-0! pl-0!">User flow</li>
              <li className="ml-0! pl-0!">Card sorting</li>
              <li className="ml-0! pl-0!">Information architecture</li>
            </ul>
          </div>

          <div className="mx-auto sm:mx-0 w-8/12 sm:w-full">
            <Image
              src="/projects/inquba-icon-design.svg"
              alt="Design"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="font-bold! mb-1">4. Design</h4>
            <ul className="list-none!">
              <li className="ml-0! pl-0!">Wireframes</li>
              <li className="ml-0! pl-0!">Hi-fi designs</li>
              <li className="ml-0! pl-0!">Interactive prototypes</li>
            </ul>
          </div>

          <div className="mx-auto sm:mx-0 w-8/12 sm:w-full">
            <Image
              src="/projects/inquba-icon-list.svg"
              alt="Test"
              width={60}
              height={60}
              className="mb-4"
            />
            <h4 className="font-bold! mb-1">5. Test</h4>
            <ul className="list-none!">
              <li className="ml-0! pl-0!">Feedback</li>
              <li className="ml-0! pl-0!">Conclusions</li>
              <li className="ml-0! pl-0!">Future concepts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User persona */}
      <section className="container mx-auto max-w-7xl px-6 py-28">
        <div className="lg:w-9/12 mx-auto">
          <h3>User persona</h3>
          <p className="mb-5!">
            Theoretically the role of personas is to help understand the
            customer's needs, experiences, behaviours, pain points and goals.
            Personas also make the design task less complex, help guide the
            ideation process and look to achieve a good user experience for that
            specific target user group.
          </p>
          <p>
            The question-and-answer scenario below is based on general feedback
            I compiled together in 2021.
          </p>
        </div>
        <Image
          src="/projects/inquba-cx-analyst.svg"
          alt="User persona - CX Analyst"
          width={238}
          height={199}
          className="mx-auto"
        />
        <h3 className="text-orange-600! text-center">CX Analyst</h3>

        <div className="flex flex-col lg:flex-row mt-4 gap-6">
          <article className="w-full">
            <h3>Goal</h3>
            <p className="mb-0! font-bold">
              What does the CX Analyst hope to achieve with inQuba Journey?
            </p>
            <ul className="mb-10">
              <li>
                Define, analyse and understand a customer's end-to-end journey
                experience
              </li>
              <li>
                Build and automate journey interventions across all channels of
                engagement
              </li>
              <li>
                Easily compare and segment journey paths based on date,
                demographic, custom cohort, tags, keywords and taxonomies
              </li>
              <li>
                Seek to optimise bottle-necks and obstacles along broad and
                granular journey paths
              </li>
              <li>Ability to build out one's own journey path</li>
              <li>
                Receive instant customer/survey data that can rapidly integrate
                into testing new journey possibilities{" "}
              </li>
            </ul>
            <p className="mb-2! font-bold">Keywords</p>
            <div className="flex flex-row flex-wrap gap-4 mb-10">
              <h5 className="text-black! bg-orange-100 px-3 py-2.5 rounded-md font-medium!">
                Deep data mining
              </h5>
              <h5 className="text-black! bg-orange-100 px-3 py-2.5 rounded-md font-medium!">
                Integrated cohort creation
              </h5>
              <h5 className="text-black! bg-orange-100 px-3 py-2.5 rounded-md font-medium!">
                Advanced customer insights
              </h5>
              <h5 className="text-black! bg-orange-100 px-3 py-2.5 rounded-md font-medium!">
                Customisation
              </h5>
            </div>
            <h3>Pain points</h3>
            <p className="mb-0! font-bold">
              Stumbling blocks that hinder the persona from achieving their
              goal.
            </p>
            <ul className=" mb-5">
              <li>
                Lack of real, insightful results. The software must have the
                capability to go beyond the surface to extract deep and
                meaningful insights
              </li>
              <li>
                Tools within the product to help make sense of big data so as to
                avoid drowning in a sea of data
              </li>
              <li>
                Automate repetitive tasks easily. Also the capability to program
                tasks in Python or R
              </li>
              <li>
                Prompts and indicators need to be relevant and applicable to the
                task at hand
              </li>
              <li>
                Data visualisations need to be interchangeable, (pie chart can
                easily convert to a doughnut chart)
              </li>
            </ul>
          </article>
          <article className="w-full">
            <h3>Scenario</h3>
            <p className="mb-0! font-bold">
              Define when, where and how the story of the persona takes place.
            </p>
            <p className="mb-5!">
              The CX team is always looking for new ways to extract insights and
              with 'inQuba Journey' we're seeing great potential with its 360°
              view of the customer's journey experience.
            </p>
            <p className="mb-5!">
              The interchangeable micro and macro viewing capability is the
              starting point for almost every strategy session. Also, the
              ability to easily 'slice 'n dice' (segment) the customer base in
              innumerable ways provides the flexibility we need to find that
              golden thread where a certain audience, often buried deep in the
              system needs attention.
            </p>
            <p className="mb-5!">
              There's alot of competition in the CX market and what makes
              'inQuba Journey' the differentiator is its sentiment overlay
              capability. Whether its VoC, survey responses, reporting insights
              or an obvious bottleneck, the fact that all these elements can be
              viewed in one central place without being overwhelming really
              makes our lives easier. Oh, and did I mention you can also
              intervene on that same screen too?
            </p>
            <p>
              Data visualisations need refining but we're promised
              interchangeable views in an upcoming release.
            </p>

            <h3>Needs</h3>
            <p className="mb-2! font-bold">Product features for CX Analysts</p>
            <div className="flex items-center gap-4 mb-3">
              <h5 className="text-nowrap w-8/12 text-right">
                Customer journey
              </h5>
              <div className="bg-orange-100 w-full h-4">
                <div className="bg-orange-600 w-[82%] h-full rounded-r" />
              </div>
              <h5 className="text-orange-600!">82%</h5>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <h5 className="text-nowrap w-8/12 text-right">CX reporting</h5>
              <div className="bg-orange-100 w-full h-4">
                <div className="bg-orange-600 w-[74%] h-full rounded-r" />
              </div>
              <h5 className="text-orange-600!">74%</h5>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <h5 className="text-nowrap w-8/12 text-right">Engage</h5>
              <div className="bg-orange-100 w-full h-4">
                <div className="bg-orange-600 w-[80%] h-full rounded-r" />
              </div>
              <h5 className="text-orange-600!">80%</h5>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <h5 className="text-nowrap w-8/12 text-right">
                Voice of the customer
              </h5>
              <div className="bg-orange-100 w-full h-4">
                <div className="bg-orange-600 w-[92%] h-full rounded-r" />
              </div>
              <h5 className="text-orange-600!">92%</h5>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <h5 className="text-nowrap w-8/12 text-right">Case management</h5>
              <div className="bg-orange-100 w-full h-4">
                <div className="bg-orange-600 w-[40%] h-full rounded-r" />
              </div>
              <h5 className="text-orange-600!">40%</h5>
            </div>
          </article>
        </div>
      </section>

      {/* Information architecture  */}
      <section className="w-full bg-stone-100 py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="lg:w-9/12 mx-auto mb-10">
            <h3>Information architecture</h3>
            <p className="mb-5!">
              My job entails creating an experience that allows the user to
              focus on their tasks, not on finding their way around the
              platform. With this in mind I started a user flow at its highest,
              most simplest level (see below).
            </p>
            <p>
              Within a collaborative environment, the product team (myself and
              two other colleagues) explored numerous user flow scenarios that
              are always evolving as business requirements keep changing.
            </p>
          </div>

          <Image
            src="/projects/inquba-sitemap.png"
            alt="inQuba sitemap"
            width={1203}
            height={649}
          />
        </div>
      </section>

      {/* UI guidelines */}
      <section className="container mx-auto max-w-7xl px-6 pt-28 pb-12">
        <div className="lg:w-9/12 mx-auto">
          <h3>UI guidelines</h3>
          <p>
            My goal is to keep things simple and consistent so that it's
            actually implemented. In my experience, less is definitely more when
            it comes to guidelines. If you want your product team to actually
            use and understand the guidelines, it's important to keep them
            concise so that they're easy to consume and remember.
          </p>
        </div>

        <h3 className="my-3">Typography and colours</h3>
        <img
          src="/projects/inquba-ui-typography.svg"
          width="100%"
          height="auto"
          alt="Typography"
          className="mb-10"
        />

        <h3 className="my-3">Components</h3>
        <img
          src="/projects/inquba-ui-components.svg"
          width="100%"
          height="auto"
          alt="Components"
          className="mb-12"
        />

        <h3 className="my-3">High fidelity designs</h3>
        <Image
          src="/projects/inquba-ui-customer-journey.png"
          width={1600}
          height={900}
          alt="inQuba journey"
          className="border border-stone-200 rounded-2xl mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/projects/inquba-ui-start.png"
            width={800}
            height={450}
            alt="inQuba start"
            className="rounded-lg border border-stone-200"
          />
          <Image
            src="/projects/inquba-ui-dashboard.png"
            width={800}
            height={450}
            alt="inQuba dashboard"
            className="rounded-lg border border-stone-200"
          />
          <Image
            src="/projects/inquba-ui-dialogue-builder.png"
            width={800}
            height={450}
            alt="inQuba - Dialogue builder"
            className="rounded-lg border border-stone-200"
          />
          <Image
            src="/projects/inquba-ui-customer-journey-old.png"
            width={800}
            height={450}
            alt="inQuba - old journey model"
            className="rounded-lg border border-stone-200"
          />
        </div>
      </section>

      {/* Standout moment  */}
      <section className="container mx-auto max-w-7xl px-6 pb-28">
        <div className="flex flex-col md:flex-row">
          <Image
            src="/projects/inquba-ui-node-menu.png"
            width={907}
            height={900}
            alt="Dropdown-menu"
            className="w-full order-2 md:order-1 rounded-2xl border-2 border-l-stone-100"
          />
          <div className="w-full order-1 md:order-2 flex flex-col justify-center align-middle">
            <h3>Standout moment</h3>
            <p className="mb-5!">
              By dramatically enhancing each touch point's capability on the
              customer journey map (Sankey Diagram) into an autonomous tool that
              drives all the capability in the software is probably my most
              worthwhile contribution. This main feature really resonates with
              our users and probably makes it stand apart from the competition.
            </p>
          </div>
        </div>
      </section>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
