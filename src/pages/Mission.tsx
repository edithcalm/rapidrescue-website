import { Link } from "react-router-dom";
import { Clock, Car, Users, Shield, HeartPulse } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

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

const StatCard = ({ icon: Icon, value, suffix, label, delay = 0 }: { icon: any; value: number; suffix: string; label: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div
      ref={ref}
      className={`rounded-xl border border-border bg-card p-8 card-shadow text-center transition-all duration-700 hover:card-shadow-hover hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5 transition-transform duration-300 hover:scale-110">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{label}</p>
    </div>
  );
};

const Mission = () => (
  <main>
    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_60%)]" />
      <div className="relative container-narrow text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">Our Mission</h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Every year, thousands of Kenyans lose their lives to emergencies that could have been survivable. We exist to change that.
        </p>
      </div>
    </section>

    {/* Why */}
    <section className="py-20 md:py-28">
      <AnimatedSection>
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Why This Matters" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In Nairobi, the average ambulance response time exceeds 60 minutes. The globally recommended standard is 8 minutes. This gap is not just a statistic. It represents lives that could be saved with faster, smarter intervention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Rapid Rescue was built to close this gap by leveraging existing community infrastructure, private security networks, and smart wearable technology to create a response system that works within the realities of urban Kenya.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* Stats */}
    <section className="py-20 md:py-28 section-alt">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading
            title="The Numbers That Drive Us"
            subtitle="Real data from Kenya that underscores the urgency of our mission."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard icon={Clock} value={60} suffix="+ min" label="Average ambulance response time in Nairobi, vs the recommended 8 minutes" delay={0} />
          <StatCard icon={Car} value={4000} suffix="+" label="Lives lost annually to road traffic incidents in Kenya (NTSA data)" delay={100} />
          <StatCard icon={Users} value={4} suffix="M+" label="Nairobi residents with limited emergency infrastructure coverage" delay={200} />
          <StatCard icon={Shield} value={500} suffix="K+" label="Private security guards in Kenya, a largely untapped rapid-response asset" delay={300} />
          <StatCard icon={HeartPulse} value={60} suffix=" min" label="The Golden Hour window where survival rates drop dramatically without intervention" delay={400} />
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Our Approach" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Rather than building from scratch, Rapid Rescue works with the infrastructure that already exists. Kenya has over 500,000 private security guards deployed across the country. Dense neighborhoods mean bystanders can reach an emergency within seconds. And mobile phone penetration makes real-time data sharing possible at scale.
              </p>
              <p>
                We connect these dots with a wearable device and a digital platform that coordinates professional services, personal contacts, nearby community members, and live medical data simultaneously. One tap triggers an entire ecosystem of response.
              </p>
              <p>
                This is not about replacing emergency services. It is about ensuring that help arrives during the critical minutes before they do.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-primary">
      <AnimatedSection>
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Be Part of the Solution</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Join the waitlist and help us build an emergency response system that Kenya deserves.</p>
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

export default Mission;
