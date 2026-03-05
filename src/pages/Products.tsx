import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TurtleButton } from "../components/TurtleButton";

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

const productCategories = [
  {
    id: "ss",
    title: "Stainless Steel Fabrication",
    subtitle: "STAINLESS STEEL FABRICATION",
    overview: "Premium-grade SS 304 and SS 202 fabrication for residential and commercial applications. All products feature brushed or mirror-polished finishes with precision welding.",
    products: [
      { name: "SS Gates", desc: "Modern geometric and classic designs, motorized or manual operation.", materials: "SS 304 / SS 202", applications: "Residential entrances, villa gates, compound gates", image: ssGateImg },
      { name: "SS Railings", desc: "Balcony railings, terrace railings with glass or rod infill options.", materials: "SS 304 tubes & pipes", applications: "Balconies, terraces, staircases", image: ssRailingImg },
      { name: "SS Staircases", desc: "Straight, spiral and L-shaped staircases with anti-skid treads.", materials: "SS 304, toughened glass", applications: "Residential, commercial interiors", image: ssStaircaseImg },
      { name: "SS Pergolas", desc: "Outdoor and entrance pergolas with powder-coated or polished finish.", materials: "SS 304 / MS with SS cladding", applications: "Entrances, terraces, gardens", image: ssPergola },
      { name: "SS Canopies", desc: "Rain shelter and entrance canopies with glass or polycarbonate roofing.", materials: "SS 304, polycarbonate / glass", applications: "Building entrances, driveways", image: ssCanopyImg },
      { name: "SS Decorative Panels", desc: "Laser-cut decorative panels for exterior and interior applications.", materials: "SS 304 sheet", applications: "Facades, partitions, feature walls", image: ssDecorativeImg },
    ],
    benefits: ["Corrosion-resistant", "Low maintenance", "Premium finish", "Long lifespan"],
  },
  {
    id: "ms",
    title: "Mild Steel Fabrication",
    subtitle: "MILD STEEL FABRICATION",
    overview: "Durable and cost-effective mild steel fabrication for structural and functional applications. All MS products are treated with anti-rust primer and powder coating.",
    products: [
      { name: "MS Gates", desc: "Heavy-duty main gates with automated or manual systems.", materials: "MS tubes, sheets, castings", applications: "Residential, commercial, industrial", image: msGateImg },
      { name: "MS Structural Frames", desc: "Load-bearing frames and columns for construction support.", materials: "MS I-beams, channels, angles", applications: "Building construction, mezzanines", image: msFrameImg },
      { name: "MS Sheds", desc: "Industrial and commercial shed structures with roofing.", materials: "MS tubular frames, GI sheets", applications: "Warehouses, factories, parking", image: msShedImg },
      { name: "MS Roofing", desc: "Roofing truss systems and metal roof sheet installations.", materials: "MS trusses, GI/Color sheets", applications: "Industrial, residential roofing", image: msRoofingImg },
    ],
    benefits: ["High strength", "Cost-effective", "Weldable", "Versatile applications"],
  },
  {
    id: "glass",
    title: "Glass & Aluminium System",
    subtitle: "GLASS & ALUMINIUM SYSTEM",
    overview: "Modern aluminium and glass systems for residential and commercial buildings. All systems feature anodized or powder-coated aluminium with toughened safety glass.",
    products: [
      { name: "Aluminium Doors", desc: "Swing, sliding and folding door systems with thermal break profiles.", materials: "Aluminium sections, toughened glass", applications: "Residential, commercial entrances", image: alDoorImg },
      { name: "Aluminium Windows", desc: "Sliding, casement and fixed window systems with mosquito mesh options.", materials: "Aluminium profiles, clear/tinted glass", applications: "All building types", image: alWindowImg },
      { name: "Sliding Systems", desc: "Multi-track sliding systems for balconies and large openings.", materials: "Heavy-duty aluminium tracks", applications: "Balcony enclosures, partitions", image: alSlidingImg },
      { name: "Glass Partitions", desc: "Frameless and framed glass partition systems for interior spaces.", materials: "Toughened glass 10mm/12mm", applications: "Offices, showrooms, commercial", image: glassPartImg },
      { name: "Structural Glazing", desc: "Full glass facade systems with spider fittings and silicone joints.", materials: "Toughened/DGU glass, SS spiders", applications: "Commercial facades, showrooms", image: structGlazingImg },
    ],
    benefits: ["Weather-sealed", "Energy efficient", "Modern aesthetics", "Sound insulation"],
  },
  {
    id: "elevation",
    title: "Exterior Elevation & Cladding",
    subtitle: "EXTERIOR ELEVATION & CLADDING",
    overview: "Transform building exteriors with modern cladding and facade systems. Our elevation solutions combine aesthetics with weather protection.",
    products: [
      { name: "ACP Panels", desc: "Aluminium Composite Panel cladding in various colors and finishes.", materials: "ACP sheets, aluminium framework", applications: "Commercial buildings, showrooms", image: acpPanelImg },
      { name: "HPL Cladding", desc: "High Pressure Laminate cladding for premium exterior finishes.", materials: "HPL sheets, SS/aluminium framing", applications: "Residential villas, offices", image: hplCladdingImg },
      { name: "Louvers", desc: "Aluminium and MS louvers for ventilation and aesthetics.", materials: "Aluminium / MS blades", applications: "Facades, parking structures", image: louversImg },
      { name: "Decorative Facade Panels", desc: "Custom laser-cut and CNC-routed metal panels for facades.", materials: "MS / SS / Aluminium sheets", applications: "Feature walls, building facades", image: facadePanelImg },
    ],
    benefits: ["Weather protection", "Thermal insulation", "Low maintenance", "Architectural appeal"],
  },
  {
    id: "shutters",
    title: "Rolling Shutter",
    subtitle: "ROLLING SHUTTER",
    overview: "Motorized and manual rolling shutter systems for commercial, industrial and residential security. Heavy-duty construction with long operational life.",
    products: [
      { name: "Commercial Shutters", desc: "Standard rolling shutters for shops and commercial spaces.", materials: "GI / MS slats, spring/motor", applications: "Shops, showrooms, offices", image: shutterCommImg },
      { name: "Industrial Shutters", desc: "Heavy-gauge shutters for warehouses and factory entrances.", materials: "MS heavy-gauge slats, motor-operated", applications: "Warehouses, factories", image: shutterIndImg },
      { name: "Heavy-Duty Systems", desc: "Extra-wide and extra-tall shutter systems for large openings.", materials: "Reinforced MS/GI construction", applications: "Industrial, logistics, hangars", image: shutterHeavyImg },
    ],
    benefits: ["Motorized options", "High security", "Low maintenance", "Weather resistant"],
  },
];

