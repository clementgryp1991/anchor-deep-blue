import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "14", label: "Active Markets" },
  { value: "5", label: "Continents" },
  { value: "5", label: "Product Categories" },
];

const regions = [
  { name: "Europe", countries: "Belgium, Romania" },
  { name: "Middle East", countries: "UAE" },
  { name: "Africa", countries: "South Africa, Zimbabwe, Djibouti, Ethiopia, Zambia" },
  { name: "Asia", countries: "Pakistan" },
  { name: "Americas", countries: "USA, Mexico, Brazil, Paraguay" },
];

const GlobalPresenceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="global" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">Global Presence</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-12">
            Operating Across Borders
          </h2>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="text-5xl md:text-6xl font-bold text-foreground">{s.value}</span>
                <p className="text-muted-foreground mt-2 text-sm tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* World map abstract */}
        <div className="relative mb-16">
          <div className="w-full h-px bg-border" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            {regions.map((r, i) => (
              <div key={i} className="text-center md:text-left">
                <h4 className="text-sm font-semibold text-foreground mb-1">{r.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
