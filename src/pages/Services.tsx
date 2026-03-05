import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Star, CheckCircle2, Wrench, Home, Building2, Factory, Zap } from "lucide-react";
import ProcessSection from "../components/ProcessSection";
import { TurtleButton } from "../components/TurtleButton";
import resSvcImg from "../assets/service page/3rd view port/residentialservice.png";
import comSvcImg from "../assets/service page/3rd view port/commercalservice.png";
import indSvcImg from "../assets/service page/3rd view port/industrialservice.png";

/* ─── DATA ──────────────────────────────────────────────────────────── */

const serviceAreas = [
  {
    title: "Residential",
    icon: <Home className="w-6 h-6" />,
    color: "#2563eb",
    gradient: "from-blue-600 to-indigo-800",
    image: resSvcImg,
    items: ["Home gates & grills", "Balcony railings", "Staircase handrails", "Window systems", "Elevation work"],
  },
  {
    title: "Commercial",
    icon: <Building2 className="w-6 h-6" />,
    color: "#0f766e",
    gradient: "from-teal-600 to-emerald-800",
    image: comSvcImg,
    items: ["Showroom facades", "Office partitions", "Structural glazing", "Rolling shutters", "ACP cladding"],
  },
  {
    title: "Industrial",
    icon: <Factory className="w-6 h-6" />,
    color: "#b45309",
    gradient: "from-amber-600 to-orange-800",
    image: indSvcImg,
    items: ["Factory sheds", "Warehouse structures", "Heavy-duty shutters", "Structural steel", "Industrial gates"],
  },
];


const stats = [
  { val: "800+", label: "Projects Completed", icon: <Wrench className="w-5 h-5" /> },
  { val: "15+", label: "Years Experience", icon: <Zap className="w-5 h-5" /> },
  { val: "100%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { val: "Pan TN", label: "Areas Served", icon: <CheckCircle2 className="w-5 h-5" /> },
];

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────── */
const Services = () => {

  return (
    <main className="overflow-hidden" style={{ transform: 'translateZ(0)' }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-center bg-[#061b54] overflow-hidden">
        {/* New Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/src/assets/services hero page .png"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ willChange: "transform" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061b54]/90 via-[#061b54]/50 to-transparent" />
        </div>

        {/* Background layers */}

        {/* Noise/grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Floating decorative badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          15+ Years of Expertise
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Delivered
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <Zap className="w-3 h-3" /> What We Offer
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                className="font-heading text-4xl sm:text-5xl lg:text-5xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Expert<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Metal &amp; Glass
                </span><br />
                Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                From precision fabrication to flawless installation — RITS Metal Craft delivers
                end-to-end solutions for residential, commercial, and industrial projects across Tamil Nadu.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <TurtleButton href="tel:+919876543210" variant="premium_shimmer" className="rounded-xl">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </TurtleButton>
              </motion.div>
            </div>


          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────── */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl font-black font-heading text-[#1a3a6b]">{s.val}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ──────────────────────────────────────── */}
      <ProcessSection />

      {/* ── SERVICE AREAS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,58,107,0.04),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[#2d5a8e] mb-3">Sectors We Serve</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#1a3a6b] tracking-tight">Service Areas</h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              Comprehensive metal and glass solutions across residential, commercial, and industrial segments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden cursor-default"
              >
                {/* Gradient header */}
                <div
                  className={`bg-gradient-to-br ${area.gradient} p-8 relative overflow-hidden h-48 flex flex-col justify-end`}
                >
                  {/* Category Image background */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                    <img src={area.image} alt={area.title} className="w-full h-full object-cover mix-blend-overlay" />
                  </div>

                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10 flex items-start justify-between mb-2">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                      {area.icon}
                    </div>
                    <span className="text-white/30 font-heading font-black text-4xl">0{i + 1}</span>
                  </div>

                  <h3 className="relative z-10 font-heading text-2xl font-black uppercase text-white tracking-wide">
                    {area.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="bg-white p-8 border border-slate-100 rounded-b-3xl">
                  <ul className="space-y-3">
                    {area.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex items-center gap-3 text-sm text-slate-600 group-hover:gap-4 transition-all duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: area.color }} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity opacity-0 group-hover:opacity-100"
                    style={{ color: area.color }}
                  >
                    Explore Services <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,58,107,0.05),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[#2d5a8e] mb-4">Get In Touch</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#1a3a6b] tracking-tight mb-6">
              Ready to Start<br />Your Project?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Contact us today for a free consultation and site visit. Our team is ready to bring your vision to life with precision craftsmanship.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-[#1a3a6b] hover:bg-[#2d5a8e] text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-[#1a3a6b]/30 hover:shadow-2xl"
              >
                <Phone className="w-4 h-4" /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </motion.a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-slate-100">
              {["Free Consultation", "On-Time Delivery", "Quality Assured", "Pan Tamil Nadu"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {b}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Services;
