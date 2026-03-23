import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Phone, MessageCircle, MapPin, Mail, Clock, Facebook, Instagram, type LucideIcon } from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";
import SEO from "../components/SEO";
import { CONTACT_DETAILS, formatTelLink, getWhatsAppUrl, getMailtoLink, COMPANY_NAME, BRAND_NAME } from "../config/contact";
import contactHero from "../assets/heropage/contact-hero.webp";

const Contact = () => {
  const heroActionLinks: Array<{
    href: string;
    label: string;
    Icon: LucideIcon;
    tone: string;
  }> = [
    {
      href: formatTelLink(CONTACT_DETAILS.primaryPhone.value),
      label: "Call Now",
      Icon: Phone,
      tone: "social-icon-link--call",
    },
    {
      href: getWhatsAppUrl(),
      label: "WhatsApp",
      Icon: MessageCircle,
      tone: "social-icon-link--whatsapp",
    },
    {
      href: CONTACT_DETAILS.socials.facebook,
      label: "Facebook",
      Icon: Facebook,
      tone: "social-icon-link--facebook",
    },
    {
      href: CONTACT_DETAILS.socials.instagram,
      label: "Instagram",
      Icon: Instagram,
      tone: "social-icon-link--instagram",
    },
  ];

  const socialLinks: Array<{
    href: string;
    label: string;
    Icon: LucideIcon;
    tone: string;
  }> = [
    {
      href: getWhatsAppUrl(),
      label: "WhatsApp",
      Icon: MessageCircle,
      tone: "social-icon-link--whatsapp",
    },
    {
      href: CONTACT_DETAILS.socials.facebook,
      label: "Facebook",
      Icon: Facebook,
      tone: "social-icon-link--facebook",
    },
    {
      href: CONTACT_DETAILS.socials.instagram,
      label: "Instagram",
      Icon: Instagram,
      tone: "social-icon-link--instagram",
    },
    {
      href: formatTelLink(CONTACT_DETAILS.primaryPhone.value),
      label: "Call Now",
      Icon: Phone,
      tone: "social-icon-link--call",
    },
    {
      href: getMailtoLink(),
      label: "Email Us",
      Icon: Mail,
      tone: "social-icon-link--email",
    },
  ];

  return (
    <main className="pt-16">
      <SEO
        title={`Contact ${COMPANY_NAME} — Fabrication Shop in Trichy for Steel Gate, Railing, Rolling Shutter & Aluminium Works`}
        description={`Contact ${COMPANY_NAME}, the trusted fabrication shop in Trichy. Get a free quote for steel gate work, grill work, rolling shutter installation, aluminium window work and glass partition work. Call now.`}
        keywords="fabrication shop in Trichy, steel fabrication in Trichy, gate fabrication in Trichy, rolling shutter shop in Trichy, aluminium window work in Trichy, fabrication shop near me, steel gate work near me, rolling shutter near me, grill work near me"
      />

      <style>{`
        .contact-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #020617;
          overflow: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          mix-blend-mode: screen;
          will-change: transform;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.1) 0%, rgba(2, 6, 23, 0.7) 100%);
          z-index: 1;
        }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(29, 78, 216, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29, 78, 216, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        }
        .social-icon-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          align-items: center;
        }
        .social-icon-link {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          isolation: isolate;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.22);
          transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        }
        .social-icon-link::before {
          content: "";
          position: absolute;
          inset: -30%;
          z-index: -2;
          opacity: 0.9;
          filter: blur(20px);
          transition: opacity 0.3s ease;
        }
        .social-icon-link::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          z-index: -1;
          background: linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
          backdrop-filter: blur(14px);
        }
        .social-icon-link:hover {
          transform: translateY(-4px) scale(1.06);
          filter: saturate(1.15) brightness(1.08);
        }
        .social-icon-link:hover::before {
          opacity: 1;
        }
        .social-icon-link--whatsapp {
          background: linear-gradient(135deg, #16a34a, #15803d);
          box-shadow: 0 0 24px rgba(34, 197, 94, 0.28);
        }
        .social-icon-link--whatsapp::before {
          background: radial-gradient(circle, rgba(34, 197, 94, 0.75) 0%, rgba(34, 197, 94, 0) 70%);
        }
        .social-icon-link--whatsapp:hover {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.55), 0 0 60px rgba(34, 197, 94, 0.25);
        }
        .social-icon-link--facebook {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 0 24px rgba(59, 130, 246, 0.28);
        }
        .social-icon-link--facebook::before {
          background: radial-gradient(circle, rgba(59, 130, 246, 0.78) 0%, rgba(59, 130, 246, 0) 70%);
        }
        .social-icon-link--facebook:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.55), 0 0 60px rgba(59, 130, 246, 0.26);
        }
        .social-icon-link--instagram {
          background: linear-gradient(135deg, #f59e0b 0%, #ec4899 55%, #9333ea 100%);
          box-shadow: 0 0 24px rgba(236, 72, 153, 0.3);
        }
        .social-icon-link--instagram::before {
          background: radial-gradient(circle, rgba(236, 72, 153, 0.78) 0%, rgba(147, 51, 234, 0.1) 40%, rgba(236, 72, 153, 0) 72%);
        }
        .social-icon-link--instagram:hover {
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.55), 0 0 60px rgba(147, 51, 234, 0.28);
        }
        .social-icon-link--call {
          background: linear-gradient(135deg, #f97316, #dc2626);
          box-shadow: 0 0 24px rgba(249, 115, 22, 0.3);
        }
        .social-icon-link--call::before {
          background: radial-gradient(circle, rgba(249, 115, 22, 0.78) 0%, rgba(220, 38, 38, 0.18) 40%, rgba(249, 115, 22, 0) 72%);
        }
        .social-icon-link--call:hover {
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.58), 0 0 60px rgba(220, 38, 38, 0.28);
        }
        .social-icon-link--email {
          background: linear-gradient(135deg, #0f172a, #1d4ed8);
          box-shadow: 0 0 24px rgba(37, 99, 235, 0.28);
        }
        .social-icon-link--email::before {
          background: radial-gradient(circle, rgba(59, 130, 246, 0.78) 0%, rgba(15, 23, 42, 0.16) 42%, rgba(59, 130, 246, 0) 72%);
        }
        .social-icon-link--email:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.56), 0 0 60px rgba(15, 23, 42, 0.28);
        }
        .hero-social-actions {
          margin-top: 0.25rem;
        }
        .quick-social-actions {
          justify-content: center;
        }
        @media (max-width: 640px) {
          .social-icon-group {
            justify-content: center;
          }
          .social-icon-link {
            width: 54px;
            height: 54px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1 className="sr-only">
          Contact {COMPANY_NAME} — Fabrication Shop in Trichy for Steel Gate, Grill, Railing, Rolling Shutter &amp; Aluminium Works
        </h1>

        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={contactHero}
            alt={`Contact ${COMPANY_NAME} — fabrication shop in Trichy for steel gate work, rolling shutter and aluminium works`}
            className="hero-bg-img"
            loading="eager"
            decoding="async"
          />
        </motion.div>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {BRAND_NAME} — Fabrication Shop in Trichy
              </motion.div>

              <motion.p
                aria-hidden="true"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight text-white mb-6"
              >
                Let's Talk<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Steel.
                </span>
                <br />
                Start Today.
              </motion.p>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                Looking for a trusted{" "}
                <strong className="text-white/85">fabrication shop near me</strong> in Trichy?
                {COMPANY_NAME} offers complete{" "}
                <strong className="text-white/85">steel fabrication</strong>,{" "}
                <strong className="text-white/85">metal fabrication</strong> and{" "}
                <strong className="text-white/85">fabrication services in Trichy</strong> —
                call or WhatsApp us for a free site visit and written quotation.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col gap-3"
              >
                <div className="social-icon-group hero-social-actions" aria-label="Social media links">
                  {heroActionLinks.map(({ href, label, Icon, tone }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      title={label}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`social-icon-link ${tone}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-3">
              Find Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight mt-2 mb-3">
              Our Location — Fabrication Shop in Trichy
            </h2>
            <p className="text-slate-500 text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
              Our <strong className="text-slate-700">fabrication shop in Trichy</strong> is
              centrally located and easy to reach from all parts of the city.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Address",
                lines: [COMPANY_NAME, CONTACT_DETAILS.address.city + ", " + CONTACT_DETAILS.address.state, "India"],
                accent: "bg-blue-500/10 text-blue-600",
                hoverAccent: "group-hover:bg-blue-600 group-hover:text-white",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                lines: [CONTACT_DETAILS.primaryPhone.display, CONTACT_DETAILS.secondaryPhone.display],
                isLink: true,
                prefix: "tel:",
                accent: "bg-emerald-500/10 text-emerald-600",
                hoverAccent: "group-hover:bg-emerald-600 group-hover:text-white",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Business Hours",
                lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"],
                accent: "bg-amber-500/10 text-amber-600",
                hoverAccent: "group-hover:bg-amber-600 group-hover:text-white",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-slate-100 rounded-3xl p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.accent} ${item.hoverAccent} flex items-center justify-center mx-auto mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="space-y-2">
                    {item.lines.map((line) =>
                      item.isLink ? (
                        <a
                          key={line}
                          href={`${item.prefix}${line.replace(/\s/g, "")}`}
                          className="block text-base text-slate-500 hover:text-slate-900 font-medium transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-base text-slate-500 font-medium">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <SectionHeading subtitle="Reach Out" title="Quick Contact" />
          <div className="social-icon-group quick-social-actions mb-16" aria-label="Contact and social links">
            {socialLinks.map(({ href, label, Icon, tone }) => (
              <motion.a
                key={`quick-${label}`}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`social-icon-link ${tone}`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* UPDATED MAP WITH CORRECT LOCATION */}
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <iframe
              title={`${COMPANY_NAME} Location — Fabrication Shop in Trichy, Tamil Nadu`}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.39!2d78.743805!3d10.805431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa58d84a7e94f3%3A0xe67caec82a13cc7c!2sRIITS%20Metal%20Craft!5e0!3m2!1sen!2sin!4v1710900000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allow="fullscreen; clipboard-write; geolocation"
            />
          </div>

          {/* Get Directions Button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=10.805431,78.743805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              <MapPin className="w-5 h-5" />
              Get Directions to RIITS Metal Craft
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10 md:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Direct Line
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">
            Immediate Assistance?
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/60 mb-10 leading-relaxed">
            Need{" "}
            <strong className="text-white/75">rolling shutter near me</strong>,{" "}
            <strong className="text-white/75">aluminium door work</strong> or any{" "}
            <strong className="text-white/75">fabrication services in Trichy</strong>?
            Our team is just a call away — free site visit, transparent quote, no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-10 w-full sm:w-auto">
              <Phone className="w-4 h-4" /> Call {CONTACT_DETAILS.primaryPhone.display} / {CONTACT_DETAILS.secondaryPhone.display}
            </TurtleButton>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
