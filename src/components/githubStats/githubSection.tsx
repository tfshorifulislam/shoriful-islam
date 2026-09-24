"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  GitCommitHorizontal,
  GitFork,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GithubData = {
  username: string;
  repositories: number;
  followers: number;
  following: number;
  commits: number;
  totalContributions: number;
  weeks: ContributionWeek[];
};

const GithubSection = () => {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch("/api/github");
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ?? "Failed to fetch GitHub stats",
          );
        }

        setData(result.data);
      } catch (error) {
        console.error("GitHub stats error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      id="github-stats"
      className="relative scroll-mt-20 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                GitHub
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">
                Code
              </span>

              <span className="block text-emerald-600 dark:text-emerald-400">
                contributions.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              A snapshot of my open-source activity, projects,
              and contributions on GitHub.
            </p>
          </div>

          <Link
            href="https://github.com/tfshorifulislam"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-emerald-600/25 px-4 py-2.5 text-xs font-semibold text-emerald-600 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/10 dark:border-emerald-400/25 dark:text-emerald-400 sm:px-5 sm:py-3 sm:text-sm"
          >
            <FaGithub className="h-4 w-4" />

            <span>
              @{data?.username ?? "tfshorifulislam"}
            </span>

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
          </Link>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border bg-card sm:rounded-3xl">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            <Stat
              icon={<GitFork className="h-4 w-4" />}
              value={loading ? "—" : String(data?.repositories ?? 0)}
              label="Repositories"
              className="border-b border-r sm:border-b-0"
            />

            <Stat
              icon={<Users className="h-4 w-4" />}
              value={loading ? "—" : String(data?.followers ?? 0)}
              label="Followers"
              className="border-b sm:border-b-0 sm:border-r"
            />

            <Stat
              icon={<Users className="h-4 w-4" />}
              value={loading ? "—" : String(data?.following ?? 0)}
              label="Following"
              className="border-r"
            />

            <Stat
              icon={<GitCommitHorizontal className="h-4 w-4" />}
              value={loading ? "—" : String(data?.commits ?? 0)}
              label="Commits"
            />
          </div>

          {/* Contribution Section */}
          <div className="border-t p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Contribution Header */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <p className="text-sm font-semibold sm:text-base">
                    Contribution activity
                  </p>
                </div>

                <p className="mt-1 pl-3.5 text-xs leading-5 text-muted-foreground sm:text-sm">
                  {loading
                    ? "Loading contribution data..."
                    : `${data?.totalContributions ?? 0} contributions in the last year`}
                </p>
              </div>

              <span className="hidden text-xs text-muted-foreground sm:block">
                @{data?.username ?? "tfshorifulislam"}
              </span>
            </div>

            {/* Graph */}
            <div className="w-full overflow-hidden">
              <div className="flex w-full items-stretch justify-between gap-0.5">
                {loading
                  ? Array.from({ length: 52 }).map(
                      (_, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex min-w-0 flex-1 flex-col gap-0.5"
                        >
                          {Array.from({ length: 7 }).map(
                            (_, dayIndex) => (
                              <div
                                key={dayIndex}
                                className="aspect-square w-full rounded-xs bg-muted"
                              />
                            ),
                          )}
                        </div>
                      ),
                    )
                  : data?.weeks.map((week, weekIndex) => (
                      <div
                        key={weekIndex}
                        className="flex min-w-0 flex-1 flex-col gap-0.5"
                      >
                        {week.contributionDays.map(
                          (day) => (
                            <div
                              key={day.date}
                              title={`${day.contributionCount} contributions on ${day.date}`}
                              className="aspect-square w-full rounded-xs transition-opacity hover:opacity-70"
                              style={{
                                backgroundColor: day.color,
                              }}
                            />
                          ),
                        )}
                      </div>
                    ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-5 flex items-center justify-end gap-2">
              <span className="text-[10px] text-muted-foreground sm:text-xs">
                Less
              </span>

              <div className="flex items-center gap-0.75">
                <span className="h-2.5 w-2.5 rounded-xs border bg-muted sm:h-3 sm:w-3" />

                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-200 sm:h-3 sm:w-3" />

                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-400 sm:h-3 sm:w-3" />

                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-600 sm:h-3 sm:w-3" />

                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-800 sm:h-3 sm:w-3" />
              </div>

              <span className="text-[10px] text-muted-foreground sm:text-xs">
                More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  icon,
  value,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={`min-w-0 p-4 sm:p-5 md:p-6 ${className}`}
    >
      <div className="mb-2 flex min-w-0 items-center gap-2 sm:mb-3">
        <span className="text-emerald-600 dark:text-emerald-400">
          {icon}
        </span>

        <span className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px] sm:tracking-[0.18em]">
          {label}
        </span>
      </div>

      <p className="text-2xl font-black tracking-tighter sm:text-3xl md:text-4xl">
        {value}
      </p>
    </div>
  );
};

export default GithubSection;