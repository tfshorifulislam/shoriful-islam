"use client";

import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";
import { MobileNavbar } from "./MobileNavbar";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

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
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], }}

            className="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-6 lg:px-8">
            <nav className="flex h-16 items-center justify-between rounded-full border bg-background/80 px-5 shadow-lg backdrop-blur-xl ">

                {/* Logo */}
                <Link
                    href="#home"
                    className="text-xl font-bold tracking-tight"
                >
                    SF<span className="text-muted-foreground">.</span>
                </Link>

                {/* Desktop Navigation */}
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


                <div className="flex items-center gap-1">


                    <Link
                        href="https://github.com/tfshorifulislam"
                        target="_blank"
                        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
                    >
                        <FaGithub className="h-5 w-5" />
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