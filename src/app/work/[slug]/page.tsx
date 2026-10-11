import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectInquiryCTA } from "@/components/ui/ProjectInquiryCTA";
import { ProjectPreview } from "@/components/portfolio/ProjectPreviews";
import { getProjectBySlug, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }

  return createPageMetadata({
    title: project.name,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`${project.industry} · ${project.status}`}
        title={project.name}
        description={project.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/work" },
          { label: project.name },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">
              {project.type}
            </p>
            <p className="mt-5 text-base leading-8 text-muted">{project.description}</p>
            <h2 className="mt-10 text-2xl font-bold text-ink">What this concept explores</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold text-ink">Business goals it could support</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {project.goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <span key={item} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demoUrl ? (
                <ButtonLink href={project.demoUrl} external>
                  View Demo
                </ButtonLink>
              ) : null}
              <ButtonLink href="/start-project" variant="ghost">
                Discuss a similar project
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl bg-navy p-5">
            <ProjectPreview kind={project.preview} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-10">
        <Container>
          <Link href="/work" className="text-sm font-semibold text-blue">
            Back to all projects
          </Link>
        </Container>
      </section>
      <ProjectInquiryCTA />
    </>
  );
}
