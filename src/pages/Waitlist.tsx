import SectionHeading from "@/components/SectionHeading";
import WaitlistForm from "@/components/WaitlistForm";

const Waitlist = () => (
  <main>
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-alt">
      <div className="container-narrow text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Join the Waitlist</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Be among the first to experience Rapid Rescue when we launch. Sign up for early access and updates.
        </p>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <WaitlistForm />
      </div>
    </section>
  </main>
);

export default Waitlist;
