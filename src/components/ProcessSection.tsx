import React, { useState, useEffect } from "react";
import { BRAND_NAME } from "../config/contact";

/* ─── assets ────────────────────────────────────────────────────────── */
import consultationImg from "../assets/our process/consultation.webp";
import siteVisitImg from "../assets/our process/site visit.webp";
import designImg from "../assets/our process/design.webp";
import fabricationImg from "../assets/our process/fabrication.webp";
import installationImg from "../assets/our process/installation.webp";
import completionImg from "../assets/our process/completetion.webp";

/* ─── Types ─────────────────────────────────────────────────────────── */
interface Step {
    num: string;
    title: string;
    desc: string;
    image: string;
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const STEPS: Step[] = [
    {
        num: "01",
        title: "Consultation",
        desc: "Detailed discussion of requirements, design preferences, and budget with expert guidance.",
        image: consultationImg,
    },
    {
        num: "02",
        title: "Site Visit",
        desc: "Accurate measurements, structural assessment, and feasibility evaluation by our technical team.",
        image: siteVisitImg,
    },
    {
        num: "03",
        title: "Design Planning",
        desc: "3D visualizations, material specs, and full cost breakdowns prepared for your approval.",
        image: designImg,
    },
    {
        num: "04",
        title: "Fabrication",
        desc: `CNC cutting, expert welding, and quality-grade materials at the ${BRAND_NAME} workshop in Trichy.`,
        image: fabricationImg,
    },
    {
        num: "05",
        title: "Installation",
        desc: "Professional on-site fitting with accurate alignment, secure fixing, and clean finishing.",
        image: installationImg,
    },
    {
        num: "06",
        title: "Completion",
        desc: "Final inspection, surface finishing, cleanup, project handover, and after-service support.",
        image: completionImg,
    },
];

/* ─── Component ─────────────────────────────────────────────────────── */
const ProcessSection: React.FC = () => {
    const [active, setActive] = useState<number>(0);
    /* track which image is currently faded in */
    const [displayed, setDisplayed] = useState<number>(0);
    const [fading, setFading] = useState<boolean>(false);

    /* Auto-advance every 3.5 s */
    useEffect(() => {
        const t = setInterval(() => setActive((p) => (p + 1) % STEPS.length), 3500);
        return () => clearInterval(t);
    }, []);

    /* Crossfade when active changes */
    useEffect(() => {
        if (active === displayed) return;
        setFading(true);
        const t = setTimeout(() => {
            setDisplayed(active);
            setFading(false);
        }, 220); // half of the CSS transition
        return () => clearTimeout(t);
    }, [active, displayed]);

    const progressPct = Math.round(((active + 1) / STEPS.length) * 100);

    const handleStepClick = (i: number) => {
        setActive(i);
    };

    return (
        <section className="w-full bg-slate-950 h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* ── Section title ─────────────────────────────────── */}
                <div className="text-center mb-2">
                    <p className="text-white/90 text-sm font-semibold uppercase tracking-[0.3em] mb-1">
                        Step by Step
                    </p>
                    <h2 className="text-white font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
                        Our Process
                    </h2>
                    <p className="text-white/75 text-xs mt-1 max-w-md mx-auto leading-relaxed">
                        A proven end-to-end workflow that delivers quality from the first call to final handover.
                    </p>
                </div>

                {/* ── Horizontal progress pill bar ──────────────────── */}
                <div className="flex items-center gap-3 mb-4 max-w-lg mx-auto">
                    <div className="flex-1 h-2 rounded-full bg-white/15 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-white transition-all duration-700 ease-in-out"
                            style={{ width: `${progressPct}%` }}
                        />
                    </div>
                    <span className="text-white/90 text-xs font-semibold font-heading uppercase tracking-wider whitespace-nowrap">
                        {active + 1} / {STEPS.length}
                    </span>
                </div>

                {/* ── Main two-column layout ─────────────────────────── */}
                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT — vertical timeline ─────────────────────── */}
                    <div className="relative flex flex-col">
                        {/* Track line */}
                        <div className="absolute left-[17px] top-5 bottom-5 w-[2px] bg-white/20 rounded-full" />
                        {/* Filled progress line */}
                        <div
                            className="absolute left-[17px] top-5 w-[2px] bg-white rounded-full transition-all duration-700 ease-in-out"
                            style={{ height: `calc(${progressPct}% - 40px)` }}
                        />

                        <div className="flex flex-col gap-0">
                            {STEPS.map((step, i) => {
                                const isActive = active === i;
                                const isPast = i < active;

                                return (
                                    <button
                                        key={step.num}
                                        onClick={() => handleStepClick(i)}
                                        onMouseEnter={() => handleStepClick(i)}
                                        aria-label={`Switch to ${step.title}`}
                                        className="flex items-center gap-5 text-left group py-1.5 focus:outline-none"
                                    >
                                        {/* ── Node circle ── */}
                                        <div className="relative shrink-0 z-10">
                                            {isActive && (
                                                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                                            )}
                                            <div
                                                className={[
                                                    "w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-black font-heading transition-all duration-300",
                                                    isActive
                                                        ? "bg-white border-white text-[#084158]"
                                                        : isPast
                                                            ? "bg-white/40 border-white/60 text-white"
                                                            : "bg-transparent border-white/50 text-white/90",
                                                ].join(" ")}
                                            >
                                                {isPast && !isActive ? "✓" : step.num}
                                            </div>
                                        </div>

                                        {/* ── Step pill / bar ── */}
                                        <div
                                            className={[
                                                "flex-1 rounded-xl px-4 py-2 transition-all duration-300",
                                                isActive
                                                    ? "bg-white shadow-lg shadow-black/20"
                                                    : "bg-white/10 group-hover:bg-white/15",
                                            ].join(" ")}
                                        >
                                            <span
                                                className={[
                                                    "font-heading text-[0.95rem] font-bold uppercase tracking-wide block leading-tight",
                                                    isActive ? "text-[#084158]" : "text-white",
                                                ].join(" ")}
                                            >
                                                {step.title}
                                            </span>

                                            {/* Expandable description */}
                                            <div
                                                className={[
                                                    "overflow-hidden transition-all duration-500",
                                                    isActive ? "max-h-20 mt-1 opacity-100" : "max-h-0 opacity-0",
                                                ].join(" ")}
                                            >
                                                <p className="text-sm text-[#084158] font-medium leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT — red circle with dynamic step image ──────── */}
                    <div className="flex items-center justify-center relative">

                        {/* Glow behind circle */}
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/20 blur-3xl" />

                        {/* Main blue circle */}
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl shadow-blue-500/50 flex flex-col items-center justify-center overflow-hidden">

                            {/* Gloss overlay */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/15 z-10 pointer-events-none" />

                            {/* Inner decorative rings */}
                            <div className="absolute inset-5  rounded-full border border-white/10 z-10 pointer-events-none" />
                            <div className="absolute inset-10 rounded-full border border-white/5  z-10 pointer-events-none" />

                            {/* ── Step image (crossfade) ── */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    key={displayed}          /* remount triggers CSS fade */
                                    src={STEPS[displayed].image}
                                    alt={STEPS[displayed].title}
                                    className="w-full h-full object-cover select-none"
                                    style={{
                                        opacity: fading ? 0 : 1,
                                        transition: "opacity 220ms ease-in-out",
                                    }}
                                    draggable={false}
                                />
                            </div>

                            {/* Step number badge — sits on top, synced with image crossfade */}
                            <div className="relative z-20 flex flex-col items-center justify-end h-full pb-8">
                                <div 
                                    className="inline-flex flex-col items-center gap-1 px-5 py-2.5 rounded-2xl bg-slate-950/80 border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300"
                                    style={{
                                        opacity: fading ? 0 : 1,
                                        transform: fading ? "translateY(8px)" : "translateY(0)",
                                        transition: "opacity 220ms ease-in-out, transform 220ms ease-in-out",
                                    }}
                                >
                                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                        Step {STEPS[displayed].num}
                                    </span>
                                    <span className="text-white text-[0.8rem] font-black uppercase tracking-[0.1em] leading-none">
                                        {STEPS[displayed].title}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Orbiting dashed ring */}
                        <div
                            className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-dashed border-white/15 pointer-events-none"
                            style={{ animation: "spin 25s linear infinite" }}
                        />

                        {/* Step-count chip */}
                        <div className="absolute top-4 right-4 lg:top-8 lg:right-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-white text-xs font-semibold uppercase tracking-wider">
                                {active + 1} of {STEPS.length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Bottom dot navigator ─────────────────────────── */}
                <div className="flex justify-center gap-2 mt-4">
                    {STEPS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleStepClick(i)}
                            title={`Step ${i + 1}`}
                            aria-label={`Go to step ${i + 1}`}
                            className="p-3 transition-all duration-300 focus:outline-none group"
                        >
                            <div
                                className="rounded-full transition-all duration-300 group-hover:scale-110"
                                style={{
                                    width: active === i ? 28 : 8,
                                    height: 8,
                                    background: active === i ? "#fff" : "rgba(255,255,255,0.25)",
                                }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
