import { Container } from "@/components/ui/Container";

export function FounderProfile() {
  return (
    <section className="founder-section bg-[#eef2f7] py-16 md:py-24">
      <Container className="max-w-xl">
        <div className="relative mx-auto max-w-[420px] md:max-w-[460px]">
          <div className="overflow-hidden rounded-[28px] bg-[#d8dde4] shadow-[0_28px_70px_rgb(16_24_40_/_0.16)] md:rounded-[32px]">
            <img
              src="/about/emmanuel-kwesi-matthew.png"
              alt="Emmanuel Kwesi Matthew, Founder and CEO of ManuelTech GH."
              className="founder-portrait h-[28rem] w-full object-cover object-[center_12%] sm:h-[34rem] md:h-[38rem]"
            />
          </div>

          <div className="founder-card absolute inset-x-3 bottom-3 rounded-2xl px-5 py-4 sm:inset-x-5 sm:bottom-5 sm:px-6 sm:py-5">
            <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Emmanuel Kwesi Matthew
            </p>
            <p className="mt-1 text-sm font-medium text-blue-bright sm:text-[15px]">
              Founder &amp; CEO | Full-Stack Developer
            </p>
            <p className="mt-1 text-xs tracking-wide text-white/65">ManuelTech GH</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
