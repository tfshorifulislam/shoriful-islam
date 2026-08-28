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
        id: 2,
        title: "Homez",
        description:
            "Homez is a modern, full-featured, multi-role Real Estate Platform that connects Buyers, Sellers, and Admins in one seamless ecosystem.",
        image: "/homez.png",
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
        id: 3,
        title: "SportNest",
        description:
            "Modern sports venue booking platform for football, cricket, futsal & more.",
        image: "/image.png",
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
        id: 4,
        title: "ResumeMint AI",
        description:
            "ResumeMint AI is a modern AI-powered resume toolkit built with TypeScript.",
        image: "/resume builder.jpg",
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
        id: 5,
        title: "Pixora",
        description:
            "Retro-Futuristic AI Landing Page built with Next.js, TypeScript, Tailwind CSS, Framer Motion.",
        image: "/landingpage.jpg",
        live: "https://pixora-rho.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/pixora",
        tech: [
            "TypeScript",
            "Next.js",
            "TailwindCSS",
        ],
    },
    {
        id: 6,
        title: "Mentora",
        description:
            "Online learning platform for creators, mentors and educators.",
        image: "/1.4.png",
        live: "https://mentora-neon-eta.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/mentora",
        tech: [
            "Next.js",
            "Node.js",
            "MongoDB",
        ],
    },
    {
        id: 7,
        title: "Skill Sphere",
        description:
            "Modern LMS platform with authentication and dashboard system.",
        image: "/1.1.png",
        live: "https://skill-sphere-topaz.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/Skill-Sphere",
        tech: [
            "Next.js",
            "Firebase",
            "Tailwind",
        ],
    },
    {
        id: 8,
        title: "Digital Tools Platform",
        description:
            "Marketplace for digital products with modern UI & performance focus.",
        image: "/1.2.png",
        live: "https://digiools.vercel.app/",
        github:
            "https://github.com/tfshorifulislam/digital-tools-platform",
        tech: [
            "React",
            "Next.js",
            "MongoDB",
        ],
    },
];

const PROJECTS_PER_PAGE = 4;

const ProjectsSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        PROJECTS.length / PROJECTS_PER_PAGE,
    );

    const startIndex =
        (currentPage - 1) * PROJECTS_PER_PAGE;

    const currentProjects = PROJECTS.slice(
        startIndex,
        startIndex + PROJECTS_PER_PAGE,
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        document
            .getElementById("projects")
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