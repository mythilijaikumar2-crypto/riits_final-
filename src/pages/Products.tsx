import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo, useRef, type MouseEvent, type ReactNode } from "react";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";
import SEO from "../components/SEO";
import { CONTACT_DETAILS, formatTelLink, getWhatsAppUrl, COMPANY_NAME, BRAND_NAME } from "../config/contact";
import productsHero from "../assets/heropage/products-hero.webp";


/* ── Local image imports ── */

import ssGateImg from "../assets/ssgates.jpg";
import ssRailingImg from "../assets/railing-trichy.jpg";
import ssStaircaseImg from "../assets/staircase.jpeg";
import ssPergola from "../assets/pergolas.jpg";
import ssCanopyImg from "../assets/canopies.jpg";
import ssDecorativeImg from "../assets/decopanels.jpg";

import msGateImg from "../assets/MSgates.webp";
import msFrameImg from "../assets/MSframes.jpg";
import msShedImg from "../assets/MSshed.jpg";
import msRoofingImg from "../assets/MSroofs.avif";

import alDoorImg from "../assets/Alumdoors.jpg";
import alWindowImg from "../assets/Alumwindows.webp";
import alSlidingImg from "../assets/Alumslidedoors.webp";
import glassPartImg from "../assets/glasspartition.jpg";
import structGlazingImg from "../assets/elevation.avif";

import acpPanelImg from "../assets/ACP.jpg";
import hplCladdingImg from "../assets/structuralglazing.jpg";
import louversImg from "../assets/louvers.jpg";
import facadePanelImg from "../assets/Facade.jpg";

import shutterCommImg from "../assets/rollshutter.avif";
import shutterIndImg from "../assets/shutters.webp";
import shutterHeavyImg from "../assets/industrial.jpg";


/* ── Benefit detail copy ── */
const benefitDetails: Record<string, { icon: string; desc: string }> = {
  "Corrosion-resistant": { icon: "🛡️", desc: "Grade SS 304 alloy forms a passive oxide layer that withstands moisture, salt air, and harsh weather without rusting." },
  "Low maintenance": { icon: "✨", desc: "Smooth polished surfaces resist dirt buildup and require only periodic cleaning — no painting or re-coating needed." },
  "Premium finish": { icon: "💎", desc: "Brushed or mirror-polish options deliver a refined, architectural look that elevates any residential or commercial façade." },
  "Long lifespan": { icon: "⏳", desc: "Properly fabricated SS structures routinely last 25+ years with minimal upkeep, offering exceptional return on investment." },
  "High strength": { icon: "💪", desc: "Mild steel's tensile strength handles heavy structural loads, making it ideal for frames, sheds, and roofing systems." },
  "Cost-effective": { icon: "💰", desc: "MS is the most economical structural metal — delivering solid performance at a fraction of the cost of stainless options." },
  "Weldable": { icon: "🔧", desc: "Excellent weldability allows complex custom shapes and on-site modifications without compromising structural integrity." },
  "Versatile applications": { icon: "🔄", desc: "From ornate gates to industrial shed columns, MS adapts to virtually any form factor or load requirement." },
  "Weather-sealed": { icon: "🌧️", desc: "EPDM gaskets and precision-fitted aluminium profiles block water, dust, and drafts for a fully weatherproof envelope." },
  "Energy efficient": { icon: "⚡", desc: "Thermal-break profiles and double-glazed units reduce heat transfer, cutting AC loads and lowering energy bills." },
  "Modern aesthetics": { icon: "🏙️", desc: "Slim sightlines and large glass areas flood interiors with natural light while maintaining a sleek contemporary look." },
  "Sound insulation": { icon: "🔇", desc: "Multi-chamber profiles combined with laminated or DGU glass significantly reduce external noise transmission." },
  "Weather protection": { icon: "🌦️", desc: "Composite and HPL panels act as a rainscreen barrier, channelling water away and protecting the structural wall beneath." },
  "Thermal insulation": { icon: "🌡️", desc: "Air gaps within the cladding system create a thermal buffer that keeps interiors cooler in summer and warmer in winter." },
  "Architectural appeal": { icon: "🏛️", desc: "Wide palette of colours, textures, and panel profiles lets architects achieve bold or subtle design statements on any building." },
  "Motorized options": { icon: "⚙️", desc: "Integrated motor-and-remote systems allow one-touch open/close operation, compatible with phone apps and access control." },
  "High security": { icon: "🔒", desc: "Interlocking MS/GI slats and tamper-proof locking bars provide a robust physical barrier against forced entry." },
  "Weather resistant": { icon: "🌪️", desc: "Galvanised or powder-coated slats resist corrosion and UV degradation, maintaining performance through years of outdoor use." },
};

