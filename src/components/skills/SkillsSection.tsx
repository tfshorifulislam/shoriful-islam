"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFigma,
  SiStripe,
  SiPostman,
  SiVercel,
  SiNestjs,
} from "react-icons/si";

import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building modern, responsive, and interactive interfaces.",
    icon: Code2,
    number: "01",
    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        type: "Programming Language",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        type: "Programming Language",
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        border: "border-blue-600/20",
      },
      {
        name: "React.js",
        icon: SiReact,
        type: "Library",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        type: "Framework",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
      {
        name: "HTML",
        icon: SiHtml5,
        type: "Technology",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
      },
      {
        name: "CSS",
        icon: SiCss,
        type: "Technology",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        type: "CSS Framework",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20",
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
        type: "UI Library",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Designing APIs, authentication, caching, and real-time systems.",
    icon: Server,
    number: "02",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        type: "Runtime",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        type: "Framework",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
      {
        name: "NestJs",
        icon: SiNestjs,
        type: "Framework",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
      {
        name: "REST API",
        icon: Code2,
        type: "API Development",
        color: "text-emerald-600",
        bg: "bg-emerald-600/10",
        border: "border-emerald-600/20",
      },
      {
        name: "Authentication",
        icon: Code2,
        type: "Security",
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
      },
      {
        name: "RBAC",
        icon: Code2,
        type: "Authorization",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
      },
      {
        name: "Redis",
        icon: SiRedis,
        type: "Caching",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
      },
      {
        name: "Socket.IO",
        icon: SiSocketdotio,
        type: "Real-time",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
    ],
  },

  {
    title: "Database",
    description:
      "Working with structured data, relationships, and performance.",
    icon: Database,
    number: "03",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        type: "Database",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        type: "Database",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        type: "ORM",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
      },
      {
        name: "Database Design",
        icon: Database,
        type: "Database Architecture",
        color: "text-emerald-600",
        bg: "bg-emerald-600/10",
        border: "border-emerald-600/20",
      },
      {
        name: "Indexing",
        icon: Database,
        type: "Database Optimization",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
      },
    ],
  },

  {
    title: "Tools & Services",
    description:
      "Tools I use throughout the development workflow.",
    icon: Wrench,
    number: "04",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        type: "Version Control",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        type: "Code Hosting",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
      {
        name: "Figma",
        icon: SiFigma,
        type: "Design Tool",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
      },
      {
        name: "Stripe",
        icon: SiStripe,
        type: "Payment Service",
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
      },
      {
        name: "Postman",
        icon: SiPostman,
        type: "API Testing",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        type: "Deployment",
        color: "text-foreground",
        bg: "bg-foreground/5",
        border: "border-border",
      },
    ],
  },
];

const primaryStack = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-foreground",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-500",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-emerald-600 dark:bg-emerald-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              Technologies
            </span>
          </motion.div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">The stack behind</span>

              <span className="block text-emerald-600 dark:text-emerald-400">
                what I build.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="max-w-sm text-sm leading-7 text-muted-foreground lg:pb-1"
            >
              Technologies and tools I use to turn ideas into fast,
              scalable, and production-ready web applications.
            </motion.p>
          </div>
        </motion.div>

        {/* ================= SKILL GRID ================= */}

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: groupIndex * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[28px] border bg-card p-6 shadow-sm transition-shadow duration-500 hover:shadow-2xl sm:p-7"
              >
                {/* Ambient Emerald Glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-600/[0.05] blur-3xl transition-all duration-700 group-hover:bg-emerald-600/[0.09]" />

                {/* Header */}

                <div className="relative mb-7 flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {/* Number */}

                    <span className="pt-1 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {group.number}
                    </span>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <GroupIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                          {group.title}
                        </span>
                      </div>

                      <p className="max-w-lg text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{
                      x: 4,
                      y: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                  </motion.div>
                </div>

                {/* Technologies */}

                <div className="relative grid grid-cols-2 gap-3">
                  {group.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.45,
                          delay:
                            groupIndex * 0.08 +
                            skillIndex * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.015,
                        }}
                        className={`group/skill relative overflow-hidden rounded-2xl border bg-background/60 p-4 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg ${skill.border}`}
                      >
                        {/* Colored Glow */}

                        <div
                          className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover/skill:opacity-30 ${skill.bg}`}
                        />

                        <div className="relative flex items-center gap-3">
                          {/* Icon */}

                          <motion.div
                            whileHover={{
                              scale: 1.12,
                              rotate: 4,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            }}
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${skill.bg}`}
                          >
                            <SkillIcon
                              className={`h-5 w-5 ${skill.color}`}
                            />
                          </motion.div>

                          {/* Name */}

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold">
                              {skill.name}
                            </p>

                            <span className="text-[10px] text-muted-foreground">
                              {skill.type}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= PRIMARY STACK ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-5 overflow-hidden rounded-[24px] border bg-card"
        >
          {/* Emerald Glow */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-600/[0.06] blur-3xl" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            {/* Text */}

            <div>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                  Primary Stack
                </p>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                The technologies I work with most frequently.
              </p>
            </div>

            {/* Primary Technologies */}

            <div className="flex flex-wrap gap-2">
              {primaryStack.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    className="group/primary flex items-center gap-2 rounded-xl border bg-background px-3.5 py-2.5 transition-colors duration-300 hover:border-emerald-600/30 hover:bg-emerald-600/[0.04]"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <Icon
                        className={`h-4 w-4 ${item.color}`}
                      />
                    </motion.div>

                    <span className="text-xs font-semibold">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;