"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="w-full max-w-[380px] overflow-hidden rounded-[28px] border bg-card p-3 shadow-2xl">
      <CardContent className="p-0">
        {/* Profile Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-muted">
          <Image
            src="/pic.png"
            alt="Shoriful Islam"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 380px"
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroProfileCard;