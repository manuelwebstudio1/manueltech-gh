import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Layers,
  LineChart,
  MousePointerClick,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { ServiceSummary } from "@/types";

const icons = {
  layers: Layers,
  globe: Globe,
  shopping: ShoppingBag,
  growth: LineChart,
  conversion: MousePointerClick,
  custom: Sparkles,
};

export function ServiceCard({ service }: { service: ServiceSummary }) {
  const Icon = icons[service.icon];

  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-line bg-white p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/8 text-blue">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-muted">{service.description}</p>
      <Link
        href={service.href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue hover:text-[#2c6ae8]"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
