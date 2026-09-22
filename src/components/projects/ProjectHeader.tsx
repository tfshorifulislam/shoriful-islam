
import React from "react";

const ProjectHeader = () => {
    return (
        <div className="mx-auto max-w-7xl pb-8">
            <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-600 dark:bg-emerald-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                    Projects
                </span>
            </div>

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <h2 className="text-4xl font-black leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl">
                    <span className="text-foreground">
                        Turning ideas
                    </span>

                    <span className="block text-emerald-600 dark:text-emerald-400">
                        Into products.
                    </span>
                </h2>

                <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
                    A collection of web applications and digital
                    experiences built with modern technologies.
                </p>
            </div>
        </div>
    );
};

export default ProjectHeader;