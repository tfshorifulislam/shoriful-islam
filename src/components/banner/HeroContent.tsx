"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], }}

      className="w-full text-center lg:text-left max-w-3xl">

      <div className="mb-7 flex items-center justify-center gap-3 lg:justify-start">

        <span className="h-px w-12 bg-foreground" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
          Hello, I'm Shoriful
        </span>
      </div>

      <h1
        className="text-[clamp(2.4rem,5vw,6.2rem)] font-black leading-[0.95] tracking-[-0.055em]">
        <span className="block">
          FULL STACK

          <span className="mt-1 block text-muted-foreground">
            WEB DEVELOPER
          </span>
        </span>
      </h1>

      <p
        className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0"
      >
        I build modern, scalable, and user-focused web applications
        using React, Next.js, Node.js, and modern backend technologies.
      </p>


      <div
        className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
      >
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background">
          View Projects

          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <a
          href="https://drive.google.com/uc?export=download&id=1uwRbhBoJpNHJAonmbq4DwjyeVQi3oPxa"
          className="inline-flex items-center rounded-full border px-6 py-3.5 text-sm font-semibold">
          Download CV
        </a>
      </div>

      <div
        className="mx-auto mt-14 grid max-w-2xl grid-cols-3 border-y lg:mx-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              py-5
              text-center
              lg:text-left
              ${index === 0 ? "pr-2 text-left sm:pr-5" : ""}
              ${index === 1 ? "border-x px-2 sm:px-5" : ""}
              ${index === 2 ? "pl-2 text-right sm:pl-5 lg:text-left" : ""}
            `}
          >
            <h3
              className="text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
              {stat.value}
            </h3>

            <p
              className="mt-1.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground sm:text-xs sm:tracking-[0.12em] ">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;