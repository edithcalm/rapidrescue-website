import { MapPin, Phone, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
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

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-alt">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to learn more? Reach out. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info - no map */}
            <AnimatedSection>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">Upper Hill, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">+254 721 606 409</p>
                      <p className="text-sm text-muted-foreground">+254 792 868 385</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:rapidrescueco@gmail.com" className="text-sm text-primary hover:underline">
                        rapidrescueco@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={150}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Send a Message</h2>
                {sent ? (
                  <div className="text-center py-12 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent</h3>
                    <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                      <input id="contactName" type="text" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input id="contactEmail" type="email" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="contactMessage" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea id="contactMessage" required rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none" placeholder="How can we help?" />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
