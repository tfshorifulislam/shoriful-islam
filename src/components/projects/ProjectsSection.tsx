"use client";

import { useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";
import ProjectPagination from "./ProjectPagination";
import ProjectHeader from "./ProjectHeader";

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Story-Hub",
        description:
            "Story-Hub is a modern full-stack social publishing platform designed for readers, writers, and content creators. Users can discover and read stories, publish their own articles, interact with other users, manage their profiles, and engage with a growing community. The platform includes a responsive frontend, secure authentication, content management, user interactions, and a scalable backend architecture built for a smooth publishing experience.",
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
            "UgenAI is an AI-powered creative platform that allows users to generate, explore, and share AI-generated artwork. The application combines an intuitive modern interface with AI image generation capabilities, allowing users to turn creative ideas into visual content. It also provides an engaging community experience where users can discover generated artwork, explore different creations, and share their own AI-generated images.",
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
            "Homez is a full-featured multi-role real estate platform built to connect buyers, sellers, and administrators in one seamless ecosystem. Users can explore available properties, view detailed property information, manage listings, and interact with the platform based on their assigned role. The application focuses on a clean user experience, responsive design, role-based access control, and a structured backend architecture for managing real estate data and operations.",
        image: "/homez.jpg",
        live: "https://homez-two.vercel.app/",
        github: "https://github.com/tfshorifulislam/homez-client",
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
            "SportNest is a modern sports venue booking platform that makes it easier for users to discover and book facilities for football, cricket, futsal, and other sports. The platform provides an intuitive booking experience with organized venue information and responsive interfaces. It is designed to simplify the process of finding suitable sports facilities while providing a scalable foundation for managing venues, users, and bookings.",
        image: "/sportnest.png",
        live: "https://sport-nest-rouge.vercel.app",
        github: "https://github.com/tfshorifulislam/sport-nest-client",
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
            "ResumeMint AI is a modern AI-powered resume toolkit built to help users create professional and well-structured resumes more efficiently. The platform focuses on simplifying the resume-building process through a clean interface and intelligent AI-assisted features. Users can organize their professional information, build resume content, and create polished resume layouts suitable for modern job applications.",
        image: "/resume-builder.jpg",
        live: "https://resumimintai.vercel.app/",
        github: "https://github.com/tfshorifulislam/AI-resume",
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
            "Pixora is a retro-futuristic AI-inspired landing page focused on creating an immersive and visually engaging digital experience. The project combines modern frontend technologies with bold visual elements, smooth animations, responsive layouts, and carefully designed interactions. It demonstrates how modern web technologies can be used to create highly polished interfaces with a strong visual identity and engaging user experience.",
        image: "/pixora.png",
        live: "https://pixora-rho.vercel.app/",
        github: "https://github.com/tfshorifulislam/pixora",
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

    // Total pages: 6 projects / 4 = 2 pages
    const totalPages = Math.ceil(
        PROJECTS.length / PROJECTS_PER_PAGE
    );

    // Current page starting index
    const startIndex =
        (currentPage - 1) * PROJECTS_PER_PAGE;

    // Projects for current page
    const currentProjects = PROJECTS.slice(
        startIndex,
        startIndex + PROJECTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section id="projects" className="relative px-6 lg:px-8">
            {/* Header */}
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
            <div className="mt-24">
                <ProjectPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalProjects={PROJECTS.length}
                    startIndex={startIndex}
                    onPageChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default ProjectsSection;