import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { BRAND_NAME, CONTACT_DETAILS, formatTelLink } from "../config/contact";
import { TurtleButton } from "./TurtleButton";

/* ─── assets ────────────────────────────────────────────────────────── */
import consultationImg from "../assets/our process/consultation.webp";
import siteVisitImg from "../assets/our process/site visit.webp";
import designImg from "../assets/our process/design.webp";
import fabricationImg from "../assets/our process/fabrication.webp";
import installationImg from "../assets/our process/installation.webp";
import completionImg from "../assets/our process/completetion.webp";

interface Step {
    num: string;
    label: string;
    title: string;
    desc: string;
    image: string;
    tagline?: string;
    bullets?: string[];
}

const STEPS: Step[] = [
    {
        num: "01",
        label: "Consultation",
        title: "Step 01 — Initial Brief",
        desc: "Detailed discussion of requirements, design preferences, and budget with expert guidance.",
        image: consultationImg,
    },
    {
        num: "02",
        label: "Site Visit",
        title: "Step 02 — On-Site Survey",
        desc: "Accurate measurements, structural assessment, and feasibility evaluation by our technical team.",
        image: siteVisitImg,
    },
    {
        num: "03",
        label: "Design Planning",
        title: "Step 03 — Drawings & Sign-off",
        desc: "3D visualizations, material specs, and full cost breakdowns prepared for your approval.",
        image: designImg,
    },
    {
        num: "04",
        label: "Fabrication",
        title: "Step 04 — Workshop Build",
        desc: `Expert welding and quality-grade materials at the ${BRAND_NAME} workshop in Trichy.`,
        image: fabricationImg,
    },
    {
        num: "05",
        label: "Installation",
        title: "Step 05 — Expert Fitting",
        desc: "Professional on-site fitting with accurate alignment, secure fixing, and clean finishing.",
        image: installationImg,
    },
    {
        num: "06",
        label: "Completion",
        title: "Step 06 — Handover & Care",
        desc: "After a rigorous quality inspection and final finishing, we hand over your project on schedule — with post-installation support always included.",
        image: completionImg,
        tagline: "On time. Every time.",
        bullets: [
            "Full quality inspection",
            "Final surface finishing",
            "On-time project handover",
            "Post-install support",
        ],
    },
];

