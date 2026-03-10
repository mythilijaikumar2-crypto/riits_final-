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
import ProcessSection from "../components/ProcessSection";
import SEO from "../components/SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RIITS Metal Craft",
  "image": "https://riits.in/og-image.webp",
  "url": "https://riits.in",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Trichy",
    "addressLocality": "Trichy",
    "addressRegion": "Tamil Nadu",
    "postalCode": "620001",
    "addressCountry": "IN"
  },
  "description": "Trichy's most trusted metal fabrication studio specializing in gates, railings, elevation & industrial structures.",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  }
};

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
  <section className="relative h-screen flex flex-col justify-center bg-slate-950 overflow-hidden" style={{ contentVisibility: 'auto' }}>

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
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
    </div>


    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

    {/* Floating stat badges */}
    <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
      15+ Years of Expertise
    </div>
    <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
      800+ Projects Delivered
    </div>

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
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onHoverStart={() => setHovered(i)} onHoverEnd={() => setHovered(null)}
              className="group why-card relative overflow-hidden rounded-[2rem] cursor-default shadow-lg bg-slate-900"
              style={{ minHeight: "420px", transform: 'translateZ(0)' }}
            >
              <img 
                src={bg} 
                alt={title} 
                loading="lazy"
                decoding="async"
                className="why-card-img absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40" 
              />
              
              <div className="why-card-overlay absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: accent }} />
              
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/20 border border-white/30 group-hover:bg-white group-hover:text-blue-900">
                  <Icon className="w-5 h-5 text-white group-hover:text-blue-900" />
                </div>
                
                <h3 className="text-xl font-bold text-white font-display mb-2">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-sm line-clamp-2">{desc}</p>
                
                <motion.ul initial={false}
                  animate={{ height: hovered === i ? "auto" : 0, opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden flex flex-col gap-2 mb-4">
                  {highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-semibold text-white/80">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {h}
                    </li>
                  ))}
                </motion.ul>
                
                <a href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/90 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
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
      <SEO 
        title="Best Metal Fabricators in Trichy | Gates, Railings & Structural Works"
        description="RIITS Metal Craft is Trichy's premium fabrication studio. We specialize in custom SS/MS gates, railings, aluminium glazing, ACP cladding, and industrial structural works."
        keywords="metal fabrication trichy, gate fabricators trichy, stainless steel railings trichy, industrial fabrication tamil nadu, ACP cladding trichy"
        schemaData={localBusinessSchema}
      />
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
                  onMouseEnter={() => setCurrentSlide(index)}
                  className={`w-full text-left px-5 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-[0.15em] transition-all duration-150 border-2 ${currentSlide === index
                    ? "bg-[hsl(225,73%,35%)] text-white border-[hsl(225,73%,35%)] shadow-lg scale-105"
                    : "bg-white text-[hsl(225,73%,35%)]/85 border-transparent hover:bg-slate-50 hover:text-[hsl(225,73%,35%)]"
                    }`}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
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
                    <AnimatePresence>
                      <motion.div
                        key={services[currentSlide].title}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col absolute"
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
                        aria-label={`Go to slide ${i + 1}`}
                        className="p-4 transition-all duration-300 hover:scale-110 active:scale-95 outline-none group"
                      >
                        <div className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-[hsl(225,73%,35%)] w-6" : "bg-slate-300 w-2"
                          }`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUsSection />

      <ProcessSection />

      {/* FOOTER */}
      <footer className="footer-bg bg-slate-950 text-white overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}>
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
                <div className="absolute rounded-full pointer-events-none animate-[spin_16s_linear_infinite]"
                  style={{ inset: "-10px", border: "1.5px dashed rgba(255,255,255,0.22)" }} />
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
