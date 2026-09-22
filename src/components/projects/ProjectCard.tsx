
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

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.96],
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex h-[calc(100vh-80px)] items-center justify-center"
    >
      <motion.article
        style={{
          scale,
          top: `${index * 20}px`,
          zIndex: index + 1,
        }}
        className="relative flex w-full max-w-7xl flex-col overflow-hidden rounded-xl border bg-card p-3 md:h-145 h-163 md:flex-row"
      >
        {/* Project Image */}
        <div className="relative h-[45%] w-full overflow-hidden rounded-xl bg-muted md:h-full md:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 hover:scale-105"
          />

          {/* Project Number */}
          <div className="absolute left-4 top-4 rounded-full border border-emerald-600/30 bg-background/80 px-3 py-1.5 text-xs font-semibold text-emerald-600 backdrop-blur-md dark:border-emerald-400/30 dark:text-emerald-400">
            {String(project.id).padStart(2, "0")}
          </div>
        </div>

        {/* Project Content */}
        <div className="flex w-full flex-1 flex-col justify-between px-2 py-5 sm:px-4 md:w-1/2 md:px-8 md:py-4 lg:px-10">
          <div>
            {/* Project Label */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Project {String(project.id).padStart(2, "0")}
            </p>

            {/* Title */}
            <h3 className="max-w-xl text-3xl font-black leading-[0.95] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              <span className="text-foreground">
                {project.title}
              </span>
            </h3>

            {/* Description */}
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
                  className="rounded-full border border-emerald-600/20 bg-emerald-600/5 px-3 py-1.5 text-xs font-medium text-emerald-600 transition-colors duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Live Project */}
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-20 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-500"
              >
                Live Project

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* GitHub */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center gap-2 rounded-full border border-emerald-600/30 px-5 py-3 text-sm font-semibold text-emerald-600 transition-colors duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-emerald-400/30 dark:text-emerald-400"
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