import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

    {/* Vision - full width, no image */}
    <section className="py-20 md:py-28">
      <AnimatedSection>
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To eliminate Golden Hour delays by transforming bystanders into first responders and wearables into life-saving data hubs. We envision a Nairobi, and eventually an Africa, where no emergency goes unanswered.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-primary">
      <AnimatedSection>
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
      </AnimatedSection>
    </section>
  </main>
);

export default About;
