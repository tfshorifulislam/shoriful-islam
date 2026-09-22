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

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-foreground" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Skills
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">
            Tools I use to
            <span className="block text-muted-foreground">
              build digital products.
            </span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-muted-foreground md:text-right">
          Technologies and tools I use to design, develop, and build modern
          web applications.
        </p>
      </div>

      {/* Skills */}
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-[28px] border bg-card p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-7"
            >
              {/* Number */}
              <span className="absolute right-6 top-5 text-xs font-medium text-muted-foreground/50">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border">
                <Icon className="h-5 w-5" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                {group.description}
              </p>

              {/* Skill Pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border bg-background px-3.5 py-2 text-xs font-medium transition-colors duration-300 group-hover:border-foreground/20"
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
      <div className="mt-4 border-y py-4 sm:py-5">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <span className="shrink-0 text-[8px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:mr-2 sm:text-xs sm:tracking-[0.2em]">
            Core Stack
          </span>

          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
          ].map((skill) => (
            <span
              key={skill}
              className="shrink-0 rounded-full bg-foreground px-2 py-1 text-[8px] font-medium text-background sm:px-3 sm:py-1.5 sm:text-xs"
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