/* ── Product Categories — SEO-enriched overviews & descriptions ── */
const productCategories = [
  {
    id: "ss",
    title: "SS Works",
    subtitle: "STAINLESS STEEL FABRICATION",
    /* H2 maps to: Steel Gates & Metal Gates / Grills & Railings */
    seoHeading: "Steel Gates, Grills & Railings in Trichy",
    overview: `Looking for a custom steel gate or stainless steel gate in Trichy? ${COMPANY_NAME} offers premium SS 304 and SS 202 gate fabrication, grill work, balcony railings and staircase railings for residential and commercial properties. All products feature brushed or mirror-polished finishes with precision welding.`,
    products: [
      {
        name: "SS Gates",
        desc: "Custom stainless steel gates — modern geometric and classic designs, motorized or manual. Ideal for residential entrances, villa gates and compound gates.",
        materials: "SS 304 / SS 202",
        applications: "Residential entrances, villa gates, compound gates",
        image: ssGateImg,
      },
      {
        name: "SS Railings",
        desc: "Balcony railings and staircase railings with glass or rod infill options — strong, rust-free and stylish for any property.",
        materials: "SS 304 tubes & pipes",
        applications: "Balconies, terraces, staircases",
        image: ssRailingImg,
      },
      {
        name: "SS Staircases",
        desc: "Straight, spiral and L-shaped steel staircases with anti-skid treads — precision-built for residential and commercial interiors.",
        materials: "SS 304, toughened glass",
        applications: "Residential, commercial interiors",
        image: ssStaircaseImg,
      },
      {
        name: "SS Pergolas",
        desc: "Outdoor and entrance pergolas with powder-coated or polished finish — a premium addition to any terrace or garden.",
        materials: "SS 304 / MS with SS cladding",
        applications: "Entrances, terraces, gardens",
        image: ssPergola,
      },
      {
        name: "SS Canopies",
        desc: "Rain shelter and entrance canopies with glass or polycarbonate roofing — built for durability and elegant kerb appeal.",
        materials: "SS 304, polycarbonate / glass",
        applications: "Building entrances, driveways",
        image: ssCanopyImg,
      },
      {
        name: "SS Decorative Panels",
        desc: "Laser-cut decorative panels for exterior and interior applications — facades, partitions and feature walls.",
        materials: "SS 304 sheet",
        applications: "Facades, partitions, feature walls",
        image: ssDecorativeImg,
      },
    ],
    benefits: ["Corrosion-resistant", "Low maintenance", "Premium finish", "Long lifespan"],
  },
  {
    id: "ms",
    title: "MS Works",
    subtitle: "MILD STEEL FABRICATION",
    /* H2 maps to: Staircases & Structural Fabrication */
    seoHeading: "MS Gates, Staircases & Structural Steel Fabrication in Trichy",
    overview: "Need a heavy-duty metal gate or structural steel fabrication in Trichy? Our mild steel fabrication covers MS gates, metal staircases, structural frames, sheds and roofing systems. All MS products are treated with anti-rust primer and powder coating for long-lasting durability.",
    products: [
      {
        name: "MS Gates",
        desc: "Heavy-duty metal gates with automated or manual systems — built for residential, commercial and industrial use.",
        materials: "MS tubes, sheets, castings",
        applications: "Residential, commercial, industrial",
        image: msGateImg,
      },
      {
        name: "MS Structural Frames",
        desc: "Load-bearing steel frames and columns for construction support — precision-welded for maximum strength.",
        materials: "MS I-beams, channels, angles",
        applications: "Building construction, mezzanines",
        image: msFrameImg,
      },
      {
        name: "MS Sheds",
        desc: "Industrial and commercial shed structures with roofing — cost-effective steel fabrication for warehouses and factories.",
        materials: "MS tubular frames, GI sheets",
        applications: "Warehouses, factories, parking",
        image: msShedImg,
      },
      {
        name: "MS Roofing",
        desc: "Roofing truss systems and metal roof sheet installations — strong, weather-resistant and built to last.",
        materials: "MS trusses, GI/Color sheets",
        applications: "Industrial, residential roofing",
        image: msRoofingImg,
      },
    ],
    benefits: ["High strength", "Cost-effective", "Weldable", "Versatile applications"],
  },
  {
    id: "glass",
    title: "Glass & Alum",
    subtitle: "GLASS & ALUMINIUM SYSTEM",
    /* H2 maps to: Aluminium Doors & Windows / Glass Doors & Partitions */
    seoHeading: "Aluminium Doors, Windows, Glass Doors & Partitions in Trichy",
    overview: "Searching for an aluminium window in Trichy or a toughened glass door for your office? We fabricate and fit aluminium doors, aluminium sliding windows, glass doors, glass partitions and office glass partitions — all using anodized or powder-coated aluminium profiles with toughened safety glass.",
    products: [
      {
        name: "Aluminium Doors",
        desc: "Swing, sliding and folding aluminium door systems with thermal break profiles — modern, weather-sealed and low maintenance.",
        materials: "Aluminium sections, toughened glass",
        applications: "Residential, commercial entrances",
        image: alDoorImg,
      },
      {
        name: "Aluminium Windows",
        desc: "Sliding, casement and fixed aluminium window systems with mosquito mesh options — ideal for all building types in Trichy.",
        materials: "Aluminium profiles, clear/tinted glass",
        applications: "All building types",
        image: alWindowImg,
      },
      {
        name: "Aluminium Sliding Windows",
        desc: "Multi-track aluminium sliding window systems for balconies and large openings — smooth operation and energy efficient.",
        materials: "Heavy-duty aluminium tracks",
        applications: "Balcony enclosures, partitions",
        image: alSlidingImg,
      },
      {
        name: "Glass Partitions",
        desc: "Frameless and framed glass partition systems and office glass partitions — clean, professional and built to last.",
        materials: "Toughened glass 10mm/12mm",
        applications: "Offices, showrooms, commercial",
        image: glassPartImg,
      },
      {
        name: "Structural Glazing",
        desc: "Full glass facade systems with spider fittings and silicone joints — toughened glass doors and curtain wall solutions.",
        materials: "Toughened/DGU glass, SS spiders",
        applications: "Commercial facades, showrooms",
        image: structGlazingImg,
      },
    ],
    benefits: ["Weather-sealed", "Energy efficient", "Modern aesthetics", "Sound insulation"],
  },
  {
    id: "elevation",
    title: "Cladding",
    subtitle: "EXTERIOR ELEVATION & CLADDING",
    seoHeading: "ACP Cladding, Facade Panels & Building Elevation in Trichy",
    overview: "Transform your building's exterior with modern cladding and facade systems. Our elevation solutions — ACP panels, HPL cladding, louvers and decorative facade panels — combine architectural aesthetics with long-term weather protection across Trichy and Tamil Nadu.",
    products: [
      {
        name: "ACP Panels",
        desc: "Aluminium Composite Panel cladding in various colors and finishes — the most popular building elevation product in Trichy.",
        materials: "ACP sheets, aluminium framework",
        applications: "Commercial buildings, showrooms",
        image: acpPanelImg,
      },
      {
        name: "HPL Cladding",
        desc: "High Pressure Laminate cladding for premium exterior finishes — durable, stylish and weather-resistant.",
        materials: "HPL sheets, SS/aluminium framing",
        applications: "Residential villas, offices",
        image: hplCladdingImg,
      },
      {
        name: "Louvers",
        desc: "Aluminium and MS louvers for ventilation and aesthetics — ideal for facades and parking structures.",
        materials: "Aluminium / MS blades",
        applications: "Facades, parking structures",
        image: louversImg,
      },
      {
        name: "Decorative Facade Panels",
        desc: "Custom laser-cut metal panels for facades — feature walls and building exterior cladding.",
        materials: "MS / SS / Aluminium sheets",
        applications: "Feature walls, building facades",
        image: facadePanelImg,
      },
    ],
    benefits: ["Weather protection", "Thermal insulation", "Low maintenance", "Architectural appeal"],
  },
  {
    id: "shutters",
    title: "Shutters",
    subtitle: "ROLLING SHUTTER",
    /* H2 maps to: Rolling Shutters */
    seoHeading: "Rolling Shutters & Shop Shutters in Trichy",
    overview: `Need a rolling shutter in Trichy for your shop, showroom or warehouse? ${COMPANY_NAME} supplies and installs heavy-duty rolling shutters and shop shutters — motorized and manual — built for commercial, industrial and residential security with long operational life.`,
    products: [
      {
        name: "Commercial Shutters",
        desc: "Standard rolling shutters and shop shutters for retail shops, showrooms and commercial spaces — durable and secure.",
        materials: "GI / MS slats, spring/motor",
        applications: "Shops, showrooms, offices",
        image: shutterCommImg,
      },
      {
        name: "Industrial Shutters",
        desc: "Heavy-gauge rolling shutters for warehouses and factory entrances — motor-operated for high-frequency daily use.",
        materials: "MS heavy-gauge slats, motor-operated",
        applications: "Warehouses, factories",
        image: shutterIndImg,
      },
      {
        name: "Heavy-Duty Systems",
        desc: "Extra-wide and extra-tall shutter systems for large industrial openings — reinforced construction for maximum security.",
        materials: "Reinforced MS/GI construction",
        applications: "Industrial, logistics, hangars",
        image: shutterHeavyImg,
      },
    ],
    benefits: ["Motorized options", "High security", "Low maintenance", "Weather resistant"],
  },
];

