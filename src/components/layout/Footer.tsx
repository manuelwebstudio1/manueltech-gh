import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { contactConfig, getTelUrl } from "@/config/contact";
import { footerCompany, footerLegal, footerServices } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {

  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            {siteConfig.description}
          </p>
          <p className="mt-6 font-heading text-sm font-semibold text-white/90">
            Building digital experiences with purpose.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <FooterColumn title="Services" items={footerServices} />
          <FooterColumn title="Company" items={footerCompany} />
          <div>
            <p className="text-sm font-semibold tracking-wide text-white/90">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a
                  href={getTelUrl() ?? `tel:${contactConfig.phone}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-blue-bright" aria-hidden />
                  0502889487
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-blue-bright" aria-hidden />
                  manueltechgh@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-white/90">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-white/65 hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
