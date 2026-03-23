import { motion, useInView } from "framer-motion";
import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, MapPin, Phone,
  Users, Target, Wrench, Clock, ThumbsUp, FileCheck, Headphones, ClipboardList, Truck
} from "lucide-react";
import SEO from "../components/SEO";
import { TurtleButton } from "../components/TurtleButton";
import { CONTACT_DETAILS, formatTelLink, COMPANY_NAME, BRAND_NAME } from "../config/contact";
import aboutHero from "../assets/heropage/about-hero.webp";

/* ══════════════════════════════════════════
    SCROLL REVEAL WRAPPER
══════════════════════════════════════════ */
const R = ({ children, delay = 0, duration = 0.5, dir = "up", margin = "-50px" }: any) => {
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
const FontLoader = () => (
  <style>{`
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
    .dxl { font-family:'Barlow Condensed',sans-serif; font-size:clamp(2.2rem,8vw,5.8rem); font-weight:900; line-height:0.95; letter-spacing:-0.01em; text-transform:uppercase; }
    .dlg { font-family:'Barlow Condensed',sans-serif; font-size:clamp(1.75rem,6vw,3.4rem); font-weight:800; line-height:1.05; letter-spacing:0.01em; text-transform:uppercase; }
    .dsm { font-family:'Barlow Condensed',sans-serif; font-size:clamp(1.1rem,4vw,1.65rem); font-weight:700; letter-spacing:0.04em; text-transform:uppercase; }

    .body { font-size:1rem; line-height:1.78; color:var(--sl5); }
    .ltag { font-size:0.68rem; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:var(--blue-6); display:inline-flex; align-items:center; gap:10px; }
    .ltag::before { content:''; display:block; width:26px; height:2px; background:var(--blue-6); flex-shrink:0; }
    .navy-bg { background-color: var(--navy); }
    .sec { padding: clamp(3rem, 6vw, 4.5rem) 0; overflow: hidden; }
    .ctr { width: 90%; max-width: 1240px; margin: 0 auto; position: relative; z-index: 10; }

    /* ── Hero ── */
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
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    @media (min-width: 480px) {
      .stat-grid-row { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    }
    @media (min-width: 1024px) {
      .stat-grid-row { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
    }
    .about-stat-card {
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: clamp(18px, 5vw, 30px) 15px;
      border-radius: 36px;
      border: 1px solid rgba(37,99,235,0.1);
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
      box-shadow: 0 10px 25px -5px rgba(13,37,87,0.05);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      will-change: transform, opacity;
      transform: translateZ(0);
    }
    .about-stat-card:hover {
      transform: translateY(8px) scale(1.01);
      border-color: rgba(37,99,235,0.4);
      background: white;
      box-shadow: 0 45px 90px -20px rgba(37,99,235,0.2);
    }
    .about-stat-val {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 3.5rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 8px;
      background: linear-gradient(135deg, var(--navy) 0%, var(--blue-6) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
    }
    .about-stat-card:hover .about-stat-val { transform: translateY(-1px); }
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
      transition: opacity 0.4s ease;
      z-index: -1;
    }
    .about-stat-card:hover::after { opacity: 0.08; }
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
      transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
      transform-origin: left;
    }
    .about-stat-card:hover::before {
      transform: scaleX(1);
      animation: side-shimmer 1.2s linear infinite;
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
    .dist-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .dist-badge.main { background: var(--blue-05); color: var(--blue-7); border: 1px solid var(--blue-1); }
    .dist-badge.other { background: var(--sl05); color: var(--sl5); border: 1px solid var(--sl1); }
    /* ── Why Choose Us ── */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .why-grid > div { display: flex; }
    .why-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 2.5rem 2rem;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    }
    .why-card:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 30px 60px -12px rgba(0,0,0,0.6);
    }
    .why-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05), transparent);
      transform: translateX(-100%);
      transition: transform 0.8s ease;
    }
    .why-card:hover::before { transform: translateX(100%); }
    .why-card-icon { 
      background: rgba(255,255,255,0.05);
      width: 64px;
      height: 64px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.4s ease;
    }
    .why-card:hover .why-card-icon { 
      transform: scale(1.1) rotate(-5deg);
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.3);
    }
    .why-card-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1.35rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #ffffff;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    .why-card-body { 
      font-size: 0.95rem; 
      color: rgba(255,255,255,0.6); 
      line-height: 1.7; 
      font-weight: 400;
    }

    /* ── Utility ── */
    .text-navy { color: #0d2557 !important; }

    /* ══ Vision & Mission ══ */
    .vm-section {
      padding: clamp(2.5rem, 6vw, 4rem) 0;
      background: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f8fafc 100%);
    }
    .vm-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 4vw, 2rem);
    }
    @media (min-width: 768px) {
      .vm-grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; align-items: stretch; }
    }
    .vm-card-outer {
      position: relative;
      display: flex;
    }
    .vm-card-glow {
      position: absolute;
      inset: 0;
      border-radius: 24px;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    .vm-card-outer:hover .vm-card-glow { opacity: 0.08; }
    .vm-card {
      position: relative;
      width: 100%;
      background: #ffffff;
      border-radius: 24px;
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 24px -4px rgba(13,37,87,0.08);
      transition: transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s cubic-bezier(0.23,1,0.32,1);
      will-change: transform;
    }
    .vm-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 48px -8px rgba(13,37,87,0.14);
    }
    .vm-card.blue  { border: 1.5px solid #dbeafe; }
    .vm-card.slate { border: 1.5px solid #e2e8f0; }
    .vm-card.blue:hover  { border-color: #93c5fd; }
    .vm-card.slate:hover { border-color: #94a3b8; }
    .vm-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .vm-icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 8px 20px -4px rgba(0,0,0,0.2);
    }
    .vm-icon.blue  { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
    .vm-icon.slate { background: linear-gradient(135deg, #64748b, #334155); }
    .vm-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 800;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      line-height: 1;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .vm-title.blue  { background-image: linear-gradient(135deg, #2563eb, #1e40af); }
    .vm-title.slate { background-image: linear-gradient(135deg, #475569, #1e293b); }
    .vm-content {
      font-size: 1.05rem;
      line-height: 1.78;
      color: #475569;
      flex: 1;
      margin: 0;
    }
    .vm-content strong { color: #0d2557; font-weight: 600; }
    .vm-tags {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid #f1f5f9;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .vm-tag {
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.85rem;
      border-radius: 100px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .vm-tag.blue  { background: #eff6ff; color: #1d4ed8; }
    .vm-tag.slate { background: #f1f5f9; color: #334155; }

    /* ══ How We Deliver ══ */
    .hwd-section {
      width: 100%;
      padding: clamp(4rem, 8vw, 6rem) 0;
      background: #ffffff;
    }
    .hwd-header {
      text-align: center;
      margin: 0 auto 3.5rem;
      max-width: 800px;
    }
    .hwd-badge {
      display: inline-block;
      padding: 0.35rem 1.1rem;
      background: linear-gradient(135deg, #2563eb, #334155);
      color: #fff;
      border-radius: 100px;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
      box-shadow: 0 4px 14px -2px rgba(37,99,235,0.35);
    }
    .hwd-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      line-height: 1.05;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #0d2557 0%, #1d4ed8 60%, #334155 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hwd-subtitle {
      font-size: 1.05rem;
      line-height: 1.78;
      color: #64748b;
      margin: 0;
    }
    .hwd-subtitle strong { color: #0d2557; font-weight: 600; }
    .hwd-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    @media (min-width: 640px) {
      .hwd-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
      .hwd-grid { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
    }
    .hwd-card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 2rem;
      border-radius: 20px;
      border: 1.5px solid #e2e8f0;
      background: #f8fafc;
      transition: transform 0.35s cubic-bezier(0.23,1,0.32,1),
                  box-shadow 0.35s cubic-bezier(0.23,1,0.32,1),
                  border-color 0.25s ease,
                  background 0.25s ease;
      overflow: hidden;
      will-change: transform;
    }
    .hwd-card::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 3px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
      border-radius: 0 0 20px 20px;
    }
    .hwd-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 44px -8px rgba(13,37,87,0.13);
      background: #ffffff;
    }
    .hwd-card:hover::after { transform: scaleX(1); }
    /* per‑card accent colours — applied inline via style prop */
    .hwd-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      align-self: flex-start;
      margin-bottom: 1.25rem;
      box-shadow: 0 6px 16px -3px rgba(0,0,0,0.18);
    }
    .hwd-card-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: #0d2557;
      margin-bottom: 0.6rem;
      line-height: 1.3;
    }
    .hwd-card-desc {
      font-size: 0.92rem;
      line-height: 1.72;
      color: #64748b;
      flex: 1;
      margin: 0 0 1rem;
    }
    .hwd-card-step {
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .hwd-step-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .hwd-cta {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
    }
    .hwd-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2.25rem;
      background: linear-gradient(135deg, #2563eb, #334155);
      color: #fff;
      font-size: 0.98rem;
      font-weight: 700;
      border-radius: 100px;
      text-decoration: none;
      box-shadow: 0 8px 28px -4px rgba(37,99,235,0.45);
      transition: transform 0.3s cubic-bezier(0.23,1,0.32,1),
                  box-shadow 0.3s ease;
    }
    .hwd-cta-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 16px 40px -6px rgba(37,99,235,0.55);
    }
    .hwd-cta-btn svg { transition: transform 0.3s ease; }
    .hwd-cta-btn:hover svg:last-child { transform: translateX(4px); }
  `}</style>
);

/* ══════════════════════════════════════════
    HUB & SPOKE COVERAGE MAP
══════════════════════════════════════════ */
const CoverageMap = () => {
  const [hov, setHov] = useState<number | null>(null);
  const spokes = [{ label: "Thanjavur", angle: -45 }, { label: "Perambalur", angle: -110 }, { label: "Karur", angle: 170 }, { label: "Pudukottai", angle: 60 }, { label: "Ariyalur", angle: -80 }, { label: "Dindigul", angle: 140 }];
  const RL = 85;
  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center bg-slate-50/50 rounded-full border border-slate-100">
      <svg viewBox="-140 -140 280 280" className="w-full h-full p-6">
        {spokes.map((s, i) => { const rad = (s.angle - 90) * Math.PI / 180; const x = Math.cos(rad) * RL, y = Math.sin(rad) * RL; return <line key={i} x1="0" y1="0" x2={x} y2={y} stroke={hov === i ? "#1d4ed8" : "#cbd5e1"} strokeWidth={hov === i ? "2.5" : "1.5"} strokeDasharray={hov === i ? "0" : "4 4"} style={{ transition: "stroke 0.2s,stroke-width 0.2s" }} />; })}
        {spokes.map((s, i) => { const rad = (s.angle - 90) * Math.PI / 180; const x = Math.cos(rad) * RL, y = Math.sin(rad) * RL; const lx = Math.cos(rad) * (RL + 28), ly = Math.sin(rad) * (RL + 28); return <g key={i} style={{ cursor: "pointer" }} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}> <circle cx={x} cy={y} r={hov === i ? 8 : 6} fill={hov === i ? "#1d4ed8" : "#3b82f6"} opacity="0.92" style={{ transition: "r 0.2s,fill 0.2s" }} /> <circle cx={x} cy={y} r={hov === i ? 3.5 : 2.8} fill="white" style={{ transition: "r 0.2s" }} /> <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize={hov === i ? 9.5 : 8.5} fontWeight={hov === i ? "800" : "600"} fill={hov === i ? "#0d2557" : "#334155"} fontFamily="DM Sans,sans-serif" style={{ transition: "font-size 0.2s,fill 0.2s" }}> {s.label} </text> </g>; })}
        <circle cx="0" cy="0" r="22" fill="rgba(13,37,87,0.08)" /> <circle cx="0" cy="0" r="14" fill="#0d2557" /> <circle cx="0" cy="0" r="6" fill="white" /> <circle cx="0" cy="0" r="2.5" fill="#0d2557" /> <text x="0" y="38" textAnchor="middle" fontSize="11" fontWeight="900" fill="#0d2557" style={{ letterSpacing: 1, textTransform: "uppercase" }}> TRICHY </text>
      </svg>
    </div>
  );
};

