import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    number: "01",
    title: "Nicotine & Caffeine Pouches",
    description: "The new generation of nicotine products. Fastest growing nicotine category with consistent quality and market-validated development.",
    tags: ["Our Brand", "Multiple Flavors", "Nicotine Strength on Request", "Dry & Wet", "Private Label"],
    features: [
      "Market-validated development — tested and refined against real consumer demand",
      "Responsibly sourced nicotine, no harmful additives",
      "Multiple strengths and formats — dry, wet, zipper bag",
      "Private label capability available on demand",
    ],
  },
  {
    number: "02",
    title: "Cigarettes",
    description: "A diverse portfolio of established brands available in flexible volumes with consistent product quality across all markets.",
    tags: ["Multiple Brands", "Flexible Volumes", "Private Label"],
    features: [
      "Multiple established brands available for distribution",
      "Flexible volume structures adapted per market",
      "Consistent product quality, reliable supply chain",
      "Private label capability available on demand",
    ],
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-24 md:py-32 px-6 section-light">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header - left aligned */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <p className="text-sm tracking-widest uppercase text-accent">Our Products</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Two Core Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Competitive pricing, reliable supply, and private label capability across both product lines.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Dark header */}
              <div className="bg-background px-8 pt-8 pb-6">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Product {p.number}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>

              {/* Light body */}
              <div className="px-8 py-8" style={{ backgroundColor: 'hsl(var(--section-card-bg))' }}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-4 py-1.5 text-xs rounded-full border"
                      style={{
                        borderColor: 'hsl(var(--section-border))',
                        color: 'hsl(var(--section-fg))',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'hsl(var(--section-muted-fg))' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--section-fg))' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: 'hsl(var(--section-fg))' }}
                >
                  Request Pricing →
                </a>
                <div className="w-24 h-px mt-2" style={{ backgroundColor: 'hsl(var(--section-fg))' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
