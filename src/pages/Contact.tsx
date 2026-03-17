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
        keywords="fabrication shop in Trichy, steel fabrication in Trichy, gate fabrication in Trichy, rolling shutter shop in Trichy, aluminium window work in Trichy, fabrication shop near me, steel gate work near me, rolling shutter near me, grill work near me, steel fabrication, metal fabrication, gate fabrication, steel gate work, grill work, balcony railing work, staircase railing work, rolling shutter installation, aluminium door work, aluminium window work, glass door work, glass partition work, welding work, fabrication services"
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
        .contact-shimmer {
          background: linear-gradient(90deg, #93c5fd 0%, #ffffff 50%, #93c5fd 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: contactShimmer 3.5s linear infinite;
        }
        @keyframes contactShimmer {
          to { background-position: 200% center; }
        }
        .float-mail {
          position: absolute;
          opacity: 0.2;
          pointer-events: none;
          z-index: 2;
        }
        .glow-sphere {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          z-index: 0;
        }
        @keyframes iconPulse {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(6deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: white;
          padding: 12px 32px;
          border-radius: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 25px -5px rgba(37, 211, 102, 0.3);
          text-decoration: none;
        }
        .btn-whatsapp:hover {
          background: #22c35e;
          box-shadow: 0 20px 40px -10px rgba(37, 211, 102, 0.4);
          transform: translateY(-2px);
          color: white;
        }
        .btn-email {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0d2557;
          color: white;
          padding: 12px 32px;
          border-radius: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 25px -5px rgba(13, 37, 87, 0.2);
          text-decoration: none;
        }
        .btn-email:hover {
          background: #1d4ed8;
          box-shadow: 0 20px 40px -10px rgba(13, 37, 87, 0.3);
          transform: translateY(-2px);
          color: white;
        }
      `}</style>

      {/* ══════════════════════════════════════════
          CONTACT HERO
      ══════════════════════════════════════════ */}
      <section className="contact-hero">

        {/* Visually hidden H1 — primary SEO heading for Google */}
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

        {/* Floating stat badges */}
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
            {/* Left copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              }}
            >
              {/* Badge — local keyword */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {BRAND_NAME} — Fabrication Shop in Trichy
              </motion.div>

              {/* Decorative display heading — aria-hidden; real H1 is sr-only above */}
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

              {/* SEO-rich hero paragraph */}
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

      {/* ══════════════════════════════════════════
          CONTACT INFO CARDS + QUICK ACTIONS + MAP
      ══════════════════════════════════════════ */}
      <section className="section-padding bg-background">
        <div className="container-main">

          {/* ── SEO intro — Our Location (H2) ── */}
          <div className="text-center mb-12">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-3">
              Find Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight mt-2 mb-3">
              Our Location — Fabrication Shop in Trichy
            </h2>
            <p className="text-slate-500 text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
              Our <strong className="text-slate-700">fabrication shop in Trichy</strong> is
              centrally located and easy to reach from all parts of the city. Whether you are
              searching for{" "}
              <strong className="text-slate-700">steel gate work near me</strong>,{" "}
              <strong className="text-slate-700">grill work near me</strong> or a{" "}
              <strong className="text-slate-700">rolling shutter shop in Trichy</strong> —
              we are right here in Trichy, Tamil Nadu.
            </p>
          </div>

          {/* ── Info cards — Contact Information + Business Hours ── */}
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
                    className={`w-16 h-16 rounded-2xl ${item.accent} ${item.hoverAccent} flex items-center justify-center mx-auto mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:animate-[iconPulse_2s_infinite_ease-in-out] shadow-sm`}
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

                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full opacity-0 group-hover:w-1/3 group-hover:opacity-100 transition-all duration-500 ${item.accent.split(" ")[1].replace("text-", "bg-")}`}
                />
              </motion.div>
            ))}
          </div>

          {/* ── SEO: Services paragraph ── */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-slate-500 text-[0.95rem] leading-relaxed">
              Visit our <strong className="text-slate-700">fabrication shop in Trichy</strong>{" "}
              during working hours for a free consultation on any{" "}
              <strong className="text-slate-700">steel fabrication in Trichy</strong>,{" "}
              <strong className="text-slate-700">gate fabrication in Trichy</strong>,{" "}
              <strong className="text-slate-700">balcony railing work</strong>,{" "}
              <strong className="text-slate-700">staircase railing work</strong>,{" "}
              <strong className="text-slate-700">aluminium window work in Trichy</strong>,{" "}
              <strong className="text-slate-700">glass door work</strong>,{" "}
              <strong className="text-slate-700">glass partition work</strong> or{" "}
              <strong className="text-slate-700">welding work</strong> project.
            </p>
          </div>

          {/* ── Quick Actions ── */}
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
              className="btn-whatsapp justify-center w-full sm:w-auto"
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
              className="btn-email justify-center w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" /> Email Us
            </motion.a>
          </div>

          {/* ── Map ── */}
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              title={`${COMPANY_NAME} Location — Fabrication Shop in Trichy, Tamil Nadu`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40216379421!2d78.60046027439085!3d10.790483438378789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aab191%3A0xb64cd312cafc3438!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section
        className="bg-slate-950 py-24 relative overflow-hidden text-center"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
      >
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
              <Phone className="w-4 h-4" /> Call {CONTACT_DETAILS.primaryPhone.display}
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