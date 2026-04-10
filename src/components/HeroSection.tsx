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
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 bg-black/0 text-white">
            International trading partner connecting manufacturers and markets worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#products"
              className="px-7 py-3 rounded-sm border border-white/80 text-white text-sm font-light tracking-[0.2em] uppercase hover:bg-white hover:text-[hsl(216,54%,9%)] transition-all duration-300"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="px-7 py-3 rounded-sm border border-white/30 text-white/90 text-sm font-light tracking-[0.2em] uppercase hover:border-white/60 hover:text-white transition-all duration-300"
            >
              Who We Are
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-10 md:gap-16">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-extralight tracking-tight text-white">30<span className="text-white/60">+</span></span>
              <p className="text-[10px] tracking-[0.25em] uppercase mt-1 font-light bg-black/0 text-white">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-extralight tracking-tight text-white italic">13</span>
              <p className="text-[10px] tracking-[0.25em] uppercase mt-1 font-light bg-black/0 text-white">Active Markets</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-extralight tracking-tight text-white">5</span>
              <p className="text-[10px] tracking-[0.25em] uppercase mt-1 font-light bg-black/0 text-white">Continents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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
