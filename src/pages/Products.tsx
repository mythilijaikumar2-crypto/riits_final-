import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";
import SEO from "../components/SEO";


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
    title: "Stainless Steel Fabrication",
    subtitle: "STAINLESS STEEL FABRICATION",
    /* H2 maps to: Steel Gates & Metal Gates / Grills & Railings */
    seoHeading: "Steel Gates, Grills & Railings in Trichy",
    overview: "Looking for a custom steel gate or stainless steel gate in Trichy? RITS Metal Craft offers premium SS 304 and SS 202 gate fabrication, grill work, balcony railings and staircase railings for residential and commercial properties. All products feature brushed or mirror-polished finishes with precision welding.",
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
    title: "Mild Steel Fabrication",
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
    title: "Glass & Aluminium System",
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
    title: "Exterior Elevation & Cladding",
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
        desc: "Custom laser-cut and CNC-routed metal panels for facades — feature walls and building exterior cladding.",
        materials: "MS / SS / Aluminium sheets",
        applications: "Feature walls, building facades",
        image: facadePanelImg,
      },
    ],
    benefits: ["Weather protection", "Thermal insulation", "Low maintenance", "Architectural appeal"],
  },
  {
    id: "shutters",
    title: "Rolling Shutter",
    subtitle: "ROLLING SHUTTER",
    /* H2 maps to: Rolling Shutters */
    seoHeading: "Rolling Shutters & Shop Shutters in Trichy",
    overview: "Need a rolling shutter in Trichy for your shop, showroom or warehouse? RITS Metal Craft supplies and installs heavy-duty rolling shutters and shop shutters — motorized and manual — built for commercial, industrial and residential security with long operational life.",
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

/* ── Benefit Card ── */
const BenefitCard = memo(({ label, index, isActive }: { label: string; index: number; isActive: boolean }) => {
  const detail = benefitDetails[label] ?? { icon: "✅", desc: "Quality guaranteed." };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="benefit-wrapper"
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
      whileHover={{ y: -12 }}
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [category.id]);

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
          Key Benefits
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.benefits.map((b, i) => (
            <BenefitCard key={b} label={b} index={i} isActive={i === activeIndex} />
          ))}
        </div>
      </div>

      {/* ── Near-me CTA bar — local SEO keywords ── */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950 rounded-2xl px-7 py-5">
        <p className="text-sm font-medium text-white/70 leading-relaxed">
          {category.id === "ss" && <>Need a <strong className="text-blue-300">steel gate in Trichy</strong> or <strong className="text-blue-300">grill work in Trichy</strong>? RITS Metal Craft is your trusted fabrication shop.</>}
          {category.id === "ms" && <>Looking for a <strong className="text-blue-300">metal gate or steel staircase</strong> in Trichy? Our steel fabrication team delivers on time.</>}
          {category.id === "glass" && <>Searching for an <strong className="text-blue-300">aluminium window in Trichy</strong> or a <strong className="text-blue-300">glass door</strong> for your office? Call us for a free quote.</>}
          {category.id === "elevation" && <>Transform your building with the best <strong className="text-blue-300">ACP cladding and facade work</strong> in Trichy — call for a free site visit.</>}
          {category.id === "shutters" && <>Need a <strong className="text-blue-300">rolling shutter in Trichy</strong>? We supply and install <strong className="text-blue-300">shop shutters</strong> for all types of businesses.</>}
        </p>
        <a
          href="tel:+919876543210"
          className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap"
        >
          📞 Call Now
        </a>
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
        title="Premium Metal Products in Trichy | SS, MS & Aluminium Catalouge"
        description="Browse our catalogue of premium metal products in Trichy. We offer stainless steel gates, mild steel structures, aluminium windows, and high-security rolling shutters."
        keywords="metal products trichy, ss gate designs, rolling shutter types, aluminium window price trichy"
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
          gap: 4rem 2rem;
          padding-top: 3rem;
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
          transform: translateY(-12px);
          box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -20px,
            rgba(37, 99, 235, 0.1) 0px 30px 60px -30px;
          border-color: #3b82f6;
        }

        .card-img {
          position: relative;
          top: -25px;
          height: 220px;
          display: flex;
          justify-content: center;
          padding: 0 0.5rem;
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
          transform: scale(1.04);
          box-shadow: rgba(37, 99, 235, 0.3) 0px 20px 40px -10px;
        }

        .project-info {
          padding: 0 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 15px;
          position: relative;
          flex-grow: 1;
          margin-top: -5px;
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
          overflow: hidden;
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

        .letter-image:hover .animated-mail,
        .letter-image.active .animated-mail {
          transform: translateY(20px);
        }
        
        .letter-image:hover .animated-mail .top-fold,
        .letter-image.active .animated-mail .top-fold {
          transition: transform .4s, z-index .2s;
          transform: rotateX(180deg);
          z-index: 0;
        }
        
        .letter-image:hover .animated-mail .letter,
        .letter-image.active .animated-mail .letter {
          height: 195px;
        }

        .letter-image:hover .animated-mail .letter-context,
        .letter-image.active .animated-mail .letter-context {
          opacity: 1;
          transition-delay: 0.4s;
        }
        
        .letter-image:hover .mail-shadow,
        .letter-image.active .mail-shadow {
          width: 250px;
        }

        /* ── 3D Neon Nav Buttons ── */
        .fab-nav {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 4px 1rem 8px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .fab-nav::-webkit-scrollbar {
          display: none;
        }

        .fab-btn {
          position: relative;
          flex-shrink: 0;
          padding: 12px 22px;
          border-radius: 40px;
          border: 1px solid rgba(0, 195, 255, 0.35);
          border-top: 1px solid rgba(0, 220, 255, 0.55);
          border-bottom: 1px solid rgba(0, 50, 130, 0.7);
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: rgba(200, 230, 255, 0.9);
          cursor: pointer;
          background: linear-gradient(180deg, #0d2050 0%, #071335 60%, #040d25 100%);
          box-shadow:
            0 6px 0 0 #020b1e,
            0 10px 18px rgba(0, 0, 0, 0.6),
            0 0 10px rgba(0, 180, 255, 0.25),
            0 0 20px rgba(0, 80, 220, 0.2),
            inset 0 1px 0 rgba(0, 220, 255, 0.3),
            inset 0 0 14px rgba(0, 120, 220, 0.15);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          outline: none;
          white-space: nowrap;
        }

        .fab-btn:hover {
          transform: translateY(-4px);
          color: #fff;
          box-shadow:
            0 10px 0 0 #020b1e,
            0 14px 22px rgba(0, 0, 0, 0.65),
            0 0 14px rgba(0, 210, 255, 0.5),
            0 0 28px rgba(0, 100, 255, 0.35),
            inset 0 1px 0 rgba(0, 235, 255, 0.45),
            inset 0 0 20px rgba(0, 140, 240, 0.25);
        }

        .fab-btn:active {
          transform: translateY(3px);
          box-shadow:
            0 2px 0 0 #020b1e,
            0 4px 8px rgba(0, 0, 0, 0.5),
            0 0 8px rgba(0, 180, 255, 0.3),
            inset 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .fab-btn.fab-active {
          color: #fff;
          background: linear-gradient(160deg, #1840ff 0%, #006fd6 50%, #00b8e8 100%);
          border: 1px solid rgba(0, 210, 255, 0.7);
          border-top: 1px solid rgba(140, 220, 255, 0.8);
          border-bottom: 1px solid rgba(0, 60, 160, 0.9);
          /* pressed-in slightly → depth shadow smaller = looks pushed down / lit up */
          box-shadow:
            0 4px 0 0 #010a1a,
            0 7px 16px rgba(0, 0, 0, 0.5),
            /* strong outer cyan glow = active state */
            0 0 16px rgba(0, 200, 255, 0.75),
            0 0 32px rgba(0, 110, 255, 0.55),
            0 0 55px rgba(0, 60, 220, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4),
            inset 0 0 18px rgba(255, 255, 255, 0.12);
          transform: translateY(0px);
        }

        .fab-btn.fab-active:hover {
          transform: translateY(-3px);
          box-shadow:
            0 7px 0 0 #010a1a,
            0 11px 22px rgba(0, 0, 0, 0.55),
            0 0 20px rgba(0, 215, 255, 0.9),
            0 0 40px rgba(0, 120, 255, 0.65),
            0 0 65px rgba(0, 70, 230, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 0 22px rgba(255, 255, 255, 0.18);
        }

        /* Progress bar inside active button */
        .fab-progress {
          position: absolute;
          bottom: 0;
          left: 6px;
          right: 6px;
          height: 3px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 0 0 40px 40px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .fab-nav {
            justify-content: flex-start;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .fab-btn {
            font-size: 0.56rem;
            padding: 10px 16px;
            letter-spacing: 0.1em;
          }
        }
      `}</style>

      {/* ─── Hero ─── */}
      <section className="products-hero">

        {/* Visually hidden H1 — primary SEO heading for Google */}
        <h1 className="sr-only">
          Fabrication Products in Trichy — Steel Gates, Railings, Rolling Shutters, Aluminium Windows &amp; Glass Doors | RITS Metal Craft
        </h1>

        <div className="hero-bg-media">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/src/assets/heropage/products page hero.webp"
            alt="RITS Metal Craft fabrication products — steel gates, railings, rolling shutters and aluminium works in Trichy"
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
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
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
                className="flex flex-wrap gap-3"
              >
                <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </TurtleButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Neon Tab Navigation (Automated) ─── */}
      <nav
        className="sticky top-[64px] lg:top-[80px] z-40 backdrop-blur-md border-b border-white/10 shadow-2xl py-5 transition-all duration-300"
        style={{ background: "linear-gradient(180deg, #0b1a33 0%, #132a4f 100%)" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="fab-nav">
            {productCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setIsPaused(true);
                  }}
                  className={`fab-btn${isActive ? " fab-active" : ""}`}
                >
                  {cat.title}
                  {/* Automation progress bar on active button */}
                  {isActive && !isPaused && (
                    <div className="fab-progress">
                      <motion.div
                        key={`progress-${cat.id}`}
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 4, ease: "linear" }}
                        style={{ height: "100%", background: "rgba(255,255,255,0.55)", transformOrigin: "left" }}
                      />
                    </div>
                  )}
                </button>
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

          <div className="flex flex-wrap justify-center gap-4">
            <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
              <Phone className="w-4 h-4" /> Get Free Consultation
            </TurtleButton>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1"
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