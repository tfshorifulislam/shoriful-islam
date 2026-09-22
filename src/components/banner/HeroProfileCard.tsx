
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const socialLinks = [
  {
    href: "https://github.com/tfshorifulislam",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/tfshorifulislam",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/tfshorifulislam",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const HeroProfileCard = () => {
  return (
// HeroProfileCard

<motion.div
  initial={{ opacity: 0, x: -60, scale: 0.96 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    group relative w-full max-w-95 overflow-hidden
    rounded-[30px]
    border border-emerald-200/70
    bg-gradient-to-br
    from-emerald-50
    via-cyan-50
    to-violet-50
    p-3
    shadow-2xl shadow-emerald-200/40
    dark:from-emerald-950
    dark:via-cyan-950
    dark:to-violet-950
  "
>
  {/* colorful glow */}
  <div className="
    pointer-events-none absolute
    -right-16 -top-16
    h-44 w-44 rounded-full
    bg-emerald-400/30 blur-3xl
  " />

  <div className="
    pointer-events-none absolute
    -bottom-20 -left-16
    h-44 w-44 rounded-full
    bg-violet-400/25 blur-3xl
  " />

  <CardContent className="relative p-0">

    <div className="
      relative aspect-4/5 overflow-hidden
      rounded-[24px]
      bg-gradient-to-br
      from-emerald-400
      via-cyan-400
      to-violet-500
    ">
      <Image
        src="/pic.png"
        alt="Shoriful Islam"
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 380px"
        className="
          object-cover
          transition duration-700
          group-hover:scale-105
        "
      />

      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-emerald-950/50
        via-transparent
        to-violet-500/10
      " />
    </div>

    <div className="px-3 pb-3 pt-5">

      <div className="flex items-center justify-between gap-4">

        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Shoriful Islam
          </h2>

          <p className="
            mt-1 text-sm font-medium
            text-emerald-600
            dark:text-emerald-400
          ">
            Full Stack Developer
          </p>
        </div>

        <Link
          href="#contact"
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-full
            bg-gradient-to-br
            from-emerald-500
            to-cyan-500
            text-white
            shadow-lg
            shadow-emerald-500/30
            transition-all duration-300
            hover:scale-110
            hover:rotate-6
          "
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>

      </div>

      <div className="mt-5 flex items-center gap-2">

        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          const colors = [
            "hover:bg-slate-900",
            "hover:bg-blue-600",
            "hover:bg-pink-500",
          ];

          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-emerald-200
                bg-white/70
                text-slate-600
                backdrop-blur
                transition-all duration-300
                hover:-translate-y-1
                hover:text-white
                ${colors[index]}
              `}
            >
              <Icon className="h-4.25 w-4.25" />
            </Link>
          );
        })}

      </div>
    </div>
  </CardContent>
</motion.div>
  );
};

export default HeroProfileCard;