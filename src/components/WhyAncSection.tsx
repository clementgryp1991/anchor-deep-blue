import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    title: "Pricing Power",
    description: "Direct sourcing from manufacturers means lower costs and more reliable supply chains for our partners.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Speed to Market",
    description: "Our established network allows partners to enter new markets in weeks, not months. First-mover advantage matters.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flexible Structure",
    description: "From direct trading to joint ventures and market-adapted deals. We structure partnerships around your needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const WhyAncSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-anc" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <p className="text-sm tracking-widest uppercase text-accent">Why ANC</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Competitive Edge
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            What sets us apart in international tobacco and nicotine trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8 group hover:border-accent transition-colors">
              <div className="border-t-2 border-accent w-12 mb-6" />
              <div className="text-foreground/80 mb-4">{r.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAncSection;
