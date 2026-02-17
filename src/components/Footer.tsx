import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import RRLogo from "./RRLogo";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-narrow py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <RRLogo className="h-8 w-8" />
            <span className="font-bold text-lg">Rapid Rescue</span>
          </div>
          <p className="text-sm opacity-70 mb-6">Your Safety, Our Priority</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="opacity-60 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 transition-opacity">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-60">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
              { to: "/waitlist", label: "Join the Waitlist" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-60">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2 opacity-70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Upper Hill, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <Phone size={16} className="shrink-0" />
              <span>+254 721 606 409 / +254 792 868 385</span>
            </div>
            <a href="mailto:rapidrescueco@gmail.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Mail size={16} className="shrink-0" />
              <span>rapidrescueco@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center">
        <p className="text-xs opacity-50">© 2026 Rapid Rescue. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
