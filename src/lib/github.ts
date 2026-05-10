import { Project } from "@/lib/types";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  created_at: string;
  updated_at: string;
}

export async function fetchGitHubRepos(username: string): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=updated&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-site",
        },
        next: { revalidate: 3600 }, // ISR: revalidate every hour
      }
    );

    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();

    return repos
      .filter((repo) => !repo.fork) // skip forked repos
      .map((repo) => ({
        id: `gh-${repo.id}`,
        title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
        category: "web" as const,
        description: repo.description || "暂无描述",
        tags: [
          ...(repo.language ? [repo.language] : []),
          ...repo.topics.slice(0, 4),
        ],
        image: "/projects/placeholder.svg",
        liveUrl: repo.homepage || undefined,
        repoUrl: repo.html_url,
        featured: repo.stargazers_count > 0,
        year: new Date(repo.created_at).getFullYear(),
      }));
  } catch {
    return [];
  }
}
