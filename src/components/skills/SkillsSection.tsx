
"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  Palette,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Modern interfaces with responsive layouts and smooth user experiences.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    description:
      "Secure APIs and scalable server-side applications.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "RBAC",
      "Redis",
      "Socket.IO",
    ],
  },
  {
    title: "Database",
    description:
      "Reliable data modeling with relational and NoSQL databases.",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Database Design",
      "Indexing",
    ],
  },
  {
    title: "Tools",
    description:
      "Tools and services that support development and deployment.",
    icon: Palette,
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Stripe",
      "AI Integration",
      "Postman",
      "Vercel",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-600 dark:bg-emerald-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              Skills
            </span>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl uppercase text-4xl font-black leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-foreground">
                Everything I use to
              </span>

              <span className="block text-emerald-600 dark:text-emerald-400">
                build for the web.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:text-right">
              A collection of technologies, tools, and services
              I work with across the development stack.
            </p>
          </div>
        </div>

        {/* Skill Grid */}
        <div className="grid overflow-hidden rounded-3xl border sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className={`group relative p-6 transition-colors duration-300 hover:bg-emerald-500/[0.035] sm:p-8 lg:p-10 ${
                  index < 2 ? "border-b" : ""
                } ${index % 2 === 0 ? "sm:border-r" : ""}`}
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute right-6 top-5 text-6xl font-black tracking-tighter text-muted/[0.06] dark:text-white/[0.04]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-600/20 bg-emerald-600/[0.06] text-emerald-600 transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
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
        <div className="mt-5 flex flex-col gap-4 rounded-2xl border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Core Stack
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Technologies I use most frequently.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;