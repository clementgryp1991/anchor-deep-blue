import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { title: "Direct Manufacturing Access", description: "Sourcing directly from production facilities across multiple geographies" },
  { title: "Global Distribution Activation", description: "Activating distribution channels in new and existing markets worldwide" },
  { title: "Scalable Trading Partnerships", description: "Flexible structures from direct trading to joint ventures" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6 section-light">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <p className="text-sm tracking-widest uppercase text-accent">Who We Are</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for Global Scale
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            ANC Global Trading leverages over 30 years of sector expertise to bridge the gap
            between manufacturers and untapped markets.
          </p>
        </div>

        {/* Stat callout */}
        <div className="flex justify-center mb-16">
          <div className="border border-border rounded-lg px-10 py-6 text-center">
            <span className="text-5xl md:text-6xl font-bold text-foreground">30+</span>
            <p className="text-muted-foreground mt-2 text-sm tracking-wide uppercase">Years Sector Expertise</p>
          </div>
        </div>

        {/* Value props */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
