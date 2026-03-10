import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { TurtleButton } from "../components/TurtleButton";
import { X, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

import res1 from "../assets/service page/our works/ss railing installing.webp";
import res2 from "../assets/service page/our works/ms gate installing.webp";
import res3 from "../assets/service page/our works/aluminium window installation.png";
import res4 from "../assets/service page/our works/elevation work installing.png";

import com1 from "../assets/service page/our works/Showroom Facade – Trichy Main Road.webp";
import com2 from "../assets/service page/our works/Rolling Shutters – Commercial Complex.webp";
import com3 from "../assets/service page/our works/Office Partition – IT Park.webp";
import com4 from "../assets/service page/our works/Glass Entrance.webp";

import ind1 from "../assets/service page/our works/Factory Shed – SIDCO Industrial Estate.webp";
import ind2 from "../assets/service page/our works/Warehouse Shutters – Manachanallur.jpg";
import ind3 from "../assets/service page/our works/Structural Steel – Construction Site.jpg";

import ele1 from "../assets/service page/our works/Full Elevation – Residential Complex.jpg";
import ele2 from "../assets/service page/our works/Facade Upgrade – Commercial Building.jpg";
import ele3 from "../assets/service page/our works/Heritage Restoration – Temple Town.avif";

type ProjectCategory = {
  title: string;
  projects: Project[];
};

type Project = {
  title: string;
  desc: string;
  image?: string;
};

const projectCategories: ProjectCategory[] = [
  {
    title: "Residential",
    projects: [
      { title: "SS Railing Installation – Trichy", desc: "Brushed stainless steel balcony railings with glass infill for a 3-storey residence.", image: res1 },
      { title: "Modern MS Gate – Srirangam", desc: "Geometric-patterned mild steel main gate with motorized operation.", image: res2 },
      { title: "Aluminium Windows – Thillai Nagar", desc: "Full-house aluminium sliding window system with tinted glass.", image: res3 },
      { title: "Elevation Work – KK Nagar", desc: "ACP cladding and decorative louvers for a residential villa.", image: res4 },
    ],
  },
  {
    title: "Commercial",
    projects: [
      { title: "Showroom Facade – Trichy Main Road", desc: "Structural glazing with ACP cladding for a multi-brand showroom.", image: com1 },
      { title: "Rolling Shutters – Commercial Complex", desc: "Motorized rolling shutters for 12 shop units.", image: com2 },
      { title: "Office Partition – IT Park", desc: "Frameless toughened glass partitions for corporate office space.", image: com3 },
      { title: "Glass Entrance – Hotel Lobby", desc: "Toughened glass swing doors with SS hardware and canopy.", image: com4 },
    ],
  },
  {
    title: "Industrial",
    projects: [
      { title: "Factory Shed – SIDCO Industrial Estate", desc: "Large-span MS structural shed with GI roofing sheets.", image: ind1 },
      { title: "Warehouse Shutters – Manachanallur", desc: "Heavy-duty industrial rolling shutters for warehouse complex.", image: ind2 },
      { title: "Structural Steel – Construction Site", desc: "MS I-beam and column fabrication for multi-storey building.", image: ind3 },
    ],
  },
  {
    title: "Elevation",
    projects: [
      { title: "Full Elevation – Residential Complex", desc: "Complete ACP + HPL cladding with aluminium louvers and SS railings.", image: ele1 },
      { title: "Facade Upgrade – Commercial Building", desc: "Decorative laser-cut panels with LED backlighting integration.", image: ele2 },
      { title: "Heritage Restoration – Temple Town", desc: "MS decorative gates and railings matching traditional Trichy architecture.", image: ele3 },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            src="/src/assets/our work hero page .png"
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
                <TurtleButton href="tel:+919876543210" variant="premium_shimmer" className="rounded-xl">
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
                  {p.image && (
                    <div className="md:w-5/12 aspect-[16/10] md:aspect-auto overflow-hidden relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  )}

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
                  {selectedProject.image && (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
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
                      variant="primary"
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
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2.5 bg-white text-slate-950 px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-white/10 hover:shadow-2xl hover:-translate-y-1"
            >
              <span>📞</span> Call Our Expert
            </a>
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

export default Projects;
