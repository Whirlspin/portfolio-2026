import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/logo";
import { ProjectListing } from "./project-listing";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "My projects",
  description: "A selection of work I've done spanning over 2 decades.",
};

export default function Projects() {
  return (
    <>
      <Logo />
      <div className="container mx-auto max-w-7xl px-3 mb-28">
        <header className="space-y-6 mb-10">
          <Image
            className="mx-auto"
            src="/projects/text-all-projects.svg"
            width={314}
            height={43}
            alt="All projects"
          />
          <h2 className="text-lg font-medium text-center md:max-w-3/6 mx-auto">
            From 'design-and-build' WordPress websites to user-tested UI's and
            data-driven SaaS dashboards that customers love using.
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectListing.map((project, key) => (
            <div key={key} className="mx-auto group">
              <Link href={project.href}>
                <div className="relative rounded">
                  <Image
                    src={project.image}
                    width={416}
                    height={300}
                    alt={project.title}
                    className="border border-zinc-200 mb-3 rounded"
                  />
                  <div className="w-full h-full group-hover:bg-black/60 absolute top-0 left-0 p-6 flex items-center group-hover:backdrop-blur-xs rounded transition-all duration-600">
                    <h6 className="opacity-0 group-hover:opacity-100 text-white font-medium text-center transition-all duration-600">
                      {project.description}
                    </h6>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-zinc-500 group-hover:text-red-700 transition-colors duration-600">
                  {project.client}
                </h4>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
