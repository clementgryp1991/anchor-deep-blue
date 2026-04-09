import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    title: "Nicotine Pouches",
    brand: "Beat",
    description: "Tobacco-free nicotine pouches designed for the modern consumer. Premium quality, competitive pricing.",
    specs: "8 flavors · 3–16mg nicotine range",
    features: ["Swedish manufacturing standards", "EU compliant", "White-label capability"],
  },
  {
    title: "Cigarettes",
    brand: "Multiple Brands",
    description: "Comprehensive cigarette portfolio across multiple price segments. Flexible volumes and private label capability.",
    specs: "King Size · 100's · Slim formats",
    features: ["Direct factory sourcing", "Flexible MOQ", "Private label available"],
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">Products</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            Our Product Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <div className="border-t-2 border-accent w-12 mb-6" />
              <p className="text-xs tracking-widest uppercase text-accent mb-2">{p.brand}</p>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <p className="text-foreground text-sm font-medium mb-4">{p.specs}</p>
              <ul className="space-y-2">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
