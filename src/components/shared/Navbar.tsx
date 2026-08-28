"use client";

import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";


const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub Stats", href: "#github-stats" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <nav className="flex h-16 items-center justify-between rounded-full border bg-background/80 px-5 shadow-lg backdrop-blur-xl">

        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          S<span className="text-muted-foreground">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;