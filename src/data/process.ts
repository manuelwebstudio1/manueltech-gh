import type { ProcessStage } from "@/types";

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discovery",
    summary: "Understand the business, audience, requirements, and objectives.",
    objective:
      "Build a shared understanding of the organisation, the people it serves, and the job the website or application needs to perform.",
    activities: [
      "Review the business model, services or products, and current digital presence",
      "Clarify primary audiences and the actions they should take",
      "Collect constraints such as brand assets, content readiness, and integrations",
      "Identify success criteria that can be observed after launch",
    ],
    clientInvolvement:
      "Share background materials, introduce decision-makers, and answer questions about customers, operations, and priorities.",
    deliverables: [
      "Discovery notes",
      "Initial requirement summary",
      "Open questions that still need confirmation",
    ],
    completionCriteria:
      "Both sides agree on the problem to solve and the information still required before a proposal can be accurate.",
  },
  {
    number: "02",
    title: "Strategy",
    summary: "Define the scope, features, structure, and proposed approach.",
    objective:
      "Translate discovery into a website purpose, essential pages or features, and a technical approach that fits the project.",
    activities: [
      "Recommend information architecture and user journeys",
      "Separate launch essentials from later improvements",
      "Select an implementation approach that matches the requirement",
      "Identify content, integrations, and risks that affect scope",
    ],
    clientInvolvement:
      "Review the recommended structure, confirm priorities, and decide what belongs in the first release.",
    deliverables: [
      "Proposed sitemap or feature outline",
      "Recommended approach and assumptions",
      "A clear list of items that would change cost or timeline",
    ],
    completionCriteria:
      "The intended first-release scope is specific enough to price, schedule, and implement.",
  },
  {
    number: "03",
    title: "Proposal",
    summary: "Agree on deliverables, timeline, budget, and responsibilities.",
    objective:
      "Make the commercial and delivery agreement explicit so work can begin without hidden expectations.",
    activities: [
      "Document included deliverables and optional extras",
      "Set a realistic timeline based on content and feedback availability",
      "Confirm budget, payment terms, and points of contact",
      "Record what the client will supply and what ManuelTech GH will produce",
    ],
    clientInvolvement:
      "Review the proposal, ask questions, and confirm the agreement before production starts.",
    deliverables: [
      "Written proposal or statement of work",
      "Agreed timeline and responsibilities",
      "Confirmation of the first-release scope",
    ],
    completionCriteria:
      "The client has accepted the scope, fee, and responsibilities in writing.",
  },
  {
    number: "04",
    title: "Design & Development",
    summary: "Create the interface and implement the agreed functionality.",
    objective:
      "Produce a coherent interface and a working implementation that matches the approved scope.",
    activities: [
      "Establish layout, typography, and component patterns",
      "Implement pages, forms, and agreed integrations",
      "Place supplied content and prepare remaining content slots",
      "Share review builds at agreed milestones",
    ],
    clientInvolvement:
      "Supply content and assets on time, review milestone builds, and consolidate feedback through the agreed channel.",
    deliverables: [
      "Design implementation for approved pages",
      "Working functionality included in the scope",
      "Review access for stakeholder feedback",
    ],
    completionCriteria:
      "The build matches the agreed scope closely enough to move into structured testing and review.",
  },
  {
    number: "05",
    title: "Testing & Review",
    summary:
      "Validate responsive behaviour, accessibility, forms, navigation, and key user journeys.",
    objective:
      "Find and resolve issues that would prevent visitors or the client from using the site as intended.",
    activities: [
      "Check layouts across representative mobile, tablet, and desktop widths",
      "Test navigation, forms, and primary conversion paths",
      "Review keyboard access, labels, and contrast on key screens",
      "Collect a structured round of client feedback",
    ],
    clientInvolvement:
      "Complete the review within the agreed window and confirm remaining change requests that are inside scope.",
    deliverables: [
      "Issue list and resolutions for in-scope items",
      "Updated review build",
      "Launch readiness notes",
    ],
    completionCriteria:
      "Critical issues are resolved and the client has approved the site for launch, or remaining items are explicitly deferred.",
  },
  {
    number: "06",
    title: "Launch & Support",
    summary: "Deploy the approved website and provide the support agreed for the project.",
    objective:
      "Publish the approved site and leave the client with the access, guidance, and support included in the agreement.",
    activities: [
      "Deploy to the agreed hosting or domain environment",
      "Verify forms, redirects, and essential metadata after go-live",
      "Hand over accounts, documentation, and outstanding content notes",
      "Begin any agreed support or improvement period",
    ],
    clientInvolvement:
      "Provide domain or hosting access if required, complete final content checks, and confirm the live site.",
    deliverables: [
      "Live deployment of the approved website",
      "Handover notes and access details",
      "Support arrangements as specified in the project agreement",
    ],
    completionCriteria:
      "The approved website is live and the client has received the handover included in the scope.",
  },
];
