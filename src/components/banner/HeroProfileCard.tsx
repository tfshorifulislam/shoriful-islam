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
    <motion.div
      initial={{ opacity: 0, x: -60, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-[380px] overflow-hidden rounded-lg border bg-card p-3"
    >
      <CardContent className="p-0">
        {/* Profile Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src="/pp.png"
            alt="Shoriful Islam"
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 380px"
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="px-2 pb-2 pt-5 sm:px-3 sm:pb-3">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <div className="min-w-0">
              <h2 className="truncate text-xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 sm:text-2xl">
                Shoriful Islam
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>

            <Link
              href="#contact"
              aria-label="Contact me"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-emerald-600 dark:text-emerald-400 sm:h-10 sm:w-10"
                >
                  <Icon className="h-4 w-4 sm:h-4.25 sm:w-4.25" />
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