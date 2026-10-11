import { FounderProfile } from "@/components/about/FounderProfile";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectInquiryCTA } from "@/components/ui/ProjectInquiryCTA";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "ManuelTech GH combines software development with a practical understanding of business goals to build digital experiences that work harder for organisations.",
  path: "/about",
});

const values = [
  {
    title: "Clarity",
    copy: "We prefer precise language, explicit scope, and honest limits over slogans.",
  },
  {
    title: "Usefulness",
    copy: "A website earns its place when visitors can understand the offer and take a useful next step.",
  },
  {
    title: "Craft",
    copy: "Responsive layouts, maintainable code, and accessible interfaces are treated as standard work, not extras.",
  },
  {
    title: "Stewardship",
    copy: "We collect only the information needed to respond, and we do not invent credentials or results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ManuelTech GH"
        title="Building Better Digital Experiences for Business."
        description="ManuelTech GH is a technology and web development company. We help organisations establish a stronger online presence through professional websites, custom digital solutions, and business-focused website strategy."
        backgroundImage="/hero/late-night-coding.png"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-ink">Mission</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Help businesses use the web as a working part of their operation:
              a place to explain value, earn trust, and create a clear path for
              the right customers to get in touch or buy.
            </p>
          </div>
          <div>
            <h2 className="section-title text-ink">Vision</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              A Ghana-rooted practice that can also serve international clients:
              recognised for combining technical quality with a practical reading
              of what a website should achieve for a specific business.
            </p>
          </div>
        </Container>
      </section>

      <FounderProfile />

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <h2 className="section-title text-ink">Core values</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {values.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ProjectInquiryCTA title="If this approach sounds useful, tell us about the business." />
    </>
  );
}
