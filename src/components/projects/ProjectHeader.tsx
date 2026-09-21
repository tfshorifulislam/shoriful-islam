import React from "react";

const ProjectHeader = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6  lg:px-8">
      {/* Label */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-green-600 dark:bg-green-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-600 dark:text-green-400">
          Projects
        </span>
      </div>

      {/* Heading */}
      <h2 className="max-w-3xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
        Things I&apos;ve
        <span className="block text-green-600 dark:text-green-400">
          built.
        </span>
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
        A collection of digital products and experiences I&apos;ve designed,
        developed, and brought to life with modern web technologies.
      </p>
    </div>
  );
};

export default ProjectHeader;