import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: { label: string; href?: string }[];
  backgroundImage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#07111F] pt-28 pb-16 md:pt-32 md:pb-20">
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="page-hero-image absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="page-hero-overlay absolute inset-0" />
        </>
      ) : (
        <div className="hero-glow absolute inset-0" />
      )}

      <Container className="relative z-10">
        <Breadcrumbs items={crumbs} light />
        {eyebrow ? (
          <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-blue-bright uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="display-title mt-4 max-w-4xl text-white">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
