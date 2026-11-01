import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll get back to you shortly." });
    setForm({ name: "", company: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px border-white bg-white text-white" />
            <p className="text-sm tracking-widest uppercase bg-black/0 text-white">Get In Touch</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Explore Opportunities
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Ready to discuss distribution, pricing, or partnership structures? Reach out today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="space-y-8 text-white bg-white/0">
            <div className="space-y-3">
              <a
                href="mailto:info@ancglobaltrading.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ancglobaltrading.com
              </a>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                ANC Global Trading is a trading name of<br />
                 Black Oak Capital BV, Belgium.<br />
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-card border-border"
            />
            <Input
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              maxLength={100}
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-card border-border"
            />
            <Textarea
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={1000}
              rows={5}
              className="bg-card border-border"
            />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
