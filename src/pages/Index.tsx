import { motion, useScroll, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import heroImage from "../assets/heropage/home page hero1.webp";
import pricingImg from "../assets/whychoiseus/finance.webp";
import fabricationImg from "../assets/whychoiseus/precision fabrication.webp";
import materialsImg from "../assets/whychoiseus/premium material.webp";
import deliveryImg from "../assets/whychoiseus/on time delevery.webp";
import SectionHeading from "../components/SectionHeading";
import { TurtleButton } from "../components/TurtleButton";
import { PremiumServiceCards } from "../components/PremiumServiceCards/PremiumServiceCards";
import ProcessSection from "../components/ProcessSection";
import SEO from "../components/SEO";
import MovingTags from "../components/MovingTags";
import { CONTACT_DETAILS, formatTelLink, getWhatsAppUrl, COMPANY_NAME, BRAND_NAME } from "../config/contact";

/* ================= SCHEMA ================= */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY_NAME,
  "image": `https://riits.in/og-image.webp`,
  "url": "https://riits.in",
  "telephone": CONTACT_DETAILS.primaryPhone.value,
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": CONTACT_DETAILS.address.city,
    "addressLocality": CONTACT_DETAILS.address.city,
    "addressRegion": CONTACT_DETAILS.address.state,
    "postalCode": CONTACT_DETAILS.address.pincode,
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.7905,
    "longitude": 78.7047
  },
  "description": "Trichy's most trusted metal fabrication studio — custom steel gates, MS/SS railings, rolling shutters, aluminium glazing, ACP cladding & industrial structural fabrication.",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "800"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Metal Fabrication Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steel Gates & Grills", "description": "Custom MS & SS gates, compound gates, window grills and sliding gates in Trichy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stainless Steel Railings & Handrails", "description": "Balcony railings, staircase railings and steel handrails" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rolling Shutters", "description": "Shop shutters, commercial and industrial rolling shutter systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium & Glass Works", "description": "Aluminium sliding windows, doors, partitions, toughened glass doors and glass partitions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP Cladding & Elevation", "description": "ACP cladding panels, aluminium cladding panels and building facade panels" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Steel Fabrication", "description": "Steel pergolas, metal canopies, sheds, roofing and structural steel frames" } }
    ]
  }
};

/* ================= DATA ================= */

const services = [
  {
    icon: "🚪",
    title: "Gates & Grills",
    desc: "Custom MS & SS gates with modern geometric designs",
    seoDesc: "We fabricate steel gates, stainless steel gates, MS gates, sliding gates, compound gates and window grills tailored to your property.",
    category: "MS / SS Fabrication",
    image: gates,
    productCategory: "ss",
  },
  {
    icon: "🛡️",
    title: "Railings & Handrails",
    desc: "Brushed stainless steel balcony & staircase railings",
    seoDesc: "Precision-welded balcony railings, stainless steel railings, staircase railings and steel handrails for homes and commercial spaces.",
    category: "Stainless Steel",
    image: railings,
    productCategory: "ss",
  },
  {
    icon: "🪜",
    title: "Staircases & Pergolas",
    desc: "Structural steel staircases and decorative pergolas",
    seoDesc: "Custom steel staircases, metal staircases, steel pergolas and metal canopies designed and installed across Trichy.",
    category: "Structural Steel",
    image: staircase,
    productCategory: "ss",
  },
  {
    icon: "🏗️",
    title: "Rolling Shutters",
    desc: "Heavy-duty commercial & industrial rolling systems",
    seoDesc: "Durable rolling shutters, shop shutters and industrial shutters built for high-frequency commercial and warehouse use.",
    category: "Industrial",
    image: roll,
    productCategory: "shutters",
  },
  {
    icon: "🪟",
    title: "Aluminium & Glass",
    desc: "Sliding windows, glass partitions & structural glazing",
    seoDesc: "Aluminium doors, aluminium sliding windows, aluminium partitions, toughened glass doors, frameless glass doors and glass partitions.",
    category: "Aluminium & Glass",
    image: aluminium,
    productCategory: "glass",
  },
  {
    icon: "🏢",
    title: "Elevation & Cladding",
    desc: "ACP panels, HPL cladding & decorative facades",
    seoDesc: "Premium ACP cladding panels, aluminium cladding panels and building facade panels that transform commercial and residential exteriors.",
    category: "Facade & Cladding",
    image: elevation,
    productCategory: "elevation",
  },
  {
    icon: "⚙️",
    title: "Structural Fabrication",
    desc: "Steel frames, sheds, roofing & support beams",
    seoDesc: "Industrial-grade structural steel fabrication including frames, sheds, roofing systems and heavy support beams.",
    category: "Structural Works",
    image: struct,
    productCategory: "ms",
  },
  {
    icon: "🏭",
    title: "Industrial Works",
    desc: "Large-scale industrial metal fabrication projects",
    seoDesc: "End-to-end industrial metal fabrication for factories, warehouses and large-scale construction projects across Tamil Nadu.",
    category: "Industrial",
    image: industry,
    productCategory: "ms",
  },
];

