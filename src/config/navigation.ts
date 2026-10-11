import type { NavItem } from "@/types";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "All Services", href: "/services" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "E-commerce Development", href: "/services/ecommerce" },
  { label: "Business Growth Strategy", href: "/services/business-growth" },
];

export const footerCompany: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Our Process", href: "/process" },
  { label: "Start a Project", href: "/start-project" },
  { label: "Contact", href: "/contact" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];
