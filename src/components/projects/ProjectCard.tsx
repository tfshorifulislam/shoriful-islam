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
    [1, 0.96]
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-[10vh] flex min-h-175 items-center justify-center px-4 py-10 sm:px-6 md:min-h-162.5 lg:px-8"
    >
      <motion.article
        style={{
          scale,
          top: `${index * 50}px`,
          zIndex: index + 1,
        }}
        className="group relative flex h-162.5 w-full max-w-7xl flex-col overflow-hidden rounded-[30px] border border-border/70 bg-card p-2 shadow-xl shadow-black/5 sm:p-3 md:h-145 md:flex-row md:p-4 lg:p-5"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover:bg-emerald-500/15" />

        {/* Project Image */}
        <div className="relative h-[45%] w-full overflow-hidden rounded-[24px] bg-muted md:h-full md:w-[52%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Image Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />

          {/* Project Number */}
          <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs font-bold text-white backdrop-blur-xl">
            {String(project.id).padStart(2, "0")}
          </div>

          {/* View Project */}
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-semibold text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            View Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Project Content */}
        <div className="relative flex w-full flex-1 flex-col justify-between px-3 py-6 sm:px-5 md:w-[48%] md:px-7 md:py-6 lg:px-10 lg:py-8">
          {/* Top Content */}
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                Featured Project
              </span>
            </div>

            {/* Title */}
            <h3 className="max-w-xl text-4xl font-black leading-[0.92] tracking-tighter sm:text-5xl lg:text-[4rem]">
              {project.title}
              <span className="text-emerald-600 dark:text-emerald-400">
                .
              </span>
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          {/* Bottom Content */}
          <div className="mt-8">
            {/* Tech Stack */}
            <div className="mb-7 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-500/15 bg-emerald-500/5 px-3 py-1.5 text-[11px] font-medium text-foreground/70 transition-colors duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
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
                className="group/button inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25"
              >
                Live Project

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </Link>

              {/* GitHub */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/github inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-500/5"
              >
                <FaGithub className="h-4 w-4 transition-transform duration-300 group-hover/github:scale-110" />

                GitHub

                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5 group-hover/github:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;