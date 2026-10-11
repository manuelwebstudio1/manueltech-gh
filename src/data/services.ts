import type { ServiceDetail, ServiceSummary } from "@/types";

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "web-development",
    title: "Full-Stack Web Development",
    shortTitle: "Web Development",
    description:
      "Build responsive websites and web applications with carefully planned frontend and backend functionality.",
    href: "/services/web-development",
    icon: "layers",
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    shortTitle: "Business Websites",
    description:
      "Establish a professional online presence with a website designed around your brand, services, and customers.",
    href: "/services/web-development",
    icon: "globe",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    description:
      "Create online shopping experiences with appropriate product, cart, checkout, and payment functionality.",
    href: "/services/ecommerce",
    icon: "shopping",
  },
  {
    slug: "business-growth",
    title: "Business Growth Strategy",
    shortTitle: "Growth Strategy",
    description:
      "Identify ways your website can better support customer acquisition, lead generation, and business objectives.",
    href: "/services/business-growth",
    icon: "growth",
  },
  {
    slug: "conversion",
    title: "Conversion Optimization",
    shortTitle: "Conversion",
    description:
      "Improve page structure, messaging, user journeys, forms, and calls to action using evidence where available.",
    href: "/services/business-growth",
    icon: "conversion",
  },
  {
    slug: "custom",
    title: "Custom Digital Solutions",
    shortTitle: "Custom Solutions",
    description:
      "Develop tailored applications, integrations, dashboards, and business tools when project requirements justify them.",
    href: "/services/web-development",
    icon: "custom",
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Full-Stack Web Development",
    eyebrow: "Websites & web applications",
    headline: "Websites and applications built around how your business actually works.",
    introduction:
      "ManuelTech GH designs and develops full-stack websites and web applications for businesses that need more than a generic template. We plan the frontend experience, the supporting backend, and the information architecture together so the finished product is useful, maintainable, and aligned with your goals.",
    problem:
      "Many businesses launch websites that look acceptable but are difficult to update, unclear to visitors, or disconnected from the way the company generates inquiries and delivers services.",
    solution:
      "We start with your audience, offer, and operational requirements. Then we implement a website or application with the pages, content structure, forms, and integrations the project actually needs—without adding complexity that the business will not use.",
    capabilities: [
      {
        title: "Frontend experience",
        description:
          "Responsive interfaces, clear information hierarchy, accessible components, and page layouts that help visitors understand your offer quickly.",
      },
      {
        title: "Backend functionality",
        description:
          "Server-side logic for forms, content workflows, authentication where required, and the business rules that a static brochure cannot support.",
      },
      {
        title: "Data storage",
        description:
          "Structured storage for content, inquiries, products, or operational records when the project needs more than a simple contact form.",
      },
      {
        title: "Integrations",
        description:
          "Connections to email, payment, CRM, booking, or analytics tools when they are relevant to the agreed scope.",
      },
      {
        title: "Security foundations",
        description:
          "Input validation, sensible access control, secure environment handling, and careful treatment of personal information collected through the site.",
      },
      {
        title: "Performance and maintainability",
        description:
          "Efficient page loading, clean component structure, and an implementation that can be supported and extended after launch.",
      },
    ],
    deliverables: [
      "Discovery notes and an agreed project scope",
      "Information architecture and page plan",
      "Responsive website or application implementation",
      "Configured forms and agreed integrations",
      "Basic content placement using client-supplied materials",
      "Launch checklist and handover notes",
    ],
    optionalWork: [
      "Copywriting and photography",
      "Brand identity design beyond the website",
      "Advanced dashboards or internal tools",
      "Ongoing retainers for content, features, or technical support",
      "Search campaigns or paid advertising management",
    ],
    scopingNeeds: [
      "Business overview and primary services or products",
      "Who the website is for and what visitors should do",
      "Preferred pages, features, and examples",
      "Existing brand assets, domain, and hosting preferences",
      "Content readiness and internal decision-makers",
      "Budget range and desired timing",
    ],
    process: [
      {
        title: "Clarify the requirement",
        description:
          "We review your business, audience, and the jobs the website needs to perform.",
      },
      {
        title: "Propose the structure",
        description:
          "You receive a clear outline of pages, features, and technical approach before development begins.",
      },
      {
        title: "Design and implement",
        description:
          "We build the agreed experience, review it with you, and refine it against the approved scope.",
      },
      {
        title: "Test and launch",
        description:
          "We check key journeys, publish the approved site, and hand over the access and documentation included in the project.",
      },
    ],
    faqs: [
      {
        question: "Do you only build marketing websites?",
        answer:
          "No. We build business websites, content-led sites, and custom web applications when the requirement justifies a more tailored solution. The right approach depends on the problem you need to solve.",
      },
      {
        question: "Can you work with an existing brand?",
        answer:
          "Yes. If you already have a logo, colours, and writing style, we use those as the foundation. If brand assets are incomplete, we can work with what is available and keep the visual system consistent.",
      },
      {
        question: "Will we be able to update the website ourselves?",
        answer:
          "That depends on the agreed stack and content needs. Some projects benefit from a content management workflow. Others are more efficient as carefully structured sites updated with developer support. We recommend the option that matches how often you expect to change the site.",
      },
    ],
    relatedProjectSlugs: ["real-estate-presence", "construction-company", "professional-services"],
  },
  ecommerce: {
    slug: "ecommerce",
    title: "E-commerce Development",
    eyebrow: "Online retail & product sales",
    headline: "Online stores designed around your catalogue, customers, and operations.",
    introduction:
      "Selling online is not only a matter of adding a shopping cart. A useful store helps customers find the right products, understand what they are buying, complete checkout with confidence, and gives the business a workable way to manage orders.",
    problem:
      "Retailers often inherit stores that are difficult to browse, unclear at checkout, or poorly matched to how inventory, fulfilment, and customer service actually operate.",
    solution:
      "We plan the catalogue, product pages, cart, checkout, and payment flow around your products and operating model. The result is an online shopping experience that supports discovery and purchase without introducing features the business cannot maintain.",
    capabilities: [
      {
        title: "Product catalogues",
        description:
          "Clear category structures, product detail pages, variants, and search or filter patterns that match the size of the catalogue.",
      },
      {
        title: "Cart and checkout",
        description:
          "A straightforward path from product interest to order, with the fields and checks needed for fulfilment.",
      },
      {
        title: "Payment gateway integration",
        description:
          "Connection to an appropriate payment provider for the market and project, configured according to the agreed scope.",
      },
      {
        title: "Order handling",
        description:
          "Order confirmation, notification flows, and a practical way for the business to see and process incoming purchases.",
      },
      {
        title: "Inventory requirements",
        description:
          "Stock display or availability rules where they are useful, without forcing every retailer into the same inventory model.",
      },
      {
        title: "Trust and product clarity",
        description:
          "Space for specifications, delivery information, and policies so customers can make informed decisions.",
      },
    ],
    deliverables: [
      "Store information architecture and product page plan",
      "Catalogue, cart, and checkout implementation in the agreed stack",
      "Payment integration included in the project scope",
      "Order notification or admin flow as specified",
      "Responsive storefront ready for client product content",
    ],
    optionalWork: [
      "Product photography and detailed catalogue data entry",
      "Marketplace integrations",
      "Subscription or wholesale pricing systems",
      "Warehouse or accounting software connections",
      "Ongoing merchandising or campaign landing pages",
    ],
    scopingNeeds: [
      "Number of products and whether variants are required",
      "How orders are fulfilled and who manages them",
      "Preferred payment methods and delivery model",
      "Whether inventory tracking is necessary at launch",
      "Existing product data, images, and policies",
      "Budget range and launch timing",
    ],
    process: [
      {
        title: "Map the buying journey",
        description:
          "We identify how customers should browse, compare, and complete a purchase.",
      },
      {
        title: "Define catalogue and operations",
        description:
          "Product structure, checkout needs, and fulfilment constraints are agreed before build.",
      },
      {
        title: "Implement the storefront",
        description:
          "We develop the customer-facing store and the order path included in the proposal.",
      },
      {
        title: "Review payments and launch",
        description:
          "Checkout, notifications, and key product journeys are checked before the store goes live.",
      },
    ],
    faqs: [
      {
        question: "Can you connect a Ghanaian or international payment provider?",
        answer:
          "Yes, where the provider offers a supported integration and the business can complete the required merchant setup. The exact provider is chosen during scoping rather than assumed in advance.",
      },
      {
        question: "Do we need a large catalogue before we start?",
        answer:
          "No. A focused first catalogue is often enough to launch. We do need a clear product structure and enough accurate product information to build useful pages.",
      },
      {
        question: "Is every retailer ready for a full e-commerce build?",
        answer:
          "Not always. Some businesses benefit from a brochure website with enquiry or WhatsApp purchase flows first. We recommend e-commerce when the catalogue, fulfilment, and payment process can support it.",
      },
    ],
    relatedProjectSlugs: ["retail-storefront", "building-materials"],
  },
  "business-growth": {
    slug: "business-growth",
    title: "Website Strategy & Business Growth",
    eyebrow: "Strategy, conversion, and improvement",
    headline: "A website is more useful when it is planned around a business goal.",
    introduction:
      "ManuelTech GH helps businesses decide what their website should achieve before, during, or after development. The work may include positioning, page structure, conversion paths, lead capture, search visibility foundations, and a practical plan for improvement.",
    problem:
      "A website can be visually complete and still fail to help visitors take the next step. Unclear offers, weak inquiry paths, and pages that do not match search or sales conversations waste the investment in design and development.",
    solution:
      "We examine the business objective, the audience, and the current or planned user journey. Then we recommend the pages, messages, and features most likely to support inquiries, sales, or another defined outcome—based on the information available, not on guaranteed results.",
    capabilities: [
      {
        title: "Business objectives",
        description:
          "Clarify whether the site should generate inquiries, sell products, recruit, inform, or support an existing sales process.",
      },
      {
        title: "User journeys",
        description:
          "Map how a visitor should move from first impression to a useful action, and remove unnecessary friction where it is obvious.",
      },
      {
        title: "Conversion paths",
        description:
          "Improve calls to action, page structure, and form placement so the next step is easy to understand.",
      },
      {
        title: "Lead capture",
        description:
          "Design inquiry, quote, booking, or qualification forms that collect the information the business actually needs.",
      },
      {
        title: "Search visibility foundations",
        description:
          "Technical SEO basics, clear page titles, and content structure that help relevant pages become findable. This is not a ranking guarantee.",
      },
      {
        title: "Analytics and iteration",
        description:
          "Where measurement is in place, use available data to identify pages or journeys that deserve attention after launch.",
      },
    ],
    deliverables: [
      "A written summary of objectives and recommended website priorities",
      "Page and journey recommendations for the agreed scope",
      "Messaging and call-to-action guidance",
      "Form or lead-path recommendations",
      "A practical improvement backlog when analytics or an existing site is available",
    ],
    optionalWork: [
      "Full content writing",
      "Paid media management",
      "Ongoing SEO retainers",
      "CRM implementation beyond form delivery",
      "Brand strategy unrelated to the website",
    ],
    scopingNeeds: [
      "The commercial outcome you want the website to support",
      "Who you want to reach and what they usually ask",
      "Current website, analytics access, or campaign context if available",
      "Sales or inquiry process after someone contacts you",
      "Budget and whether the work is advisory, implementation, or both",
    ],
    process: [
      {
        title: "Understand the business",
        description:
          "We review goals, audiences, offers, and the constraints that affect what the website can reasonably do.",
      },
      {
        title: "Diagnose the opportunity",
        description:
          "We identify gaps in structure, messaging, journeys, or measurement using the information you can share.",
      },
      {
        title: "Recommend the work",
        description:
          "You receive a clear set of priorities, including what should be built, rewritten, or measured first.",
      },
      {
        title: "Implement or guide the next step",
        description:
          "Strategy can stand alone or continue into design and development under a separate or combined agreement.",
      },
    ],
    faqs: [
      {
        question: "Can you guarantee more leads or sales?",
        answer:
          "No. Website strategy can improve clarity and reduce friction, but results depend on the offer, market, traffic quality, follow-up, and many factors outside the website. We focus on making the site better suited to the goal you define.",
      },
      {
        question: "Do we need an existing website?",
        answer:
          "No. Strategy is useful before a new site is built and equally useful when an existing site is underperforming or due for a redesign.",
      },
      {
        question: "Is this the same as running advertisements?",
        answer:
          "No. This work is about the website itself: structure, messaging, journeys, and measurement. Advertising can be discussed as a separate activity if it is relevant.",
      },
    ],
    relatedProjectSlugs: ["professional-services", "real-estate-presence"],
  },
};

export function getServiceDetail(slug: string) {
  return serviceDetails[slug];
}