type Product = (typeof productCategories)[0]["products"][0];
type Category = (typeof productCategories)[0];

interface AnimatedButtonProps {
  children: ReactNode;
  isActive?: boolean;
  isPaused?: boolean;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function AnimatedButton({
  children,
  isActive = false,
  isPaused = false,
  onClick,
  onHoverStart,
  onHoverEnd
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !isHovered) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    onHoverEnd?.();
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative group px-3 sm:px-4 py-3 md:py-2.5 rounded-xl transition-all duration-500 outline-none whitespace-nowrap overflow-hidden ${isActive ? "shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)]" : "hover:shadow-2xl"
        }`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      whileTap={{
        scale: 0.95,
        rotateX: 0,
        rotateY: 0,
      }}
      tabIndex={0}
    >
      {/* Background Layer */}
      <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-white" : "bg-white/5 border border-white/10"}`} />

      {/* Shimmer effect layer */}
      <div
        className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
        style={{ transform: "translateZ(-10px)" }}
      >
        <motion.div
          className="absolute inset-0 -skew-x-12 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            width: "50%",
          }}
          initial={{ opacity: 0, x: "-100%" }}
          animate={isHovered ? {
            opacity: [0, 1, 0],
            x: ["0%", "200%"],
          } : {
            opacity: 0,
            x: "-100%"
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Progress Bar (Autoplay Timer Indicator) */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-200 overflow-hidden">
          <motion.div
            key={isPaused ? "paused" : "running"}
            initial={{ scaleX: 0 }}
            animate={!isPaused ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-blue-600 origin-left"
          />
        </div>
      )}

      {/* Text content */}
      <div style={{ transform: "translateZ(20px)" }}>
        <span
          className={`relative z-10 text-[0.65rem] sm:text-[0.75rem] font-black uppercase tracking-[0.14em] transition-colors duration-500 drop-shadow-md ${isActive
              ? "text-slate-950"
              : isHovered
                ? "text-white"
                : "text-white/50"
            }`}
        >
          {children}
        </span>
      </div>
    </motion.button>
  );
}

