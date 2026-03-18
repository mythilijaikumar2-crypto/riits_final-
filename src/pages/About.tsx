import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, MapPin, Phone,
  Award, Shield, Heart, Settings
} from "lucide-react";
import SEO from "../components/SEO";
import { TurtleButton } from "../components/TurtleButton";


/* ══════════════════════════════════════════
    DATA & SUB-COMPONENTS
══════════════════════════════════════════ */





/* ══════════════════════════════════════════
    PREMIUM REFINED COMPONENTS
══════════════════════════════════════════ */





/* ══════════════════════════════════════════
    SCROLL REVEAL WRAPPER
══════════════════════════════════════════ */
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

/* ══════════════════════════════════════════
    GLOBAL FONT + CSS
══════════════════════════════════════════ */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
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
    .dsm { font-family:'Barlow Condensed',sans-serif; font-size:clamp(1.2rem,2.5vw,1.65rem); font-weight:900; letter-spacing:0.04em; text-transform:uppercase; }
    .body { font-size:1rem; line-height:1.78; color:var(--sl5); }
    .ltag { font-size:0.68rem; font-weight:700; letter-spacing:0.24em; text-transform:uppercase; color:var(--blue-6); display:inline-flex; align-items:center; gap:10px; }
    .ltag::before { content:''; display:block; width:26px; height:2px; background:var(--blue-6); flex-shrink:0; }
    .navy-bg { background-color: var(--navy); }
    .sec { padding: clamp(4rem, 8vw, 7.5rem) 0; }
    .ctr { width: 90%; max-width: 1240px; margin: 0 auto; }
    .about-mesh { position: absolute; inset: 0; background: radial-gradient(circle at 10% 20%, rgba(29,78,216,0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(30,58,138,0.1) 0%, transparent 40%); pointer-events: none; filter: blur(40px); will-change: transform, opacity; }
    .stat-grid-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
    @media (min-width: 1024px) { .stat-grid-row { grid-template-columns: repeat(4, 1fr); gap: 2rem; } }
    .about-stat-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); padding: 45px 25px; border-radius: 36px; border: 1px solid rgba(37,99,235,0.1); text-align: center; position: relative; overflow: hidden; transition: all 0.6s cubic-bezier(0.23,1,0.32,1); box-shadow: 0 15px 35px -5px rgba(13,37,87,0.05); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1; }
    .about-stat-card:hover { transform: translateY(-15px) scale(1.02); border-color: rgba(37,99,235,0.4); background: white; box-shadow: 0 45px 90px -20px rgba(37,99,235,0.2); }
    .about-stat-val { font-family: 'Barlow Condensed', sans-serif; font-size: 3.5rem; font-weight: 900; line-height: 1; margin-bottom: 12px; background: linear-gradient(135deg, var(--navy) 0%, var(--blue-6) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .about-stat-lbl { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; color: var(--sl5); max-width: 140px; }
    .mat-card { display: flex; align-items: center; gap: 12px; padding: 1rem 1.4rem; background: var(--white); border-radius: 12px; border: 1.5px solid var(--sl1); font-size: 0.88rem; font-weight: 600; color: var(--navy); transition: 0.3s; }
    .mat-card:hover { border-color: var(--blue-7); box-shadow: 0 10px 25px -5px rgba(29,78,216,0.1); }
    .dist-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .dist-badge.main { background: var(--blue-05); color: var(--blue-7); border: 1px solid var(--blue-1); }
    .dist-badge.other { background: var(--sl05); color: var(--sl5); border: 1px solid var(--sl1); }
    .why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
    .why-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 2.2rem 1.8rem; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1); display: flex; flex-direction: column; height: 100%; position: relative; overflow: hidden; width: 100%; }
    .why-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25); transform: translateY(-10px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
    .why-card-icon { font-size: 2rem; margin-bottom: 1.2rem; display: block; transition: transform 0.4s ease; }
    .why-card-title { font-family: 'Barlow Condensed', sans-serif; font-size: 1.2rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; margin-bottom: 0.8rem; }
    .why-card-body { font-size: 0.9rem; color: rgba(255,255,255,0.5); line-height: 1.75; }
    .acc-trigger-btn { width: 100%; border: none; cursor: pointer; display: flex; align-items: center; gap: 16px; padding: 18px 20px; text-align: left; }
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

/* ══════════════════════════════════════════
    COUNTER
══════════════════════════════════════════ */
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);
  return (
    <motion.span onViewportEnter={() => { if (!isNumeric) return; let start = 0; const end = numericValue; const stepTime = Math.abs(Math.floor((duration * 1000) / (end - start))); const timer = setInterval(() => { start += 1; setDisplayValue(start); if (start >= end) clearInterval(timer); }, Math.max(stepTime, 16)); }}> {isNumeric ? displayValue : value} {isNumeric && value.includes("+") && "+"} {isNumeric && value.includes("%") && "%"} </motion.span>
  );
};


