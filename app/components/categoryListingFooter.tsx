import Image from "next/image";
import Link from "next/link";
import { ProjectListing } from "@/app/projects/project-listing";

interface CategoryListingFooterProps {
  categoryChoose: string;
}

export default function CategoryListingFooter({
  categoryChoose,
}: CategoryListingFooterProps) {
  return (
    <section className="container mx-auto max-w-7xl px-3 mb-28">
      <hr className="bg-stone-200 h-0.5 border-0 mb-28" />

      {/* More like this title */}
      <Image
        src="/projects/text-more-like-this.svg"
        alt="text more like this"
        width={330}
        height={40}
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectListing.filter(
          (project) => project.category === categoryChoose
        ).map((project) => (
          <div key={project.href} className="group">
            <Link href={`/${project.href}`}>
              <Image
                src={project.image}
                width={416}
                height={300}
                alt={project.title}
                className="border border-zinc-200 mb-3 rounded scale-100 group-hover:scale-105 transition-transform duration-600"
              />
              <h5 className=" group-hover:text-red-700! transition-colors duration-600">
                {project.client}
              </h5>
              <h3 className="text-xl! font-semibold! leading-6! text-black!">
                {project.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
