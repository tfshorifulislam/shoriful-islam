
import { NextResponse } from "next/server";

const GITHUB_USERNAME = "tfshorifulislam";

const GITHUB_QUERY = `
  query($login: String!) {
    user(login: $login) {
      login

      repositories(
        first: 1
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        totalCount
      }

      followers {
        totalCount
      }

      following {
        totalCount
      }

      contributionsCollection {
        totalCommitContributions

        contributionCalendar {
          totalContributions

          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "GITHUB_TOKEN is missing",
        },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://api.github.com/graphql",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github+json",
        },

        body: JSON.stringify({
          query: GITHUB_QUERY,
          variables: {
            login: GITHUB_USERNAME,
          },
        }),

        next: {
          revalidate: 3600,
        },
      },
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("GitHub API Error:", result);

      return NextResponse.json(
        {
          success: false,
          message:
            result?.message ??
            "GitHub API request failed",
        },
        { status: response.status },
      );
    }

    if (result.errors?.length) {
      console.error(
        "GitHub GraphQL Error:",
        result.errors,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            result.errors[0]?.message ??
            "GitHub GraphQL error",
        },
        { status: 500 },
      );
    }

    const user = result.data?.user;

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "GitHub user not found",
        },
        { status: 404 },
      );
    }

    const calendar =
      user.contributionsCollection
        .contributionCalendar;

    return NextResponse.json({
      success: true,

      data: {
        username: user.login,

        repositories:
          user.repositories.totalCount,

        followers:
          user.followers.totalCount,

        following:
          user.following.totalCount,

        commits:
          user.contributionsCollection
            .totalCommitContributions,

        totalContributions:
          calendar.totalContributions,

        weeks: calendar.weeks,
      },
    });
  } catch (error) {
    console.error("GitHub API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch GitHub stats",
      },
      { status: 500 },
    );
  }
}