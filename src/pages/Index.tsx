import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gates from "../assets/gatesandgrills.jpg";
import railings from "../assets/railingsandhandrails.avif";
import staircase from "../assets/pergolas.jpg";
import roll from "../assets/rollshutter.avif";
import struct from "../assets/structfabric.jpg";
import industry from "../assets/industryworks.jpg";
import aluminium from "../assets/aluminium.jpg";
import elevation from "../assets/elevation.avif";

import {
  Phone,
  MessageCircle,
  Shield,
  Ruler,
  MapPin,
  CheckCircle2,
  Layers,
  Clock4,
  ChevronRight,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import heroImage from "../assets/home page hero1.png";
import SectionHeading from "../components/SectionHeading";
import { TurtleButton } from "../components/TurtleButton";

const services = [
  { icon: "🚪", title: "Gates & Grills", desc: "Custom MS & SS gates with modern geometric designs", category: "MS / SS Fabrication", image: gates, productCategory: "ss" },
  { icon: "🛡️", title: "Railings & Handrails", desc: "Brushed stainless steel balcony & staircase railings", category: "Stainless Steel", image: railings, productCategory: "ss" },
  { icon: "🪜", title: "Staircases & Pergolas", desc: "Structural steel staircases and decorative pergolas", category: "Structural Steel", image: staircase, productCategory: "ss" },
  { icon: "🏗️", title: "Rolling Shutters", desc: "Heavy-duty commercial & industrial rolling systems", category: "Industrial", image: roll, productCategory: "shutters" },
  { icon: "🪟", title: "Aluminium & Glass", desc: "Sliding windows, glass partitions & structural glazing", category: "Aluminium & Glass", image: aluminium, productCategory: "glass" },
  { icon: "🏢", title: "Elevation & Cladding", desc: "ACP panels, HPL cladding & decorative facades", category: "Facade & Cladding", image: elevation, productCategory: "elevation" },
  { icon: "⚙️", title: "Structural Fabrication", desc: "Steel frames, sheds, roofing & support beams", category: "Structural Works", image: struct, productCategory: "ms" },
  { icon: "🏭", title: "Industrial Works", desc: "Large-scale industrial metal fabrication projects", category: "Industrial", image: industry, productCategory: "ms" },
];

const whyUs = [
  {
    Icon: Shield, title: "Transparent Pricing",
    desc: "No hidden costs, no surprises. Every project gets a detailed written quotation before work begins.",
    highlights: ["Written estimates", "No surprise charges", "Fair market rates"],
    accent: "#1a3a6b",
    bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&auto=format&fit=crop&q=70",
  },
  {
    Icon: Ruler, title: "Precision Fabrication",
    desc: "Every cut, weld and finish is executed with laser accuracy. We don't cut corners — only metal.",
    highlights: ["Laser-accurate cuts", "Zero-tolerance fits", "Quality inspected"],
    accent: "#2d5a8e",
    bg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=500&auto=format&fit=crop&q=70",
  },
  {
    Icon: Layers, title: "Premium Materials",
    desc: "Grade-A stainless steel, mild steel, aluminium & glass — sourced only from certified suppliers.",
    highlights: ["Grade A materials", "Certified suppliers", "Long-lasting finish"],
    accent: "#1e4d7b",
    bg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&h=500&auto=format&fit=crop&q=70",
  },
  {
    Icon: Clock4, title: "On-Time Delivery",
    desc: "Trichy's most reliable team. We set deadlines and we meet them — every single time.",
    highlights: ["Trichy-based team", "Timely handover", "Post-install support"],
    accent: "#16355f",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=500&auto=format&fit=crop&q=70",
  },
];


/* ================= HERO ================= */

const HeroSection = () => (
  <section className="relative h-screen flex flex-col justify-center bg-[#0d151f] overflow-hidden">

    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <motion.img
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        src={heroImage}
        alt="RIITS Metal Craft building"
        className="w-full h-full object-cover object-center opacity-35 mix-blend-overlay"
        style={{ willChange: "transform" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d151f]/90 via-[#0d151f]/50 to-transparent" />
    </div>


    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

    {/* Floating stat badges */}
    <motion.div
      animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
    >
      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
      15+ Years of Expertise
    </motion.div>
    <motion.div
      animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Trichy's #1 Metal Fabricators
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
          >
            Where Steel<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Meets Mastery.
            </span><br />
            Built to Last.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/65 text-base leading-relaxed max-w-md mb-7"
          >
            Trichy's most trusted metal fabrication studio — crafting gates, railings, elevation &amp; industrial structures that stand the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <TurtleButton href="tel:+919876543210" variant="index_brand_shimmer" className="rounded-xl">
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
);



/* ================= WHY US ================= */

const WhyUsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="min-h-screen flex items-center py-16 lg:py-0 bg-muted relative overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 100vh' }}>
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,rgba(0,0,0,0.6) 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
      <div className="container-main relative">
        <SectionHeading subtitle="Why RITS" title="Why Choose Us" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map(({ Icon, title, desc, highlights, accent, bg }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(i)} onHoverEnd={() => setHovered(null)}
              className="group why-card relative overflow-hidden rounded-2xl cursor-default shadow-lg"
              style={{ minHeight: "420px" }}
            >
              <motion.img 
                src={bg} 
                alt={title} 
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.08 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                viewport={{ once: false, margin: "-10%" }}
                className="why-card-img absolute inset-0 w-full h-full object-cover" 
              />
              <div className="why-card-overlay absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(10,30,70,.25) 0%,rgba(10,30,70,.72) 50%,rgba(10,30,70,.94) 100%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg,${accent},transparent 70%)` }} />
              <span className="absolute top-4 right-5 text-[5rem] font-black font-display leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.07)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rounded-full"
                  style={{ background: `${accent}33`, border: `1.5px solid ${accent}66` }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-2">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4 max-w-sm">{desc}</p>
                <motion.ul initial={false}
                  animate={{ height: hovered === i ? "auto" : 0, opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.38, ease: "easeInOut" }}
                  className="overflow-hidden flex flex-col gap-2 mb-4">
                  {highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-medium text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-white/60" /> {h}
                    </li>
                  ))}
                </motion.ul>
                <a href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <PhoneCall className="w-3.5 h-3.5" /> Call Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: "800+", label: "Projects Completed" },
            { val: "15+", label: "Years Experience" },
            { val: "100%", label: "Client Satisfaction" },
            { val: "Pan TN", label: "Areas Served" },
          ].map((s, i) => (
            <div key={i} className="py-6 text-center rounded-2xl border border-border/60 bg-background shadow-sm">
              <div className="text-2xl font-black font-display text-primary">{s.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


/* ================= MAIN ================= */

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      <motion.div style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100]" />

      <HeroSection />

      {/* SERVICES SLIDER */}
      <section className="section-padding bg-slate-100 py-8 overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
        <div className="container-main max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch min-h-[420px]">
            {/* Left side: List of Headings */}
            <div className="w-full lg:w-1/4 flex flex-col justify-between py-4">
              {services.map((item, index) => (
                <motion.button
                  key={item.title}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-full text-left px-5 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border-2 ${currentSlide === index
                    ? "bg-[hsl(225,73%,35%)] text-white border-[hsl(225,73%,35%)] shadow-lg scale-105"
                    : "bg-white text-[hsl(225,73%,35%)]/60 border-transparent hover:bg-slate-50 hover:text-[hsl(225,73%,35%)]"
                    }`}
                  whileHover={{ x: 8 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>

            {/* Right side: Slider Area */}
            <div className="w-full lg:w-3/4 relative flex flex-col">
              <div className="flex-1 bg-white rounded-[1.5rem] p-1 shadow-xl overflow-hidden border-[0.75rem] border-[hsl(225,73%,35%)] flex flex-col">
                <div className="flex-1 p-6 sm:p-8 flex flex-col relative bg-slate-50/50">
                  <motion.div
                    key="slider-header"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <SectionHeading
                      subtitle="What We Offer"
                      title="Core Services"
                      description="Comprehensive metal fabrication and architectural solutions for every construction need."
                    />
                  </motion.div>

                  <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[260px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={services[currentSlide].title}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col"
                      >
                        <div className="bg-[hsl(225,73%,35%)] p-6 text-center flex flex-col items-center">
                          <span className="text-4xl mb-3 bg-white/10 p-4 rounded-xl backdrop-blur-md">
                            {services[currentSlide].icon}
                          </span>
                          <h3 className="font-heading text-lg font-bold uppercase text-white tracking-[0.15em]">
                            {services[currentSlide].title}
                          </h3>
                        </div>
                        <div className="p-6 text-center">
                          <p className="text-sm text-slate-600 font-medium leading-relaxed italic mb-5">
                            {services[currentSlide].desc}
                          </p>
                          <Link
                            to={`/products?open=${services[currentSlide].productCategory}`}
                            className="inline-flex items-center gap-2 text-[hsl(225,73%,35%)] font-bold uppercase tracking-widest text-[10px] hover:gap-3 transition-all"
                          >
                            Explore Details <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="flex justify-center gap-2 mt-4">
                    {services.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-[hsl(225,73%,35%)] w-6" : "bg-slate-300"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUsSection />

      {/* FOOTER */}
      <footer className="footer-bg bg-[#061b54] text-white overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}>
        <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
                Start With a Transparent Quote!
              </h2>
              <p className="text-base max-w-lg leading-relaxed opacity-60">
                We Prepare a clear and detailed quotation for your project.Once you approve, we move
                forward with execution as planned.
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <motion.a href="tel:+919876543210"
                whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.93 }}
                className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center text-center cursor-pointer"
                style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))", border: "1px solid rgba(255,255,255,0.28)" }}>
                <motion.div className="absolute rounded-full pointer-events-none"
                  style={{ inset: "-10px", border: "1.5px dashed rgba(255,255,255,0.22)" }}
                  animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} />
                <PhoneCall className="w-8 h-8 mb-2 text-white opacity-90" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] leading-tight text-white opacity-85">Get Free<br />Quote</p>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="px-8 sm:px-12 lg:px-20 py-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <h3 className="font-display text-xl font-bold uppercase mb-4">RIITS Metal Craft</h3>
            <p className="text-sm opacity-60 leading-relaxed">The Art of Metal. Premium fabrication, elevation & cladding solutions based in Trichy, Tamil Nadu.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About Us", "Products", "Services", "Our Work", "Contact"].map((item) => (
                <a key={item} href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{item}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Services</h4>
            <div className="flex flex-col gap-3 text-sm opacity-60">
              {["Gates & Grills", "Railings & Handrails", "Aluminium & Glass", "Elevation & Cladding", "Rolling Shutters"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Contact</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-2 opacity-80"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>Trichy, Tamil Nadu, India</span></div>
              <a href="tel:+919876543210" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" /><span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@ritsmetalcraft.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <MessageCircle className="w-4 h-4 shrink-0" /><span>info@ritsmetalcraft.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="px-8 sm:px-12 lg:px-20 py-6 max-w-7xl mx-auto text-center text-sm opacity-50">
          &copy; {new Date().getFullYear()} RIITS Metal Craft. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Index;