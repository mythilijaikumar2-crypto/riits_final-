import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase mb-4">RIITS Metal Craft</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            The Art of Metal. Premium fabrication, elevation & cladding solutions based in Trichy, Tamil Nadu.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Our Work" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity" aria-label={`Go to ${l.label} page`}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>Gates & Grills</span>
            <span>Railings & Handrails</span>
            <span>Aluminium & Glass</span>
            <span>Elevation & Cladding</span>
            <span>Rolling Shutters</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2 opacity-80">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Trichy, Tamil Nadu, India</span>
            </div>
            <a href="tel:+919894794557" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity" aria-label="Call RIITS Metal Craft">
              <Phone className="w-4 h-4" />
              <span>+91 98947 94557 / 63839 98574</span>
            </a>
            <a href="mailto:info@ritsmetalcraft.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity" aria-label="Send email to RIITS Metal Craft">
              <Mail className="w-4 h-4" />
              <span>info@ritsmetalcraft.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-60">
        © {new Date().getFullYear()} RIITS Metal Craft. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