type Product = (typeof productCategories)[0]["products"][0];
type Category = (typeof productCategories)[0];

/* ── Benefit Card ── */
const BenefitCard = ({ label, index }: { label: string; index: number }) => {
  const detail = benefitDetails[label] ?? { icon: "✅", desc: "Quality guaranteed." };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg">
          {detail.icon}
        </span>
        <h4 className="text-sm font-semibold tracking-wide text-slate-800 uppercase">
          {label}
        </h4>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{detail.desc}</p>
    </motion.div>
  );
};

/* ── Product Card ── */
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
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
        <img src={product.image} alt={product.name} className="card-imgs" />
      </div>

      <div className="project-info">
        <div className="flex">
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
};

/* ── Category Section ── */
const CategorySection = ({ category }: { category: Category }) => (
  <section id={`section-${category.id}`} className="scroll-mt-24 pb-12">
    <div className="mb-8">
      <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-1">
        {category.subtitle}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {category.title}
      </h2>
    </div>
    <div className="mb-8 h-px bg-slate-200" />
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
          <BenefitCard key={b} label={b} index={i} />
        ))}
      </div>
    </div>
  </section>
);

/* ── Main Products Page ── */
const Products = () => {
  const [activeTab, setActiveTab] = useState(productCategories[0].id);
  const activeCategory = productCategories.find((c) => c.id === activeTab) || productCategories[0];

  return (
    <main className="min-h-screen bg-white">
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
          padding: 0 0.5rem; /* Small padding to keep it 'floating' but wide */
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

        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
      `}</style>

      {/* ─── Hero ─── */}
      <section className="products-hero">
        <div className="hero-bg-media">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/src/assets/industryworks.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ willChange: "transform" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/55 to-transparent" />
        </div>

        <div className="hero-overlay" />
        <div className="hero-mesh" />


        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Floating stat badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          5 Product Categories
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Grade-A Certified Materials
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Metal · Glass · Cladding
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Product<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Catalogue.
                </span><br />
                Built to Excel.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                Explore our precision-engineered range — stainless steel fabrication, aluminium &amp; glass systems, elevation cladding, and industrial rolling shutters built for lasting excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <TurtleButton href="tel:+919876543210" variant="premium_shimmer" className="rounded-xl">
                  <span>📞</span> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <span>💬</span> WhatsApp
                </TurtleButton>
              </motion.div>
            </div>


          </div>
        </div>
      </section>

      {/* ─── Tab Navigation ─── */}
      <nav className="sticky top-0 z-50 bg-[#061b54] border-b border-indigo-900/50 shadow-2xl mt-[1cm]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-wrap justify-center gap-3 py-4">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap flex-shrink-0 rounded-xl px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-white text-[#061b54] shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </nav>

      {/* ─── Active Category Content ─── */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
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
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-4">
            Request a Custom Quote
          </h2>
          <p className="mx-auto max-w-lg text-base text-slate-600 mb-8">
            Tell us about your project requirements and our team will prepare a detailed quotation.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default Products;