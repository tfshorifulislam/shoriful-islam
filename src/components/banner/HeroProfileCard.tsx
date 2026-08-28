"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

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
    <div className="w-full max-w-[340px] sm:max-w-[380px]">
      <div className="overflow-hidden rounded-[28px] border bg-card p-3 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-muted">
          <Image
            src="/pic.png"
            alt="Shoriful Islam"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 380px"
            className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
          />

          <div className="absolute inset-x-4 bottom-4">
            <div className="rounded-2xl border border-white/20 bg-black/60 p-4 text-white backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Available for work
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-sm font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition hover:bg-foreground hover:text-background"
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:bg-foreground hover:text-background"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfileCard;