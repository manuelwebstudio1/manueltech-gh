import { siteConfig } from "@/config/site";
import type { ContactInput } from "@/lib/validation/contact";
import type { ProjectInquiryInput } from "@/lib/validation/project";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `<tr>
    <td style="padding:8px 0;color:#667085;width:180px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#101828;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

export function contactEmailContent(input: ContactInput) {
  const subject = `${siteConfig.name} contact: ${input.reason} from ${input.name}`;
  const text = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Business: ${input.businessName || "Not provided"}`,
    `Phone: ${input.phone || "Not provided"}`,
    `Reason: ${input.reason}`,
    "",
    input.message,
  ].join("\n");

  const html = `<table style="font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.5;width:100%;max-width:640px;">
    ${row("Name", input.name)}
    ${row("Email", input.email)}
    ${row("Business", input.businessName || "")}
    ${row("Phone", input.phone || "")}
    ${row("Reason", input.reason)}
    ${row("Message", input.message)}
  </table>`;

  return { subject, text, html };
}

export function projectEmailContent(input: ProjectInquiryInput) {
  const subject = `${siteConfig.name} project inquiry: ${input.businessName}`;
  const text = [
    `Name: ${input.name}`,
    `Business: ${input.businessName}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Website: ${input.website || "Not provided"}`,
    `Industry: ${input.industry}`,
    `Stage: ${input.businessStage}`,
    `Audience: ${input.audience}`,
    `Objective: ${input.primaryObjective}`,
    `Project type: ${input.projectType}`,
    `Goals: ${input.goals.join(", ")}`,
    `Budget: ${input.budget}`,
    `Timeline: ${input.timeline}`,
    "",
    "Business description:",
    input.businessDescription,
    "",
    "Desired solution:",
    input.desiredSolution,
    "",
    `Important features: ${input.importantFeatures || "Not provided"}`,
    `Additional context: ${input.additionalContext || "Not provided"}`,
  ].join("\n");

  const html = `<table style="font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.5;width:100%;max-width:640px;">
    ${row("Name", input.name)}
    ${row("Business", input.businessName)}
    ${row("Email", input.email)}
    ${row("Phone", input.phone)}
    ${row("Website", input.website || "")}
    ${row("Industry", input.industry)}
    ${row("Stage", input.businessStage)}
    ${row("Audience", input.audience)}
    ${row("Objective", input.primaryObjective)}
    ${row("Project type", input.projectType)}
    ${row("Goals", input.goals.join(", "))}
    ${row("Budget", input.budget)}
    ${row("Timeline", input.timeline)}
    ${row("Business description", input.businessDescription)}
    ${row("Desired solution", input.desiredSolution)}
    ${row("Important features", input.importantFeatures || "")}
    ${row("Additional context", input.additionalContext || "")}
  </table>`;

  return { subject, text, html };
}
