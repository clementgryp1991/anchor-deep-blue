import ancLogoWhite from "@/assets/anc-logo-white.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={ancLogoWhite} alt="ANC Global Trading" className="h-8 opacity-60" />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} ANC Global Trading. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
