import Link from "next/link";
import { ProjectPreview } from "@/components/portfolio/ProjectPreviews";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.demoUrl ?? `/work/${project.slug}`;
  const label = project.demoUrl ? "View Demo" : "Explore Concept";
  const external = Boolean(project.demoUrl);

  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-line bg-white">
      <div className="bg-navy p-4">
        <ProjectPreview kind={project.preview} />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted">
            {project.industry}
          </span>
          <span className="rounded-full bg-blue/8 px-2.5 py-1 text-[11px] font-semibold text-blue">
            {project.status}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-blue"
          >
            {label}
          </a>
        ) : (
          <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-blue">
            {label}
          </Link>
        )}
      </div>
    </article>
  );
}
