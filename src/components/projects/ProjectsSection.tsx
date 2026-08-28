"use client";

import { useState } from "react";
import ProjectCard, {
    type Project,
} from "./ProjectCard";
import ProjectPagination from "./ProjectPagination";
import ProjectHeader from "./ProjectHeader";

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Story-Hub",
        description:
            "A modern full-stack social publishing platform where users can discover stories, share their ideas, publish articles, interact with other users, and build their personal profile.",
        image: "/storyhub.png",
        live: "https://storyhub-iota.vercel.app/",
        github: "https://github.com/tfshorifulislam/StoryHub",
        tech: [
            "TypeScript",
            "Next.js",
            "Node.js",
            "Express.js",
            "Prisma",
            "PostgreSQL",
        ],
    },
    {
        id: 2,
        title: "UgenAI",
        description:
            "ugenAI is an AI-powered image generation and creative sharing platform where users can generate, explore, and share AI-generated artwork.",
        image: "/ugenAI 2.jpg",
        live: "https://ugenai.vercel.app/",
        github: "https://github.com/tfshorifulislam/ugenAI",
        tech: [
            "TypeScript",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Pollinations AI",
        ],
    },
    {
        id: 3,
        title: "Homez",
        description:
            "Homez is a modern, full-featured, multi-role Real Estate Platform that connects Buyers, Sellers, and Admins in one seamless ecosystem.",
        image: "/homez.jpg",
        live: "https://homez-two.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/homez-client",
        tech: [
            "TypeScript",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
    },
    {
        id: 4,
        title: "SportNest",
        description:
            "Modern sports venue booking platform for football, cricket, futsal & more.",
        image: "/sportnest.png",
        live: "https://sport-nest-rouge.vercel.app",
        github:
            "https://github.com/tfshorifulislam/sport-nest-client",
        tech: [
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
    },
    {
        id: 5,
        title: "ResumeMint AI",
        description:
            "ResumeMint AI is a modern AI-powered resume toolkit built with TypeScript.",
        image: "/resume-builder.jpg",
        live: "https://resumimintai.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/AI-resume",
        tech: [
            "TypeScript",
            "Next.js",
            "TailwindCSS",
        ],
    },
    {
        id: 6,
        title: "Pixora",
        description:
            "Retro-Futuristic AI Landing Page built with Next.js, TypeScript, Tailwind CSS, Framer Motion.",
        image: "/pixora.png",
        live: "https://pixora-rho.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/pixora",
        tech: [
            "TypeScript",
            "Next.js",
            "TailwindCSS",
        ],
    },
    
    
];

const PROJECTS_PER_PAGE = 4;

const ProjectsSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil( PROJECTS.length / PROJECTS_PER_PAGE, );

    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;

    const currentProjects = PROJECTS.slice( startIndex, startIndex + PROJECTS_PER_PAGE, );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        document.getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section id="projects" className="relative">
            {/* Section Header */}
            <ProjectHeader />

            {/* Project Cards */}
            <div className="relative">
                {currentProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            {/* Pagination */}
            <ProjectPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalProjects={PROJECTS.length}
                startIndex={startIndex}
                onPageChange={handlePageChange}
            />
        </section>
    );
};

export default ProjectsSection;