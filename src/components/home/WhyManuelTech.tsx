import { Gauge, Search, MousePointerClick, KeyRound } from "lucide-react";
import { Container } from "@/components/ui/Container";

const highlights = [
  {
    icon: Gauge,
    title: "Built for Performance",
    copy: "Fast, responsive websites designed for a smooth user experience.",
  },
  {
    icon: Search,
    title: "SEO-Focused Development",
    copy: "Built with search engine visibility in mind.",
  },
  {
    icon: MousePointerClick,
    title: "Designed to Convert",
    copy: "Clear calls to action that encourage visitors to contact your business.",
  },
  {
    icon: KeyRound,
    title: "Your Code, Your Ownership",
    copy: "A custom solution that gives you control of your website.",
  },
];

export function WhyManuelTech() {
  return (
    <section className="dark-glow py-20 md:py-24">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-blue-bright uppercase">
          Why ManuelTech GH
        </p>
        <h2 className="section-title mt-4 max-w-4xl text-white">
          A Beautiful Website Means Nothing
          <span className="mt-2 block font-medium text-blue-bright italic">
            If It Doesn&apos;t Grow Your Business.
          </span>
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/72 md:text-[17px]">
          <p>
            Too many businesses in Ghana settle for outdated websites that load slowly,
            look like everyone else&apos;s, and fail to attract customers. A website
            should do more than exist online. It should build trust, showcase your
            value, and turn visitors into real business opportunities.
          </p>
          <p>
            At ManuelTech GH, we build differently. Every website we create is designed
            with a clear purpose: helping your business grow. From responsive design
            and fast performance to search engine optimization and customer-focused
            experiences, we build digital solutions that help your business stand out,
            attract enquiries, and compete with confidence. You get a solution tailored
            to your goals, with ownership and control of your website code.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/8 bg-white/4 p-5"
            >
              <item.icon className="h-5 w-5 text-blue-bright" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{item.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
