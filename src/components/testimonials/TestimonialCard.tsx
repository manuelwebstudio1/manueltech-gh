export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/**
 * Ready for verified client quotes. Do not pass invented testimonials.
 */
export function TestimonialCard({ testimonial }: { testimonial?: Testimonial }) {
  if (!testimonial) {
    return (
      <aside className="rounded-2xl border border-dashed border-line bg-white px-6 py-5 text-sm text-muted">
        Client testimonials can be added here after written permission is received.
        Until then, this space stays empty so the site does not present unverified
        endorsements.
      </aside>
    );
  }

  return (
    <figure className="rounded-2xl border border-line bg-white p-6">
      <blockquote className="text-base leading-7 text-ink">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-ink">{testimonial.name}</span>
        {testimonial.role ? `, ${testimonial.role}` : ""}
        {testimonial.company ? ` · ${testimonial.company}` : ""}
      </figcaption>
    </figure>
  );
}
