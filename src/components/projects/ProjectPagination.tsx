"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProjectPaginationProps {
  currentPage: number;
  totalPages: number;
  totalProjects: number;
  startIndex: number;
  onPageChange: (page: number) => void;
}

const PROJECTS_PER_PAGE = 4;

const ProjectPagination = ({
  currentPage,
  totalPages,
  totalProjects,
  startIndex,
  onPageChange,
}: ProjectPaginationProps) => {
  const endIndex = Math.min(
    startIndex + PROJECTS_PER_PAGE,
    totalProjects
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      {/* Pagination */}
      <div className="flex items-center justify-between gap-4 border-t border-emerald-500/10 py-10">
        {/* Previous */}
        <button
          type="button"
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          disabled={currentPage === 1}
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-x-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />

          <span className="hidden sm:inline">
            Previous
          </span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 p-1.5">
          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition-all duration-300 ${
                currentPage === page
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700"
                  : "text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:translate-x-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10 disabled:pointer-events-none disabled:opacity-30"
        >
          <span className="hidden sm:inline">
            Next
          </span>

          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600/70 dark:text-emerald-400/70">
          {startIndex + 1}–{endIndex} of {totalProjects}
        </p>
      </div>
    </div>
  );
};

export default ProjectPagination;