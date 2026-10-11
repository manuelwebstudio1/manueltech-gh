import { MessageCircle } from "lucide-react";
import { contactConfig, getWhatsAppUrl } from "@/config/contact";
import { cn } from "@/lib/utils";

export function WhatsAppCTA({
  className,
  label = "Chat on WhatsApp",
  message,
}: {
  className?: string;
  label?: string;
  message?: string;
}) {
  const href = getWhatsAppUrl(message ?? contactConfig.whatsappMessage);

  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white hover:bg-[#1fb855]",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}
