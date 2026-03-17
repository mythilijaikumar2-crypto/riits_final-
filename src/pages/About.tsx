import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers, Ruler, Shield, Search, Wrench, ArrowRight,
  CheckCircle2, MapPin, Phone, ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SEO from "../components/SEO";
import { TurtleButton } from "../components/TurtleButton";

/* ══════════════════════════════════════════
    SCROLL REVEAL WRAPPER
══════════════════════════════════════════ */
const R = ({ children, delay = 0, dir = "up" }: any) => {
  const v = {
    up:    { y: 24, x: 0 },
    down:  { y: -24, x: 0 },
    left:  { x: 24, y: 0 },
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

/* ══════════════════════════════════════════
    GLOBAL FONT + CSS
══════════════════════════════════════════ */
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

    /* ── Hero ── */
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

    /* ── Stats ── */
    .stat-grid-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
    @media (min-width: 1024px) {
      .stat-grid-row { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
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
      0%   { background-position: 100% 0; }
      100% { background-position: -100% 0; }
    }

    /* ── SEO Section ── */
    .seo-section { background: #ffffff; padding: clamp(4rem,8vw,7rem) 0; border-top: 1px solid #f1f5f9; }
    .seo-intro { font-size: 1.05rem; line-height: 1.85; color: #64748b; max-width: 780px; }
    .seo-intro strong { color: #334155; font-weight: 600; }

    /* ── Materials ── */
    .mat-card { display: flex; align-items: center; gap: 12px; padding: 1rem 1.4rem; background: var(--white); border-radius: 12px; border: 1.5px solid var(--sl1); font-size: 0.88rem; font-weight: 600; color: var(--navy); transition: 0.3s; }
    .mat-card:hover { border-color: var(--blue-7); box-shadow: 0 10px 25px -5px rgba(29,78,216,0.1); }

    /* ── Coverage ── */
    .dist-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .dist-badge.main  { background: var(--blue-05); color: var(--blue-7); border: 1px solid var(--blue-1); }
    .dist-badge.other { background: var(--sl05); color: var(--sl5); border: 1px solid var(--sl1); }
    @media (max-width: 768px) { .cov-row { flex-direction: column !important; gap: 2rem !important; } }

    /* ── Why Choose Us ── */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .why-grid > div { display: flex; }
    .why-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px;
      padding: 2.2rem 1.8rem;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
    }
    .why-card:hover {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.25);
      transform: translateY(-10px);
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
    }
    .why-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }
    .why-card:hover::before { transform: translateX(100%); }
    .why-card-icon  { font-size: 2rem; margin-bottom: 1.2rem; display: block; transition: transform 0.4s ease; }
    .why-card:hover .why-card-icon { transform: scale(1.15) rotate(-5deg); }
    .why-card-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.2rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #ffffff;
      margin-bottom: 0.8rem;
    }
    .why-card-body  { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.75; }
    .why-card-body strong { color: rgba(255,255,255,0.9); font-weight: 600; }

    /* ── Accordion ── */
    .acc-trigger-btn {
      width: 100%; border: none; cursor: pointer;
      display: flex; align-items: center; gap: 16px;
      padding: 18px 20px; text-align: left;
      transition: background 0.35s ease;
    }
    .acc-trigger-btn:focus-visible {
      outline: 2px solid #2563eb;
      outline-offset: -2px;
    }
    @media (max-width: 600px) {
      .acc-body-inner { padding: 20px 16px 24px !important; }
    }
    .WhyOurWork-box { position: relative; }
    .animate-call-pulse {
      animation: call-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `}</style>
);

/* ══════════════════════════════════════════
    HUB & SPOKE COVERAGE MAP
══════════════════════════════════════════ */
const CoverageMap = () => {
  const [hov, setHov] = useState<number | null>(null);
  const spokes = [
    { label: "Thanjavur",  angle: -45  },
    { label: "Perambalur", angle: -110 },
    { label: "Karur",      angle: 170  },
    { label: "Pudukottai", angle: 60   },
    { label: "Ariyalur",   angle: -80  },
    { label: "Dindigul",   angle: 140  },
  ];
  const RL = 85;

  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center bg-slate-50/50 rounded-full border border-slate-100">
      <svg viewBox="-140 -140 280 280" className="w-full h-full p-6">
        {spokes.map((s, i) => {
          const rad = (s.angle - 90) * Math.PI / 180;
          const x = Math.cos(rad) * RL, y = Math.sin(rad) * RL;
          return (
            <line key={i} x1="0" y1="0" x2={x} y2={y}
              stroke={hov === i ? "#1d4ed8" : "#cbd5e1"}
              strokeWidth={hov === i ? "2.5" : "1.5"}
              strokeDasharray={hov === i ? "0" : "4 4"}
              style={{ transition: "stroke 0.2s,stroke-width 0.2s" }}
            />
          );
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
        <circle cx="0" cy="0" r="6"  fill="white" />
        <circle cx="0" cy="0" r="2.5" fill="#0d2557" />
        <text x="0" y="38" textAnchor="middle" fontSize="11" fontWeight="900"
          fill="#0d2557" style={{ letterSpacing: 1, textTransform: "uppercase" }}>
          TRICHY
        </text>
      </svg>
    </div>
  );
};

/* ══════════════════════════════════════════
    COUNTER
══════════════════════════════════════════ */
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
        const stepTime = Math.abs(Math.floor((duration * 1000) / (end - start)));
        const timer = setInterval(() => {
          start += 1;
          setDisplayValue(start);
          if (start >= end) clearInterval(timer);
        }, Math.max(stepTime, 16));
      }}
    >
      {isNumeric ? displayValue : value}
      {isNumeric && value.includes("+") && "+"}
      {isNumeric && value.includes("%") && "%"}
    </motion.span>
  );
};

/* ══════════════════════════════════════════
    ACCORDION — HOW WE WORK
══════════════════════════════════════════ */
interface WorkflowStep {
  step: string;
  Icon: LucideIcon;
  title: string;
  short: string;
  tagline: string;
  desc: string;
  details: string[];
  from: string;
  to: string;
  accent: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01", Icon: Search, title: "Consultation", short: "Initial Brief",
    tagline: "We listen before we build",
    desc: "We begin with a thorough consultation — understanding your design preferences, material requirements, and budget to create a fully tailored plan.",
    details: ["Free initial consultation", "Material & design advice", "Budget-conscious planning", "Clear timeline estimate"],
    from: "#0d2557", to: "#1d4ed8", accent: "#60a5fa",
  },
  {
    step: "02", Icon: Ruler, title: "Site Visit", short: "On-Site Survey",
    tagline: "Precision starts on-site",
    desc: "Our team arrives at your location within 48 hours for precise measurements and a full feasibility assessment — eliminating guesswork at every stage.",
    details: ["Site visit within 48 hours", "Precision measurements", "Structural feasibility check", "Detailed survey report"],
    from: "#042c53", to: "#0369a1", accent: "#38bdf8",
  },
  {
    step: "03", Icon: Layers, title: "Design Planning", short: "Drawings & Sign-off",
    tagline: "Every line matters",
    desc: "Detailed technical drawings and material selection — MS, SS 304/202, or aluminium — presented for your approval before a single weld is made.",
    details: ["Technical drawings prepared", "Material selection guide", "Client review & approval", "Revision support included"],
    from: "#1e1b4b", to: "#3730a3", accent: "#a5b4fc",
  },
  {
    step: "04", Icon: Wrench, title: "Fabrication", short: "Workshop Build",
    tagline: "Crafted with precision",
    desc: "Grade-A steel, aluminium and glass are shaped and welded at our Trichy workshop using precision equipment and experienced fabricators.",
    details: ["Grade-A certified materials", "Precision CNC welding", "Multi-stage quality checks", "Powder coat & finishing"],
    from: "#431407", to: "#b45309", accent: "#fbbf24",
  },
  {
    step: "05", Icon: Shield, title: "Installation", short: "Expert Fitting",
    tagline: "Installed by professionals",
    desc: "Our trained crew arrives on-site with all tools and materials to install your gates, railings, shutters and glass works cleanly and safely.",
    details: ["Trained installation crew", "All equipment supplied", "Clean worksite maintained", "Safety compliance assured"],
    from: "#052e16", to: "#166534", accent: "#4ade80",
  },
  {
    step: "06", Icon: CheckCircle2, title: "Completion", short: "Handover & Care",
    tagline: "On time. Every time.",
    desc: "After a rigorous quality inspection and final finishing, we hand over your project on schedule — with post-installation support always included.",
    details: ["Full quality inspection", "Final surface finishing", "On-time project handover", "Post-install support"],
    from: "#0d2557", to: "#0f766e", accent: "#2dd4bf",
  },
];

const WorkflowAccordion = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div className="flex flex-col">
        {workflowSteps.map((item: WorkflowStep, idx: number) => {
          const isOpen: boolean = active === idx;

          return (
            <div
              key={item.step}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="py-3"
            >
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: isOpen 
                    ? `0 25px 50px -12px ${item.to}35` 
                    : "0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -4px rgba(0,0,0,0.06)",
                  border: isOpen ? `1.5px solid ${item.to}40` : "1px solid rgba(226, 232, 240, 0.6)",
                  background: "white",
                  transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                  cursor: "pointer",
                }}
              >
              <button
                className="acc-trigger-btn"
                tabIndex={-1}
                style={{
                  background: isOpen
                    ? `linear-gradient(100deg, ${item.from}, ${item.to})`
                    : "#ffffff",
                  pointerEvents: "none",
                }}
              >
                <div style={{
                  flexShrink: 0, width: 42, height: 42, borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: isOpen
                    ? "rgba(255,255,255,0.15)"
                    : `linear-gradient(140deg, ${item.from}, ${item.to})`,
                  border: isOpen ? "1px solid rgba(255,255,255,0.22)" : "none",
                  transition: "background 0.35s ease",
                  boxShadow: isOpen ? "none" : `0 6px 16px -4px ${item.to}55`,
                }}>
                  <item.Icon size={19} strokeWidth={1.6} color="white" />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    margin: 0,
                    fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: isOpen ? "rgba(255,255,255,0.6)" : "#94a3b8",
                    marginBottom: 2, transition: "color 0.3s",
                  }}>
                    Step {item.step} — {item.short}
                  </p>
                  <p style={{
                    margin: 0,
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "1.25rem", fontWeight: 900,
                    textTransform: "uppercase", lineHeight: 1.1,
                    color: isOpen ? "#ffffff" : "#0d2557",
                    transition: "color 0.3s",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    {item.title}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    flexShrink: 0,
                    color: isOpen ? "rgba(255,255,255,0.7)" : "#cbd5e1",
                  }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="acc-body-inner"
                      style={{
                        background: "#ffffff",
                        padding: "24px 20px 28px 78px",
                        display: "flex", flexDirection: "column", gap: 20,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 32, height: 3, borderRadius: 2, flexShrink: 0,
                          background: `linear-gradient(90deg, ${item.to}, ${item.accent})`,
                        }} />
                        <p style={{
                          margin: 0, fontSize: "0.75rem", fontWeight: 600,
                          color: item.to, letterSpacing: "0.04em", fontStyle: "italic",
                        }}>
                          {item.tagline}
                        </p>
                      </div>

                      <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.78, color: "#475569" }}>
                        {item.desc}
                      </p>

                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: "10px 20px",
                      }}>
                        {item.details.map((d: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.06 + i * 0.05 }}
                            style={{
                              display: "flex", alignItems: "center", gap: 10,
                              fontSize: "0.82rem", fontWeight: 500, color: "#334155",
                            }}
                          >
                            <div style={{
                              width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              background: `${item.to}14`, border: `1.5px solid ${item.to}30`,
                            }}>
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.to }} />
                            </div>
                            {d}
                          </motion.div>
                        ))}
                      </div>

                      <div style={{ paddingTop: 4 }}>
                        <a
                          href="tel:+919876543210"
                          style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                            height: "52px", padding: "0 32px", borderRadius: 12,
                            background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                            color: "white", fontWeight: 700,
                            fontSize: "0.75rem", letterSpacing: "0.1em",
                            textTransform: "uppercase", textDecoration: "none",
                            boxShadow: `0 8px 22px -4px ${item.to}55`,
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Phone size={14} strokeWidth={2.5} />
                          Get a Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
    STATIC DATA
══════════════════════════════════════════ */
const materials = [
  "Stainless Steel (SS 304 / 202)", "Mild Steel (MS) Fabrication", "Aluminium Sections",
  "Toughened Glass", "ACP Sheets", "HPL Cladding", "GI Sheets & Tubes", "Polycarbonate Roofing",
];

const districts = [
  { name: "Trichy",      main: true  },
  { name: "Thanjavur",   main: false },
  { name: "Perambalur",  main: false },
  { name: "Karur",       main: false },
  { name: "Pudukottai",  main: false },
  { name: "Ariyalur",    main: false },
  { name: "Dindigul",    main: false },
];


/* ════════════════════════════════════════════
    MAIN ABOUT PAGE
════════════════════════════════════════════ */
const About = () => {
  const navigate = useNavigate();

  return (
    <main className="ap pt-20" style={{ transform: "translateZ(0)" }}>
      <SEO
        title="About RITS Metal Craft | Trusted Fabrication Company in Trichy, Tamil Nadu"
        description="RITS Metal Craft is a leading fabrication shop in Trichy with 15+ years in metal fabrication. We build steel gates, railings, rolling shutters, aluminium windows, glass doors & more."
        keywords="fabrication company in Trichy, fabrication shop in Trichy, metal fabrication, steel fabrication, welding work, steel gate, metal gate, grill work, balcony railing, staircase railing, window grill, rolling shutter, shop shutter, aluminium door, aluminium window, glass door, glass partition, steel gate near me, grill work near me, steel gate fabrication in Trichy"
      />
      <FontLoader />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center bg-[var(--navy)] overflow-hidden">
        <h1 className="sr-only">
          About RITS Metal Craft — Trusted Metal Fabrication Company in Trichy, Tamil Nadu
        </h1>

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

        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Est. 2009 — Trichy, Tamil Nadu
        </div>
        <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Completed
        </div>

        <div className="ctr relative z-10 lg:-translate-y-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Fabrication Company in Trichy
              </motion.div>

              <motion.p
                aria-hidden="true"
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-6"
              >
                Precision<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Steelcraft.
                </span><br />
                Proven Trust.
              </motion.p>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-white/70 text-lg leading-relaxed max-w-2xl mb-0"
              >
                RITS Metal Craft is a trusted{" "}
                <strong className="text-white/85">fabrication shop in Trichy</strong> with over
                15 years of experience in{" "}
                <strong className="text-white/85">metal fabrication</strong> and{" "}
                <strong className="text-white/85">steel fabrication</strong>. We serve
                homeowners, builders and businesses across Trichy, Thanjavur and Tamil Nadu —
                delivering every project with precision and care.
              </motion.p>


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
              { val: "800+",   lbl: "Projects Completed",  delay: 0.1 },
              { val: "15+",    lbl: "Years Experience",    delay: 0.2 },
              { val: "100%",   lbl: "Client Satisfaction", delay: 0.3 },
              { val: "Pan TN", lbl: "Areas Served",        delay: 0.4 },
            ].map((stat, i) => (
              <R key={i} delay={stat.delay} dir="up">
                <div className="about-stat-card group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="about-stat-val">
                    <Counter value={stat.val} duration={1.5 + i * 0.2} />
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
          WHAT WE DO — animated SEO cards
      ══════════════════════════════════════════ */}

      {/* ══════════════════════════════════════════
          HOW WE WORK — ACCORDION
      ══════════════════════════════════════════ */}
      <section
        className="sec"
        style={{ background: "white", contentVisibility: "auto", containIntrinsicSize: "auto 500px" }}
      >
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>
                Our Work Quality
              </span>
              <h2 className="dlg" style={{ color: "#0d2557", marginBottom: 12 }}>How We Work</h2>
              <p className="body" style={{ maxWidth: 540, margin: "0 auto" }}>
                Every product — from a <strong>window grill</strong> to a{" "}
                <strong>staircase railing</strong> — is quality-checked before delivery.
                A structured, professional approach from first call to final handover.
              </p>
            </R>
          </div>
          <R delay={0.1}>
            <WorkflowAccordion />
          </R>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MATERIALS
      ══════════════════════════════════════════ */}
      <section
        className="sec"
        style={{ background: "linear-gradient(180deg,#f8fafc 0%,#f0f6ff 100%)", contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
      >
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
      <section className="sec coverage-bg" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}>
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
            <R dir="left">
              <div style={{ flex: "1 1 280px", minWidth: 260 }}>
                <CoverageMap />
              </div>
            </R>
            <R dir="right">
              <div style={{ flex: "1 1 260px" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", marginBottom: "1.2rem" }}>
                  Districts We Serve
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginBottom: "2rem" }}>
                  {districts.map((d) => (
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
                    "Post-installation support included",
                  ].map((point, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: "#eff6ff", border: "1.5px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <CheckCircle2 style={{ width: 11, height: 11, color: "#1d4ed8" }} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#475569" }}>{point}</span>
                    </div>
                  ))}
                </div>
                <TurtleButton
                  href="tel:+919876543210"
                  variant="call_now"
                  className="rounded-xl px-10 text-sm font-bold min-w-[220px]"
                >
                  <MapPin style={{ width: 16, height: 16 }} /> Book a Site Visit
                </TurtleButton>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="navy-bg sec" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 500px" }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <R>
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14, color: "#93c5fd" }}>
                Our Advantage
              </span>
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
              { icon: "✅", title: "15+ Years of Local Trust",       body: <>A locally rooted <strong>metal fabrication</strong> team in Trichy — reliable, experienced and community-trusted since 2009.</> },
              { icon: "📋", title: "Transparent Written Quotes",     body: <>Every <strong>shop shutter</strong> and <strong>steel fabrication</strong> job gets a detailed written quote — zero hidden costs, ever.</> },
              { icon: "🔩", title: "Premium Grade Materials",        body: <>Grade-A steel, aluminium and glass on every job — from <strong>aluminium door</strong> installs to full <strong>glass partition</strong> fit-outs.</> },
              { icon: "🚚", title: "On-Time Delivery",               body: <>Every project delivered and installed on schedule with full post-job support across Trichy and Tamil Nadu.</> },
            ].map((card, i) => (
              <R key={i} delay={i * 0.06}>
                <div
                  className="why-card group"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                  style={{ background: "rgba(255,255,255,0.04)" } as React.CSSProperties}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(59,130,246,0.12), transparent 50%)" }}
                  />
                  <span className="why-card-icon">{card.icon}</span>
                  <p className="why-card-title">{card.title}</p>
                  <div className="why-card-body flex-grow">{card.body}</div>
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FOOTER
      ══════════════════════════════════════════ */}
      <section
        className="navy-bg"
        style={{
          padding: "clamp(3.5rem,7vw,6rem) clamp(1.5rem,5vw,5rem)",
          textAlign: "center", position: "relative", overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          contentVisibility: "auto", containIntrinsicSize: "auto 400px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(29,78,216,0.22) 0%, transparent 70%)" }} />
        <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
          <R>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#93c5fd", marginBottom: "1.2rem" }}>
              Start Your Project
            </p>
            <h2 className="dlg" style={{ color: "white", marginBottom: "1rem" }}>Ready to Build?</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.58)", maxWidth: 500, margin: "0 auto 2.2rem" }}>
              Get a free consultation and detailed written quotation for your{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>steel gate</span>,{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>railing</span>,{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>rolling shutter</span> or{" "}
              <span style={{ color: "rgba(255,255,255,0.75)" }}>glass door</span> project in Trichy.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: "2rem" }}>
              <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-12 text-base font-bold min-w-[220px]">
                <Phone className="w-5 h-5" /> Call +91 98765 43210
              </TurtleButton>
              <motion.button
                whileHover={{ background: "rgba(255,255,255,0.09)", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                  height: "52px", padding: "0 36px", borderRadius: 12,
                  background: "transparent", color: "rgba(255,255,255,0.9)",
                  fontWeight: 600, fontSize: "0.95rem", cursor: "pointer",
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