"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "ComAllies",
    description:
      "Corporate communications and public affairs consultancy website.",
    category: "CLIENT PROJECT",
    image: "/projects/comallies.png",
    tags: ["WordPress", "PHP", "HTML", "CSS"],
  },
  {
    title: "Believers Vision Publication",
    description:
      "An online platform dedicated to Islamic books and publications.",
    category: "CLIENT PROJECT",
    image: "/projects/believers.png",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Nexus SaaS Platform",
    description:
      "Modern SaaS platform with analytics, dashboards and role management.",
    category: "FEATURED WORK",
    image: "/projects/nexus.png",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Mentora",
    description:
      "An online learning platform designed for students and instructors.",
    category: "WEB APPLICATION",
    image: "/projects/mentora.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Wanderlust",
    description:
      "A modern travel blog platform for discovering and sharing destinations.",
    category: "WEB APPLICATION",
    image: "/projects/wanderlust.png",
    tags: ["Express.js", "MongoDB", "EJS", "Node.js"],
  },
  {
    title: "SportNest",
    description:
      "A sports venue booking platform with authentication and booking management.",
    category: "WEB APPLICATION",
    image: "/projects/sportnest.png",
    tags: ["Next.js", "Better Auth", "PostgreSQL", "Prisma"],
  },
  {
    title: "Video Share",
    description:
      "A social video sharing platform with uploads, likes, comments and stories.",
    category: "FULL STACK",
    image: "/projects/video-share.png",
    tags: ["Next.js", "Node.js", "Prisma", "Cloudinary"],
  },
  {
    title: "Print Master",
    description:
      "A Pinterest-inspired platform for uploading and discovering visual content.",
    category: "WEB APPLICATION",
    image: "/projects/print-master.png",
    tags: ["Next.js", "Cloudinary", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Project Nine",
    description:
      "A modern responsive web application built with a scalable architecture.",
    category: "WEB APPLICATION",
    image: "/projects/project-9.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project Ten",
    description:
      "A clean and modern digital experience focused on usability and performance.",
    category: "CLIENT PROJECT",
    image: "/projects/project-10.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Eleven",
    description:
      "A full-stack application with modern UI and backend architecture.",
    category: "FULL STACK",
    image: "/projects/project-11.png",
    tags: ["React", "Express.js", "PostgreSQL"],
  },
  {
    title: "Project Twelve",
    description:
      "A responsive web application with a strong focus on user experience.",
    category: "WEB APPLICATION",
    image: "/projects/project-12.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "Project Thirteen",
    description:
      "A modern dashboard application designed for data-driven workflows.",
    category: "DASHBOARD",
    image: "/projects/project-13.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Project Fourteen",
    description:
      "A scalable application built with modern JavaScript technologies.",
    category: "FULL STACK",
    image: "/projects/project-14.png",
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Project Fifteen",
    description:
      "A modern product website with responsive layouts and smooth interactions.",
    category: "CLIENT PROJECT",
    image: "/projects/project-15.png",
    tags: ["React", "Tailwind CSS", "Figma"],
  },
  {
    title: "Project Sixteen",
    description:
      "A full-stack platform focused on performance and clean user experience.",
    category: "FULL STACK",
    image: "/projects/project-16.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "Project Seventeen",
    description:
      "A responsive platform built with reusable components and modern UI.",
    category: "WEB APPLICATION",
    image: "/projects/project-17.png",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Project Eighteen",
    description:
      "A modern application with authentication, database integration and APIs.",
    category: "FULL STACK",
    image: "/projects/project-18.png",
    tags: ["Next.js", "Better Auth", "Prisma"],
  },
  {
    title: "Project Nineteen",
    description:
      "A polished web experience designed for modern businesses.",
    category: "CLIENT PROJECT",
    image: "/projects/project-19.png",
    tags: ["React", "Tailwind CSS", "Figma"],
  },
  {
    title: "Project Twenty",
    description:
      "A scalable full-stack application built with modern web technologies.",
    category: "FULL STACK",
    image: "/projects/project-20.png",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
];

const PROJECTS_PER_PAGE = 4;

type ProjectCardProps = {
  project: (typeof projects)[number];
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.96],
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.article
        style={{
          scale,
          top: `${index * 20}px`,
        }}
        className="relative flex h-[600px] w-full max-w-6xl flex-col overflow-hidden rounded-[30px] border bg-card p-4 shadow-2xl sm:p-6 md:flex-row md:p-8"
      >
        {/* Image */}
        <div className="relative h-[45%] w-full overflow-hidden rounded-[22px] bg-muted md:h-full md:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <span className="absolute left-4 top-4 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col justify-between p-5 sm:p-7 md:w-1/2 md:p-10">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Project {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="max-w-lg text-3xl font-black leading-[0.95] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          <div>
            <div className="mb-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    projects.length / PROJECTS_PER_PAGE,
  );

  const startIndex =
    (currentPage - 1) * PROJECTS_PER_PAGE;

  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top:
        document.getElementById("projects")?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-foreground" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Projects
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Selected
            <span className="block text-muted-foreground">
              work.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
            A selection of projects I have designed and developed
            using modern web technologies.
          </p>
        </div>
      </div>

      {/* Stacked Projects */}
      <div className="relative">
        {currentProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t px-4 py-10 sm:px-6 lg:px-8">
        {/* Previous */}
        <button
          onClick={() =>
            handlePageChange(currentPage - 1)
          }
          disabled={currentPage === 1}
          className="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">
            Previous
          </span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1.5">
          {Array.from(
            { length: totalPages },
            (_, index) => index + 1,
          ).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() =>
            handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
        >
          <span className="hidden sm:inline">
            Next
          </span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Project Counter */}
      <div className="pb-10 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Showing {startIndex + 1}–
          {Math.min(
            startIndex + PROJECTS_PER_PAGE,
            projects.length,
          )}{" "}
          of {projects.length} projects
        </span>
      </div>
    </section>
  );
};

export default ProjectsSection;