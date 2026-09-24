"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
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

  return (
    <div
      ref={cardRef}
      className="sticky top-[4vh] flex w-full items-center justify-center py-5 sm:top-[6vh] sm:py-7 md:top-[8vh] md:py-8 lg:top-[10vh] lg:py-10"
    >
      <motion.article
        style={
          {
            "--card-offset": `${index * 50}px`,
            zIndex: index + 1,
          } as React.CSSProperties
        }
        className="group relative top-0 flex w-full flex-col overflow-hidden rounded-[24px] border border-border/70 bg-card p-2 shadow-xl shadow-black/5 sm:rounded-[28px] sm:p-3 md:top-(--card-offset) md:h-145 md:flex-row md:rounded-[30px] md:p-4 xl:p-5"
      >
        {/* Project Number */}
        <div className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-[10px] font-bold text-foreground backdrop-blur-xl sm:right-5 sm:top-5 sm:h-11 sm:w-11 sm:text-xs">
          {String(project.id).padStart(2, "0")}
        </div>

        {/* Emerald Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover:bg-emerald-500/15" />

        {/* Project Image */}
        <div className="relative h-60 w-full shrink-0 overflow-hidden rounded-[20px] bg-muted sm:h-72 sm:rounded-[22px] md:h-full md:w-[52%] md:rounded-[24px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="(max-width: 767px) 100vw, 52vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Image Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />

          {/* View Project */}
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-500 sm:bottom-5 sm:right-5 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            View Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Project Content */}
        <div className="relative flex w-full flex-col justify-between px-3 py-6 sm:px-5 sm:py-7 md:w-[48%] md:px-8 md:py-7 xl:px-10 xl:py-8">
          {/* Top Content */}
          <div>
            {/* Label */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-6 bg-emerald-600 dark:bg-emerald-400 sm:w-8" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 sm:text-[10px] sm:tracking-[0.3em]">
                Featured Project
              </span>
            </div>

            {/* Title */}
            <h3 className="max-w-xl text-3xl font-black leading-[0.95] tracking-tighter sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[4rem]">
              {project.title}
              <span className="text-emerald-600 dark:text-emerald-400">.</span>
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          {/* Bottom Content */}
          <div className="mt-8 sm:mt-10 md:mt-6">
            {/* Tech Stack */}
            <div className="mb-6 flex flex-wrap gap-2 sm:mb-7">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-500/15 bg-emerald-500/5 px-2.5 py-1.5 text-[10px] font-medium text-foreground/70 transition-colors duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 sm:px-3 sm:text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Live Project */}
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 sm:px-5 sm:py-3 sm:text-sm"
              >
                Live Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5 sm:h-4 sm:w-4" />
              </Link>

              {/* GitHub */}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/github inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-500/5 sm:px-5 sm:py-3 sm:text-sm"
              >
                <FaGithub className="h-3.5 w-3.5 transition-transform duration-300 group-hover/github:scale-110 sm:h-4 sm:w-4" />
                GitHub
                <ArrowUpRight className="h-3 w-3 opacity-50 transition-all duration-300 group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5 group-hover/github:opacity-100 sm:h-3.5 sm:w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;