"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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
    <div className="w-full text-center lg:text-left">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-7 flex items-center justify-center gap-3 lg:justify-start"
      >
        <span className="h-px w-12 bg-foreground" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
          Hello, I'm Shoriful
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[clamp(2.4rem,5vw,6.2rem)] font-black leading-[0.95] tracking-[-0.055em]"
      >
        <span className="block">FULL STACK</span>

        <span className="mt-1 block text-muted-foreground">
          DEVELOPER
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0"
      >
        Full Stack Web Developer dedicated to crafting exceptional digital experiences. I build fast, responsive, and scalable web apps from front to back, focusing on modern UI/UX and solid backend architecture.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
      >
        <Link
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-300 hover:scale-[1.03]"
        >
          View Projects

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <Link
          href="#contact"
          className="inline-flex items-center rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors duration-300 hover:bg-muted"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mx-auto mt-14 grid max-w-2xl grid-cols-3 border-y lg:mx-0"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`py-5 ${index === 0 ? "pr-2 text-left sm:pr-5" : ""} ${index === 1 ? "border-x px-2 sm:px-5" : ""} ${index === 2 ? "pl-2 text-right sm:pl-5 lg:text-left" : ""}`}
          >
            <motion.h3
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold tracking-[-0.04em] sm:text-4xl"
            >
              {stat.value}
            </motion.h3>

            <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.12em]">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroContent;

