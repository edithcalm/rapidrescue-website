import { useState, FormEvent } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby9NnUgDmKaqIxLk3fEoJS3VyW9ysq10gSBzSxUiabj4BjyOG4T8pIp2J9bZAPn9n92IQ/exec";

const WaitlistForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      setSubmitted(true);
      form.reset();
      setConsent(false);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank you</h3>
        <p className="text-muted-foreground">You have been added to the Rapid Rescue waitlist.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          placeholder="+254 7XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1.5">Location</label>
        <select
          id="location"
          name="location"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        >
          <option value="">Select your area</option>
          <option>Westlands</option>
          <option>Upper Hill</option>
          <option>Kilimani</option>
          <option>CBD</option>
          <option>Langata</option>
          <option>Karen</option>
          <option>Eastlands</option>
          <option>Kasarani</option>
          <option>Embakasi</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-1.5">What interests you most?</label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        >
          <option value="">Select your interest</option>
          <option>Personal Safety</option>
          <option>Family Protection</option>
          <option>Community Response Network</option>
          <option>Wearable Technology</option>
          <option>Student Safety Plan</option>
          <option>Corporate/Institutional Safety</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="student" className="block text-sm font-medium text-foreground mb-1.5">Are you a student?</label>
        <select
          id="student"
          name="student"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring accent-primary"
          required
        />
        <span className="text-xs text-muted-foreground leading-relaxed">
          I consent to Rapid Rescue securely storing my information for early access and updates.
        </span>
      </label>
      <button
        type="submit"
        disabled={submitting || !consent}
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Join the Waitlist"}
      </button>
    </form>
  );
};

export default WaitlistForm;
