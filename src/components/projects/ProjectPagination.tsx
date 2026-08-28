"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectPaginationProps {
  currentPage: number;
  totalPages: number;
  totalProjects: number;
  startIndex: number;
  onPageChange: (page: number) => void;
}

const ProjectPagination = ({
  currentPage,
  totalPages,
  totalProjects,
  startIndex,
  onPageChange,
}: ProjectPaginationProps) => {
  const endIndex = Math.min(
    startIndex + 4,
    totalProjects,
  );

  return (
    <>
      {/* Pagination */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-t px-4 py-10 sm:px-6 lg:px-8">
        {/* Previous */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />

          <span className="hidden sm:inline">
            Previous
          </span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1.5">
          {Array.from(
            { length: totalPages },
            (_, index) => index + 1,
          ).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
        >
          <span className="hidden sm:inline">
            Next
          </span>

          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Counter */}
      <div className="pb-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {startIndex + 1}–{endIndex} of {totalProjects}
        </p>
      </div>
    </>
  );
};

export default ProjectPagination;