const whyUs = [
  {
    Icon: Shield,
    title: "Transparent Pricing",
    desc: "No hidden costs, no surprises. Every project gets a detailed written quotation before work begins.",
    highlights: ["Written estimates", "No surprise charges", "Fair market rates"],
    accent: "#1a3a6b",
    bg: pricingImg,
  },
  {
    Icon: Ruler,
    title: "Precision Fabrication",
    desc: "Every cut, weld and finish is executed with laser accuracy. We don't cut corners — only metal.",
    highlights: ["Laser-accurate cuts", "Zero-tolerance fits", "Quality inspected"],
    accent: "#2d5a8e",
    bg: fabricationImg,
  },
  {
    Icon: Layers,
    title: "Premium Materials",
    desc: "Grade-A stainless steel, mild steel, aluminium & glass — sourced only from certified suppliers.",
    highlights: ["Grade A materials", "Certified suppliers", "Long-lasting finish"],
    accent: "#1e4d7b",
    bg: materialsImg,
  },
  {
    Icon: Clock4,
    title: "On-Time Delivery",
    desc: "Trichy's most reliable team. We set deadlines and we meet them — every single time.",
    highlights: ["Trichy-based team", "Timely handover", "Post-install support"],
    accent: "#16355f",
    bg: deliveryImg,
  },
];

const testimonials = [
  { name: "Rajesh Kumar", initial: "R", text: "Excellent service and high-quality fabrication work. The team was very professional.", rating: 5, verified: true },
  { name: "Shanmugam", initial: "S", text: "தரமான வேலை மற்றும் சரியான நேரத்தில் முடித்துக் கொடுத்தார்கள். மிக்க நன்றி.", rating: 5, verified: true },
  { name: "Priya S.", initial: "P", text: "The stainless steel railings installed at my home are top-notch. Highly recommended!", rating: 5, verified: true },
  { name: "Revathi", initial: "R", text: "எங்கள் வீட்டிற்கு அமைத்த ஸ்டெயின்லெஸ் ஸ்டீல் கைப்பிடிகள் மிகவும் அழகாக உள்ளது.", rating: 5, verified: true },
  { name: "Arun Enterprises", initial: "A", text: `${COMPANY_NAME} delivered our industrial shed ahead of schedule. Great project management.`, rating: 5, verified: true },
  { name: "Karthik", initial: "K", text: "திருச்சியில் சிறந்த இரும்பு வேலை செய்யும் இடம். நம்பகமான சேவை.", rating: 5, verified: true },
  { name: "Murali Dharan", initial: "M", text: "Best metal fabricators in Trichy. Their attention to detail is remarkable.", rating: 5, verified: true },
  { name: "Selvam Krishna", initial: "S", text: "வேலைப்பாடு மிகவும் நுணுக்கமாக உள்ளது. விலையும் நியாயமானதாக இருக்கிறது.", rating: 5, verified: true },
  { name: "Kavitha R.", initial: "K", text: "Very happy with the modern gate design they provided. It really enhanced our home's curb appeal.", rating: 5, verified: true },
  { name: "Suresh Babu", initial: "S", text: "Professional team, transparent pricing, and quality materials. Would definitely hire them again.", rating: 5, verified: true },
];

