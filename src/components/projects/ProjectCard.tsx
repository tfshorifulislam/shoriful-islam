"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
  tech: string[];
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.article
        style={{
          scale,
          top: `${index * 20}px`,
          zIndex: index + 1,
        }}
        className="relative flex h-[650px] w-full max-w-6xl flex-col overflow-hidden rounded-[30px] border bg-card p-3 shadow-2xl sm:p-5 md:h-[580px] md:flex-row md:p-6 lg:p-8"
      >
        {/* Project Image */}
        <div className="relative h-[45%] w-full overflow-hidden rounded-[22px] bg-muted md:h-full md:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
            {String(project.id).padStart(2, "0")}
          </div>
        </div>

        {/* Project Content */}
        <div className="flex w-full flex-1 flex-col justify-between px-2 py-5 sm:px-4 md:w-1/2 md:px-8 md:py-4 lg:px-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Project {String(project.id).padStart(2, "0")}
            </p>

            <h3 className="max-w-xl text-3xl font-black leading-[0.95] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          <div className="mt-7">
            {/* Tech Stack */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className=" relative z-20 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
              >
                Live Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;