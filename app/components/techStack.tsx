import Image from "next/image";
import Tooltip from "./tooltip";

export default function TechStack() {
  return (
    <section className="w-full bg-white px-3 mb-16 md:mb-36">
      <div className="container mx-auto max-w-7xl">
        <Image
          src="/text-tech-stack.svg"
          width={274}
          height={41}
          alt="My preferred tech stack"
          className="mb-8"
        />

        <div className="flex flex-wrap gap-y-6">
          {/* Design */}
          <div className="sm:mr-10 flex items-center gap-3">
            <h5 className="text-black! bg-stone-100 px-4 py-2 inline-block rounded">
              Design
            </h5>

            <Tooltip
              tooltiptext="Figma"
              imageSrc="/tech-stack-figma.svg"
              altText="Figma"
            />

            <Tooltip
              tooltiptext="Miro"
              imageSrc="/tech-stack-miro.svg"
              altText="Miro"
            />

            <Tooltip
              tooltiptext="Affinity"
              imageSrc="/tech-stack-affinity.svg"
              altText="Affinity"
            />
          </div>

          {/* Development */}
          <div className="sm:mr-10 flex flex-nowrap items-center gap-3">
            <h5 className="text-black! bg-stone-100 px-4 py-2 inline-block rounded">
              Development
            </h5>

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
              tooltiptext="TypeScript"
              imageSrc="/tech-stack-typescript.svg"
              altText="TypeScript"
            />
          </div>

          {/* Tech  */}
          <div className="sm:mr-10 flex flex-nowrap items-center gap-3">
            <h5 className="text-black! bg-stone-100 px-4 py-2 inline-block rounded">
              Tech
            </h5>

            <Tooltip
              tooltiptext="React"
              imageSrc="/tech-stack-react.svg"
              altText="React"
            />

            <Tooltip
              tooltiptext="Tailwind CSS"
              imageSrc="/tech-stack-tailwind.svg"
              altText="Tailwind CSS"
            />

            <Tooltip
              tooltiptext="Next.js"
              imageSrc="/tech-stack-nextjs.svg"
              altText="Next.js"
            />

            <Tooltip
              tooltiptext="WordPress"
              imageSrc="/tech-stack-wordpress.svg"
              altText="WordPress"
            />
          </div>

          {/* Tools */}
          <div className="sm:mr-10 flex flex-nowrap items-center gap-3">
            <h5 className="text-black! bg-stone-100 px-4 py-2 inline-block rounded">
              Tools
            </h5>

            <Tooltip
              tooltiptext="Google Analytics"
              imageSrc="/tech-stack-analytics.svg"
              altText="Google Analytics"
            />

            <Tooltip
              tooltiptext="Hotjar"
              imageSrc="/tech-stack-hotjar.svg"
              altText="Hotjar"
            />

            <Tooltip
              tooltiptext="Github"
              imageSrc="/tech-stack-github.svg"
              altText="Github"
            />

            <Tooltip
              tooltiptext="Mailchimp"
              imageSrc="/tech-stack-mailchimp.svg"
              altText="Mailchimp"
            />
          </div>

          {/* Hosting */}
          <div className="sm:mr-10 flex flex-nowrap items-center gap-3">
            <h5 className="text-black! bg-stone-100 px-4 py-2 inline-block rounded">
              Hosting
            </h5>

            <Tooltip
              tooltiptext="Vercel"
              imageSrc="/tech-stack-vercel.svg"
              altText="Vercel"
            />

            <Tooltip
              tooltiptext="Hostinger"
              imageSrc="/tech-stack-hostinger.svg"
              altText="Hostinger"
            />

            <Tooltip
              tooltiptext="Hetzner"
              imageSrc="/tech-stack-hetzner.svg"
              altText="Hetzner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
