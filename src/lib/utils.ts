export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatList(items: string[]) {
  return items.filter(Boolean);
}

export function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href);
}

export function normalizeMultiline(value: string) {
  return value.replace(/\r\n/g, "\n").trim();
}

export function clampText(value: string, max = 5000) {
  return value.length > max ? value.slice(0, max) : value;
}
