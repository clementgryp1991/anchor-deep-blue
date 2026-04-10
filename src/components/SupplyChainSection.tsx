import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { label: "Manufacturer", sub: "Production Partner" },
  { label: "ANC Global", sub: "Deal Originator" },
  { label: "Distributor", sub: "Market Operator" },
  { label: "Retail", sub: "End Market" },
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
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white text-white border-white" />
            <p className="text-sm tracking-widest uppercase text-white bg-black/0">How We Trade</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            End-to-End Supply Chain
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Full control from sourcing to delivery across every market we operate in.
          </p>
        </div>

        {/* Process flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="text-center min-w-[160px]">
                <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-4 ${i === 1 ? 'bg-white border-white' : 'border-accent'}`}>
                  <span className={`text-2xl font-bold ${i === 1 ? 'text-[hsl(220,60%,20%)]' : 'text-foreground'}`}>{i + 1}</span>
                </div>
                <h4 className="text-base font-semibold text-foreground">{step.label}</h4>
                <p className="text-sm text-muted-foreground">{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-12 h-px border-white bg-white" />
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
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 border-white text-white bg-black/0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
