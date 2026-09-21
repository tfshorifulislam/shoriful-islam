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
      className="
        sticky top-0
        flex
        min-h-[620px]
        items-center
        justify-center
        px-4
        pb-8
        sm:px-6
        sm:pb-10
        lg:px-8
      "
    >
      <motion.article
        style={{
          scale,
          top: `${index * 20}px`,
          zIndex: index + 1,
        }}
        className="
          group relative
          flex h-[600px] w-full max-w-6xl
          flex-col overflow-hidden
          rounded-[30px]
          border bg-card
          p-3 shadow-2xl
          transition-all duration-500
          hover:border-green-600/40
          hover:shadow-green-600/10
          sm:p-5
          md:h-[540px]
          md:flex-row
          md:p-6
          lg:p-8
          dark:hover:border-green-400/40
          dark:hover:shadow-green-400/10
        "
      >
        {/* Project Image */}
        <div className="relative h-[42%] w-full overflow-hidden rounded-[22px] bg-muted md:h-full md:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover object-top
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-green-600/0 transition-colors duration-500 group-hover:bg-green-600/5 dark:group-hover:bg-green-400/5" />

          <div
            className="
              absolute left-4 top-4
              rounded-full
              border border-green-600/20
              bg-background/85
              px-3 py-1.5
              text-xs font-bold
              text-green-600
              shadow-sm
              backdrop-blur-md
              dark:border-green-400/20
              dark:text-green-400
            "
          >
            {String(project.id).padStart(2, "0")}
          </div>
        </div>

        {/* Project Content */}
        <div className="flex w-full flex-1 flex-col justify-between px-2 py-4 sm:px-4 md:w-1/2 md:px-8 md:py-3 lg:px-10">
          <div>
            {/* Project Label */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-green-600 dark:bg-green-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-green-400">
                Project {String(project.id).padStart(2, "0")}
              </p>
            </div>

            {/* Title */}
            <h3
              className="
                max-w-xl
                text-3xl font-black
                leading-[0.95]
                tracking-[-0.045em]
                transition-colors duration-300
                group-hover:text-green-600
                sm:text-4xl
                lg:text-5xl
                dark:group-hover:text-green-400
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          <div className="mt-5">
            {/* Tech Stack */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-green-600/15
                    bg-green-600/5
                    px-3 py-1.5
                    text-xs font-medium
                    transition-all duration-300
                    hover:border-green-600/40
                    hover:bg-green-600/10
                    hover:text-green-700
                    dark:border-green-400/15
                    dark:bg-green-400/5
                    dark:hover:border-green-400/40
                    dark:hover:bg-green-400/10
                    dark:hover:text-green-300
                  "
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
                className="
                  relative z-20
                  inline-flex items-center gap-2
                  rounded-full
                  bg-green-600
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:bg-green-700
                  hover:shadow-lg
                  hover:shadow-green-600/20
                  dark:bg-green-500
                  dark:text-black
                  dark:hover:bg-green-400
                "
              >
                Live Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative z-20
                  inline-flex items-center gap-2
                  rounded-full
                  border border-green-600/20
                  px-5 py-3
                  text-sm font-semibold
                  transition-all duration-300
                  hover:border-green-600/50
                  hover:bg-green-600/5
                  hover:text-green-700
                  dark:border-green-400/20
                  dark:hover:border-green-400/50
                  dark:hover:bg-green-400/5
                  dark:hover:text-green-300
                "
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