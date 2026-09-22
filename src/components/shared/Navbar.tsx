"use client";

import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";
import { MobileNavbar } from "./MobileNavbar";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub Stats", href: "#github-stats" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-1/2 top-4 z-50 w-full max-w-7xl -translate-x-1/2 px-6 lg:px-8"
    >
      <nav className="flex h-14 items-center justify-between rounded-full border bg-background/80 px-4 backdrop-blur-xl sm:h-16 sm:px-5">
        {/* Logo */}
        <Link
          href="#about"
          className="text-lg font-black tracking-tighter transition-colors text-emerald-600 dark:text-emerald-400 sm:text-xl"
        >
          SF<span className="text-emerald-600 dark:text-emerald-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-0.5">
          <Link
            href="https://github.com/tfshorifulislam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex h-9 w-9 items-center justify-center rounded-full"
          >
            <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
          </Link>

          <ModeToggle />

          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;