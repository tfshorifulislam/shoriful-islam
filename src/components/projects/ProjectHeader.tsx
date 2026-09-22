import React from "react";

const ProjectHeader = () => {
  return (
    <div className="mx-auto max-w-7xl pb-6 pt-20 md:pb-8 md:pt-28 ">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-emerald-500" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
          Projects
        </span>
      </div>

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-foreground">Selected</span>

          <span className="block text-emerald-600 dark:text-emerald-400">
            work.
          </span>
        </h2>

        <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
          A selection of digital products and web experiences I&apos;ve
          designed and developed with modern technologies.
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;