const ProcessSection: React.FC = () => {
    const [active, setActive] = useState<number>(0);
    const [displayed, setDisplayed] = useState<number>(0);
    const [fading, setFading] = useState<boolean>(false);
    /* ✅ Pause auto-play when mouse is over section */
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement>(null);

    /* Auto-advance — stops while hovered */
    useEffect(() => {
        if (isPaused) return;
        const t = setInterval(() => setActive((p) => (p + 1) % STEPS.length), 2500);
        return () => clearInterval(t);
    }, [isPaused]);

    /* Crossfade image */
    useEffect(() => {
        if (active === displayed) return;
        setFading(true);
        const t = setTimeout(() => {
            setDisplayed(active);
            setFading(false);
        }, 150);
        return () => clearTimeout(t);
    }, [active, displayed]);

    const progressPct = Math.round(((active + 1) / STEPS.length) * 100);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-slate-950 min-h-screen py-16 sm:py-24 flex flex-col justify-center px-4 sm:px-8 lg:px-16 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto">

                {/* Section title */}
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

                {/* Progress bar */}
                <div className="flex items-center gap-1.5 sm:gap-3 mb-4 max-w-lg mx-auto">
                    <div className="flex-1 h-2 rounded-full bg-white/15 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-white transition-all duration-700 ease-in-out"
                            style={{ width: `${progressPct}%` }}
                        />
                    </div>
                    <span className="text-white/90 text-[10px] sm:text-xs font-semibold font-heading uppercase tracking-wider whitespace-nowrap">
                        {active + 1} / {STEPS.length}
                    </span>
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-center">

                    {/* LEFT — timeline */}
                    <div className="relative flex flex-col">
                        <div className="absolute left-[17px] top-5 bottom-5 w-[2px] bg-white/20 rounded-full" />
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
                                        onClick={() => setActive(i)}
                                        onMouseEnter={() => setActive(i)}
                                        aria-label={`Switch to ${step.title}`}
                                        className="flex items-start gap-3 sm:gap-5 text-left group py-3 focus:outline-none"
                                    >
                                        <div className="relative shrink-0 z-10 mt-1">
                                            {isActive && (
                                                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                                            )}
                                            <div className={[
                                                "w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-black font-heading transition-all duration-300",
                                                isActive
                                                    ? "bg-white border-white text-[#084158] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                                    : isPast
                                                        ? "bg-[#084158] border-white/60 text-white"
                                                        : "bg-[#020617] border-white/20 text-white/50",
                                            ].join(" ")}>
                                                {isPast && !isActive ? "✓" : step.num}
                                            </div>
                                        </div>

                                        <div className={[
                                            "flex-1 rounded-xl px-4 py-2 transition-all duration-300",
                                            isActive
                                                ? "bg-white shadow-lg shadow-black/20"
                                                : "bg-white/10 group-hover:bg-white/15",
                                        ].join(" ")}>
                                            <span className={[
                                                "font-heading text-[0.95rem] font-bold uppercase tracking-wide block leading-tight",
                                                isActive ? "text-[#084158]" : "text-white",
                                            ].join(" ")}>
                                                {step.title}
                                            </span>

                                            <div className={[
                                                "overflow-hidden transition-all duration-500",
                                                isActive ? "max-h-[500px] mt-1 opacity-100 pb-2" : "max-h-0 opacity-0",
                                            ].join(" ")}>
                                                <p className="text-[0.8rem] text-[#084158] font-medium leading-relaxed mb-2">
                                                    {step.desc}
                                                </p>

                                                {isActive && step.bullets && (
                                                    <div className="flex flex-col gap-1.5 mb-4">
                                                        {step.bullets.map((bullet, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#084158]" />
                                                                <span className="text-[0.75rem] font-bold text-[#084158]/80">{bullet}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {isActive && step.num === "06" && (
                                                    <TurtleButton
                                                        href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
                                                        className="w-full sm:w-auto h-9 text-[10px] font-black uppercase tracking-widest rounded-lg bg-[#084158] text-white hover:bg-[#0d2557]"
                                                    >
                                                        <Phone className="w-3 h-3" /> Get a Specific Quote
                                                    </TurtleButton>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT — circle */}
                    <div className="flex items-center justify-center relative">

                        {/* Glow behind circle */}
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500/20 blur-3xl" />

                        {/* ✅ Circle with overflow-hidden so badge stays INSIDE */}
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl shadow-blue-500/50 overflow-hidden">

                            {/* Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/15 z-10 pointer-events-none" />

                            {/* Decorative rings */}
                            <div className="absolute inset-5 rounded-full border border-white/10 z-10 pointer-events-none" />
                            <div className="absolute inset-10 rounded-full border border-white/5 z-10 pointer-events-none" />

                            {/* Step image */}
                            <img
                                key={displayed}
                                src={STEPS[displayed].image}
                                alt={STEPS[displayed].title}
                                className="absolute inset-0 w-full h-full object-cover select-none"
                                style={{
                                    opacity: fading ? 0 : 1,
                                    transition: "opacity 150ms ease-in-out",
                                }}
                                draggable={false}
                            />

                            {/* ✅ Badge — inside circle, pinned to bottom */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center pb-5 px-4">
                                <div
                                    className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl bg-slate-950/80 border border-white/20 backdrop-blur-xl shadow-xl w-full"
                                    style={{
                                        opacity: fading ? 0 : 1,
                                        transform: fading ? "translateY(6px)" : "translateY(0)",
                                        transition: "opacity 150ms ease-in-out, transform 150ms ease-in-out",
                                    }}
                                >
                                    <span className="text-blue-400 text-[9px] font-black uppercase tracking-[0.15em] text-center leading-tight">
                                        {STEPS[displayed].num === "06"
                                            ? STEPS[displayed].tagline
                                            : `Step ${STEPS[displayed].num}`}
                                    </span>
                                    <span className="text-white text-[0.72rem] font-black uppercase tracking-[0.08em] leading-tight text-center">
                                        {STEPS[displayed].label}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Orbiting dashed ring — sits outside the circle div */}
                        <div
                            className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-dashed border-white/15 pointer-events-none"
                            style={{ animation: "spin 25s linear infinite" }}
                        />

                        {/* Step count chip */}
                        <div className="absolute top-4 right-4 lg:top-8 lg:right-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm z-30">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-white text-xs font-semibold uppercase tracking-wider">
                                {active + 1} of {STEPS.length}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Dot navigator */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4">
                    {STEPS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            title={`Step ${i + 1}`}
                            aria-label={`Go to step ${i + 1}`}
                            className="p-2 sm:p-3 transition-all duration-300 focus:outline-none group"
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
