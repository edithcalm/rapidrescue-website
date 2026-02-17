import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Ambulance, ShieldAlert, Users, CreditCard } from "lucide-react";

const services = [
  {
    icon: Ambulance,
    title: "Medical Emergency Response",
    desc: "When an emergency is triggered, a digital patient profile — including blood type, allergies, and pre-existing conditions — is transmitted instantly to the nearest hospital. Responders arrive informed and ready to act.",
    tag: "Active",
  },
  {
    icon: ShieldAlert,
    title: "Personal Safety Response",
    desc: "Alerts are routed simultaneously to private security firms and nearby users. Geolocation ensures the closest available responder is dispatched, while your personal circle is notified in real time.",
    tag: "Active",
  },
  {
    icon: Users,
    title: "Community Bystander Relay",
    desc: "Nearby users within 50–100 meters receive an alert with live EMT guidance, enabling them to provide critical first aid while professional help is on the way.",
    tag: "Active",
  },
  {
    icon: CreditCard,
    title: "Insurance Integration",
    desc: "A future phase will enable seamless integration with insurance providers, allowing automated claims processing and coverage verification during emergencies.",
    tag: "Future Phase",
  },
];

const Services = () => (
  <main>
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-alt">
      <div className="container-narrow text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive suite of emergency response solutions designed for the realities of urban Kenya.
        </p>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="space-y-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-8 md:p-10 card-shadow flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 shrink-0">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      s.tag === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Get Early Access</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Be the first to experience these services when they launch.</p>
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

export default Services;