/* ════════════════════════════════════════════
    MAIN ABOUT PAGE
════════════════════════════════════════════ */
const About = () => {
  const navigate = useNavigate();

  return (
    <main className="ap pt-20" style={{ transform: "translateZ(0)" }}>
      <SEO title="About | RITS Metal Craft Trichy — High Quality Fabrication" description="Learn about RITS Metal Craft's 15-year legacy of quality, our visionary approach to steel fabrication, and our refined 6-step project process." />
      <FontLoader />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center bg-[var(--navy)] overflow-hidden">
        <h1 className="sr-only">About RITS Metal Craft — Trusted Metal Fabrication Company in Trichy</h1>
        <div className="absolute inset-0 z-0">
          <motion.img initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }} src="/src/assets/heropage/about page hero.webp" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/60 to-transparent z-[1]" />
        </div>
        <div className="about-mesh" />
        <div className="ctr relative z-10 lg:-translate-y-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"> <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> Established 2009 </div>
              <motion.p variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="dxl text-white mb-6"> Precision<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600"> Steelcraft. </span><br /> Proven Trust. </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-white/70 text-lg leading-relaxed max-w-2xl"> RITS Metal Craft is a trusted fabrication shop in Trichy with over 15 years of experience in metal fabrication. </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-20 -mt-20 lg:-mt-24 mb-10">
        <div className="ctr">
          <div className="stat-grid-row">
            {[{ val: "800+", lbl: "Projects Completed", delay: 0.1 }, { val: "15+", lbl: "Years Experience", delay: 0.2 }, { val: "100%", lbl: "Client Satisfaction", delay: 0.3 }, { val: "Pan TN", lbl: "Areas Served", delay: 0.4 }].map((stat, i) => (
              <R key={i} delay={stat.delay}> <div className="about-stat-card group"> <div className="about-stat-val"> <Counter value={stat.val} /> </div> <div className="about-stat-lbl">{stat.lbl}</div> </div> </R>
            ))}
          </div>
        </div>
      </section>





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
      <section className="sec coverage-bg">
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}> <R> <span className="ltag" style={{ justifyContent: "center", marginBottom: 14 }}>Service Coverage</span> <h2 className="dlg" style={{ color: "#0d2557" }}>Trichy & Surrounds</h2> </R> </div>
          <div className="cov-row" style={{ display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <R dir="left"> <div style={{ flex: "1 1 280px" }}> <CoverageMap /> </div> </R>
            <R dir="right">
              <div style={{ flex: "1 1 260px" }}>
                <p className="ltag" style={{ marginBottom: "1.2rem" }}>Districts We Serve</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", marginBottom: "2rem" }}> {["Trichy", "Thanjavur", "Karur", "Pudukottai", "Perambalur", "Ariyalur", "Dindigul"].map((d, i) => (<span key={d} className={`dist-badge ${i === 0 ? "main" : "other"}`}> <MapPin style={{ width: 9, height: 9 }} /> {d} </span>))} </div>
                <TurtleButton href="tel:+919894794557" variant="call_now" className="rounded-xl px-10 text-sm font-bold min-w-[220px]"> <MapPin style={{ width: 16, height: 16 }} /> Book a Site Visit </TurtleButton>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="navy-bg sec">
        <div className="ctr">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}> <R> <span className="ltag" style={{ color: "#93c5fd", justifyContent: "center", marginBottom: 14 }}>Our Advantage</span> <h2 className="dlg" style={{ color: "white" }}>Why 800+ Clients Chose Us</h2> </R> </div>
          <div className="why-grid">
            {[{ icon: <Award />, title: "15+ Years Trust", body: "A legacy of precision metalwork in the Trichy market since 2009." }, { icon: <Shield />, title: "Grade-A Metals", body: "We never compromise on material thickness or certification grades." }, { icon: <Heart />, title: "Client First", body: "Transparent written quotes and direct communication with our team." }, { icon: <Settings />, title: "Own Workshop", body: "Zero subcontracting. Everything is forged in our local workshop." }].map((card, i) => (
              <R key={i} delay={i * 0.06}>
                <div className="why-card">
                  <div className="text-blue-400 mb-6 w-10 h-10">{card.icon}</div>
                  <p className="why-card-title">{card.title}</p>
                  <p className="why-card-body">{card.body}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="bg-slate-50 border-t border-slate-100" style={{ padding: "clamp(3.5rem,7vw,6rem) clamp(1.5rem,5vw,5rem)", textAlign: "center" }}>
        <div className="ctr">
          <R>
            <h2 className="dlg" style={{ color: "var(--navy)", marginBottom: "1rem" }}>Ready to Forge Your Vision?</h2>
            <p className="body" style={{ color: "var(--sl5)", marginBottom: "2.2rem", maxWidth: 600, margin: "0 auto 2.5rem" }}>Get a free consultation and a detailed written quote for your steel, glass, or aluminium project today.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <TurtleButton href="tel:+919894794557" variant="call_now" className="rounded-xl px-12 font-bold min-w-[240px] h-14 shadow-lg shadow-blue-500/10"> <Phone className="w-5 h-5" /> Call +91 98947 94557 </TurtleButton>
              <button onClick={() => navigate("/projects")} style={{ color: "var(--navy)", background: "white", border: "1.5px solid #e2e8f0", padding: "0 36px", height: "56px", borderRadius: 12, fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", display: "inline-flex", alignItems: "center", gap: 10 }}> View Our Projects <ArrowRight size={18} /> </button>
            </div>
          </R>
        </div>
      </section>
    </main>
  );
};

export default About;