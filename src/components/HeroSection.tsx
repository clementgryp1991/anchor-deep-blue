import heroShipVideo from "@/assets/hero-ship-video-new.mp4.asset.json";
import heroBg from "@/assets/hero-ship-bg.jpg";
import ancLogoWhite from "@/assets/anc-logo-white.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src={heroShipVideo.url}
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          <img src={ancLogoWhite} alt="ANC Global Trading" className="h-36 md:h-48 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 uppercase">
            From the Seed<br />
            <span className="font-semibold">to the Smoke</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            International trading partner connecting manufacturers and markets worldwide
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-[hsl(216,54%,9%)]/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* CTA Buttons */}
          <div className="flex gap-3">
            <a
              href="#products"
              className="px-6 py-2.5 rounded border border-white text-white text-sm tracking-wide uppercase hover:bg-white hover:text-[hsl(216,54%,9%)] transition-colors"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="px-6 py-2.5 rounded bg-white/10 border border-white/20 text-white text-sm tracking-wide uppercase hover:bg-white/20 transition-colors"
            >
              Who We Are
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white">30+</span>
              <p className="text-[10px] tracking-widest uppercase text-white/60 mt-0.5">Years Experience</p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white italic">13</span>
              <p className="text-[10px] tracking-widest uppercase text-white/60 mt-0.5">Active Markets</p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white">5</span>
              <p className="text-[10px] tracking-widest uppercase text-white/60 mt-0.5">Continents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
