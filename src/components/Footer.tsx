import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { CONTACT_DETAILS, formatTelLink, COMPANY_NAME } from "../config/contact";

const Footer = () => (
  <footer className="footer-bg bg-slate-950 text-white overflow-hidden -mt-[1px] relative z-10">
    <div
      className="px-8 sm:px-12 lg:px-20 py-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Brand */}
      <div className="flex flex-col">
        <p className="text-sm opacity-60 leading-relaxed">
          The Art of Metal. Premium steel gate fabrication, railing, rolling shutter, aluminium &amp;
          ACP cladding solutions based in Trichy, Tamil Nadu.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h4>
        <div className="flex flex-col gap-3">
          {[
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Services", path: "/services" },
            { name: "Our Work", path: "/projects" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <Link key={item.name} to={item.path} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Our Services</h4>
        <div className="flex flex-col gap-3 text-sm opacity-60">
          {[
            "Steel Gates & Grills",
            "Stainless Steel Railings",
            "Rolling Shutters",
            "Aluminium Windows & Doors",
            "ACP Cladding & Elevation",
            "Structural Steel Fabrication",
          ].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Contact</h4>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-start gap-2 opacity-80 py-1">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span className="leading-relaxed">{CONTACT_DETAILS.address.full}</span>
          </div>
          <a
            href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity py-1"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="leading-relaxed">{CONTACT_DETAILS.primaryPhone.display} / {CONTACT_DETAILS.secondaryPhone.display}</span>
          </a>

          <a
            href={`mailto:${CONTACT_DETAILS.email}`}
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity py-1"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="leading-relaxed">{CONTACT_DETAILS.email}</span>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="px-8 sm:px-12 lg:px-20 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm opacity-40">
      <span>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</span>
      <span>Steel Gate · Railing · Rolling Shutter · ACP Cladding · Trichy</span>
    </div>
  </footer>
);

export default Footer;
