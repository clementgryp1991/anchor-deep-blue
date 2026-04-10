import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import worldMapBg from "@/assets/world-map-bg.png";

const stats = [
  { value: "13", label: "Active Markets" },
  { value: "5", label: "Continents" },
  { value: "3", label: "Product Categories" },
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
    <section id="global" className="relative py-24 md:py-32 px-6 section-light overflow-hidden">
      {/* Background map */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={worldMapBg}
          alt=""
          className="w-full max-w-5xl opacity-[0.08]"
          loading="lazy"
          width={1920}
          height={960}
        />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <p className="text-sm tracking-widest uppercase text-accent">Global Presence</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Operating Across Borders
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-12">
            Connecting manufacturers and markets across 5 continents with 13 active markets.
          </p>

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

        {/* Region list */}
        <div className="w-full h-px" style={{ backgroundColor: 'hsl(var(--section-border))' }} />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          {regions.map((r, i) => (
            <div key={i} className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-foreground mb-1">{r.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.countries}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
