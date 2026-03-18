import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Phone, MessageCircle, MapPin, Mail, Clock, Facebook } from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";
import SEO from "../components/SEO";
import { CONTACT_DETAILS, formatTelLink, getWhatsAppUrl, getMailtoLink, COMPANY_NAME, BRAND_NAME } from "../config/contact";

const Contact = () => {
  return (
    <main className="pt-20">
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
          opacity: 0.5;
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
      `}</style>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1 className="sr-only">
          Contact {COMPANY_NAME} — Fabrication Shop in Trichy for Steel Gate, Grill, Railing, Rolling Shutter &amp; Aluminium Works
        </h1>

        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/src/assets/heropage/contack page hero .webp"
            alt={`Contact ${COMPANY_NAME} — fabrication shop in Trichy for steel gate work, rolling shutter and aluminium works`}
            className="hero-bg-img"
            loading="eager"
          />
        </motion.div>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />

        <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available 24/7 For You
        </div>
        <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Free Consultation &amp; Site Visit
        </div>

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
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
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
                className="flex flex-col sm:flex-row gap-3"
              >
                <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-10 w-full sm:w-auto">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
                <TurtleButton href={getWhatsAppUrl()} variant="whatsapp" external className="rounded-xl w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </TurtleButton>
                <TurtleButton href={CONTACT_DETAILS.socials.facebook} variant="premium_outline_shimmer" external className="rounded-xl border-blue-400 text-blue-300 w-full sm:w-auto">
                  <Facebook className="w-4 h-4" /> Facebook
                </TurtleButton>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-10 w-full sm:w-auto">
              <Phone className="w-5 h-5" /> Call Now
            </TurtleButton>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={CONTACT_DETAILS.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-8 py-3 rounded-lg font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#1877F2]/25 w-full sm:w-auto"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={getMailtoLink()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0d2557] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-blue-600/30 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" /> Email Us
            </motion.a>
          </div>

          {/* UPDATED MAP WITH CORRECT LOCATION */}
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <iframe
              title={`${COMPANY_NAME} Location — Fabrication Shop in Trichy, Tamil Nadu`}
              src="https://www.google.com/maps?q=10.805431,78.743805&hl=en&z=16&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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