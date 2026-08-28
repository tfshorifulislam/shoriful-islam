"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa";

import { CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const socialLinks = [
  {
    href: "https://github.com/tfshorifulislam",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "#",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const HeroProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1], }}

      className="w-full max-w-95 overflow-hidden rounded-[28px] border bg-card p-3 shadow-2xl">
      <CardContent className="p-0">

        <div className="relative aspect-4/5 overflow-hidden rounded-[22px] bg-muted">
          <Image
            src="/pic.png"
            alt="Shoriful Islam"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 380px"
            className="object-cover grayscale"
          />
        </div>


        <div className="px-3 pb-3 pt-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Shoriful Islam
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>

            <Link
              href="#contact"
              aria-label="Contact me"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>


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
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground"
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