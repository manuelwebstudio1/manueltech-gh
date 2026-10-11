import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { serviceSummaries } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <SectionHeading
          title="Digital Solutions for Ambitious Businesses."
          description="From your first professional website to sophisticated digital platforms, we help turn business requirements into useful technology."
          action={
            <Link href="/services" className="text-sm font-semibold text-blue">
              View all services
            </Link>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSummaries.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
