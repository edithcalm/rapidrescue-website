import { Link } from "react-router-dom";
import { AlertTriangle, Radio, Users, Shield, Heart, Activity, Smartphone, Watch } from "lucide-react";
import wearableAfrican from "@/assets/wearable-african.png";
import wearableStealth from "@/assets/wearable-stealth.png";
import wearableOcean from "@/assets/wearable-ocean.png";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ecosystemLayers = [
  {
    icon: Shield,
    title: "Professional Response Layer",
    desc: "Alert sent via geolocation to the nearest hospital and private security firm. Real-time patient profile shared instantly.",
  },
  {
    icon: Heart,
    title: "Personal Circle Layer",
    desc: "Emergency contacts are instantly notified with your location and status, keeping your loved ones informed.",
  },
  {
    icon: Users,
    title: "Community Response Layer",
    desc: "Nearby users alerted within 50 to 100 meters, enabling bystander assistance before professional help arrives.",
  },
  {
    icon: Activity,
    title: "Live Data Layer",
    desc: "Medical history, allergies, blood type, and conditions shared securely with first responders in real time.",
  },
];

const kenyaReasons = [
  { title: "Traffic Delays", desc: "Nairobi's congestion makes traditional ambulance response dangerously slow. Rapid Rescue routes around this." },
  { title: "Security Density", desc: "Kenya's extensive private security network becomes a rapid-response asset when integrated digitally." },
  { title: "Community Proximity", desc: "Dense urban neighborhoods mean trained bystanders can reach you within seconds, not minutes." },
  { title: "Student Access", desc: "A 100 Ksh accessibility plan ensures university students and young professionals can participate." },
];

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <main>
      {/* Hero - gradient background instead of image */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_60%)]" />
        <div className="relative container-narrow py-32 text-primary-foreground">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Integrated Emergency Response, Reimagined.
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-10 leading-relaxed max-w-xl">
              Rapid Rescue transforms wearables, bystanders, hospitals, and security teams into one synchronized emergency ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/waitlist"
                className="inline-flex items-center rounded-lg bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:opacity-90 active:scale-[0.97]"
              >
                Join the Waitlist
              </Link>
              <a
                href="#problem"
                className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-20 md:py-28 section-alt">
        <AnimatedSection>
          <div className="container-narrow">
            <SectionHeading title="The Problem" />
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In emergencies, delays cost lives. Traffic congestion, fragmented response systems, and lack of real-time medical data slow down intervention. Every minute lost in the "Golden Hour" dramatically reduces survival rates.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Ecosystem */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeading
              title="The Rapid Rescue Ecosystem"
              subtitle="Four synchronized layers working together to eliminate response delays."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ecosystemLayers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={i * 100}>
                <div className="rounded-xl border border-border bg-card p-8 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5 transition-transform duration-300 hover:scale-110">
                    <layer.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wearable - no model image */}
      <section className="py-20 md:py-28 section-alt">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeading
              title="The Wearable That Connects You to Help"
              subtitle="One tap sends your location, medical profile, and alert to responders, security, and your personal circle."
            />
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Radio, title: "Instant Alert Dispatch", desc: "Press once to send your GPS location and medical profile to the nearest hospital, private security, and your emergency contacts simultaneously." },
                { icon: Watch, title: "Low-Energy Bluetooth + GPS", desc: "Syncs seamlessly with your phone for continuous location tracking while preserving battery life throughout the day." },
                { icon: Smartphone, title: "Stylish & Discreet", desc: "Available in multiple African-inspired designs. Emergency tech that looks like fashion, not a medical device." },
              ].map((f, i) => (
                <div key={f.title} className="rounded-xl border border-border bg-card p-8 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5 transition-transform duration-300 hover:scale-110">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Three bracelet variants */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { src: wearableAfrican, name: "Heritage Edition", desc: "Vibrant African-inspired pattern" },
              { src: wearableStealth, name: "Stealth Edition", desc: "Subtle, professional design" },
              { src: wearableOcean, name: "Ocean Edition", desc: "Cool tones, relaxed style" },
            ].map((v, i) => (
              <AnimatedSection key={v.name} delay={i * 120}>
                <div className="text-center group">
                  <div className="rounded-2xl bg-muted p-6 mb-4 transition-all duration-300 group-hover:card-shadow-hover group-hover:-translate-y-1">
                    <img src={v.src} alt={v.name} className="w-full max-w-[220px] mx-auto aspect-square object-contain" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{v.name}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kenya */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeading
              title="Why It Matters in Kenya"
              subtitle="Designed specifically for Nairobi's unique urban landscape and community dynamics."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {kenyaReasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 100}>
                <div className="rounded-xl border border-border bg-card p-8 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1 h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
              Rapid Rescue follows an integration approach with existing infrastructure. No active partnerships are being claimed at this stage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <AnimatedSection>
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Be Part of the Solution?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Join the Rapid Rescue waitlist and be among the first to experience a new standard in emergency response.</p>
            <Link
              to="/waitlist"
              className="inline-flex items-center rounded-lg bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition-all hover:opacity-90 active:scale-[0.97]"
            >
              Join the Waitlist
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Index;