/* ================= SEO KEYWORD STRIP ================= */
// Visually subtle — renders as a small muted tag cloud below hero.
// Rich in product + near-me keywords for Google crawlers.

const serviceTags = [
  "Steel Gate", "MS Gate", "SS Gate", "Sliding Gate", "Compound Gate",
  "Window Grill", "Steel Grill", "Balcony Railing", "Staircase Railing",
  "Steel Handrail", "Rolling Shutter", "Shop Shutter", "Aluminium Window",
  "Glass Door", "Toughened Glass", "ACP Cladding", "Facade Panels",
  "Steel Pergola", "Metal Canopy", "Fabrication Near Me",
];

/* ================= HERO ================= */

const HeroSection = ({ isMobile }: { isMobile: boolean }) => (
  <section
    className="relative h-screen flex flex-col justify-center bg-slate-950 overflow-hidden"
    style={{ 
      contentVisibility: "auto",
      paddingTop: isMobile ? "12vh" : "0",
      paddingBottom: isMobile ? "8vh" : "0"
    }}
  >
    {/* Visually hidden H1 for Google — primary SEO heading */}
    <h1 className="sr-only">
      Steel Gates, Railings, Rolling Shutters &amp; Metal Fabrication Works in Trichy
    </h1>

    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <motion.img
        initial={{ scale: isMobile ? 1.05 : 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: isMobile ? 1.2 : 2.5, ease: [0.22, 1, 0.36, 1] }}
        src={heroImage}
        alt={`${COMPANY_NAME} — steel gate, railing and metal fabrication workshop in Trichy`}
        className="w-full h-full object-cover object-center opacity-35 mix-blend-overlay"
        style={{ willChange: "transform" }}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
    </div>

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

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
            initial={{ opacity: 0, y: isMobile ? 10 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.4 }}
            className="inline-flex items-center gap-2 px-[4vw] md:px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[clamp(10px,2.5vw,12px)] font-semibold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Trichy's #1 Metal Fabricators
          </motion.div>

          {/* Decorative display heading — aria-hidden because real H1 is sr-only above */}
          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.35 : 0.5, delay: 0.05 }}
            className="font-heading text-[clamp(1.875rem,8vw,3.75rem)] sm:text-5xl lg:text-6xl font-black uppercase leading-[1.1] sm:leading-none tracking-tight text-white mb-4"
          >
            Where Steel
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Meets Mastery.
            </span>
            <br />
            Built to Last.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.35 : 0.5, delay: 0.1 }}
            className="text-white/65 text-[clamp(14px,4vw,16px)] leading-relaxed max-w-md mb-7"
          >
            Trichy's most trusted metal fabrication studio — crafting{" "}
            <strong className="text-white/80 font-semibold">steel gates</strong>,{" "}
            <strong className="text-white/80 font-semibold">stainless steel railings</strong>,{" "}
            <strong className="text-white/80 font-semibold">rolling shutters</strong>,{" "}
            <strong className="text-white/80 font-semibold">aluminium windows</strong> &amp;{" "}
            <strong className="text-white/80 font-semibold">ACP cladding</strong> that stand the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.35 : 0.7, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-10 w-full sm:w-auto h-[clamp(48px,12vw,56px)]">
              <Phone className="w-[clamp(16px,4vw,18px)] h-[clamp(16px,4vw,18px)]" /> Call Now
            </TurtleButton>
            <TurtleButton href={getWhatsAppUrl()} variant="whatsapp" external className="rounded-xl w-full sm:w-auto h-[clamp(48px,12vw,56px)]">
              <MessageCircle className="w-[clamp(16px,4vw,18px)] h-[clamp(16px,4vw,18px)]" /> WhatsApp
            </TurtleButton>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ================= WHY US ================= */

