"use client";

import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { motion } from "motion/react";

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
      <div className="mb-7 flex items-center justify-center gap-3 lg:justify-start">
        <span className="h-px w-12 bg-green-600 dark:bg-green-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-600 dark:text-green-400 sm:text-sm">
          Hello, I'm Shoriful
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[clamp(2.4rem,5vw,6.2rem)] font-black leading-[0.95] tracking-[-0.055em]">
        <span className="block">
          FULL STACK

          <span className="mt-1 block text-green-600 dark:text-green-400">
            WEB DEVELOPER
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0">
        I build modern, scalable, and user-focused web applications using
        React, Next.js, Node.js, and modern backend technologies.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
        {/* View Projects */}
        <Link
          href="#projects"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-green-600 px-6 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/25 dark:bg-green-500 dark:hover:bg-green-400 dark:hover:text-black"
        >
          View Projects

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1uwRbhBoJpNHJAonmbq4DwjyeVQi3oPxa/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-green-600 hover:text-green-600 hover:shadow-lg hover:shadow-green-600/10 dark:hover:border-green-400 dark:hover:text-green-400"
        >
          <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

          Resume

          <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </a>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 border-y border-border/80 lg:mx-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              py-5
              text-center
              lg:text-left
              ${index === 0 ? "pr-2 text-left sm:pr-5" : ""}
              ${index === 1 ? "border-x border-border/80 px-2 sm:px-5" : ""}
              ${index === 2 ? "pl-2 text-right sm:pl-5 lg:text-left" : ""}
            `}
          >
            <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
              {stat.value}
            </h3>

            <p className="mt-1.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground sm:text-xs sm:tracking-[0.12em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;