/* ── Benefit Card ── */
const BenefitCard = memo(({ label, index, isActive, onClick, onHover }: { label: string; index: number; isActive: boolean; onClick?: () => void; onHover?: (hovering: boolean) => void }) => {
  const detail = benefitDetails[label] ?? { icon: "✅", desc: "Quality guaranteed." };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="benefit-wrapper"
      onClick={() => onClick?.()}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <div className={`letter-image ${isActive ? "active" : ""}`}>
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title">{label}</div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner">{detail.icon}</div>
            </div>
            <div className="letter-context">{detail.desc}</div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="mail-shadow"></div>
      </div>
    </motion.div>
  );
});

/* ── Product Card ── */
const ProductCard = memo(({ product, index }: { product: Product; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -12, zIndex: 50 }}
      className="card"
    >
      <div className="card-img">
        <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="card-imgs" />
      </div>

      <div className="project-info">
        <div className="flex justify-between items-center">
          <div className="project-title">{product.name}</div>
          <span className="tag">Product</span>
        </div>
        <span className="lighter">
          {product.desc}
        </span>
        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-2">
          <div className="text-[12px] leading-tight text-slate-400 font-black uppercase tracking-[0.1em]">Technical Details</div>
          <div className="text-[14px] text-slate-700 flex items-start gap-2 leading-relaxed">
            <span className="text-blue-600 font-extrabold min-w-[75px]">MATERIAL:</span> {product.materials}
          </div>
          <div className="text-[14px] text-slate-700 flex items-start gap-2 leading-relaxed">
            <span className="text-blue-600 font-extrabold min-w-[75px]">USE CASE:</span> {product.applications}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ── Category Section ── */
const CategorySection = memo(({ category }: { category: Category }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [category.id, isAutoPlaying]);

  return (
    <section id={`section-${category.id}`} className="scroll-mt-24 pb-12" style={{ contentVisibility: 'auto' }}>
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-1">
          {category.subtitle}
        </p>
        {/* SEO H2 — keyword-rich, used as section heading */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {category.seoHeading}
        </h2>
      </div>
      <div className="mb-8 h-px bg-slate-200" />
      {/* SEO-enriched overview paragraph */}
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-600">
        {category.overview}
      </p>
      <div className="mb-12 product-grid sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((p, i) => (
          <ProductCard key={p.name} product={p} index={i} />
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-5">
          {BRAND_NAME} Benefits
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.benefits.map((b, i) => {
            const isActuallyActive = i === activeIndex || (isAutoPlaying && i === hoveredIndex);
            return (
              <BenefitCard
                key={b}
                label={b}
                index={i}
                isActive={isActuallyActive}
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlaying(false);
                }}
                onHover={(h) => setHoveredIndex(h ? i : null)}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
});

/* ── Main Products Page ── */
const Products = () => {
  const [activeTab, setActiveTab] = useState(productCategories[0].id);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = productCategories.findIndex(c => c.id === prev);
        const nextIndex = (currentIndex + 1) % productCategories.length;
        return productCategories[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCategory = productCategories.find((c) => c.id === activeTab) || productCategories[0];

  return (
    <main className="min-h-screen bg-white">
      <SEO
        title={`Fabrication Products in Trichy — Steel Gates, Railings, Shutters & More | ${COMPANY_NAME}`}
        description={`Browse ${COMPANY_NAME}'s full range of fabrication products in Trichy — steel gates, stainless steel gates, railings, rolling shutters, aluminium windows, glass doors, ACP cladding and more.`}
        keywords="steel gate, metal gate, stainless steel gate, window grill, grill work, balcony railing, staircase railing, steel railing, rolling shutter, shop shutter, aluminium door, aluminium window, aluminium sliding window, glass door, toughened glass door, glass partition, office glass partition, steel staircase, metal staircase, fabrication products, metal fabrication, steel fabrication, gate fabrication, steel gate in Trichy, grill work in Trichy, rolling shutter in Trichy, aluminium window in Trichy, fabrication shop in Trichy"
      />

      <style>{`
        .products-hero {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #020617;
          overflow: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .hero-bg-media {
          position: absolute;
          inset: 0;
          will-change: transform;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(6, 27, 84, 0.2) 0%, rgba(2, 6, 23, 0.7) 100%);
          z-index: 1;
        }
        .hero-mesh {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(29, 78, 216, 0.05) 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        .product-grid {
          display: grid;
          gap: 4rem 4rem;
          padding-top: 2rem;
        }

        .card {
          background-color: white;
          color: black;
          width: 100%;
          min-height: 380px;
          border-radius: 16px;
          box-shadow: rgba(50, 50, 93, 0.15) 0px 30px 60px -20px,
            rgba(0, 0, 0, 0.2) 0px 20px 40px -30px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid #f1f5f9;
        }

        .card:hover {
          box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -20px,
            rgba(37, 99, 235, 0.1) 0px 30px 60px -30px;
          border-color: #3b82f6;
          z-index: 50;
        }

        .card-img {
          position: relative;
          height: 220px;
          display: flex;
          justify-content: center;
          padding: 1.25rem 1.25rem 0;
        }

        .card-imgs {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 30px -5px;
          transition: all 0.5s ease;
        }

        .card:hover .card-imgs {
          transform: scale(1.02);
          box-shadow: rgba(37, 99, 235, 0.3) 0px 20px 40px -10px;
        }

        .project-info {
          padding: 1rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 15px;
          position: relative;
          flex-grow: 1;
        }

        .project-title {
          font-weight: 800;
          font-size: 1.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .lighter {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: #3b82f6;
          background: #eff6ff;
          padding: 2px 10px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .product-grid {
          display: grid;
          gap: 2rem;
        }

        /* ── Benefit Card Animation (Animated Mail) ── */
        .benefit-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .letter-image {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .animated-mail {
          position: absolute;
          height: 150px;
          width: 200px;
          transition: .4s;
          z-index: 10;
        }
        
        .animated-mail .body {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 100px 200px;
          border-color: transparent transparent #3a42b4 transparent;
          z-index: 2;
        }
        
        .animated-mail .top-fold {
          position: absolute;
          top: 50px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 50px 100px 0 100px;
          transform-origin: 50% 0%;
          transition: transform .4s .4s, z-index .2s .4s;
          border-color: #0b266e transparent transparent transparent;
          z-index: 2;
        }
        
        .animated-mail .back-fold {
          position: absolute;
          bottom: 0;
          width: 200px;
          height: 100px;
          background: #0b266e;
          z-index: 0;
        }
        
        .animated-mail .left-fold {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 50px 0 50px 100px;
          border-color: transparent transparent transparent #091e5c;
          z-index: 2;
        }
        
        .animated-mail .letter {
          left: 20px;
          bottom: 0px;
          position: absolute;
          width: 160px;
          height: 60px;
          background: white;
          z-index: 1;
          transition: .4s .2s;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }
        
        .animated-mail .letter-border {
          height: 10px;
          width: 100%;
          background: repeating-linear-gradient(-45deg, #020617, #020617 8px, transparent 8px, transparent 18px);
        }
        
        .animated-mail .letter-title {
          margin-top: 8px;
          margin-left: 10px;
          margin-right: 30px;
          font-size: 13px;
          font-weight: 800;
          color: #020617;
          line-height: 1.1;
        }
        
        .animated-mail .letter-context {
          margin-top: 6px;
          margin-left: 10px;
          margin-right: 10px;
          font-size: 10px;
          color: #475569;
          line-height: 1.3;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .animated-mail .letter-stamp {
          position: absolute;
          top: 15px;
          right: 10px;
          border-radius: 100%;
          height: 28px;
          width: 28px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .mail-shadow {
          position: absolute;
          top: 190px;
          left: 50%;
          width: 200px;
          height: 15px;
          transition: .4s;
          transform: translateX(-50%);
          border-radius: 100%;
          background: radial-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.0), rgba(0,0,0,0.0));
        }

        .letter-image.active .animated-mail {
          transform: translateY(20px);
        }
        
        .letter-image.active .animated-mail .top-fold {
          transition: transform .4s, z-index .2s;
          transform: rotateX(180deg);
          z-index: 0;
        }
        
        .letter-image.active .animated-mail .letter {
          height: 220px;
        }

        .letter-image.active .animated-mail .letter-context {
          opacity: 1;
          transition-delay: 0.4s;
        }
        
        .letter-image.active .mail-shadow {
          width: 250px;
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="products-hero">

        {/* Visually hidden H1 — primary SEO heading for Google */}
        <h1 className="sr-only">
          Fabrication Products in Trichy — Steel Gates, Railings, Rolling Shutters, Aluminium Windows &amp; Glass Doors | {COMPANY_NAME}
        </h1>

        <div className="hero-bg-media">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={productsHero}
            alt={`${COMPANY_NAME} fabrication products — steel gates, railings, rolling shutters and aluminium works in Trichy`}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ willChange: "transform" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/55 to-transparent" />
        </div>

        <div className="hero-overlay" />
        <div className="hero-mesh" />

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          5 Product Categories
        </div>
        <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Grade-A Certified Materials
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Fabrication Shop in Trichy
              </motion.div>

              {/* Decorative display heading — aria-hidden, real H1 is sr-only above */}
              <motion.p
                aria-hidden="true"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Product<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Catalogue.
                </span><br />
                Built to Excel.
              </motion.p>

              {/* SEO-rich hero paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                Explore our complete range of{" "}
                <strong className="text-white/85">fabrication products</strong> in Trichy — custom{" "}
                <strong className="text-white/85">steel gates</strong>,{" "}
                <strong className="text-white/85">balcony railings</strong>,{" "}
                <strong className="text-white/85">rolling shutters</strong>,{" "}
                <strong className="text-white/85">aluminium windows</strong>,{" "}
                <strong className="text-white/85">glass doors</strong> and{" "}
                <strong className="text-white/85">ACP cladding</strong> — precision-built
                with Grade-A materials for lasting excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-10 w-full sm:w-auto">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
                <TurtleButton href={getWhatsAppUrl()} variant="whatsapp" external className="rounded-xl w-full sm:w-auto">

                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </TurtleButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tab Navigation ─── */}
      <nav
        className="sticky top-[64px] lg:top-[80px] z-40 bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-4 transition-all duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-4">
          <div className="flex flex-nowrap justify-center items-center gap-1.5 sm:gap-3">
            {productCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <AnimatedButton
                  key={cat.id}
                  isActive={isActive}
                  isPaused={isPaused}
                  onClick={() => { setActiveTab(cat.id); setIsPaused(true); }}
                  onHoverStart={() => setIsPaused(true)}
                  onHoverEnd={() => setIsPaused(false)}
                >
                  {cat.title}
                </AnimatedButton>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ─── Active Category Content ─── */}
      <div
        className="mx-auto max-w-7xl px-6 py-16 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CategorySection category={activeCategory} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── CTA ─── */}
      <section
        className="bg-slate-950 py-24 relative overflow-hidden text-center"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10 md:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/60 mb-10 leading-relaxed">
            Need a <strong className="text-white/80">steel gate</strong>,{" "}
            <strong className="text-white/80">rolling shutter</strong>,{" "}
            <strong className="text-white/80">aluminium window</strong> or{" "}
            <strong className="text-white/80">glass door</strong> in Trichy?
            Our team will visit your site, measure and provide a detailed, written quotation — completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TurtleButton href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)} variant="call_now" className="rounded-xl px-10 w-full sm:w-auto">
              <Phone className="w-4 h-4" /> Get Free Consultation
            </TurtleButton>
            <a
              href={getWhatsAppUrl()}

              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/10">
            {["Certified Quality", "Precision Engineering", "Timely Delivery"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-white/40 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;