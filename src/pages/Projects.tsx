import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { TurtleButton } from "../components/TurtleButton";
import { X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

import stair1 from "../assets/staircase/stairs.webp";
import stair2 from "../assets/staircase/stairs1.webp";
import stair3 from "../assets/staircase/stair2.webp";
import stair4 from "../assets/staircase/stairs3.webp";
import stair_img5 from "../assets/staircase/stairs4.webp";
import res2_1 from "../assets/ms gate/ms gate.webp";
import res2_2 from "../assets/ms gate/ms gate1.webp";
import res2_3 from "../assets/ms gate/ms gate 2.webp";
import res2_4 from "../assets/ms gate/ms gate2.webp";
import res2_5 from "../assets/ms gate/ms gate4.webp";

import win1 from "../assets/aluminiumwind/window.webp";
import win2 from "../assets/aluminiumwind/window1.webp";
import win3 from "../assets/aluminiumwind/window2.webp";
import win4 from "../assets/aluminiumwind/window3.webp";
import win5 from "../assets/aluminiumwind/window4.webp";


import fac1 from "../assets/facard/Glass facades1.jpg";
import fac3 from "../assets/facard/facade3.jpg";
import fac4 from "../assets/facard/facade4.jpg";
import fac5 from "../assets/facard/facade5.jpg";
import fac6 from "../assets/facard/facade6.avif";

import shut1 from "../assets/shutters/shutter.webp";
import shut2 from "../assets/shutters/shutter1.webp";
import shut3 from "../assets/shutters/shutter2.webp";
import shut5 from "../assets/shutters/shutter4.webp";

import com3 from "../assets/service page/our works/Office Partition – IT Park.webp";
import lobby1 from "../assets/hotellabby/lobby2.webp";
import lobby2 from "../assets/hotellabby/lobby3.jpg";
import lobby3 from "../assets/hotellabby/lobby4.jpg";

import ind1 from "../assets/service page/our works/Factory Shed – SIDCO Industrial Estate.webp";
import wh1 from "../assets/warehouse/warehouse shutter.webp";
import wh2 from "../assets/warehouse/warehouse shutter1.webp";
import wh3 from "../assets/warehouse/warehouse shutter2.webp";
import wh4 from "../assets/warehouse/warehouse shutter3.webp";
import wh5 from "../assets/warehouse/warehouse shutter4.webp";
import ss1 from "../assets/structuralsteel/structural steel.webp";
import ss2 from "../assets/structuralsteel/structural steel1.webp";
import ss3 from "../assets/structuralsteel/structural steel2.webp";
import ss4 from "../assets/structuralsteel/structural steel3.webp";
import ss5 from "../assets/structuralsteel/strucural steel.webp";
import ele1 from "../assets/service page/our works/Full Elevation – Residential Complex.jpg";

import ele1_1 from "../assets/elivation/elevation.webp";
import ele1_2 from "../assets/elivation/elevation1.webp";
import ele1_3 from "../assets/elivation/elevation2.webp";
import ele1_4 from "../assets/elivation/elevation 3.webp";
import ele1_5 from "../assets/elivation/elevation4.webp";
import fc1 from "../assets/facadcommercial/commercial1.webp";
import fc2 from "../assets/facadcommercial/commercial2.jpg";
import fc3 from "../assets/facadcommercial/commercial3.webp";
import fc4 from "../assets/facadcommercial/commercial4.jpg";
import fcMain from "../assets/facadcommercial/main.jpg";

import her1 from "../assets/heritage/heritage.webp";
import her2 from "../assets/heritage/heritage1.webp";
import her3 from "../assets/heritage/heritage2.webp";
import her4 from "../assets/heritage/heritage4.webp";

import shed1 from "../assets/factoryshed/factory shut.webp";
import shed2 from "../assets/factoryshed/factory shut1.webp";
import shed3 from "../assets/factoryshed/factory shut2.webp";
import shed4 from "../assets/factoryshed/factory shut3.webp";
import shed5 from "../assets/factoryshed/factory shut4.webp";

import glass1_3 from "../assets/glasses/glass5.webp";

import part1 from "../assets/partition/glass partition1.webp";
import part2 from "../assets/partition/glass partition2.jpg";
import part3 from "../assets/partition/glass partition3.jpg";
import part4 from "../assets/partition/glass partition4.jpeg";
import part5 from "../assets/partition/glass partition5.jpeg";

import elw1 from "../assets/elivatiowork/elevation.webp";
import elw2 from "../assets/elivatiowork/elevation1.webp";
import elw3 from "../assets/elivatiowork/elevation2.webp";
import elw4 from "../assets/elivatiowork/elevation3.webp";
import elw5 from "../assets/elivatiowork/elevation4.webp";

import whr1 from "../assets/warehouseshed/warehouse roofing.webp";
import whr2 from "../assets/warehouseshed/warehouse roofing1.webp";
import whr3 from "../assets/warehouseshed/warehouse roofing2.webp";
import whr4 from "../assets/warehouseshed/warehouse roofing3.webp";
import whr5 from "../assets/warehouseshed/warehouse roofing4.webp";
import roof1 from "../assets/roofing/roof1.webp";
import roof2 from "../assets/roofing/roof2.webp";
import roof3 from "../assets/roofing/roof3.webp";
import roof5 from "../assets/roofing/roof5.webp";
import roof6 from "../assets/roofing/roof6.webp";
import roof7 from "../assets/roofing/roofimg5.webp";

type ProjectCategory = {
  title: string;
  projects: Project[];
};

type Project = {
  title: string;
  desc: string;
  image?: string;
  images?: string[];
};

const projectCategories: ProjectCategory[] = [
  {
    title: "Residential",
    projects: [
      { 
        title: "SS Railing & Staircase – Trichy", 
        desc: "Custom-fabricated stainless steel staircase railings with ergonomic handrails and precision-welded supports for modern homes.", 
        images: [stair1, stair2, stair3, stair4, stair_img5] 
      },
      { 
        title: "Modern MS Gate – Srirangam", 
        desc: "Geometric-patterned mild steel main gate with motorized operation, premium powder coating, and precision laser-cut designs.", 
        images: [res2_1, res2_2, res2_3, res2_4, res2_5] 
      },
      { 
        title: "Aluminium Windows – Thillai Nagar", 
        desc: "Premium aluminium sliding and casement window systems with high-quality gaskets, tinted toughened glass, and smooth-operating hardware for residences.", 
        images: [win1, win2, win3, win4, win5] 
      },
      { title: "Elevation Work – KK Nagar", desc: "ACP cladding and decorative louvers for a residential villa.", images: [elw1, elw2, elw3, elw4, elw5] },
    ],
  },
  {
    title: "Commercial",
    projects: [
      { title: "Showroom Facade – Trichy Main Road", desc: "Structural glazing with ACP cladding for a multi-brand showroom.", images: [fac1, fac3, fac4, fac5, fac6] },
      { 
        title: "Rolling Shutters – Commercial Complex", 
        desc: "Heavy-duty motorized rolling shutters for 12 shop units in a high-traffic urban complex, featuring remote operation and security locks.", 
        images: [shut1, shut2, shut3, shut5] 
      },
      { title: "Office Partition – IT Park", desc: "Frameless toughened glass partitions for corporate office space.", images: [part1, part2, part3, part4, part5] },
      { title: "Glass Entrance – Hotel Lobby", desc: "Toughened glass swing doors with SS hardware and canopy.", images: [lobby1, lobby2, lobby3] },
    ],
  },
  {
    title: "Industrial",
    projects: [
      { title: "Factory Shed – SIDCO Industrial Estate", desc: "Large-span MS structural shed with GI roofing sheets.", images: [shed1, shed2, shed3, shed4, shed5] },
      { title: "Warehouse Shutters – Manachanallur", desc: "Heavy-duty industrial rolling shutters for warehouse complex.", images: [wh1, wh2, wh3, wh4, wh5] },
      { title: "Structural Steel – Construction Site", desc: "MS I-beam and column fabrication for multi-storey building.", images: [ss1, ss2, ss3, ss4, ss5] },
    ],
  },
  {
    title: "Elevation",
    projects: [
      { title: "Full Elevation – Residential Complex", desc: "Complete ACP + HPL cladding with aluminium louvers and SS railings.", images: [ele1_1, ele1_2, ele1_3, ele1_4, ele1_5, ele1] },
      { title: "Facade Upgrade – Commercial Building", desc: "Decorative laser-cut panels with LED backlighting integration.", images: [fcMain, fc1, fc2, fc3, fc4] },
      { title: "Heritage Restoration – Temple Town", desc: "MS decorative gates and railings matching traditional Trichy architecture.", images: [her1, her2, her3, her4] },
    ],
  },
  {
    title: "Roofing",
    projects: [
      { 
        title: "Industrial & Warehouse Roofing", 
        desc: "High-durability GI and Galvalume roofing sheets for large industrial spans and warehouses.", 
        images: [whr1, whr2, whr3, whr4, whr5] 
      },
      { 
        title: "Residential Terrace Roofing", 
        desc: "Polycarbonate and aesthetic metal roofing solutions for home terraces and sit-outs.", 
        images: [roof1, roof2, roof3, roof5, roof6, roof7] 
      },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Single global tick — all sliders advance together at the same moment
  const [globalTick, setGlobalTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setGlobalTick((t) => t + 1), 2500);
    return () => clearInterval(id);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <main className="pt-20">
      <SEO 
        title="Recent Metal Fabrication Projects in Trichy | RIITS Portfolio"
        description="View our portfolio of successful metal fabrication projects in Trichy. From residential gates to industrial sheds and commercial facades, see our craftsmanship in action."
        keywords="fabrication projects trichy, ss railing portfolio, ms gate designs tamil nadu"
      />
      <style>{`
        .projects-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: #020617;
          overflow: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          mix-blend-mode: normal;
          will-change: transform;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #020617 0%, rgba(2, 6, 23, 0.7) 25%, transparent 60%);
          z-index: 1;
        }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(29, 78, 216, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29, 78, 216, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 70%);
        }
        .shimmer-text {
          background: linear-gradient(90deg, #60a5fa 0%, #67e8f9 50%, #2563eb 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        @media (max-width: 768px) {
          .projects-hero {
            min-height: 70vh;
          }
        }
      `}</style>

      {/* ── PROJECTS HERO ── */}
      <section className="projects-hero">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-80">
          <img
            src="/src/assets/heropage/our work hero page .webp"
            alt="RIITS Metal Craft Portfolio - Showcasing Our Excellence in Fabrication"
            className="hero-bg-img"
            loading="eager"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />


        {/* Floating stat badges */}
        <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Residential · Commercial · Industrial
        </div>
        <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Delivered
        </div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Our Masterpieces
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4">
                Projects<br />
                <span className="shimmer-text">
                  Portfolio.
                </span><br />
                Our Best Work.
              </h1>

              <p className="text-white/70 text-base leading-relaxed max-w-md mb-7">
                From complex industrial structures to elegant residential gates — explore how we blend precision engineering with architectural vision across Tamil Nadu.
              </p>

              <div className="flex flex-wrap gap-3">
                <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
                  <span>📞</span> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <span>💬</span> WhatsApp
                </TurtleButton>
              </div>
            </div>


          </div>
        </div>
      </section>

      {projectCategories.map((cat, catIdx) => (
        <section key={cat.title} className={`section-padding ${catIdx % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container-main">
            <SectionHeading subtitle={`${cat.title} Projects`} title={cat.title} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
              {cat.projects.map((p) => (
                <div
                  key={p.title}
                  className="group flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl hover:shadow-primary/10 dark:hover:border-primary/30 transition-all duration-500"
                >
                  {/* Project Image Area with Auto-Slider */}
                  <div className="md:w-5/12 aspect-[16/10] md:aspect-auto overflow-hidden relative">
                    <ProjectImageSlider p={p} tick={globalTick} />
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>

                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-4 group/tag">
                      <div className="w-6 h-[2px] bg-primary scale-x-100 group-hover/tag:scale-x-150 transition-transform origin-left" />
                      <span className="text-primary dark:text-primary/80 text-[10px] font-black uppercase tracking-[0.3em]">
                        {cat.title} Project
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8 line-clamp-2 md:line-clamp-3">
                      {p.desc}
                    </p>

                    <div className="mt-auto">
                      <TurtleButton 
                        variant="outline" 
                        size="sm" 
                        className="rounded-xl border-primary text-primary hover:bg-primary hover:text-white px-6"
                        onClick={() => setSelectedProject(p)}
                      >
                        Read More
                      </TurtleButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── PROJECT DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
                {/* Image Side */}
                <div className="lg:w-3/5 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <ProjectImageSlider p={selectedProject} isModal />
                </div>

                {/* Content Side */}
                <div className="lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center bg-white dark:bg-slate-900">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className="w-8 h-[2px] bg-primary" />
                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                      Project Overview
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>

                  <div className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                      {selectedProject.desc}
                    </p>
                    
                    <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-slate-500 dark:text-slate-500 text-sm italic">
                        "Delivering precision and excellence in every structure we build."
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <TurtleButton
                      variant="call_now"
                      className="rounded-2xl px-10"
                      href="tel:+919876543210"
                    >
                      Enquire Now
                    </TurtleButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>



      {/* ── CTA ── */}
      <section 
        className="bg-slate-950 py-24 relative overflow-hidden text-center"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 md:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Next Steps
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">
            Want Similar Results <br className="hidden sm:block" /> for Your Building?
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/60 mb-10 leading-relaxed">
            From precision fabrication to expert installation, we bring your vision to life. Get a free site visit and feasibility report today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <TurtleButton
              href="tel:+919876543210"
              variant="call_now"
              className="rounded-xl px-10"
            >
              <span>📞</span> Call Our Expert
            </TurtleButton>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1"
            >
              <span>💬</span> WhatsApp Details
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/10">
            {["Premium Finish", "Structural Integrity", "On-Time Completion"].map((b) => (
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

const ProjectImageSlider = ({
  p,
  isModal = false,
  tick,
}: {
  p: Project;
  isModal?: boolean;
  tick?: number;
}) => {
  const images = p.images || (p.image ? [p.image] : []);
  const [current, setCurrent] = useState(0);

  // Advance on each global tick (only for card sliders, not modal)
  useEffect(() => {
    if (isModal) return;          // modal has its own manual-only navigation
    if (images.length <= 1) return;
    setCurrent((prev) => (prev + 1) % images.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  const paginate = (dir: number) => {
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  if (images.length === 0) return null;

  const variants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.95,
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden group/slider">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={p.title}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            scale: { duration: 0.3, ease: "easeInOut" }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset }) => {
            const swipe = Math.abs(offset.x) > 50;
            if (swipe) {
              paginate(offset.x > 0 ? -1 : 1);
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover select-none cursor-grab active:cursor-grabbing ${!isModal ? 'transition-transform duration-1000 group-hover:scale-105' : ''}`}
        />
      </AnimatePresence>
      
      {/* Navigation Arrows - Visible in Modal or on Hover in Card */}
      {images.length > 1 && (
        <>
          <button
            title="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100"
            onClick={(e) => { e.stopPropagation(); paginate(-1); }}
          >
            <ChevronLeft size={isModal ? 24 : 20} />
          </button>
          <button
            title="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100"
            onClick={(e) => { e.stopPropagation(); paginate(1); }}
          >
            <ChevronRight size={isModal ? 24 : 20} />
          </button>
        </>
      )}

      {/* Progress Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 pt-4 px-4 bg-gradient-to-t from-black/50 to-transparent">
          {images.map((_, i) => (
            <button
              key={i}
              title={`Go to image ${i + 1}`}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className="group/dot p-1 transition-all"
            >
              <div 
                className={`h-1 rounded-full transition-all duration-500 ${current === i ? 'w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-2 bg-white/40 group-hover/dot:bg-white/60'}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
