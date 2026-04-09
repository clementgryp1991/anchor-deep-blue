import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { title: "Direct Manufacturing Access", description: "Sourcing directly from production facilities across multiple geographies" },
  { title: "Global Distribution Activation", description: "Activating distribution channels in new and existing markets worldwide" },
  { title: "Scalable Trading Partnerships", description: "Flexible structures from direct trading to joint ventures" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Connecting Manufacturers<br />and Markets Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
