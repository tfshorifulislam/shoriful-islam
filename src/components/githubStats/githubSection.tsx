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
  const [data, setData] = useState<GithubData | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(
          "/api/github",
          {
            next: {
              revalidate: 3600,
            },
          },
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ??
              "Failed to fetch GitHub stats",
          );
        }

        setData(result.data);
      } catch (error) {
        console.error(
          "GitHub stats error:",
          error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      id="github"
      className="relative py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-foreground" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              GitHub
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Open
                <span className="block text-muted-foreground">
                  source.
                </span>
              </h2>
            </div>

            <Link
              href="https://github.com/tfshorifulislam"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <FaGithub className="h-4 w-4" />

              @{data?.username ?? "tfshorifulislam"}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[30px] border bg-card shadow-xl">
          {/* Stats */}
          <div className="grid grid-cols-2 border-b sm:grid-cols-4">
            <Stat
              icon={<GitFork className="h-4 w-4" />}
              value={
                loading
                  ? "—"
                  : `${data?.repositories ?? 0}`
              }
              label="Repositories"
            />

            <Stat
              icon={<Users className="h-4 w-4" />}
              value={
                loading
                  ? "—"
                  : `${data?.followers ?? 0}`
              }
              label="Followers"
            />

            <Stat
              icon={<Users className="h-4 w-4" />}
              value={
                loading
                  ? "—"
                  : `${data?.following ?? 0}`
              }
              label="Following"
            />

            <Stat
              icon={
                <GitCommitHorizontal className="h-4 w-4" />
              }
              value={
                loading
                  ? "—"
                  : `${data?.commits ?? 0}`
              }
              label="Commits"
            />
          </div>

          {/* Contribution */}
          <div className="p-5 sm:p-7 md:p-10">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold">
                  Contribution activity
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {loading
                    ? "Loading contribution data..."
                    : `${data?.totalContributions ?? 0} contributions in the last year`}
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                @tfshorifulislam
              </p>
            </div>

            {/* Contribution Graph */}
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-[760px] gap-1">
                {loading
                  ? Array.from({
                      length: 52,
                    }).map((_, weekIndex) => (
                      <div
                        key={weekIndex}
                        className="flex flex-col gap-1"
                      >
                        {Array.from({
                          length: 7,
                        }).map(
                          (_, dayIndex) => (
                            <div
                              key={dayIndex}
                              className="h-3 w-3 rounded-[3px] bg-muted sm:h-3.5 sm:w-3.5"
                            />
                          ),
                        )}
                      </div>
                    ))
                  : data?.weeks.map(
                      (week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex flex-col gap-1"
                        >
                          {week.contributionDays.map(
                            (day) => (
                              <div
                                key={day.date}
                                title={`${day.contributionCount} contributions on ${day.date}`}
                                className="h-3 w-3 rounded-[3px] sm:h-3.5 sm:w-3.5"
                                style={{
                                  backgroundColor:
                                    day.color,
                                }}
                              />
                            ),
                          )}
                        </div>
                      ),
                    )}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Less
              </span>

              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-[3px] border bg-muted" />

                <span className="h-3 w-3 rounded-[3px] bg-[#9be9a8]" />

                <span className="h-3 w-3 rounded-[3px] bg-[#40c463]" />

                <span className="h-3 w-3 rounded-[3px] bg-[#30a14e]" />

                <span className="h-3 w-3 rounded-[3px] bg-[#216e39]" />
              </div>

              <span className="text-xs text-muted-foreground">
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
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="border-r p-5 last:border-r-0 sm:p-6">
      <div className="mb-3 flex items-center gap-2 text-muted-foreground">
        {icon}

        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>

      <p className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
        {value}
      </p>
    </div>
  );
};

export default GithubSection;