import type { Project, ProjectFilter } from "@/types";

export const projectFilters: ProjectFilter[] = [
  "All",
  "Real Estate",
  "E-commerce",
  "Professional Services",
  "Other",
];

export const projects: Project[] = [
  {
    slug: "real-estate-presence",
    name: "Real Estate Business Website Concept",
    industry: "Real Estate",
    type: "Property marketing website",
    summary:
      "A property-focused website concept for presenting listings, capturing inquiries, and helping prospective buyers or renters understand available homes.",
    description:
      "This concept explores how a real estate business can present featured properties, filter listings, and give visitors a clear way to request a viewing or speak with the team. It is a demonstration of structure and interface design, not a live client case study.",
    preview: "real-estate",
    technologies: ["Next.js", "TypeScript", "Responsive UI", "Inquiry forms"],
    status: "Concept",
    features: [
      "Featured property highlights",
      "Search and filter patterns for listings",
      "Property detail layout with inquiry path",
      "Mobile-first browsing",
    ],
    goals: [
      "Help visitors discover relevant properties",
      "Make it easy to request more information",
      "Present the agency as organised and trustworthy",
    ],
  },
  {
    slug: "retail-storefront",
    name: "E-commerce Store Concept",
    industry: "E-commerce",
    type: "Online storefront",
    summary:
      "A product-led store concept that focuses on catalogue clarity, product confidence, and a straightforward path to purchase.",
    description:
      "This concept demonstrates a retail homepage, category browsing, and a product page with cart intent. It is intended to show how an online store can feel considered and easy to use, not to represent a live merchant.",
    preview: "ecommerce",
    technologies: ["Next.js", "Product UI", "Checkout patterns"],
    status: "Concept",
    features: [
      "Featured collections",
      "Product detail with variant selection",
      "Cart preview and checkout intent",
      "Trust and delivery information placement",
    ],
    goals: [
      "Help shoppers find products quickly",
      "Reduce uncertainty before purchase",
      "Give the retailer a clean merchandising surface",
    ],
  },
  {
    slug: "construction-company",
    name: "Construction Company Website Concept",
    industry: "Construction",
    type: "Company website",
    summary:
      "A construction-sector concept for presenting completed work, capabilities, and a project inquiry path that suits site owners and contractors.",
    description:
      "Construction businesses often need to show proof of delivery and make it easy to request a quotation. This concept organises services, project snapshots, and a practical contact journey for that context.",
    preview: "construction",
    technologies: ["Next.js", "Project galleries", "Lead forms"],
    status: "Concept",
    features: [
      "Capability and sector overview",
      "Selected project snapshots",
      "Quotation inquiry path",
      "Safety and process messaging",
    ],
    goals: [
      "Demonstrate the type of work the company can handle",
      "Help property owners or partners start a quotation",
      "Present an organised, reliable company image",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services Website Concept",
    industry: "Professional Services",
    type: "Practice website",
    summary:
      "A calm, credibility-led website concept for consultants, advisors, and professional practices that need to attract the right conversations.",
    description:
      "Professional service firms benefit from a website that explains who they help, what engagement looks like, and how to get in touch. This concept keeps the interface quiet so the offer and expertise can remain the focus.",
    preview: "professional",
    technologies: ["Next.js", "Content design", "Accessible forms"],
    status: "Concept",
    features: [
      "Practice introduction and service list",
      "Engagement process overview",
      "Consultation request form",
      "Resource or insight placeholder area",
    ],
    goals: [
      "Make the firm's offer easy to understand",
      "Encourage qualified consultation requests",
      "Support trust through clarity rather than hype",
    ],
  },
  {
    slug: "building-materials",
    name: "Plumbing and Building Materials Website Concept",
    industry: "Other",
    type: "Trade and supply website",
    summary:
      "A trade-oriented concept for a plumbing and building materials business that needs to present products, services, and a direct enquiry route.",
    description:
      "Supply and trade businesses often serve both walk-in customers and project buyers. This concept shows how a website can combine product ranges, service notes, and a WhatsApp or form-based enquiry path.",
    preview: "plumbing",
    technologies: ["Next.js", "Catalogue UI", "Enquiry flows"],
    status: "Concept",
    features: [
      "Product range highlights",
      "Trade and retail enquiry options",
      "Service and supply messaging",
      "Location-ready contact block",
    ],
    goals: [
      "Show the breadth of products and services",
      "Make it easy to request stock or a quotation",
      "Help contractors and households know how to buy",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByIndustry(filter: ProjectFilter) {
  if (filter === "All") {
    return projects;
  }

  return projects.filter((project) => project.industry === filter);
}

export function getRelatedProjects(slugs: string[]) {
  return projects.filter((project) => slugs.includes(project.slug));
}
