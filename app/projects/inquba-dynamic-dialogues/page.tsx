import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/app/components/logo";
import ParallaxHeader from "@/app/components/ParallaxHeader";
import BreadcrumbNav from "@/app/components/breadcrumbNav";
import Tooltip from "@/app/components/tooltip";
import CategoryListingFooter from "@/app/components/categoryListingFooter";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "inQuba: Dynamic Dialogues • Jethro Edwards' portfolio website",
  description:
    "inQuba is a customer journey mapping software. This project involved creating dynamic dialogues for user interactions.",
};

export default function inQubaDynamicDialogues() {
  return (
    <>
      <Logo />
      <ParallaxHeader
        headerImage="/projects/inquba-dynamic-dialogues-masthead.webp"
        subheading="inQuba"
        heading="Dynamic Dialogues ideation exercise"
      />

      <main className="container mx-auto max-w-4xl px-6 lg:px-0 py-28">
        <BreadcrumbNav projectTitle="inQuba: Dynamic Dialogues ideation exercise" />
        <h3>Problem statement</h3>
        <p>
          The dialogue builder is challenging to use, even under ideal
          conditions. Our in-house CX Analyst frequently expresses frustration
          with the user interface and its awkward functionality. We need a new
          strategy to enhance this software feature.
        </p>
        <h3>Current scenario</h3>
        <p>
          Customer dialogues must follow distinct paths, but the current
          software struggles with establishing these connections.
        </p>
        <h3>Immediate assumption</h3>
        <p>
          As the design lead, I initially thought a node-based solution could be
          effective, as some competitors have successfully navigated complex
          dialogues this way. However, have we thoroughly investigated this
          approach before jumping to conclusions? Relying on assumptions can be
          risky and isn't considered best practice in UX.
        </p>
        <h3>My role</h3>
        <p>
          Competitor analysis • Brainstorming sessions with supporting
          wireframes • Validate hi-fi designs with stakeholders (in-house CX
          analysts & business)
        </p>
        <div className="flex flex-row flex-wrap gap-9">
          <div className="flex flex-row items-center gap-3">
            <h5>Wireframes & documentation</h5>
            <Tooltip
              tooltiptext="Miro"
              imageSrc="/tech-stack-miro.svg"
              altText="Miro"
            />
          </div>
          <div className="flex flex-row items-center gap-3">
            <h5>Design</h5>
            <Tooltip
              tooltiptext="Adobe XD"
              imageSrc="/tech-stack-xd.svg"
              altText="Adobe XD"
            />
          </div>
        </div>
      </main>

      {/* Competitor anslysis  */}
      <section className="container max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3>Competitor analysis</h3>
            <p className="mb-5!">
              By gathering information on our competitors in this particular
              space (Twilio, Survey Monkey & DialogueFlow CX) I examined the
              strengths and weaknesses of each tool. Jotting down a rudimentary
              SWOT & technological analysis to reference when necessary.
            </p>
            <p className="mb-5!">
              Given our small team size, I approached this task with a light
              touch as my primary focus would be:
            </p>
            <ul>
              <li>Ideation (brainstorming ideas)</li>
              <li>Crafting designs at varying fidelity levels</li>
              <li>Receive user feedback and iterate the process again</li>
            </ul>
          </div>
          <Image
            src="/projects/inquba-dynamic-dialogues-1.png"
            width={628}
            height={434}
            alt="Competitor analysis"
          />
        </div>
      </section>

      {/* First iteration  */}
      <section className="container max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <Image
            className="order-2 lg:order-1"
            src="/projects/inquba-dynamic-dialogues-2.png"
            width={628}
            height={561}
            alt="Wireframe sketches of dynamic dialogues"
          />
          <div className="order-1 lg:order-2">
            <h3>First 'design process' iteration</h3>
            <p className="mb-5!">
              I started with the 'linear tree' first seeing it was a simple
              concept and easy to integrate onto inQuba's platform. See
              alongside.
            </p>
            <p>
              Unfortunately initial feedback from stakeholders was lukewarm,
              nevertheless I pushed the conversation with a high fidelity
              interactive design in Adobe XD illustrating the concept, admitting
              it wasn't the best solution, but encouraging how this approach was
              a 'quick fix'.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex gap-3 align-middle bg-stone-100 px-5 py-4 mb-3">
                  <img
                    src="/projects/inquba-icon-positive.svg"
                    width={18}
                    height={18}
                    alt="Positive icon"
                  />
                  <h4 className="text-stone-600! font-bold!">Pros</h4>
                </div>
                <ul>
                  <li>Super simple by following the 'linear tree' pattern</li>
                  <li>Easy to learn</li>
                  <li>Works well on SMS</li>
                </ul>
              </div>

              <div>
                <div className="flex gap-3 align-middle bg-stone-100 px-5 py-4 mb-3">
                  <img
                    src="/projects/inquba-icon-negative.svg"
                    width={18}
                    height={18}
                    alt="Negative icon"
                  />
                  <h4 className="text-stone-600! font-bold!">Cons</h4>
                </div>
                <ul>
                  <li>One size doesn't fit all</li>
                  <li>Lacks extended capabilities</li>
                  <li>Too simplistic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second iteration  */}
      <section className="container max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div>
            <h3>Second iteration did the trick</h3>
            <p className="mb-5!">
              Now quite familiar with the ‘dialogue landscape’ I proposed a new
              idea that would fit seamlessly with inQuba’s platform. The drive
              here was to deep nest the conversation flows. It might mean having
              alot of accordions, but the solution made a good fit under the
              circumstances.
            </p>
            <p>
              The jury (business) were out on this one, but I had a good feeling
              about this approach and started getting user feedback by testing
              the idea and sharing the high-fidelity interactive designs among
              users to trial this concept. It was a success!!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex gap-3 align-middle bg-stone-100 px-5 py-4 mb-3">
                  <img
                    src="/projects/inquba-icon-positive.svg"
                    width={18}
                    height={18}
                    alt="Positive icon"
                  />
                  <h4 className="text-stone-600! font-bold!">Pros</h4>
                </div>
                <ul>
                  <li>Works within the current software design model</li>
                  <li>Intuitive and easy to use</li>
                  <li>Handles complexity</li>
                </ul>
              </div>

              <div>
                <div className="flex gap-3 align-middle bg-stone-100 px-5 py-4 mb-3">
                  <img
                    src="/projects/inquba-icon-negative.svg"
                    width={18}
                    height={18}
                    alt="Negative icon"
                  />
                  <h4 className="text-stone-600! font-bold!">Cons</h4>
                </div>
                <ul>
                  <li>Space could get claustrophobic, but manageable </li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/projects/inquba-dynamic-dialogues-3.png"
            width={628}
            height={561}
            alt="High fidelity design of dynamic dialogues"
          />
        </div>
      </section>

      {/* Extending capabilities */}
      <section className="container max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <Image
            className="order-2 lg:order-1"
            src="/projects/inquba-dynamic-dialogues-4.png"
            width={628}
            height={561}
            alt="Extending capabilities wireframe sketches of dynamic dialogues"
          />
          <div className="order-1 lg:order-2">
            <h3>Extending its capabilities</h3>
            <p>
              To maintain momentum, Trent, the MD of the company encouraged
              further exploration, especially into the node based capabilities
              that top competitors achieved. Although this avenue didn't reach
              its full potential, it was still enjoyable to explore.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex gap-3 align-middle bg-stone-100 px-5 py-4 mb-3">
                  <img
                    src="/projects/inquba-icon-positive.svg"
                    width={18}
                    height={18}
                    alt="Positive icon"
                  />
                  <h4 className="text-stone-600! font-bold!">Pros</h4>
                </div>
                <ul>
                  <li>Excellent feedback based on wireframes</li>
                  <li>Able to manage endless possibilities</li>
                  <li>Ideal solution (theoretically)</li>
                </ul>
              </div>

              <div>
                <div className="flex gap-3 align-middle bg-stone-100 px-5 py-4 mb-3">
                  <img
                    src="/projects/inquba-icon-negative.svg"
                    width={18}
                    height={18}
                    alt="Negative icon"
                  />
                  <h4 className="text-stone-600! font-bold!">Cons</h4>
                </div>
                <ul>
                  <li>
                    Beyond the scope of what's achievable from a development
                    perspective
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryListingFooter categoryChoose="UI/UX" />

      <Footer />
    </>
  );
}
