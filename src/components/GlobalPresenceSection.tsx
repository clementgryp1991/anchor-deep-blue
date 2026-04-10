import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "14", label: "Active Markets" },
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

/* Approximate dot positions on a 1000×500 world map projection */
const countryDots: { name: string; x: number; y: number }[] = [
  // Europe
  { name: "Belgium", x: 490, y: 155 },
  { name: "Romania", x: 540, y: 165 },
  // Middle East
  { name: "UAE", x: 610, y: 230 },
  // Africa
  { name: "South Africa", x: 535, y: 380 },
  { name: "Zimbabwe", x: 545, y: 345 },
  { name: "Djibouti", x: 580, y: 265 },
  { name: "Ethiopia", x: 570, y: 260 },
  { name: "Zambia", x: 545, y: 335 },
  // Asia
  { name: "Pakistan", x: 645, y: 215 },
  // Americas
  { name: "USA", x: 200, y: 175 },
  { name: "Mexico", x: 175, y: 225 },
  { name: "Brazil", x: 305, y: 320 },
  { name: "Paraguay", x: 295, y: 345 },
];

/* Connection lines from a central hub (roughly mid-Atlantic) */
const hubX = 450;
const hubY = 250;

const GlobalPresenceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="global" className="py-24 md:py-32 px-6 section-light overflow-hidden">
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

        {/* World map with dots and connections */}
        <div className="relative mb-16">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified world map outline */}
            <defs>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(210 60% 24%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(210 60% 24%)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Continent outlines - simplified shapes */}
            {/* North America */}
            <path
              d="M100,80 L120,60 L180,50 L230,55 L260,80 L270,100 L260,130 L240,160 L220,180 L200,200 L180,220 L160,230 L140,220 L120,200 L100,180 L90,150 L85,120 Z"
              fill="hsl(216 54% 9%)"
              fillOpacity="0.06"
              stroke="hsl(216 54% 9%)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M220,240 L250,230 L290,240 L320,270 L330,310 L325,350 L310,380 L290,400 L270,410 L260,390 L250,360 L240,330 L230,300 L220,270 Z"
              fill="hsl(216 54% 9%)"
              fillOpacity="0.06"
              stroke="hsl(216 54% 9%)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            {/* Europe */}
            <path
              d="M460,80 L480,70 L520,75 L550,90 L560,110 L555,140 L540,160 L520,175 L500,180 L480,175 L465,160 L455,140 L450,110 Z"
              fill="hsl(216 54% 9%)"
              fillOpacity="0.06"
              stroke="hsl(216 54% 9%)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            {/* Africa */}
            <path
              d="M470,195 L500,185 L540,190 L570,210 L590,240 L595,280 L585,320 L565,360 L540,390 L515,400 L490,390 L475,360 L465,320 L460,280 L455,240 Z"
              fill="hsl(216 54% 9%)"
              fillOpacity="0.06"
              stroke="hsl(216 54% 9%)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M570,70 L620,55 L680,60 L740,75 L780,100 L790,140 L770,170 L740,200 L700,220 L660,230 L620,225 L590,210 L570,190 L560,160 L555,130 L560,100 Z"
              fill="hsl(216 54% 9%)"
              fillOpacity="0.06"
              stroke="hsl(216 54% 9%)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />

            {/* Connection lines */}
            {countryDots.map((dot, i) => (
              <line
                key={`line-${i}`}
                x1={hubX}
                y1={hubY}
                x2={dot.x}
                y2={dot.y}
                stroke="hsl(210 60% 24%)"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Hub dot */}
            <circle cx={hubX} cy={hubY} r="6" fill="hsl(210 60% 24%)" fillOpacity="0.3" />
            <circle cx={hubX} cy={hubY} r="3" fill="hsl(210 60% 24%)" />

            {/* Country dots with glow */}
            {countryDots.map((dot, i) => (
              <g key={`dot-${i}`}>
                <circle cx={dot.x} cy={dot.y} r="16" fill="url(#dotGlow)" />
                <circle cx={dot.x} cy={dot.y} r="5" fill="hsl(210 60% 24%)" fillOpacity="0.25" />
                <circle cx={dot.x} cy={dot.y} r="3" fill="hsl(210 60% 24%)" />
                <text
                  x={dot.x}
                  y={dot.y - 10}
                  textAnchor="middle"
                  fontSize="8"
                  fill="hsl(216 54% 9%)"
                  fillOpacity="0.5"
                  fontFamily="Inter, sans-serif"
                >
                  {dot.name}
                </text>
              </g>
            ))}
          </svg>
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
