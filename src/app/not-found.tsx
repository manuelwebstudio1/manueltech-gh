import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="hero-glow flex min-h-[70vh] items-center pt-24">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-blue-bright uppercase">
          404
        </p>
        <h1 className="display-title mt-4 text-white">This page is not available.</h1>
        <p className="mt-5 text-white/65">
          The address may have changed, or the page does not exist. Use the
          navigation or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
