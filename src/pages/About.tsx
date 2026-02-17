import nairobiUrban from "@/assets/nairobi-urban.jpg";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Eye, Layers, Handshake } from "lucide-react";

const About = () => (
  <main>
    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 section-alt" />
      <div className="relative container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Rapid Rescue</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eliminating Golden Hour delays by transforming bystanders into first responders and wearables into life-saving data hubs.
          </p>
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To eliminate Golden Hour delays by transforming bystanders into first responders and wearables into life-saving data hubs. We envision a Nairobi — and eventually an Africa — where no emergency goes unanswered.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden card-shadow">
            <img src={nairobiUrban} alt="Nairobi streets" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Concepts */}
    <section className="py-20 md:py-28 section-alt">
      <div className="container-narrow">
        <SectionHeading title="How We Think" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Layers,
              title: "Total Response",
              desc: "Rather than relying on a single responder, Rapid Rescue coordinates professional services, personal contacts, nearby bystanders, and live medical data simultaneously.",
            },
            {
              icon: Handshake,
              title: "Hybrid Model",
              desc: "Consumer-facing first, then infrastructure scaling. We build trust through individual users before expanding to institutional integrations.",
            },
            {
              icon: Eye,
              title: "Integration-Ready",
              desc: "No active partnerships yet, but the platform is designed for seamless integration with hospitals, security firms, and insurance providers.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-8 card-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Join the Movement</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Be part of an ecosystem that's redefining emergency response in Kenya.</p>
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

export default About;
