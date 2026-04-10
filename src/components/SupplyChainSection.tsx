import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { label: "Manufacturer", sub: "Direct sourcing" },
  { label: "ANC Global", sub: "Trading & logistics" },
  { label: "Distributor", sub: "Market activation" },
  { label: "Retail", sub: "End consumer" },
];

const bullets = [
  "Scale ahead of regulation in emerging markets",
  "Enter underpenetrated territories with proven products",
  "Secure distribution before competitors arrive",
];

const SupplyChainSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-foreground/60 mb-4">How We Trade</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            End-to-End Supply Chain
          </h2>
        </div>

        {/* Process flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-center min-w-[140px]">
                <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-foreground">{i + 1}</span>
                </div>
                <h4 className="text-sm font-semibold text-foreground">{step.label}</h4>
                <p className="text-xs text-muted-foreground">{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-16 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Strategic bullets */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Strategic Approach</h3>
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;
