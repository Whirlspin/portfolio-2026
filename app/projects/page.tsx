"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../components/logo";
import { ProjectListing } from "./project-listing";
import Footer from "../components/footer";
import { useState } from "react";

const categoryNav = ["All", "UI/UX", "WordPress", "Design"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategory = ProjectListing.filter(
    (category) =>
      activeCategory === "All" || category.category === activeCategory
  );

  return (
    <>
      <Logo />
      <div className="container mx-auto max-w-7xl px-3 mb-28 mt-8">
        <header className="space-y-6 mb-20">
          <Image
            className="mx-auto"
            src="/projects/text-projects.svg"
            width={314}
            height={43}
            alt="All projects"
          />
          <h2 className="text-black! text-lg! leading-7! font-normal! text-center md:max-w-7/12 mx-auto">
            From designing and building WordPress & React websites to creating
            user-tested interfaces that customers love to use. All my own work
            unless otherwise stated.
          </h2>

          <div className="flex justify-center gap-4">
            {categoryNav.map((category, key) => (
              <button
                key={key}
                className={`text-lg font-medium px-4 py-2 rounded ${
                  activeCategory === category
                    ? "bg-red-700 border border-red-700 text-white"
                    : "bg-white text-red-700 border border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-300 cursor-pointer"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategory.map((project, key) => (
            <div key={key} className="mx-auto group">
              <Link href={project.href}>
                <div className="relative rounded">
                  <Image
                    src={project.image}
                    width={416}
                    height={300}
                    alt={project.title}
                    className="border border-zinc-200 mb-3 rounded scale-100 group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
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
      </div>
      <Footer />
    </>
  );
}
