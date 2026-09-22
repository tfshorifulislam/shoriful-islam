import React from 'react';

const ProjectHeader = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 md:pb-16 md:pt-28 lg:px-8">
            <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-foreground" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Projects
                </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <h2 className="text-4xl font-black leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">
                    Selected
                    <span className="block text-muted-foreground">
                        work.
                    </span>
                </h2>

                <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
                    A selection of projects I have designed and
                    developed using modern web technologies.
                </p>
            </div>
        </div>
    );
};

export default ProjectHeader;