import { Link } from "react-router-dom";
import { AlertTriangle, Radio, Users, Shield, Heart, Activity, Smartphone, Watch } from "lucide-react";
import nairobiSkyline from "@/assets/nairobi-skyline.jpg";
import wearableBracelet from "@/assets/wearable-bracelet.jpg";
import SectionHeading from "@/components/SectionHeading";

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
    desc: "Nearby users alerted within 50–100 meters, enabling bystander assistance before professional help arrives.",
  },
  {
    icon: Activity,
    title: "Live Data Layer",
    desc: "Medical history — allergies, blood type, conditions — shared securely with first responders in real time.",
  },
];

const kenyaReasons = [
  { title: "Traffic Delays", desc: "Nairobi's congestion makes traditional ambulance response dangerously slow. Rapid Rescue routes around this." },
  { title: "Security Density", desc: "Kenya's extensive private security network becomes a rapid-response asset when integrated digitally." },
  { title: "Community Proximity", desc: "Dense urban neighborhoods mean trained bystanders can reach you within seconds, not minutes." },
  { title: "Student Access", desc: "A 100 Ksh accessibility plan ensures university students and young professionals can participate." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <img src={nairobiSkyline} alt="Nairobi skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
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
      </section>

      {/* Ecosystem */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="The Rapid Rescue Ecosystem"
            subtitle="Four synchronized layers working together to eliminate response delays."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ecosystemLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-xl border border-border bg-card p-8 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5">
                  <layer.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{layer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wearable */}
      <section className="py-20 md:py-28 section-alt">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="The Wearable" centered={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                    <Watch className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phase 1: Minimalist Bracelet</h4>
                    <p className="text-sm text-muted-foreground">A sleek, unobtrusive wearable that syncs with your phone via low-energy Bluetooth and GPS.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phase 2: Discreet Jewelry Line</h4>
                    <p className="text-sm text-muted-foreground">Stylish and discreet—emergency tech that looks like fashion, not a medical device.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img src={wearableBracelet} alt="Rapid Rescue wearable bracelet" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Kenya */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading
            title="Why It Matters in Kenya"
            subtitle="Designed specifically for Nairobi's unique urban landscape and community dynamics."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {kenyaReasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-border bg-card p-8 card-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
            Rapid Rescue follows an integration approach with existing infrastructure. No active partnerships are being claimed at this stage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
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
      </section>
    </main>
  );
};

export default Index;
