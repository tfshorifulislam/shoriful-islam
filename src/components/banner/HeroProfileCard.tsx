"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "motion/react";
import { CardContent } from "@/components/ui/card";

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
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        clipPath: "inset(10% 0 0 0)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-95"
    >
      <div className="relative rounded-2xl border bg-card p-3">
        {/* Image */}
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/pic.png"
            alt="Shoriful Islam"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 380px"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for work
          </div>
        </div>

        <CardContent className="p-0">
          <div className="px-2 pb-2 pt-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-green-600 dark:text-green-400">
                  Full Stack Developer
                </p>

                <h2 className="text-[26px] font-bold leading-none tracking-[-0.04em]">
                  SHORIFUL ISLAM
                </h2>
              </div>

              <Link
                href="#contact"
                aria-label="Contact me"
                className="group/contact flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 dark:bg-green-500 dark:text-black dark:hover:bg-green-400"
              >
                <ArrowUpRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5" />
              </Link>
            </div>

            <div className="my-5 h-px bg-border/70" />

            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">
                Find me online
              </p>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group/social flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-green-600 hover:bg-green-600 hover:text-white dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-black"
                    >
                      <Icon className="h-[15px] w-[15px] transition-transform duration-300 group-hover/social:scale-110" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </motion.div>
  );
};

export default HeroProfileCard;