import { motion, useInView } from "framer-motion";
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import tamilNaduMap from "../assets/tamilnadu webp.webp";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Target,
  Users,
  ClipboardList,
  Wrench,
  Truck,
  Clock,
  ThumbsUp,
  Headphones,
  FileCheck,
} from "lucide-react";
import SEO from "../components/SEO";
import { TurtleButton } from "../components/TurtleButton";
import {
  CONTACT_DETAILS,
  formatTelLink,
  COMPANY_NAME,
  BRAND_NAME,
} from "../config/contact";
import aboutHero from "../assets/heropage/about-hero.webp";
import "../styles/about-page.css";

/* ══════════════════════════════════════════
    SCROLL REVEAL WRAPPER
══════════════════════════════════════════ */
const R = ({
  children,
  delay = 0,
  duration = 0.5,
  dir = "up",
  margin = "-50px",
}: any) => {
  const v = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }[dir as "up" | "down" | "left" | "right"] || { y: 20 };

  return (
    <motion.div
      initial={{ opacity: 0, ...v }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════
    GLOBAL FONT + CSS
══════════════════════════════════════════ */

/* ══════════════════════════════════════════
    HUB & SPOKE COVERAGE MAP
══════════════════════════════════════════ */
const CoverageMap = () => {
  const districts = [
    { name: "Trichy", x: 0, y: 0, main: true },
    { name: "Thanjavur", x: 65, y: -5 },
    { name: "Perambalur", x: -10, y: -75 },
    { name: "Karur", x: -85, y: 15 },
    { name: "Pudukottai", x: 45, y: 85 },
    { name: "Ariyalur", x: 75, y: -45 },
    { name: "Dindigul", x: -65, y: 95 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[min(400px,90vw)] mx-auto flex items-center justify-center p-8 bg-white/40 ring-1 ring-slate-100 rounded-[3rem] shadow-sm overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Tamil Nadu Map Image with Framer Motion */}
      <motion.img
        initial={{
          opacity: 0,
          scale: 0.9,
          filter: "grayscale(1) brightness(1.2)",
        }}
        whileInView={{
          opacity: 0.35,
          scale: 1,
          filter: "grayscale(1) brightness(1.1)",
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={tamilNaduMap}
        alt="Tamil Nadu Service Coverage Map"
        className="absolute inset-0 w-full h-full object-contain p-10 pointer-events-none z-0"
      />

      <div className="relative w-full h-full flex items-center justify-center z-10">
        {/* Dynamic SVG Lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
          <defs>
            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {districts
            .filter((d) => !d.main)
            .map((d, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + d.x * 0.4}%`}
                y2={`${50 + d.y * 0.4}%`}
                stroke="url(#lineGlow)"
                strokeWidth="2"
                strokeDasharray="8 6"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0, strokeDashoffset: 100 }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                  strokeDashoffset: [100, 0],
                }}
                transition={{
                  pathLength: { duration: 2, delay: i * 0.15, ease: "easeOut" },
                  opacity: { duration: 1, delay: i * 0.15 },
                  strokeDashoffset: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
            ))}
        </svg>

        {/* District Markers */}
        {districts.map((d, i) => (
          <motion.div
            key={i}
            className="absolute z-20"
            style={{
              left: `${50 + d.x * 0.4}%`,
              top: `${50 + d.y * 0.4}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.1 + 0.8,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.25 }}
              className={`relative flex items-center justify-center cursor-pointer group`}
            >
              {/* Layered Pulse Effect */}
              <div
                className={`absolute inset-0 rounded-full animate-ping ${d.main ? "bg-blue-600/40" : "bg-blue-400/30"}`}
                style={{ animationDuration: "3s" }}
              />
              {d.main && (
                <div
                  className="absolute inset-0 rounded-full animate-ping bg-blue-500/20"
                  style={{ animationDuration: "2s", animationDelay: "1s" }}
                />
              )}

              {/* Marker Core */}
              <div
                className={`relative rounded-full border-2 border-white shadow-xl transition-all duration-500 group-hover:shadow-blue-500/50 ${d.main ? "w-14 h-14 bg-gradient-to-br from-[#0d2557] to-[#1e3a8a] ring-4 ring-blue-100/50" : "w-4 h-4 bg-blue-600 shadow-blue-500/20"}`}
              >
                {d.main && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                    <span className="text-[9px] font-black text-white tracking-[0.2em] mb-0.5 ml-1">
                      RIITS
                    </span>
                    <div className="w-4 h-[1px] bg-blue-400/50" />
                  </div>
                )}
              </div>

              {/* Enhanced Label Component */}
              <motion.div
                initial={{ opacity: d.main ? 1 : 0, y: d.main ? 8 : 15 }}
                whileHover={{ opacity: 1, y: 0 }}
                className={`absolute whitespace-nowrap bg-white/95 backdrop-blur-xl px-3 py-2 rounded-xl border border-blue-50 shadow-2xl transition-all duration-500 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0
                ${d.main ? "top-[140%] ring-2 ring-blue-500/5" : "top-[160%] opacity-0"}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${d.main ? "bg-blue-700 animate-pulse" : "bg-blue-500"}`}
                  />
                  <span
                    className={`text-[11px] font-black uppercase tracking-[0.15em] ${d.main ? "text-blue-900" : "text-slate-700"}`}
                  >
                    {d.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const MemoizedCoverageMap = memo(CoverageMap);

/* ══════════════════════════════════════════
    COUNTER
══════════════════════════════════════════ */
const Counter = ({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);

  React.useEffect(() => {
    if (isInView && isNumeric) {
      let start = 0;
      const end = numericValue;
      const totalFrames = Math.max(Math.floor((duration * 1000) / 16), 1);
      const step = Math.ceil((end - start) / totalFrames);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, isNumeric, numericValue, duration]);

  return (
    <span ref={ref}>
      {isNumeric ? displayValue : value}
      {isNumeric && value.includes("+") && "+"}
      {isNumeric && value.includes("%") && "%"}
    </span>
  );
};

/* ══════════════════════════════════════════
    STATIC DATA
══════════════════════════════════════════ */

const districts = [
  { name: "Trichy", main: true },
  { name: "Thanjavur", main: false },
  { name: "Perambalur", main: false },
  { name: "Karur", main: false },
  { name: "Pudukottai", main: false },
  { name: "Ariyalur", main: false },
  { name: "Dindigul", main: false },
];

/* ══════════════════════════════════════════
    VISION & MISSION
══════════════════════════════════════════ */
export function VisionMission() {
  return (
    <section
      className="vm-section"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
    >
      <div className="vm-grid">
        {/* Vision */}
        <div className="vm-card-outer">
          <div
            className="vm-card-glow"
            style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
          />
          <div className="vm-card blue">
            <div>
              <div className="vm-header">
                <div className="vm-icon blue">
                  <Target style={{ width: 28, height: 28, color: "#fff" }} />
                </div>
                <h2 className="vm-title blue">Our Vision</h2>
              </div>
              <p className="vm-content">
                To be Tamil Nadu's most trusted{" "}
                <strong>metal fabrication company</strong>, known for precision
                steelcraft, honest pricing and customer satisfaction. We
                envision every home, shop and factory in Trichy having access to
                world-class <strong>steel gates</strong>,{" "}
                <strong>railings</strong>, <strong>shutters</strong> and{" "}
                <strong>structural steel work</strong> — built to last
                generations.
              </p>
            </div>
            <div className="vm-tags">
              {["Quality First", "Local Trust", "Built to Last"].map((t) => (
                <span key={t} className="vm-tag blue">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="vm-card-outer">
          <div
            className="vm-card-glow"
            style={{ background: "linear-gradient(135deg,#64748b,#334155)" }}
          />
          <div className="vm-card slate">
            <div>
              <div className="vm-header">
                <div className="vm-icon slate">
                  <Wrench style={{ width: 28, height: 28, color: "#fff" }} />
                </div>
                <h2 className="vm-title slate">Our Mission</h2>
              </div>
              <p className="vm-content">
                To deliver premium <strong>fabrication work</strong> with
                complete transparency — from written quotations to on-time
                installation. Every <strong>steel gate</strong>,{" "}
                <strong>aluminium window</strong>,{" "}
                <strong>glass partition</strong> and{" "}
                <strong>rolling shutter</strong> we build is crafted with
                grade-A materials, skilled craftsmanship and a warranty you can
                trust.
              </p>
            </div>
            <div className="vm-tags">
              {["Transparency", "Craftsmanship", "Warranty Backed"].map((t) => (
                <span key={t} className="vm-tag slate">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
    HOW WE DELIVER
══════════════════════════════════════════ */
const deliveryPoints = [
  {
    icon: FileCheck,
    title: "Detailed Written Quote",
    description:
      "Every steel gate, railing or shutter project gets a transparent written quotation with material breakdown, labour costs and timeline — zero hidden charges.",
    iconBg: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    stepColor: "#2563eb",
    stepLabel: "color:#2563eb",
    afterBg: "#2563eb",
  },
  {
    icon: Wrench,
    title: "Premium Materials Only",
    description:
      "We use grade-A stainless steel (SS 304/202), mild steel, aluminium and toughened glass — no cheap substitutes, ever. Every material is verified before installation.",
    iconBg: "linear-gradient(135deg,#475569,#1e293b)",
    stepColor: "#475569",
    afterBg: "#475569",
  },
  {
    icon: Users,
    title: "Own Skilled Crew",
    description:
      "Our in-house team of expert welders and fabricators handle every project — no subcontracting. 15+ years of experience in metal fabrication across Trichy.",
    iconBg: "linear-gradient(135deg,#f59e0b,#d97706)",
    stepColor: "#d97706",
    afterBg: "#f59e0b",
  },
  {
    icon: Clock,
    title: "On-Time Installation",
    description:
      "We deliver and install every rolling shutter, aluminium door or glass partition on schedule. Mobile crew reaches your site in Trichy within 48 hours of request.",
    iconBg: "linear-gradient(135deg,#16a34a,#059669)",
    stepColor: "#16a34a",
    afterBg: "#16a34a",
  },
  {
    icon: ThumbsUp,
    title: "Quality Inspection",
    description:
      "Multi-point quality checks at workshop and site — welding integrity, alignment, finish and hardware fitment. Every steel gate and grill is inspected before handover.",
    iconBg: "linear-gradient(135deg,#6366f1,#7c3aed)",
    stepColor: "#6366f1",
    afterBg: "#6366f1",
  },
  {
    icon: Headphones,
    title: "Post-Install Support",
    description:
      "Warranty coverage on all fabrication work with free maintenance guidance. Any issues with your shutter, railing or gate? Our team is just a call away.",
    iconBg: "linear-gradient(135deg,#f43f5e,#e11d48)",
    stepColor: "#f43f5e",
    afterBg: "#f43f5e",
  },
];

export function HowWeDeliver() {
  return (
    <section
      className="hwd-section"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}
    >
      <div className="ctr">
        {/* Header */}
        <div className="hwd-header">
          <div className="hwd-badge">Our Process</div>
          <h2 className="hwd-title">How We Deliver Every Project</h2>
          <p className="hwd-subtitle">
            From your first call to final installation — a proven 6-step
            framework that ensures quality <strong>metal fabrication</strong>{" "}
            and complete customer satisfaction on every{" "}
            <strong>steel gate</strong>, <strong>railing</strong>,{" "}
            <strong>shutter</strong> or <strong>glass door</strong> we build.
          </p>
        </div>

        {/* Grid */}
        <div className="hwd-grid">
          {deliveryPoints.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="hwd-card"
                style={{ "--hwd-accent": pt.afterBg } as React.CSSProperties}
              >
                {/* bottom bar accent via inline override */}
                <style>{`.hwd-card:nth-child(${i + 1})::after{background:${pt.afterBg};}`}</style>
                <div className="hwd-icon" style={{ background: pt.iconBg }}>
                  <Icon style={{ width: 22, height: 22, color: "#fff" }} />
                </div>
                <h3 className="hwd-card-title">{pt.title}</h3>
                <p className="hwd-card-desc">{pt.description}</p>
                <div className="hwd-card-step" style={{ color: pt.stepColor }}>
                  <div
                    className="hwd-step-dot"
                    style={{ background: pt.stepColor }}
                  />
                  Step {i + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hwd-cta">
          <a
            href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
            className="hwd-cta-btn"
          >
            <Phone style={{ width: 20, height: 20 }} />
            <span>Get Your Free Written Quote Today</span>
            <ArrowRight style={{ width: 20, height: 20 }} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
    MAIN ABOUT PAGE
════════════════════════════════════════════ */
const About = () => {
  const navigate = useNavigate();

  return (
    <main
      className="ap pt-14 md:pt-16"
      style={{ transform: "translateZ(0)", overflowX: "hidden" }}
    >
      <SEO
        title={`About ${COMPANY_NAME} | Trusted Fabrication Company in Trichy, Tamil Nadu`}
        description={`${COMPANY_NAME} is a leading fabrication shop in Trichy with 15+ years in metal fabrication. We build steel gates, railings, rolling shutters, aluminium windows, glass doors & more.`}
        keywords="fabrication company in Trichy, fabrication shop in Trichy, metal fabrication, steel fabrication, welding work, steel gate, metal gate, grill work, balcony railing, staircase railing, window grill, rolling shutter, shop shutter, aluminium door, aluminium window, glass door, glass partition, steel gate near me, grill work near me, steel gate fabrication in Trichy"
      />



      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center bg-[var(--navy)] overflow-hidden">
        <h1 className="sr-only">
          About {COMPANY_NAME} — Trusted Metal Fabrication Company in Trichy,
          Tamil Nadu
        </h1>

        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src={aboutHero}
            alt={`${COMPANY_NAME} fabrication workshop — steel gate, railing and welding work in Trichy`}
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            style={{ willChange: "transform" }}
            loading="eager"
            // @ts-ignore
            fetchpriority="high"
          />

          {/* Primary dark overlay */}
          <div className="absolute inset-0 bg-[var(--navy)]/85 z-[1]" />
          {/* Gradient tint for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/80 via-[var(--navy)]/40 to-[var(--navy)]/90 z-[2]" />
          {/* Centre glow to lift text area */}
          <div className="absolute inset-0 z-[3]" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,37,87,0.7) 0%, transparent 100%)'}} />
        </div>
        <div className="about-mesh" />
        <div className="w-full max-w-4xl mx-auto px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06, delayChildren: 0.05 },
              },
            }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Fabrication Company in Trichy
            </motion.div>

            <motion.p
              aria-hidden="true"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
            >
              Precision
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                Steelcraft.
              </span>
              <br />
              Proven Trust.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-white font-medium text-[clamp(15px,4vw,17.5px)] leading-relaxed max-w-2xl mx-auto [text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]"
            >
              {COMPANY_NAME} is a trusted{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                fabrication shop in Trichy
              </strong>{" "}
              with over 15 years of experience in{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                metal fabrication
              </strong>{" "}
              and{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                steel fabrication
              </strong>
              . We serve homeowners, builders and businesses across Trichy,
              Thanjavur and Tamil Nadu — delivering every project with
              precision and care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS GRID ── */}
      <section
        className="relative z-20 -mt-20 lg:-mt-24 mb-0"
        style={{ overflow: "visible" }}
      >
        <div className="ctr">
          <div className="stat-grid-row">
            {[
              { val: "800+", lbl: "Projects Completed", delay: 0.05 },
              { val: "15+", lbl: "Years Experience", delay: 0.1 },
              { val: "100%", lbl: "Client Satisfaction", delay: 0.15 },
              { val: "Pan TN", lbl: "Areas Served", delay: 0.2 },
            ].map((stat, i) => (
              <R key={i} delay={stat.delay} duration={0.4}>
                <div className="about-stat-card group">
                  <div className="about-stat-val">
                    <Counter value={stat.val} duration={2} />
                  </div>
                  <div className="about-stat-lbl">{stat.lbl}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <VisionMission />

      {/* ── HOW WE DELIVER ── */}
      <HowWeDeliver />

      {/* ── MATERIALS ── */}
      <section
        className="sec"
        style={{
          background: "linear-gradient(180deg,#f8fafc 0%,#f0f6ff 100%)",
        }}
      >
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            {" "}
            <R>
              {" "}
              <span
                className="ltag"
                style={{ justifyContent: "center", marginBottom: 14 }}
              >
                Material Mastery
              </span>{" "}
              <h2 className="dlg" style={{ color: "#0d2557" }}>
                Specialized Grades
              </h2>{" "}
            </R>{" "}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
              gap: "0.9rem",
            }}
          >
            {[
              "Stainless Steel (SS 304 / 202)",
              "Mild Steel (MS) Fabrication",
              "Aluminium Architectural Sections",
              "Toughened Safety Glass",
              "ACP Sheets & HPL Cladding",
              "PPGL Structural Tubes",
              "Polycarbonate Roofing",
              "Custom Glass Partitions",
            ].map((m, i) => (
              <R key={m} delay={i * 0.05}>
                {" "}
                <div className="mat-card">
                  {" "}
                  <CheckCircle2
                    style={{
                      width: 18,
                      height: 18,
                      color: "#1d4ed8",
                      flexShrink: 0,
                    }}
                  />{" "}
                  <span>{m}</span>{" "}
                </div>{" "}
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section
        className="sec"
        style={{
          background: "var(--sl05)",
          contentVisibility: "auto",
          containIntrinsicSize: "auto 600px",
        }}
      >
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span
                className="ltag"
                style={{ justifyContent: "center", marginBottom: 14 }}
              >
                Service Coverage
              </span>
              <h2
                className="dlg"
                style={{ color: "#0d2557", marginBottom: 12 }}
              >
                Trichy &amp; Surrounding Districts
              </h2>
              <p className="body" style={{ maxWidth: 520, margin: "0 auto" }}>
                We serve Tiruchirappalli and surrounding districts with our own
                team, tools and materials — no middlemen, no subcontracting.
              </p>
            </R>
          </div>
          <div
            className="cov-row"
            style={{
              display: "flex",
              gap: "3rem",
              alignItems: "center",
              flexWrap: "wrap",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <div className="flex-1 min-w-[280px]">
              <R dir="left">
                <MemoizedCoverageMap />
              </R>
            </div>
            <div style={{ flex: "1 1 260px", minWidth: 0 }}>
              <R dir="right">
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#64748b",
                    marginBottom: "1.2rem",
                  }}
                >
                  Districts We Serve
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.55rem",
                    marginBottom: "2rem",
                  }}
                >
                  {districts.map((d) => (
                    <span
                      key={d.name}
                      className={`dist-badge ${d.main ? "main" : "other"}`}
                    >
                      <MapPin style={{ width: 9, height: 9 }} /> {d.name}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  {[
                    "Our own mobile crew — no subcontracting",
                    "Tools & materials transported to your site",
                    "Site visit within 48 hours on request",
                    "Post-installation support included",
                  ].map((point, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 6,
                          background: "#eff6ff",
                          border: "1.5px solid #dbeafe",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <CheckCircle2
                          style={{ width: 11, height: 11, color: "#1d4ed8" }}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                          color: "#475569",
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <TurtleButton
                  href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
                  variant="call_now"
                  className="rounded-xl px-10 text-sm font-bold min-w-[220px]"
                >
                  <MapPin style={{ width: 16, height: 16 }} /> Book a Site Visit
                </TurtleButton>
              </R>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="navy-bg sec">
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span
                className="ltag"
                style={{
                  justifyContent: "center",
                  marginBottom: 14,
                  color: "#93c5fd",
                }}
              >
                The {BRAND_NAME} Advantage
              </span>
              <h2
                className="dlg"
                style={{ color: "#ffffff", marginBottom: 14 }}
              >
                Why Choose Us
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.78,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: 540,
                  margin: "0 auto",
                }}
              >
                Searching for a{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>
                  steel gate near me
                </strong>
                ,{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>
                  grill work near me
                </strong>{" "}
                or the best{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>
                  fabrication company in Trichy
                </strong>
                ? Here's why 800+ clients chose {COMPANY_NAME}.
              </p>
            </R>
          </div>

          <div className="why-grid">
            {[
              {
                icon: <CheckCircle2 />,
                title: "15+ Years of Local Trust",
                color: "text-blue-400",
                body: "A locally rooted metal fabrication team in Trichy — reliable, experienced and community-trusted since 2009.",
              },
              {
                icon: <ClipboardList />,
                title: "Transparent Written Quotes",
                color: "text-amber-400",
                body: "Every shop shutter and steel fabrication job gets a detailed written quote — zero hidden costs, ever.",
              },
              {
                icon: <Wrench />,
                title: "Premium Grade Materials",
                color: "text-emerald-400",
                body: "Grade-A steel, aluminium and glass on every job — from aluminium door installs to full glass partition fit-outs.",
              },
              {
                icon: <Truck />,
                title: "On-Time Delivery",
                color: "text-indigo-400",
                body: "Every project delivered and installed on schedule with full post-job support across Trichy and Tamil Nadu.",
              },
            ].map((card, i) => (
              <R key={i} delay={i * 0.06}>
                <div className="why-card">
                  <div className="why-card-icon">
                    {React.cloneElement(card.icon as React.ReactElement, {
                      className: `w-8 h-8 ${card.color}`,
                    })}
                  </div>
                  <h3 className="why-card-title">{card.title}</h3>
                  <p className="why-card-body">{card.body}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section
        className="navy-bg"
        style={{
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "4rem",
          paddingBottom: "2rem",
          contentVisibility: "auto",
          containIntrinsicSize: "auto 300px",
        }}
      >
        <div className="ctr">
          <R>
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#93c5fd",
                marginBottom: "1.2rem",
              }}
            >
              Start Your Project
            </p>
            <h2
              className="dlg"
              style={{ color: "white", marginBottom: "1rem" }}
            >
              Ready to Build?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.58)",
                maxWidth: 500,
                margin: "0 auto 2.2rem",
              }}
            >
              Get a free consultation and detailed written quotation for your{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>
                steel gate
              </span>
              , <span style={{ color: "rgba(255,255,255,0.75)" }}>railing</span>
              ,{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>
                rolling shutter
              </span>{" "}
              or{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>
                glass door
              </span>{" "}
              project in Trichy.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              <TurtleButton
                href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
                variant="call_now"
                className="rounded-xl px-12 text-base font-bold min-w-[220px]"
              >
                <Phone className="w-5 h-5" /> Call{" "}
                {CONTACT_DETAILS.primaryPhone.display}
              </TurtleButton>
              <motion.button
                whileHover={{
                  background: "rgba(255,255,255,0.09)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  height: "52px",
                  padding: "0 36px",
                  borderRadius: 12,
                  background: "transparent",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.3)",
                  minWidth: "220px",
                  transition: "all 0.3s ease",
                }}
              >
                View Our Work <ArrowRight style={{ width: 18, height: 18 }} />
              </motion.button>
            </div>
          </R>
        </div>
      </section>
    </main>
  );
};

export default About;
