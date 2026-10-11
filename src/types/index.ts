export type ProjectStatus = "Concept" | "In Development" | "Completed" | "Live Demo";

export type ProjectIndustry =
  | "Real Estate"
  | "E-commerce"
  | "Professional Services"
  | "Construction"
  | "Other";

export type ProjectFilter =
  | "All"
  | "Real Estate"
  | "E-commerce"
  | "Professional Services"
  | "Other";

export interface Project {
  slug: string;
  name: string;
  industry: ProjectIndustry;
  type: string;
  summary: string;
  description: string;
  preview: ProjectPreviewKind;
  technologies: string[];
  status: ProjectStatus;
  demoUrl?: string;
  caseStudyUrl?: string;
  features: string[];
  goals: string[];
}

export type ProjectPreviewKind =
  | "real-estate"
  | "ecommerce"
  | "construction"
  | "professional"
  | "plumbing";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceSummary {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: "layers" | "globe" | "shopping" | "growth" | "conversion" | "custom";
}

export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  problem: string;
  solution: string;
  capabilities: { title: string; description: string }[];
  deliverables: string[];
  optionalWork: string[];
  scopingNeeds: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedProjectSlugs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  objective: string;
  activities: string[];
  clientInvolvement: string;
  deliverables: string[];
  completionCriteria: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactConfig {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  social: SocialLink[];
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