const MemoizedCoverageMap = memo(CoverageMap);

/* ══════════════════════════════════════════
    COUNTER
══════════════════════════════════════════ */
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
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
  { name: "Trichy",      main: true  },
  { name: "Thanjavur",   main: false },
  { name: "Perambalur",  main: false },
  { name: "Karur",       main: false },
  { name: "Pudukottai",  main: false },
  { name: "Ariyalur",    main: false },
  { name: "Dindigul",    main: false },
];

/* ══════════════════════════════════════════
    VISION & MISSION
══════════════════════════════════════════ */
export function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-grid">

        {/* Vision */}
        <div className="vm-card-outer">
          <div className="vm-card-glow" style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }} />
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
                steelcraft, honest pricing and customer satisfaction. We envision
                every home, shop and factory in Trichy having access to
                world-class <strong>steel gates</strong>,{" "}
                <strong>railings</strong>, <strong>shutters</strong> and{" "}
                <strong>structural steel work</strong> — built to last
                generations.
              </p>
            </div>
            <div className="vm-tags">
              {["Quality First", "Local Trust", "Built to Last"].map((t) => (
                <span key={t} className="vm-tag blue">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="vm-card-outer">
          <div className="vm-card-glow" style={{ background: "linear-gradient(135deg,#64748b,#334155)" }} />
          <div className="vm-card slate">
            <div>
              <div className="vm-header">
                <div className="vm-icon slate">
                  <Wrench style={{ width: 28, height: 28, color: "#fff" }} />
                </div>
                <h2 className="vm-title slate">Our Mission</h2>
              </div>
              <p className="vm-content">
                To deliver premium <strong>fabrication work</strong> with complete
                transparency — from written quotations to on-time installation.
                Every <strong>steel gate</strong>, <strong>aluminium window</strong>,{" "}
                <strong>glass partition</strong> and{" "}
                <strong>rolling shutter</strong> we build is crafted with
                grade-A materials, skilled craftsmanship and a warranty you can
                trust.
              </p>
            </div>
            <div className="vm-tags">
              {["Transparency", "Craftsmanship", "Warranty Backed"].map((t) => (
                <span key={t} className="vm-tag slate">{t}</span>
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
    description: "Every steel gate, railing or shutter project gets a transparent written quotation with material breakdown, labour costs and timeline — zero hidden charges.",
    iconBg: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    stepColor: "#2563eb",
    stepLabel: "color:#2563eb",
    afterBg: "#2563eb",
  },
  {
    icon: Wrench,
    title: "Premium Materials Only",
    description: "We use grade-A stainless steel (SS 304/202), mild steel, aluminium and toughened glass — no cheap substitutes, ever. Every material is verified before installation.",
    iconBg: "linear-gradient(135deg,#475569,#1e293b)",
    stepColor: "#475569",
    afterBg: "#475569",
  },
  {
    icon: Users,
    title: "Own Skilled Crew",
    description: "Our in-house team of expert welders and fabricators handle every project — no subcontracting. 15+ years of experience in metal fabrication across Trichy.",
    iconBg: "linear-gradient(135deg,#f59e0b,#d97706)",
    stepColor: "#d97706",
    afterBg: "#f59e0b",
  },
  {
    icon: Clock,
    title: "On-Time Installation",
    description: "We deliver and install every rolling shutter, aluminium door or glass partition on schedule. Mobile crew reaches your site in Trichy within 48 hours of request.",
    iconBg: "linear-gradient(135deg,#16a34a,#059669)",
    stepColor: "#16a34a",
    afterBg: "#16a34a",
  },
  {
    icon: ThumbsUp,
    title: "Quality Inspection",
    description: "Multi-point quality checks at workshop and site — welding integrity, alignment, finish and hardware fitment. Every steel gate and grill is inspected before handover.",
    iconBg: "linear-gradient(135deg,#6366f1,#7c3aed)",
    stepColor: "#6366f1",
    afterBg: "#6366f1",
  },
  {
    icon: Headphones,
    title: "Post-Install Support",
    description: "Warranty coverage on all fabrication work with free maintenance guidance. Any issues with your shutter, railing or gate? Our team is just a call away.",
    iconBg: "linear-gradient(135deg,#f43f5e,#e11d48)",
    stepColor: "#f43f5e",
    afterBg: "#f43f5e",
  },
];

export function HowWeDeliver() {
  return (
    <section className="hwd-section">
      <div className="ctr">
        {/* Header */}
        <div className="hwd-header">
          <div className="hwd-badge">Our Process</div>
          <h2 className="hwd-title">How We Deliver Every Project</h2>
          <p className="hwd-subtitle">
            From your first call to final installation — a proven 6-step
            framework that ensures quality{" "}
            <strong>metal fabrication</strong> and complete customer satisfaction
            on every <strong>steel gate</strong>, <strong>railing</strong>,{" "}
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
                  <div className="hwd-step-dot" style={{ background: pt.stepColor }} />
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
    <main className="ap pt-20" style={{ transform: "translateZ(0)", overflowX: "hidden" }}>
      <SEO
        title={`About ${COMPANY_NAME} | Trusted Fabrication Company in Trichy, Tamil Nadu`}
        description={`${COMPANY_NAME} is a leading fabrication shop in Trichy with 15+ years in metal fabrication. We build steel gates, railings, rolling shutters, aluminium windows, glass doors & more.`}
        keywords="fabrication company in Trichy, fabrication shop in Trichy, metal fabrication, steel fabrication, welding work, steel gate, metal gate, grill work, balcony railing, staircase railing, window grill, rolling shutter, shop shutter, aluminium door, aluminium window, glass door, glass partition, steel gate near me, grill work near me, steel gate fabrication in Trichy"
      />

      <FontLoader />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[var(--navy)] overflow-hidden">
        <h1 className="sr-only">
          About {COMPANY_NAME} — Trusted Metal Fabrication Company in Trichy, Tamil Nadu
        </h1>

        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={aboutHero}
            alt={`${COMPANY_NAME} fabrication workshop — steel gate, railing and welding work in Trichy`}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ willChange: "transform" }}
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/60 to-transparent z-[1]" />
        </div>
        <div className="about-mesh" />
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
                className="font-heading text-3xl sm:text-5xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-6"
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
                {COMPANY_NAME} is a trusted{" "}
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

      {/* ── STATS GRID ── */}
      <section className="relative z-20 -mt-20 lg:-mt-24 mb-0" style={{ overflow: "visible" }}>
        <div className="ctr">
          <div className="stat-grid-row">
            {[{ val: "800+", lbl: "Projects Completed", delay: 0.05 }, { val: "15+", lbl: "Years Experience", delay: 0.1 }, { val: "100%", lbl: "Client Satisfaction", delay: 0.15 }, { val: "Pan TN", lbl: "Areas Served", delay: 0.2 }].map((stat, i) => (
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
      <section className="sec" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#f0f6ff 100%)" }}>
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}> <R> <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>Material Mastery</span> <h2 className="dlg" style={{ color: "#0d2557" }}>Specialized Grades</h2> </R> </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "0.9rem" }}>
            {["Stainless Steel (SS 304 / 202)", "Mild Steel (MS) Fabrication", "Aluminium Architectural Sections", "Toughened Safety Glass", "ACP Sheets & HPL Cladding", "GI Structural Tubes", "Polycarbonate Roofing", "Custom Glass Partitions"].map((m, i) => (<R key={m} delay={i * 0.05}> <div className="mat-card"> <CheckCircle2 style={{ width: 18, height: 18, color: "#1d4ed8", flexShrink: 0 }} /> <span>{m}</span> </div> </R>))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="sec" style={{ background: "var(--sl05)", contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}>
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
            <div className="flex-1 min-w-[280px]">
              <R dir="left">
                <MemoizedCoverageMap />
              </R>
            </div>
            <div style={{ flex: "1 1 260px", minWidth: 0 }}>
              <R dir="right">
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
              <span className="ltag" style={{ justifyContent: "center", marginBottom: 14, color: "#93c5fd" }}>
                The {BRAND_NAME} Advantage
              </span>
              <h2 className="dlg" style={{ color: "#ffffff", marginBottom: 14 }}>Why Choose Us</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(255,255,255,0.6)", maxWidth: 540, margin: "0 auto" }}>
                Searching for a <strong style={{ color: "rgba(255,255,255,0.85)" }}>steel gate near me</strong>,{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>grill work near me</strong> or the best{" "}
                <strong style={{ color: "rgba(255,255,255,0.85)" }}>fabrication company in Trichy</strong>?
                Here's why 800+ clients chose {COMPANY_NAME}.
              </p>
            </R>
          </div>

          <div className="why-grid">
            {[
              { icon: <CheckCircle2 />, title: "15+ Years of Local Trust", color: "text-blue-400", body: "A locally rooted metal fabrication team in Trichy — reliable, experienced and community-trusted since 2009." },
              { icon: <ClipboardList />, title: "Transparent Written Quotes", color: "text-amber-400", body: "Every shop shutter and steel fabrication job gets a detailed written quote — zero hidden costs, ever." },
              { icon: <Wrench />, title: "Premium Grade Materials", color: "text-emerald-400", body: "Grade-A steel, aluminium and glass on every job — from aluminium door installs to full glass partition fit-outs." },
              { icon: <Truck />, title: "On-Time Delivery", color: "text-indigo-400", body: "Every project delivered and installed on schedule with full post-job support across Trichy and Tamil Nadu." }
            ].map((card, i) => (
              <R key={i} delay={i * 0.06}>
                <div className="why-card">
                  <div className="why-card-icon">
                    {React.cloneElement(card.icon as React.ReactElement, { className: `w-8 h-8 ${card.color}` })}
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
      <section className="navy-bg" style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div className="ctr">
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
              <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-12 text-base font-bold min-w-[220px]">
                <Phone className="w-5 h-5" /> Call {CONTACT_DETAILS.primaryPhone.display}
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