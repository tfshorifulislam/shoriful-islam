"use client";

import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const stats = [
  {
    value: "01+",
    label: "Years Experience",
  },
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 70, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full max-w-3xl text-center lg:text-left"
    >
      {/* Intro */}
      <div className="mb-6 flex items-center justify-center gap-3 sm:mb-7 lg:justify-start">
        <span className="h-px w-8 shrink-0 bg-emerald-500 sm:w-12" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 sm:text-xs sm:tracking-[0.3em] md:text-sm">
          Hello, I&apos;m Shoriful Islam
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[clamp(2.35rem,9vw,6.2rem)] font-black leading-[0.9] tracking-[-0.06em] lg:text-[clamp(3.5rem,6vw,6.2rem)]">
        <span className="block whitespace-nowrap">
          FULL STACK
        </span>

        <span className="block whitespace-nowrap text-emerald-600 dark:text-emerald-400">
          WEB DEVELOPER
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mx-0">
        I build modern, scalable, and user-focused web applications using
        React, Next.js, Node.js, and modern backend technologies.
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-9 sm:gap-3 lg:justify-start">
        {/* View Projects */}
        <Link href="#projects">
          <Button
            className="cursor-pointer rounded-full bg-emerald-600 px-4 py-5 text-sm hover:bg-emerald-500 sm:px-8"
          >
            View Projects

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
          </Button>
        </Link>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1uwRbhBoJpNHJAonmbq4DwjyeVQi3oPxa/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="cursor-pointer rounded-full px-4 py-5 text-sm sm:px-8"
          >
            <FileText className="h-3.5 w-3.5 text-emerald-600 transition-colors duration-300 group-hover:text-white dark:text-emerald-400 sm:h-4 sm:w-4" />

            Resume
          </Button>
        </a>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-12 grid w-full max-w-2xl grid-cols-3 border-y border-emerald-500/15 sm:mt-14 lg:mx-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`min-w-0 py-4 text-center sm:py-5 lg:text-left ${index === 0 ? "pr-2 sm:pr-5" : ""} ${index === 1 ? "border-x border-emerald-500/15 px-2 sm:px-5" : ""} ${index === 2 ? "pl-2 sm:pl-5" : ""}`}
          >
            <h3 className="text-xl font-bold tracking-[-0.04em] text-emerald-600 dark:text-emerald-400 sm:text-3xl md:text-4xl">
              {stat.value}
            </h3>

            <p className="mt-1.5 text-[8px] font-medium uppercase tracking-[0.08em] text-muted-foreground sm:text-xs sm:tracking-[0.12em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;