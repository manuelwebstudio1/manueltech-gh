import { BrowserFrame } from "@/components/portfolio/BrowserFrame";
import type { ProjectPreviewKind } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectPreview({
  kind,
  className,
}: {
  kind: ProjectPreviewKind;
  className?: string;
}) {
  const preview = previews[kind];
  return <div className={className}>{preview}</div>;
}

const previews: Record<ProjectPreviewKind, React.ReactNode> = {
  "real-estate": <RealEstatePreview />,
  ecommerce: <EcommercePreview />,
  construction: <ConstructionPreview />,
  professional: <ProfessionalPreview />,
  plumbing: <PlumbingPreview />,
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/8 px-2 py-0.5 text-[9px] text-white/70">
      {children}
    </span>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-lg bg-white/6 p-2", className)}>{children}</div>;
}

function RealEstatePreview() {
  return (
    <BrowserFrame title="realestate.example / listings">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-white">Harbour Residences</p>
          <Chip>Accra · For sale</Chip>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["East Legon Villa", "Airport Hills Home", "Cantonments Flat"].map((name, index) => (
            <Card key={name} className="min-h-20">
              <div className={cn("mb-1.5 h-8 rounded-md", index === 0 ? "bg-blue/50" : "bg-white/10")} />
              <p className="text-[9px] font-medium text-white">{name}</p>
              <p className="text-[8px] text-white/50">4 bed · Inquiry</p>
            </Card>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function EcommercePreview() {
  return (
    <BrowserFrame title="store.example / product">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-2">
        <div className="h-24 rounded-lg bg-gradient-to-br from-blue/40 to-white/10" />
        <div>
          <p className="text-[8px] text-white/45">Apparel</p>
          <p className="text-[12px] font-semibold text-white">Structured Everyday Shirt</p>
          <p className="mt-1 text-[10px] text-blue-bright">GHS 320</p>
          <div className="mt-2 flex gap-1">
            <span className="h-4 rounded bg-blue px-2 text-[8px] leading-4 text-white">Add to cart</span>
            <span className="h-4 rounded bg-white/10 px-2 text-[8px] leading-4 text-white/70">Details</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ConstructionPreview() {
  return (
    <BrowserFrame title="build.example / projects">
      <div className="space-y-2">
        <p className="text-[12px] font-semibold text-white">Selected site work</p>
        <div className="grid grid-cols-2 gap-1.5">
          {["Commercial fit-out", "Residential build"].map((item) => (
            <Card key={item}>
              <div className="mb-1.5 h-10 rounded bg-white/10" />
              <p className="text-[9px] text-white">{item}</p>
            </Card>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ProfessionalPreview() {
  return (
    <BrowserFrame title="practice.example">
      <div className="space-y-2">
        <p className="text-[8px] tracking-[0.14em] text-blue-bright uppercase">Advisory practice</p>
        <p className="text-[12px] font-semibold text-white">Clarity before commitment.</p>
        <div className="grid grid-cols-3 gap-1.5">
          {["Counsel", "Process", "Request"].map((item) => (
            <Card key={item}>
              <p className="text-[9px] text-white">{item}</p>
            </Card>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function PlumbingPreview() {
  return (
    <BrowserFrame title="supply.example / ranges">
      <div className="space-y-2">
        <p className="text-[12px] font-semibold text-white">Trade & household supply</p>
        <div className="grid grid-cols-3 gap-1.5">
          {["Pipes", "Fittings", "Tools"].map((item) => (
            <Card key={item} className="text-center">
              <div className="mx-auto mb-1 h-7 w-7 rounded-full bg-blue/30" />
              <p className="text-[9px] text-white">{item}</p>
            </Card>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