const WhyCard = ({ Icon, title, desc, highlights, accent, bg, isMobile }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: isMobile ? "-45% 0px -45% 0px" : "-25% 0px -25% 0px"
  });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-expand on mobile when in center-view, otherwise use hover
  const isOpened = isHovered || (isMobile && isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      transition={{ duration: isMobile ? 0.35 : 0.5, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group why-card relative overflow-hidden rounded-[2rem] cursor-default shadow-lg bg-slate-900"
      style={{ minHeight: "420px", transform: "translateZ(0)" }}
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
        <motion.ul
          initial={false}
          animate={{ height: isOpened ? "auto" : 0, opacity: isOpened ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden flex flex-col gap-2 mb-4"
        >
          {highlights.map((h: string, j: number) => (
            <li key={j} className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              {h}
            </li>
          ))}
        </motion.ul>
        <a
          href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
          className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/90 transition-all duration-300 ${isOpened ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const WhyUsSection = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <section
      className="min-h-screen flex items-center py-[8vh] md:py-16 lg:py-0 bg-muted relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 100vh" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,rgba(0,0,0,0.6) 1px,transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="container-main relative">
        <SectionHeading subtitle={`Why ${BRAND_NAME}`} title="Why Choose Us" />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((props, i) => (
            <WhyCard key={i} {...props} isMobile={isMobile} />
          ))}
        </div>
        <motion.div
           initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: isMobile ? 0.35 : 0.6, delay: isMobile ? 0.1 : 0.5 }}
           className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 px-[4vw] md:px-0"
         >
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

/* ================= SEO CONTENT SECTION ================= */
// Clean, readable prose block. Ranks for long-tail "near me" and product queries.
// Styled as a subtle info section — not a keyword dump.

const SEOContentSection = () => (
  <section className="bg-white border-t border-slate-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section label */}
      <div className="text-center mb-12">
        <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-3">
          Serving Trichy &amp; Across Tamil Nadu
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase">
          Your Trusted Fabrication Shop Near You in Trichy
        </h2>
        <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
          Whether you're searching for <strong>steel gate fabrication near me</strong>, a reliable{" "}
          <strong>railing fabrication shop near me</strong>, or professional{" "}
          <strong>aluminium work near me</strong> — {COMPANY_NAME} is Trichy's one-stop solution
          for all metal, glass and elevation needs.
        </p>
      </div>

      {/* Premium Product Info Grid */}
      <PremiumServiceCards />

    </div>
  </section>
);

/* ================= TESTIMONIALS ================= */

const TestimonialCard = ({ name, initial, text, rating, verified }: typeof testimonials[0]) => (
  <div className="w-[300px] sm:w-[360px] shrink-0 px-2" style={{ transform: "translateZ(0)" }}>
    <div className="relative flex flex-col justify-between h-full bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/70 px-6 py-6 shadow-sm overflow-hidden group/card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_-12px_rgba(37,99,235,0.12)] hover:border-blue-300/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
      <Quote
        className="absolute top-3 right-3 w-12 h-12 text-slate-100 group-hover/card:text-blue-100/70 transition-colors duration-500 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <div className="flex items-center gap-0.5 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-[9px] font-extrabold text-amber-600 uppercase tracking-widest">5.0</span>
        </div>
        <p
          className={`text-slate-600 leading-relaxed text-[0.88rem] font-medium line-clamp-4 italic ${
            // eslint-disable-next-line no-control-regex
            text.match(/[^\x00-\x7F]/) ? "font-serif" : ""
          }`}
        >
          "{text}"
        </p>
      </div>
      <div className="relative z-10 flex items-center gap-3 pt-4 mt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 text-white flex items-center justify-center font-bold text-base shadow shrink-0 select-none">
          {initial}
        </div>
        <div className="min-w-0">
          <p className="text-[0.85rem] font-black text-slate-950 leading-tight truncate">{name}</p>
          {verified && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-[0.14em]">Verified Client</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 overflow-hidden relative border-t border-blue-100/50">
      <div className="max-w-7xl mx-auto mb-14 text-center relative z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-1.5 rounded-full font-bold text-[0.7rem] tracking-[0.22em] uppercase border border-slate-200 shadow-sm">
              <Star className="w-3 h-3 fill-blue-600 text-blue-600" /> Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight max-w-xl mx-auto uppercase">
              Trusted by Hundreds of Happy Clients
            </h2>
            <p className="text-slate-500 text-[0.95rem] max-w-lg mx-auto leading-relaxed font-medium">
              Over 800 families and businesses in Trichy trust {COMPANY_NAME} for steel gates,
              railings, rolling shutters and aluminium works. Here's what they say.
            </p>
            <div className="flex items-center justify-center gap-6 sm:gap-10 mt-6 pt-6 border-t border-slate-200 w-full max-w-sm mx-auto">
              {[
                { label: "Projects", val: "800+" },
                { label: "Avg Rating", val: "5.0" },
                { label: "Years", val: "15+" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6 sm:gap-10">
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-950">{stat.val}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-slate-200 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative space-y-5 z-20">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-4 py-3 animate-marquee-left hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-4 py-3 animate-marquee-right hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= CTA ================= */

const CTASection = ({ isMobile }: { isMobile: boolean }) => (
  <section
    className="bg-slate-950 relative overflow-hidden py-[8vh] px-[4vw] text-center border-t border-white/5"
    style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(60% 70% at 50% 50%, rgba(29, 78, 216, 0.22) 0%, transparent 70%)",
      }}
    />
    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0.35 : 0.6 }}
      >
        <p className="text-blue-300 text-[clamp(10px,2.5vw,12px)] font-bold uppercase tracking-[0.24em] mb-4">
          Start Your Project
        </p>
        <h2 className="text-white text-[clamp(1.75rem,8vw,3rem)] sm:text-5xl font-black uppercase tracking-tight mb-4">
          Ready to Build?
        </h2>
        <p className="text-white/50 text-[clamp(14px,3.8vw,18px)] leading-relaxed max-w-[520px] mx-auto mb-10 font-medium">
          Get a free consultation and detailed written quotation for your{" "}
          <span className="text-white/70">steel gate</span>,{" "}
          <span className="text-white/70">railing</span>,{" "}
          <span className="text-white/70">rolling shutter</span>,{" "}
          <span className="text-white/70">aluminium work</span> or{" "}
          <span className="text-white/70">ACP cladding</span> project in Trichy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-[4vw] md:px-0">
          <TurtleButton
            href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
            variant="call_now"
            className="rounded-xl px-10 py-4 h-auto text-[clamp(14px,4vw,16px)] w-full sm:w-auto min-h-[48px]"
          >
            <Phone className="w-[clamp(18px,5vw,20px)] h-[clamp(18px,5vw,20px)]" /> Call {CONTACT_DETAILS.primaryPhone.display}
          </TurtleButton>
          <TurtleButton
            to="/projects"
            variant="premium_outline_shimmer"
            className="rounded-xl px-10 py-4 h-auto text-[clamp(14px,4vw,16px)] w-full sm:w-auto min-h-[48px]"
          >
            View Our Work <ArrowRight className="w-[clamp(18px,5vw,20px)] h-[clamp(18px,5vw,20px)]" />
          </TurtleButton>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ================= MAIN ================= */

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-hidden" style={{ scrollBehavior: "smooth" }}>
      <SEO
        title={`Steel Gates, Railings & Metal Fabrication in Trichy | ${COMPANY_NAME}`}
        description={`${COMPANY_NAME} – Trichy's trusted fabricators of SS/MS gates, railings, rolling shutters, aluminium windows, ACP cladding & industrial structures. Free quote today!`}
        keywords="steel gate, stainless steel gate, MS gate, metal gate, sliding gate, compound gate, window grill, steel grill, balcony railing, stainless steel railing, staircase railing, steel handrail, steel staircase, metal staircase, rolling shutter, shop shutter, industrial shutter, aluminium door, aluminium window, aluminium sliding window, aluminium partition, glass door, toughened glass door, frameless glass door, glass partition, ACP cladding panel, aluminium cladding panel, building facade panels, steel pergola, metal canopy, steel gate near me, fabrication shop near me, metal fabrication near me, steel fabrication near me, rolling shutter near me, aluminium work near me, glass work near me, railing fabrication near me, gate fabrication near me, grill fabrication near me, metal fabrication trichy, gate fabricators trichy, stainless steel railings trichy, ACP cladding trichy, industrial fabrication tamil nadu"
        schemaData={localBusinessSchema}
      />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100]"
      />

      {/* ── HERO ── */}
      <HeroSection isMobile={isMobile} />

      {/* ── KEYWORD TAG STRIP ── */}
      <MovingTags tags={serviceTags} speed={50} />

      {/* ── SERVICES SLIDER ── */}
      <section
        className="section-padding bg-slate-100 py-[5vh] overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
      >
        <div className="container-main max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch min-h-[420px]">
            {/* Left: Service list */}
            <div className="w-full lg:w-1/4 flex flex-col justify-between py-4">
              {services.map((item, index) => (
                <motion.button
                  key={item.title}
                  onClick={() => setCurrentSlide(index)}
                  onMouseEnter={() => setCurrentSlide(index)}
                  className={`w-full text-left px-5 py-2.5 rounded-xl font-heading text-xs font-bold uppercase tracking-[0.15em] transition-all duration-150 border-2 ${
                    currentSlide === index
                      ? "bg-[hsl(225,73%,35%)] text-white border-[hsl(225,73%,35%)] shadow-lg sm:scale-105"
                      : "bg-white text-[hsl(225,73%,35%)]/85 border-transparent hover:bg-slate-50 hover:text-[hsl(225,73%,35%)]"
                  }`}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>

            {/* Right: Slider */}
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
                      description="Comprehensive metal fabrication and architectural solutions."
                    />
                  </motion.div>

                  <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[300px]">
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
                          <p className="text-sm text-slate-600 font-medium leading-relaxed italic mb-2">
                            {services[currentSlide].desc}
                          </p>
                          {/* SEO-rich sub-description — natural product keyword placement */}
                          <p className="text-xs text-slate-400 leading-relaxed mb-5">
                            {services[currentSlide].seoDesc}
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
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            currentSlide === i
                              ? "bg-[hsl(225,73%,35%)] w-6"
                              : "bg-slate-300 w-2"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <WhyUsSection isMobile={isMobile} />

      {/* ── PROCESS ── */}
      <ProcessSection />

      {/* ── SEO CONTENT ── */}
      <SEOContentSection />

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── CTA ── */}
      <CTASection isMobile={isMobile} />

      {/* ── FOOTER ── */}
      <footer
        className="footer-bg bg-slate-950 text-white overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
      >
        <div
          className="px-8 sm:px-12 lg:px-20 py-14 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold uppercase mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              The Art of Metal. Premium steel gate fabrication, railing, rolling shutter, aluminium &amp;
              ACP cladding solutions based in Trichy, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About Us", "Products", "Services", "Our Work", "Contact"].map((item) => (
                <a key={item} href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services — keyword-rich anchor text */}
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
              <div className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{CONTACT_DETAILS.address.full}</span>
              </div>
              <a
                href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>{CONTACT_DETAILS.primaryPhone.display}</span>
              </a>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{CONTACT_DETAILS.email}</span>
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
    </main>
  );
};

export default Index;