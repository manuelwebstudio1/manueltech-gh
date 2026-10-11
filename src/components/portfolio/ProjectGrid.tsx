"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projectFilters } from "@/data/projects";
import type { Project, ProjectFilter } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectGrid({
  projects,
  enableFilters = false,
}: {
  projects: Project[];
  enableFilters?: boolean;
}) {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visible = useMemo(() => {
    if (filter === "All") {
      return projects;
    }

    return projects.filter((project) => project.industry === filter);
  }, [filter, projects]);

  return (
    <div>
      {enableFilters ? (
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by industry"
        >
          {projectFilters.map((item) => {
            const selected = item === filter;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                className={cn(
                  "min-h-10 rounded-full px-4 text-sm font-medium ring-1 transition-colors",
                  selected
                    ? "bg-navy text-white ring-navy"
                    : "bg-white text-muted ring-line hover:text-ink",
                )}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-line bg-surface px-5 py-8 text-sm text-muted">
          No concept projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
