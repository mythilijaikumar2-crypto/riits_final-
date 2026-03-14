import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers, Ruler, Shield, Search, Wrench, ArrowRight,
  CheckCircle2, MapPin, Phone
} from "lucide-react";
import SEO from "../components/SEO";
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
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

    .wf-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
      gap: 2.5rem; 
    }
    .wf-card {
      min-height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 0;
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 24px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(226,232,240,0.8);
      padding: 36px 28px 32px;
      box-shadow: 0 4px 24px -4px rgba(13,37,87,0.06), 0 1px 4px rgba(0,0,0,0.04);
      will-change: transform;
      transform: translateZ(0);
      transition: transform 0.28s cubic-bezier(0.23, 1, 0.32, 1),
                  box-shadow 0.28s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .wf-card::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(135deg, var(--navy), var(--blue-7));
      z-index: 0;
      transition: opacity 0.28s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0;
      will-change: opacity;
    }
    .wf-card * { z-index: 1; position: relative; }
    .wf-num {
      position: absolute;
      top: 16px;
      right: 20px;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 2.6rem;
      font-weight: 900;
      color: rgba(13,37,87,0.07);
      line-height: 1;
      transition: color 0.28s;
      z-index: 1;
    }
    .wf-icon-box {
      width: 76px;
      height: 76px;
      background-color: var(--blue-6);
      border-radius: 20px;
      border: 3px solid rgba(255,255,255,0.9);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                  background-color 0.28s, box-shadow 0.28s;
      box-shadow: 0 8px 20px -4px rgba(37,99,235,0.25);
    }
    .wf-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .wf-step-lbl {
      font-size: 0.62rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--blue-6);
      transition: color 0.28s;
      margin-bottom: 2px;
    }
    .wf-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--navy);
      text-transform: uppercase;
      line-height: 1.15;
      transition: color 0.28s;
    }
    .wf-desc {
      font-size: 0.875rem;
      color: var(--sl5);
      line-height: 1.65;
      max-width: 230px;
      margin: 8px auto 0;
      transition: color 0.28s;
    }
    .wf-card:hover {
      transform: translateY(-8px) translateZ(0);
      box-shadow: 0 28px 56px -12px rgba(13,37,87,0.18), 0 8px 20px -4px rgba(13,37,87,0.10);
    }
    .wf-card:hover::before { opacity: 1; }
    .wf-card:hover .wf-title,
    .wf-card:hover .wf-desc { color: rgba(255,255,255,0.92); }
    .wf-card:hover .wf-step-lbl { color: #93c5fd; }
    .wf-card:hover .wf-num { color: rgba(255,255,255,0.15); }
    .wf-card:hover .wf-icon-box {
      background-color: rgba(255,255,255,0.95);
      color: var(--blue-6) !important;
      transform: scale(0.93);
      box-shadow: 0 0 24px rgba(255,255,255,0.35);
    }
    .wf-bg-decor {
      position: absolute;
      bottom: -36px;
      right: -36px;
      width: 160px;
      height: 160px;
      opacity: 0.04;
      pointer-events: none;
      transition: opacity 0.4s, transform 0.4s;
      z-index: 0;
      transform: rotate(-15deg);
    }
    .wf-card:hover .wf-bg-decor {
      opacity: 0.18;
      transform: rotate(0deg) scale(1.1);
      color: white;
    }

    .mat-card { display: flex; align-items: center; gap: 12px; padding: 1rem 1.4rem; background: var(--white); border-radius: 12px; border: 1.5px solid var(--sl1); font-size: 0.88rem; font-weight: 600; color: var(--navy); transition: 0.3s; }
    .mat-card:hover { border-color: var(--blue-7); box-shadow: 0 10px 25px -5px rgba(29,78,216,0.1); }

    .dist-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .dist-badge.main { background: var(--blue-05); color: var(--blue-7); border: 1px solid var(--blue-1); }
    .dist-badge.other { background: var(--sl05); color: var(--sl5); border: 1px solid var(--sl1); }

    @media (max-width: 768px) {
      .cov-row { flex-direction: column !important; gap: 2rem !important; }
    }

    .stat-grid-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
    @media (min-width: 1024px) {
      .stat-grid-row {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
    }
    .about-stat-card {
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 45px 25px;
      border-radius: 36px;
      border: 1px solid rgba(37,99,235,0.1);
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.23,1,0.32,1);
      box-shadow: 0 15px 35px -5px rgba(13,37,87,0.05);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
    .about-stat-card:hover {
      transform: translateY(-15px) scale(1.02);
      border-color: rgba(37,99,235,0.4);
      background: white;
      box-shadow: 0 45px 90px -20px rgba(37,99,235,0.2);
    }
    .about-stat-val {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 3.5rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 12px;
      background: linear-gradient(135deg, var(--navy) 0%, var(--blue-6) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
    }
    .about-stat-card:hover .about-stat-val { transform: scale(1.1) translateY(-2px); }
    .about-stat-lbl {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--sl5);
      max-width: 140px;
      transition: color 0.4s ease;
    }
    .about-stat-card:hover .about-stat-lbl { color: var(--navy); }
    .about-stat-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, var(--blue-6), transparent 70%);
      opacity: 0;
      transition: opacity 0.6s ease;
      z-index: -1;
    }
    .about-stat-card:hover::after { opacity: 0.05; }
    .about-stat-card::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 6px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, var(--blue-6), var(--blue-3), var(--blue-6));
      background-size: 200% 100%;
      transform: scaleX(0);
      transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
      transform-origin: left;
    }
    .about-stat-card:hover::before {
      transform: scaleX(1);
      animation: side-shimmer 2s linear infinite;
    }
    @keyframes side-shimmer {
      0% { background-position: 100% 0; }
      100% { background-position: -100% 0; }
    }

    /* ── SEO Content Section ── */
    .seo-section { background: #ffffff; padding: clamp(4rem,8vw,7rem) 0; border-top: 1px solid #f1f5f9; }
    .seo-intro { font-size: 1.05rem; line-height: 1.85; color: #64748b; max-width: 780px; }
    .seo-intro strong { color: #334155; font-weight: 600; }
    .seo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; }
    .seo-card {
      background: #f8fafc;
      border: 1.5px solid #e2e8f0;
      border-radius: 18px;
      padding: 1.6rem 1.4rem;
      transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
    }
    .seo-card:hover {
      border-color: #bfdbfe;
      box-shadow: 0 12px 32px -8px rgba(37,99,235,0.10);
      transform: translateY(-4px);
    }
    .seo-card-icon { font-size: 1.6rem; margin-bottom: 0.75rem; display: block; }
    .seo-card-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.05rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #0d2557;
      margin-bottom: 0.5rem;
    }
    .seo-card-body { font-size: 0.83rem; color: #64748b; line-height: 1.7; }
    .seo-card-body strong { color: #334155; font-weight: 600; }
    .seo-near-bar {
      margin-top: 2.5rem;
      background: #0d2557;
      border-radius: 18px;
      padding: 1.4rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .seo-near-bar p { font-size: 0.9rem; color: rgba(255,255,255,0.75); line-height: 1.65; margin: 0; }
    .seo-near-bar strong { color: #93c5fd; font-weight: 700; }
    .seo-near-btn {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #f59e0b;
      color: #0f172a;
      font-weight: 800;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 12px 24px;
      border-radius: 10px;
      text-decoration: none;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .seo-near-btn:hover { background: #fbbf24; }

    /* ── Why Choose Us ── */
    .why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.4rem; margin-top: 2.5rem; }
    .why-card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 18px;
      padding: 1.6rem;
      backdrop-filter: blur(6px);
      transition: background 0.25s, border-color 0.25s;
    }
    .why-card:hover { background: rgba(255,255,255,0.13); border-color: rgba(255,255,255,0.28); }
    .why-card-icon { font-size: 1.5rem; margin-bottom: 0.8rem; display: block; }
    .why-card-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.05rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
    .why-card-body { font-size: 0.82rem; color: rgba(255,255,255,0.62); line-height: 1.7; }
    .why-card-body strong { color: rgba(255,255,255,0.85); font-weight: 600; }
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
  { step: "01", Icon: Search, title: "Consultation", desc: "Understanding your steel gate, railing or shutter requirements, specifications and budget." },
  { step: "02", Icon: Ruler, title: "Site Visit", desc: "Accurate on-site measurements and feasibility assessment at your location." },
  { step: "03", Icon: Layers, title: "Design Planning", desc: "Detailed drawings and material selection — MS, SS or aluminium — for your approval." },
  { step: "04", Icon: Wrench, title: "Fabrication", desc: "Precision welding work and metal fabrication at our Trichy workshop facility." },
  { step: "05", Icon: Shield, title: "Installation", desc: "Expert on-site installation of gates, railings, shutters and glass works by trained professionals." },
  { step: "06", Icon: CheckCircle2, title: "Completion", desc: "Quality inspection, finishing and project handover — on time, every time." },
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

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);

  return (
    <motion.span
      onViewportEnter={() => {
        if (!isNumeric) return;
        let start = 0;
        const end = numericValue;
        const range = end - start;
        const stepTime = Math.abs(Math.floor((duration * 1000) / range));
        const timer = setInterval(() => {
          start += 1;
          setDisplayValue(start);
          if (start >= end) clearInterval(timer);
        }, Math.max(stepTime, 16));
      }}
    >
      {isNumeric ? displayValue : value}
      {isNumeric && value.includes('+') && '+'}
      {isNumeric && value.includes('%') && '%'}
    </motion.span>
  );
};

/* ════════════════ MAIN ABOUT PAGE ════════════════ */
const About = () => {
  const navigate = useNavigate();

  return (
    <main className="ap pt-20" style={{ transform: 'translateZ(0)' }}>
      <SEO
        title="About RITS Metal Craft | Trusted Fabrication Company in Trichy, Tamil Nadu"
        description="RITS Metal Craft is a leading fabrication shop in Trichy with 15+ years in metal fabrication. We build steel gates, railings, rolling shutters, aluminium windows, glass doors & more."
        keywords="fabrication company in Trichy, fabrication shop in Trichy, metal fabrication, steel fabrication, welding work, steel gate, metal gate, grill work, balcony railing, staircase railing, window grill, rolling shutter, shop shutter, aluminium door, aluminium window, glass door, glass partition, steel gate near me, grill work near me, steel gate fabrication in Trichy"
      />
      <FontLoader />

      {/* ══════════════════════════════════════════
          HERO — About Our Company
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center bg-[var(--navy)] overflow-hidden">

        {/* Visually hidden H1 — read by Google, invisible to users */}
        <h1 className="sr-only">
          About RITS Metal Craft — Trusted Metal Fabrication Company in Trichy, Tamil Nadu
        </h1>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/src/assets/heropage/about page hero.webp"
            alt="RITS Metal Craft fabrication workshop — steel gate, railing and welding work in Trichy"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ willChange: "transform" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/60 to-transparent z-[1]" />
        </div>

        <div className="about-mesh animate-mesh-pulse" />

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Est. 2009 — Trichy, Tamil Nadu
        </div>
        <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Completed
        </div>

        <div className="ctr relative z-10 lg:-translate-y-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                Fabrication Company in Trichy
              </motion.div>

              {/* Decorative display heading — aria-hidden, real H1 is sr-only above */}
              <motion.p
                aria-hidden="true"
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Precision<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Steelcraft.
                </span><br />
                Proven Trust.
              </motion.p>

              {/* ── SEO-rich hero paragraph — About Our Company ── */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                RITS Metal Craft is a trusted{" "}
                <strong className="text-white/85">fabrication shop in Trichy</strong> with over
                15 years of experience in{" "}
                <strong className="text-white/85">metal fabrication</strong> and{" "}
                <strong className="text-white/85">steel fabrication</strong>. We serve
                homeowners, builders and businesses across Trichy, Thanjavur and Tamil Nadu —
                delivering every project with precision and care.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-3"
              >
                <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS GRID
      ══════════════════════════════════════════ */}
      <section className="relative z-20 -mt-20 lg:-mt-24 mb-10">
        <div className="ctr">
          <div className="stat-grid-row">
            {[
              { val: "800+", lbl: "Projects Completed", delay: 0.1 },
              { val: "15+",  lbl: "Years Experience",   delay: 0.2 },
              { val: "100%", lbl: "Client Satisfaction", delay: 0.3 },
              { val: "Pan TN", lbl: "Areas Served",      delay: 0.4 }
            ].map((stat, i) => (
              <R key={i} delay={stat.delay} dir="up">
                <div className="about-stat-card group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="about-stat-val">
                    <Counter value={stat.val} duration={1.5 + (i * 0.2)} />
                  </div>
                  <div className="about-stat-lbl">{stat.lbl}</div>
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE DO — SEO Content Section
      ══════════════════════════════════════════ */}
      <section className="seo-section" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
        <div className="ctr">

          {/* Section header */}
          <R>
            <span className="ltag" style={{ marginBottom: 14 }}>Products &amp; Services</span>
            <h2 className="dlg" style={{ color: "#0d2557", marginBottom: 14 }}>What We Do</h2>
            <p className="seo-intro">
              We fabricate and install everything from a single{" "}
              <strong>steel gate</strong> to complete building elevations. If you're searching for{" "}
              <strong>steel gate fabrication in Trichy</strong>,{" "}
              <strong>grill work near me</strong> or a trusted{" "}
              <strong>fabrication shop near me</strong> — RITS Metal Craft has it all.
            </p>
          </R>

          {/* Product cards */}
          <div className="seo-grid">

            <R delay={0.05}>
              <div className="seo-card">
                <span className="seo-card-icon">🚪</span>
                <p className="seo-card-title">Gates &amp; Grills</p>
                <p className="seo-card-body">
                  Custom <strong>steel gates</strong>, <strong>metal gates</strong>,{" "}
                  <strong>window grills</strong> and decorative <strong>grill work</strong> for
                  homes and commercial buildings.
                </p>
              </div>
            </R>

            <R delay={0.08}>
              <div className="seo-card">
                <span className="seo-card-icon">🛡️</span>
                <p className="seo-card-title">Railings</p>
                <p className="seo-card-body">
                  Precision-welded <strong>balcony railings</strong> and{" "}
                  <strong>staircase railings</strong> in stainless steel and mild steel —
                  safe, durable and stylish.
                </p>
              </div>
            </R>

            <R delay={0.11}>
              <div className="seo-card">
                <span className="seo-card-icon">🏗️</span>
                <p className="seo-card-title">Rolling Shutters</p>
                <p className="seo-card-body">
                  Heavy-duty <strong>rolling shutters</strong> and{" "}
                  <strong>shop shutters</strong> for retail outlets, warehouses and
                  industrial facilities.
                </p>
              </div>
            </R>

            <R delay={0.14}>
              <div className="seo-card">
                <span className="seo-card-icon">🪟</span>
                <p className="seo-card-title">Aluminium Works</p>
                <p className="seo-card-body">
                  Modern <strong>aluminium doors</strong> and{" "}
                  <strong>aluminium windows</strong> — lightweight, weather-resistant and
                  elegantly finished for any space.
                </p>
              </div>
            </R>

            <R delay={0.17}>
              <div className="seo-card">
                <span className="seo-card-icon">🏢</span>
                <p className="seo-card-title">Glass Works</p>
                <p className="seo-card-body">
                  Toughened <strong>glass doors</strong> and{" "}
                  <strong>glass partitions</strong> for offices, showrooms and modern
                  residential interiors.
                </p>
              </div>
            </R>

            <R delay={0.20}>
              <div className="seo-card">
                <span className="seo-card-icon">⚙️</span>
                <p className="seo-card-title">Welding &amp; Structural</p>
                <p className="seo-card-body">
                  Industrial <strong>welding work</strong>, steel frames, sheds, ACP
                  cladding and building elevation across Tamil Nadu.
                </p>
              </div>
            </R>

          </div>

          {/* Near-me CTA bar */}
          <R delay={0.25}>
            <div className="seo-near-bar">
              <p>
                Searching for <strong>steel gate near me</strong>,{" "}
                <strong>grill work near me</strong> or the best{" "}
                <strong>fabrication company in Trichy</strong>?{" "}
                We're right here — serving Trichy, Thanjavur, Pudukottai &amp; all of Tamil Nadu.
              </p>
              <a href="tel:+919876543210" className="seo-near-btn">
                📞 Call Now
              </a>
            </div>
          </R>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR WORK QUALITY — Execution Workflow
      ══════════════════════════════════════════ */}
      <section className="sec" style={{ background: "white", contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>Our Work Quality</span>
              <h2 className="dlg" style={{ color: "#0d2557", marginBottom: 12 }}>How We Work</h2>
              <p className="body" style={{ maxWidth: 560, margin: "0 auto" }}>
                Every product — from a <strong>window grill</strong> to a{" "}
                <strong>staircase railing</strong> — is quality-checked before delivery.
                A structured, professional approach from first call to final handover.
              </p>
            </R>
          </div>
          <div className="wf-grid">
            {workflow.map(({ step, Icon, title, desc }, i) => (
              <R key={step} delay={i * 0.02}>
                <div className="wf-card group">
                  <span className="wf-num">{step}</span>
                  <div className="wf-icon-box group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    <Icon className="wf-isvg" style={{ width: 32, height: 32 }} strokeWidth={1.5} />
                  </div>
                  <Icon className="wf-bg-decor" />
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

      {/* ══════════════════════════════════════════
          MATERIALS
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          COVERAGE
      ══════════════════════════════════════════ */}
      <section className="sec coverage-bg" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>Service Coverage</span>
              <h2 className="dlg" style={{ color: "#0d2557", marginBottom: 12 }}>Trichy &amp; Surrounding Districts</h2>
              <p className="body" style={{ maxWidth: 520, margin: "0 auto" }}>
                We serve Tiruchirappalli and surrounding districts with our own team, tools and
                materials — no middlemen, no subcontracting.
              </p>
            </R>
          </div>
          <div className="cov-row" style={{ display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
            <R dir="left"><div style={{ flex: "1 1 280px", minWidth: 260 }}><CoverageMap /></div></R>
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
                  {[
                    "Our own mobile crew — no subcontracting",
                    "Tools & materials transported to your site",
                    "Site visit within 48 hours on request",
                    "Post-installation support included"
                  ].map((point, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: "#eff6ff", border: "1.5px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <CheckCircle2 style={{ width: 11, height: 11, color: "#1d4ed8" }} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#475569" }}>{point}</span>
                    </div>
                  ))}
                </div>
                <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-8">
                  <Phone style={{ width: 15, height: 15 }} /> Book a Site Visit
                </TurtleButton>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="navy-bg sec" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14, color: "#93c5fd" }}
                    /* override ltag blue to lighter on dark bg */
              >Our Advantage</span>
              <h2 className="dlg" style={{ color: "#ffffff", marginBottom: 14 }}>Why Choose Us</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(255,255,255,0.6)", maxWidth: 540, margin: "0 auto" }}>
                Searching for a <strong style={{ color: "rgba(255,255,255,0.85)" }}>steel gate near me</strong>,{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>grill work near me</strong> or the best{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>fabrication company in Trichy</strong>?
                Here's why 800+ clients chose RITS Metal Craft.
              </p>
            </R>
          </div>

          <div className="why-grid">
            {[
              {
                icon: "✅",
                title: "15+ Years of Local Trust",
                body: <>A locally rooted <strong>metal fabrication</strong> team in Trichy — reliable, experienced and community-trusted since 2009.</>
              },
              {
                icon: "📋",
                title: "Transparent Written Quotes",
                body: <>Every <strong>shop shutter</strong> and <strong>steel fabrication</strong> job gets a detailed written quote — zero hidden costs, ever.</>
              },
              {
                icon: "🔩",
                title: "Premium Grade Materials",
                body: <>Grade-A steel, aluminium and glass on every job — from <strong>aluminium door</strong> installs to full <strong>glass partition</strong> fit-outs.</>
              },
              {
                icon: "🚚",
                title: "On-Time Delivery",
                body: <>Every project delivered and installed on schedule with full post-job support across Trichy and Tamil Nadu.</>
              },
            ].map((card, i) => (
              <R key={i} delay={i * 0.06}>
                <div className="why-card">
                  <span className="why-card-icon">{card.icon}</span>
                  <p className="why-card-title">{card.title}</p>
                  <p className="why-card-body">{card.body}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FOOTER
      ══════════════════════════════════════════ */}
      <section className="navy-bg" style={{ padding: "clamp(3.5rem,7vw,6rem) clamp(1.5rem,5vw,5rem)", textAlign: "center", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(29,78,216,0.22) 0%, transparent 70%)" }} />
        <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
          <R>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#93c5fd", marginBottom: "1.2rem" }}>Start Your Project</p>
            <h2 className="dlg" style={{ color: "white", marginBottom: "1rem" }}>Ready to Build?</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.58)", maxWidth: 500, margin: "0 auto 2.2rem" }}>
              Get a free consultation and detailed written quotation for your{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>steel gate</span>,{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>railing</span>,{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>rolling shutter</span> or{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>glass door</span> project in Trichy.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
                <Phone className="w-4 h-4" /> Call +91 98765 43210
              </TurtleButton>
              <motion.button
                whileHover={{ background: "rgba(255,255,255,0.09)" }}
                onClick={() => navigate("/projects")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 34px", borderRadius: 9, background: "transparent", color: "rgba(255,255,255,0.82)", fontWeight: 500, fontSize: "0.92rem", cursor: "pointer", border: "1px solid rgba(255,255,255,0.24)" }}
              >
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