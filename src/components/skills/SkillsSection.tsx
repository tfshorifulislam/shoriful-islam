"use client";

import {
  Code2,
  Database,
  Palette,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    description: "Building APIs and scalable server-side applications.",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    description: "Working with relational and NoSQL databases.",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & Design",
    description: "Development workflow, UI design and visual tools.",
    icon: Palette,
    skills: ["Git", "GitHub", "Figma", "Photoshop", "Illustrator"],
  },
];

const coreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-green-600 dark:bg-green-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-600 dark:text-green-400">
            Skills
          </span>
        </div>

        <h2 className="max-w-3xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
          The stack behind
          <span className="block text-green-600 dark:text-green-400">
            my work.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          Technologies I use to design, build, and ship modern digital
          products.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-[28px] border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-xl hover:shadow-green-600/10 sm:p-7 dark:hover:border-green-400/40 dark:hover:shadow-green-400/10"
            >
              {/* Number */}
              <span className="absolute right-6 top-6 text-[11px] font-semibold tracking-[0.15em] text-green-600/40 dark:text-green-400/40">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-green-600/30 bg-green-600/5 text-green-600 transition-all duration-300 group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white dark:border-green-400/30 dark:bg-green-400/5 dark:text-green-400 dark:group-hover:border-green-400 dark:group-hover:bg-green-400 dark:group-hover:text-black">
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-green-600/15 bg-green-600/5 px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:border-green-600/40 hover:bg-green-600/10 dark:border-green-400/15 dark:bg-green-400/5 dark:hover:border-green-400/40 dark:hover:bg-green-400/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Stack */}
      <div className="mt-5 border-y border-green-600/20 py-5 dark:border-green-400/20">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="mr-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-green-400 sm:mr-2 sm:text-xs sm:tracking-[0.2em]">
            Core Stack
          </span>

          {coreStack.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-green-600/20 bg-green-600/10 px-3 py-1.5 text-[9px] font-semibold text-green-700 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white sm:px-3.5 sm:text-xs dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300 dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;