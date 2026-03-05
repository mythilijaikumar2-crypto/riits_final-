import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Layers, Ruler, Shield, Search, Wrench, ArrowRight,
  CheckCircle2, MapPin, Phone
} from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";

const R = ({ children, delay = 0, dir = "up" }: any) => {
  const v = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  }[dir as "up" | "down" | "left" | "right"] || { y: 24, x: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...v }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
    :root {
      --navy:    #0d2557;
      --blue-7:  #1d4ed8;
      --blue-6:  #2563eb;
      --blue-3:  #93c5fd;
      --blue-1:  #dbeafe;
      --blue-05: #eff6ff;
      --sl7:     #334155;
      --sl5:     #64748b;
      --sl1:     #f1f5f9;
      --sl05:    #f8fafc;
      --white:   #ffffff;
    }
    .ap * { box-sizing: border-box; margin: 0; padding: 0; }
    .ap { font-family: 'DM Sans', sans-serif; color: var(--sl7); background: var(--white); overflow-x: hidden; }
    .dxl { font-family:'Barlow Condensed',sans-serif; font-size:clamp(3rem,6.5vw,5.8rem); font-weight:900; line-height:0.95; letter-spacing:-0.01em; text-transform:uppercase; }
    .dlg { font-family:'Barlow Condensed',sans-serif; font-size:clamp(2rem,4vw,3.4rem); font-weight:800; line-height:1.05; letter-spacing:0.01em; text-transform:uppercase; }
    .dsm { font-family:'Barlow Condensed',sans-serif; font-size:clamp(1.2rem,2.5vw,1.65rem); font-weight:700; letter-spacing:0.04em; text-transform:uppercase; }
    .body { font-size:1rem; line-height:1.78; color:var(--sl5); }
    .ltag { font-size:0.68rem; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:var(--blue-6); display:inline-flex; align-items:center; gap:10px; }
    .ltag::before { content:''; display:block; width:26px; height:2px; background:var(--blue-6); flex-shrink:0; }
    .navy-bg { background-color: var(--navy); }
    .sec { padding: clamp(4rem, 8vw, 7.5rem) 0; }
    .ctr { width: 90%; max-width: 1240px; margin: 0 auto; }

    /* About Hero (Enhanced) */
    .about-hero-sec {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      padding: 100px 0;
      background: var(--navy);
      overflow: hidden;
    }
    .about-mesh {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 10% 20%, rgba(29,78,216,0.08) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(30,58,138,0.1) 0%, transparent 40%);
      pointer-events: none;
      filter: blur(40px);
      will-change: transform, opacity;
    }
    .about-hero-grid {
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: 60px;
      position: relative;
      z-index: 5;
    }
    .about-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 100px;
      margin-bottom: 24px;
    }
    .about-hero-badge span {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--blue-3);
    }
    .about-hero-h1 {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(3.2rem, 8vw, 6.5rem);
      font-weight: 900;
      line-height: 0.9;
      color: #ffffff;
      text-transform: uppercase;
      margin-bottom: 30px;
      letter-spacing: -0.02em;
    }
    .about-hero-h1 span {
      -webkit-text-stroke: 1.5px rgba(255,255,255,0.4);
      color: transparent;
    }
    .about-hero-p {
      font-size: 1.15rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.65);
      margin-bottom: 45px;
      max-width: 600px;
    }
    .about-cta-group {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .about-btn-main {
      padding: 18px 40px;
      background: var(--blue-6);
      color: #ffffff;
      font-weight: 700;
      border-radius: 12px;
      text-decoration: none;
      transition: 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      box-shadow: 0 20px 40px -10px rgba(37,99,235,0.3);
    }
    .about-btn-main:hover {
      background: var(--blue-7);
      transform: translateY(-5px);
      box-shadow: 0 25px 50px -12px rgba(37,99,235,0.5);
    }
    .about-btn-sec {
      padding: 18px 40px;
      background: transparent;
      color: #ffffff;
      border: 1px solid rgba(255,255,255,0.2);
      font-weight: 700;
      border-radius: 12px;
      text-decoration: none;
      transition: 0.3s;
    }
    .about-btn-sec:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.4);
    }

    @media (max-width: 1024px) {
      .about-hero-grid { grid-template-columns: 1fr; gap: 80px; text-align: center; }
      .about-hero-p { margin: 0 auto 45px; }
      .about-cta-group { justify-content: center; }
    }

    /* Workflow - Cold Bat Inspired */
    .wf-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
      gap: 2.5rem; 
    }
    .wf-card {
      height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 12px;
      background-color: var(--white);
      border-radius: 24px;
      position: relative;
      overflow: hidden;
      transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
      border: 1px solid var(--sl1);
      padding: 30px;
      will-change: transform, background-color;
      transform: translateZ(0);
    }
    .wf-card::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      border-bottom: 3px solid var(--white);
      background: linear-gradient(135deg, var(--navy), var(--blue-7));
      z-index: 0;
      transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
      transform: scaleY(0);
      transform-origin: top;
      will-change: transform;
    }
    .wf-card * { z-index: 1; }
    .wf-num {
      position: absolute;
      top: 15px;
      right: 20px;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 3rem;
      font-weight: 900;
      color: rgba(255,255,255,0.1);
      line-height: 1;
      transition: 0.2s;
    }
    .wf-icon-box {
      width: 84px;
      height: 84px;
      background-color: var(--blue-6);
      border-radius: 50%;
      border: 4px solid var(--white);
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .wf-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
      margin-top: 10px;
    }
    .wf-step-lbl {
      font-size: 0.68rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--blue-6);
      transition: 0.2s;
    }
    .wf-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--navy);
      text-transform: uppercase;
      line-height: 1.2;
    }
    .wf-desc {
      font-size: 0.9rem;
      color: var(--sl5);
      line-height: 1.6;
      max-width: 240px;
      margin: 0 auto;
    }
    .wf-card:hover {
      transform: translateY(-5px) translateZ(0);
      box-shadow: 0 30px 60px -15px rgba(13,37,87,0.15);
    }
    .wf-card:hover::before {
      transform: scaleY(1);
      border-bottom: none;
    }
    .wf-card:hover .wf-title, 
    .wf-card:hover .wf-desc {
      color: white;
    }
    .wf-card:hover .wf-step-lbl {
      color: var(--blue-3);
    }
    .wf-card:hover .wf-num {
      color: rgba(255,255,255,0.2);
    }
    .wf-card:hover .wf-icon-box {
      background-color: var(--white);
      color: var(--blue-6) !important;
      transform: scale(0.9);
      box-shadow: 0 0 20px rgba(255,255,255,0.4);
    }

    .mat-card { display: flex; align-items: center; gap: 12px; padding: 1rem 1.4rem; background: var(--white); border-radius: 12px; border: 1.5px solid var(--sl1); font-size: 0.88rem; font-weight: 600; color: var(--navy); transition: 0.3s; }
    .mat-card:hover { border-color: var(--blue-7); box-shadow: 0 10px 25px -5px rgba(29,78,216,0.1); }

    .dist-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .dist-badge.main { background: var(--blue-05); color: var(--blue-7); border: 1px solid var(--blue-1); }
    .dist-badge.other { background: var(--sl05); color: var(--sl5); border: 1px solid var(--sl1); }

    @media (max-width: 768px) {
      .cov-row { flex-direction: column !important; gap: 2rem !important; }
      .about-vision { max-width: 55%; }
      .about-mission { max-width: 52%; }
    }
  `}</style>
);

/* ── Hub & Spoke Map ── */
const CoverageMap = () => {
  const [hov, setHov] = useState<number | null>(null);
  const spokes = [
    { label: "Thanjavur", angle: -45 },
    { label: "Perambalur", angle: -110 },
    { label: "Karur", angle: 170 },
    { label: "Pudukottai", angle: 60 },
    { label: "Ariyalur", angle: -80 },
    { label: "Dindigul", angle: 140 },
  ];
  const RL = 85;

  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center bg-slate-50/50 rounded-full border border-slate-100">
      <svg viewBox="-140 -140 280 280" className="w-full h-full p-6">
        {spokes.map((s, i) => {
          const rad = (s.angle - 90) * Math.PI / 180;
          const x = Math.cos(rad) * RL, y = Math.sin(rad) * RL;
          return <line key={i} x1="0" y1="0" x2={x} y2={y}
            stroke={hov === i ? "#1d4ed8" : "#cbd5e1"}
            strokeWidth={hov === i ? "2.5" : "1.5"} strokeDasharray={hov === i ? "0" : "4 4"}
            style={{ transition: "stroke 0.2s,stroke-width 0.2s" }} />;
        })}
        {spokes.map((s, i) => {
          const rad = (s.angle - 90) * Math.PI / 180;
          const x = Math.cos(rad) * RL, y = Math.sin(rad) * RL;
          const lx = Math.cos(rad) * (RL + 28), ly = Math.sin(rad) * (RL + 28);
          return (
            <g key={i} style={{ cursor: "pointer" }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <circle cx={x} cy={y} r={hov === i ? 8 : 6}
                fill={hov === i ? "#1d4ed8" : "#3b82f6"} opacity="0.92"
                style={{ transition: "r 0.2s,fill 0.2s" }} />
              <circle cx={x} cy={y} r={hov === i ? 3.5 : 2.8} fill="white"
                style={{ transition: "r 0.2s" }} />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                fontSize={hov === i ? 9.5 : 8.5} fontWeight={hov === i ? "800" : "600"}
                fill={hov === i ? "#0d2557" : "#334155"} fontFamily="DM Sans,sans-serif"
                style={{ transition: "font-size 0.2s,fill 0.2s" }}>
                {s.label}
              </text>
            </g>
          );
        })}
        <circle cx="0" cy="0" r="22" fill="rgba(13,37,87,0.08)" />
        <circle cx="0" cy="0" r="14" fill="#0d2557" />
        <circle cx="0" cy="0" r="6" fill="white" />
        <circle cx="0" cy="0" r="2.5" fill="#0d2557" />
        <text x="0" y="38" textAnchor="middle" fontSize="11" fontWeight="900"
          fill="#0d2557" style={{ letterSpacing: 1, textTransform: "uppercase" }}>TRICHY</text>
      </svg>
    </div>
  );
};

/* ── Execution Workflow Data ── */
const workflow = [
  { step: "01", Icon: Search, title: "Consultation", desc: "Understanding project requirements, specifications and budget." },
  { step: "02", Icon: Ruler, title: "Site Visit", desc: "Accurate on-site measurements and feasibility assessment." },
  { step: "03", Icon: Layers, title: "Design Planning", desc: "Detailed drawings and material selection for approval." },
  { step: "04", Icon: Wrench, title: "Fabrication", desc: "Precision manufacturing at our Trichy workshop facility." },
  { step: "05", Icon: Shield, title: "Installation", desc: "Expert on-site installation by trained professionals." },
  { step: "06", Icon: CheckCircle2, title: "Completion", desc: "Quality inspection, finishing and project handover." },
];

const materials = [
  "Stainless Steel (SS 304 / 202)", "Mild Steel (MS) Fabrication", "Aluminium Sections",
  "Toughened Glass", "ACP Sheets", "HPL Cladding", "GI Sheets & Tubes", "Polycarbonate Roofing"
];

const districts = [
  { name: "Trichy", main: true }, { name: "Thanjavur", main: false },
  { name: "Perambalur", main: false }, { name: "Karur", main: false },
  { name: "Pudukottai", main: false }, { name: "Ariyalur", main: false },
  { name: "Dindigul", main: false }
];

/* ════════════════ MAIN ABOUT PAGE ════════════════ */
const About = () => {
  const navigate = useNavigate();
  return (
    <main className="ap pt-20" style={{ transform: 'translateZ(0)' }}>
      <FontLoader />

      {/* ── HERO / ABOUT US SECTION ── */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[var(--navy)] overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/src/assets/about page hero.png"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ willChange: "transform" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/55 to-transparent" />
        </div>

        {/* Animated mesh */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="about-mesh"
        />


        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Floating stat badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Est. 2009 — Trichy, Tamil Nadu
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Completed
        </motion.div>

        <div className="ctr relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                The Art of Fabrication
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Precision<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Steelcraft.
                </span><br />
                Proven Trust.
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                RIITS Metal Craft is a premier metal fabrication and architectural elevation leader in Trichy.
                We fuse advanced engineering with master craftsmanship to build structures that endure for generations.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-3"
              >
                <TurtleButton to="/products" variant="premium_shimmer" className="rounded-xl">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </TurtleButton>
                <TurtleButton to="/projects" variant="premium_outline_shimmer" className="rounded-xl">
                  Our Work
                </TurtleButton>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="sec" style={{ background: "white", contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>How We Work</span>
              <h2 className="dlg" style={{ color: "#0d2557", marginBottom: 12 }}>Execution Workflow</h2>
              <p className="body" style={{ maxWidth: 500, margin: "0 auto" }}>A structured, professional approach — from first call to final handover.</p>
            </R>
          </div>
          <div className="wf-grid">
            {workflow.map(({ step, Icon, title, desc }, i) => (
              <R key={step} delay={i * 0.02}>
                <div className="wf-card group">
                  <span className="wf-num">{step}</span>
                   <div className="wf-icon-box group-hover:scale-110 transition-transform duration-300">
                    <Icon className="wf-isvg" style={{ width: 32, height: 32 }} strokeWidth={1.5} />
                  </div>
                  <div className="wf-content">
                    <p className="wf-step-lbl">Step {step}</p>
                    <p className="wf-title">{title}</p>
                    <p className="wf-desc">{desc}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section className="sec" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#f0f6ff 100%)", contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>What We Work With</span>
              <h2 className="dlg" style={{ color: "#0d2557" }}>Material Specialization</h2>
            </R>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "0.9rem" }}>
            {materials.map((m, i) => (
              <R key={m} delay={i * 0.05}>
                <div className="mat-card">
                  <CheckCircle2 style={{ width: 18, height: 18, color: "#1d4ed8", flexShrink: 0 }} strokeWidth={2} />
                  <span>{m}</span>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="sec coverage-bg" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>Service Coverage</span>
              <h2 className="dlg" style={{ color: "#0d2557", marginBottom: 12 }}>Trichy &amp; Surrounding Districts</h2>
              <p className="body" style={{ maxWidth: 520, margin: "0 auto" }}>We serve Tiruchirappalli and surrounding districts with our own team, tools, and materials — no middlemen, no subcontracting.</p>
            </R>
          </div>
          <div className="cov-row" style={{ display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
            {/* LEFT — Map */}
            <R dir="left"><div style={{ flex: "1 1 280px", minWidth: 260 }}><CoverageMap /></div></R>
            {/* RIGHT — Text + districts */}
            <R dir="right">
              <div style={{ flex: "1 1 260px" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", marginBottom: "1.2rem" }}>Districts We Serve</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginBottom: "2rem" }}>
                  {districts.map(d => (
                    <span key={d.name} className={`dist-badge ${d.main ? "main" : "other"}`}>
                      <MapPin style={{ width: 9, height: 9 }} /> {d.name}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                  {["Our own mobile crew — no subcontracting", "Tools & materials transported to your site", "Site visit within 48 hours on request", "Post-installation support included"].map((point, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: "#eff6ff", border: "1.5px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <CheckCircle2 style={{ width: 11, height: 11, color: "#1d4ed8" }} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#475569" }}>{point}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:+919876543210" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 26px", borderRadius: 9, background: "#0d2557", color: "white", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}>
                  <Phone style={{ width: 15, height: 15 }} /> Book a Site Visit
                </a>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER — navy ── */}
      <section className="navy-bg" style={{ padding: "clamp(3.5rem,7vw,6rem) clamp(1.5rem,5vw,5rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(29,78,216,0.22) 0%, transparent 70%)"
        }} />
        <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
          <R>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#93c5fd", marginBottom: "1.2rem" }}>Start Your Project</p>
            <h2 className="dlg" style={{ color: "white", marginBottom: "1rem" }}>Ready to Build?</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.58)", maxWidth: 460, margin: "0 auto 2.2rem" }}>
              Get a free consultation and detailed written quotation for your next metal fabrication or elevation project.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a href="tel:+919876543210" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 34px", borderRadius: 9, background: "rgba(255,255,255,0.95)", color: "#0d2557", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none" }}>
                <Phone style={{ width: 16, height: 16 }} /> +91 98765 43210
              </a>
              <motion.button whileHover={{ background: "rgba(255,255,255,0.09)" }} onClick={() => navigate("/projects")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 34px", borderRadius: 9, background: "transparent", color: "rgba(255,255,255,0.82)", fontWeight: 500, fontSize: "0.92rem", cursor: "pointer", border: "1px solid rgba(255,255,255,0.24)" }}>
                View Our Work <ArrowRight style={{ width: 16, height: 16 }} />
              </motion.button>
            </div>
          </R>
        </div>
      </section>
    </main>
  );
};

export default About;
