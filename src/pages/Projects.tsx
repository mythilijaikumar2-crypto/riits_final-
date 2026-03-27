import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { TurtleButton } from "../components/TurtleButton";
import { X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import {
  CONTACT_DETAILS,
  formatTelLink,
  getWhatsAppUrl,
  COMPANY_NAME,
  BRAND_NAME,
} from "../config/contact";
import projectsHero from "../assets/heropage/our-work-hero.webp";

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

import lobby1 from "../assets/hotellabby/lobby2.webp";
import lobby2 from "../assets/hotellabby/lobby3.jpg";
import lobby3 from "../assets/hotellabby/lobby4.jpg";

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
  seoHeading: string;
  seoDesc: string;
  projects: Project[];
};

type Project = {
  title: string;
  desc: string;
  image?: string;
  images?: string[];
};

/* ══════════════════════════════════════════════════════════
   PROJECT CATEGORIES — SEO headings & descriptions added
   to each category without touching any UI logic
══════════════════════════════════════════════════════════ */
const projectCategories: ProjectCategory[] = [
  {
    title: "Residential",
    /* H2 — targets: balcony railing work, staircase railing work,
       steel gate work in Trichy, gate fabrication designs,
       aluminium window work */
    seoHeading: "Residential Steel Gate, Railing & Aluminium Window Works",
    seoDesc:
      "Our residential portfolio includes completed steel gate work in Trichy, custom gate fabrication designs, balcony railing work, staircase railing work and aluminium window work — all built and installed by our own team.",
    projects: [
      {
        title: "SS Railing & Staircase – Trichy",
        desc: "Custom-fabricated stainless steel staircase railings with ergonomic handrails and precision-welded supports for modern homes. This balcony railing work and staircase railing work project showcases our welding quality.",
        images: [stair1, stair2, stair3, stair4, stair_img5],
      },
      {
        title: "Modern MS Gate – Srirangam",
        desc: "Geometric-patterned mild steel main gate with motorized operation, premium powder coating and precision laser-cut gate fabrication designs — a complete metal gate work project for a residential compound.",
        images: [res2_1, res2_2, res2_3, res2_4, res2_5],
      },
      {
        title: "Aluminium Windows – Thillai Nagar",
        desc: "Premium aluminium window work — sliding and casement systems with high-quality gaskets, tinted toughened glass and smooth-operating hardware, a complete aluminium window installation for a Trichy residence.",
        images: [win1, win2, win3, win4, win5],
      },
      {
        title: "Elevation Work – KK Nagar",
        desc: "ACP cladding and decorative louvers for a residential villa in KK Nagar — part of our full building elevation and metal fabrication work portfolio in Trichy.",
        images: [elw1, elw2, elw3, elw4, elw5],
      },
    ],
  },
  {
    title: "Commercial",
    /* H2 — targets: rolling shutter installation, shop shutter work,
       glass partition work, glass door installation,
       rolling shutter work in Trichy */
    seoHeading: "Commercial Rolling Shutter, Glass Partition & Facade Projects",
    seoDesc:
      "Our commercial projects include rolling shutter installation, shop shutter work, office glass partition work and glass door installation across Trichy — all delivered on time with full warranty.",
    projects: [
      {
        title: "Showroom Facade – Trichy Main Road",
        desc: "Structural glazing with ACP cladding for a multi-brand showroom — a steel fabrication work and facade project completed on Trichy Main Road.",
        images: [fac1, fac3, fac4, fac5, fac6],
      },
      {
        title: "Rolling Shutters – Commercial Complex",
        desc: "Heavy-duty motorized rolling shutter installation for 12 shop units in a high-traffic commercial complex — rolling shutter work in Trichy with remote operation and security locks.",
        images: [shut1, shut2, shut3, shut5],
      },
      {
        title: "Office Partition – IT Park",
        desc: "Frameless toughened glass partition work for a corporate IT Park office space — clean office glass partitions that create an open and professional workspace.",
        images: [part1, part2, part3, part4, part5],
      },
      {
        title: "Glass Entrance – Hotel Lobby",
        desc: "Toughened glass door installation with SS hardware and canopy for a hotel lobby — a premium glass door work project with elegant frameless design.",
        images: [lobby1, lobby2, lobby3],
      },
    ],
  },
  {
    title: "Industrial",
    /* H2 — targets: metal fabrication work in Trichy,
       steel fabrication work, welding work, fabrication projects in Trichy */
    seoHeading: "Industrial Steel Fabrication & Warehouse Projects in Trichy",
    seoDesc:
      "Our industrial portfolio covers heavy steel fabrication work, welding work and structural metal fabrication work in Trichy — factory sheds, warehouse shutters and structural steel frames built for long-term durability.",
    projects: [
      {
        title: "Factory Shed – SIDCO Industrial Estate",
        desc: "Large-span MS structural shed with GI roofing sheets — a complete industrial steel fabrication work project at SIDCO Industrial Estate, Trichy.",
        images: [shed1, shed2, shed3, shed4, shed5],
      },
      {
        title: "Warehouse Shutters – Manachanallur",
        desc: "Heavy-duty industrial rolling shutter installation for a warehouse complex in Manachanallur — part of our fabrication projects in Trichy for the industrial sector.",
        images: [wh1, wh2, wh3, wh4, wh5],
      },
      {
        title: "Structural Steel – Construction Site",
        desc: "MS I-beam and column metal fabrication work for a multi-storey building — precision welding work and structural steel fabrication by our in-house team.",
        images: [ss1, ss2, ss3, ss4, ss5],
      },
    ],
  },
  {
    title: "Elevation",
    /* H2 — targets: grill work in Trichy, fabrication work photos,
       gate fabrication designs */
    seoHeading: "Building Elevation, Facade & Decorative Fabrication Works",
    seoDesc:
      "Browse our elevation and facade fabrication work photos — ACP cladding, HPL panels, decorative gate fabrication designs and heritage grill work in Trichy that blend aesthetics with structural strength.",
    projects: [
      {
        title: "Full Elevation – Residential Complex",
        desc: "Complete ACP + HPL cladding with aluminium louvers and SS railings — a full building elevation and metal fabrication work project for a residential complex in Trichy.",
        images: [ele1_1, ele1_2, ele1_3, ele1_4, ele1_5, ele1],
      },
      {
        title: "Facade Upgrade – Commercial Building",
        desc: "Decorative laser-cut panels with LED backlighting integration — a premium facade and steel fabrication work project showcasing custom gate fabrication designs.",
        images: [fcMain, fc1, fc2, fc3, fc4],
      },
      {
        title: "Heritage Restoration – Temple Town",
        desc: "MS decorative gates and grill work in Trichy matching traditional Trichy architecture — heritage-style gate fabrication designs and welding work for Temple Town.",
        images: [her1, her2, her3, her4],
      },
    ],
  },
  {
    title: "Roofing",
    /* H2 — targets: fabrication projects in Trichy,
       metal fabrication work, steel fabrication work */
    seoHeading: "Industrial & Residential Roofing Fabrication Projects",
    seoDesc:
      "Our roofing portfolio is part of our wider fabrication projects in Trichy — covering industrial warehouse roofing and residential terrace roofing using PPGL, Galvalume and polycarbonate systems.",
    projects: [
      {
        title: "Industrial & Warehouse Roofing (PEB Structure)",
        desc: "High-durability PPGL and Galvalume roofing sheets with heavy-duty PEB structure for large industrial spans and warehouses — a steel fabrication work project built for decades of performance.",
        images: [whr1, whr2, whr3, whr4, whr5],
      },
      {
        title: "Residential Terrace Roofing",
        desc: "Polycarbonate and aesthetic metal roofing solutions for home terraces and sit-outs — quality metal fabrication work in Trichy for residential building.",
        images: [roof1, roof2, roof3, roof5, roof6, roof7],
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════
   PROJECTS PAGE COMPONENT
══════════════════════════════════════════════════════════ */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Handle scroll to category if arriving from Services page with filter state
  useEffect(() => {
    if (location.state?.filter) {
      const filterId = location.state.filter.toLowerCase();
      const element = document.getElementById(filterId);
      if (element) {
        // Delay slightly to ensure layout is ready and ScrollToTop has finished
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <main className="pt-14 md:pt-16">
      <SEO
        title={`Steel Gate, Grill, Railing & Fabrication Projects in Trichy | ${COMPANY_NAME} Our Works`}
        description={`Browse 800+ real-world fabrication projects by RIITS Metal Craft in Trichy. See our expert work in Steel Gates, SS Railings, Rolling Shutters, Aluminium Windows, ACP Cladding, and Glass Partitions. High-quality craftsmanship and proven results. Contact: 98947 94557 / 63839 98574. Email: riitsmetalcraft@gmail.com. Visit: https://riitsmetalcraft.in/`}
        keywords="steel gate work in Trichy, grill work in Trichy, rolling shutter work in Trichy, fabrication projects in Trichy, metal fabrication work in Trichy, balcony railing work, staircase railing work, rolling shutter installation, shop shutter work, aluminium door installation, aluminium window work, glass door installation, glass partition work, steel fabrication work, metal fabrication work, welding work, fabrication work photos, gate fabrication designs"
      />

      <style>{`
        .projects-hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 1.5rem;
          background: #1e3a8a;
          overflow: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        @media (min-width: 768px) {
          .projects-hero { padding: 0 1.5rem; }
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
          background: linear-gradient(to bottom, rgba(30, 58, 138, 0.3) 0%, rgba(30, 58, 138, 0.15) 50%, rgba(30, 58, 138, 0.3) 100%);
          z-index: 1;
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
          .projects-hero { min-height: 100dvh; }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="projects-hero">
        {/* Visually hidden H1 — primary SEO heading for Google */}
        <h1 className="sr-only">
          Steel Gate, Grill, Railing, Rolling Shutter &amp; Fabrication Projects
          in Trichy | {COMPANY_NAME} Our Works
        </h1>

        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={projectsHero}
            alt={`Our completed fabrication projects — steel gate, railing, rolling shutter and aluminium works in Trichy`}
            className="hero-bg-img"
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay" />
        </motion.div>

        <div className="container-main relative z-10 w-full max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            className="flex flex-col items-center text-center"
          >
            {/* Badge — local keyword */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 lg:animate-pulse" />
              {BRAND_NAME} — Fabrication Projects in Trichy
            </motion.div>

            {/* Decorative display heading */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              aria-hidden="true"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
            >
              Projects
              <br />
              <span className="shimmer-text">Portfolio.</span>
              <br />
              Our Best Work.
            </motion.p>

            {/* SEO-rich hero paragraph */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-white font-medium text-[clamp(15px,4vw,17px)] leading-relaxed max-w-2xl mb-8 mx-auto [text-shadow:_0_2px_15px_rgba(0,0,0,0.6)]"
            >
              Browse our real completed{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                fabrication work photos
              </strong>{" "}
              — from{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                steel gate work in Trichy
              </strong>{" "}
              and{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                grill work in Trichy
              </strong>{" "}
              to{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                rolling shutter installation
              </strong>
              ,{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                glass partition work
              </strong>{" "}
              and full{" "}
              <strong className="text-white font-bold decoration-blue-400/30 underline-offset-4 decoration-2">
                metal fabrication work in Trichy
              </strong>{" "}
              — every photo is a real project we built and installed.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <TurtleButton
                href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
                variant="call_now"
                className="rounded-xl px-10 w-full sm:w-auto"
              >
                <span>📞</span> Call Now
              </TurtleButton>
              <TurtleButton
                href={getWhatsAppUrl()}
                variant="whatsapp"
                external
                className="rounded-xl px-10 w-full sm:w-auto"
              >
                <span>💬</span> WhatsApp
              </TurtleButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO INTRO — Our Completed Fabrication Works
      ══════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-100 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight mb-4">
            Our Completed Fabrication Works
          </h2>
          <p className="text-slate-500 text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
            {COMPANY_NAME} has completed 800+{" "}
            <strong className="text-slate-700">
              fabrication projects in Trichy
            </strong>{" "}
            across homes, shops, offices and industries. Every piece of{" "}
            <strong className="text-slate-700">steel fabrication work</strong>{" "}
            and{" "}
            <strong className="text-slate-700">metal fabrication work</strong>{" "}
            you see here was built and installed by our own team using Grade-A
            materials and expert{" "}
            <strong className="text-slate-700">welding work</strong>.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT CATEGORY SECTIONS
      ══════════════════════════════════════════ */}
      {projectCategories.map((cat, catIdx) => (
        <section
          key={cat.title}
          id={cat.title.toLowerCase()}
          className={`section-padding ${catIdx % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container-main">
            {/* SEO H2 + description paragraph above the project cards */}
            <div className="mb-10">
              <SectionHeading
                subtitle={`${cat.title} Projects`}
                title={cat.seoHeading}
              />
              <p className="mt-4 text-slate-600 text-[0.95rem] leading-relaxed max-w-3xl mx-auto text-center">
                {cat.seoDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
              {cat.projects.map((p) => (
                <div
                  key={p.title}
                  className="group flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl hover:shadow-primary/10 dark:hover:border-primary/30 transition-all duration-500"
                >
                  {/* Project Image Area with Auto-Slider */}
                  <div className="md:w-5/12 aspect-[16/10] md:aspect-auto overflow-hidden relative">
                    <ProjectImageSlider p={p} />
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

      {/* ══════════════════════════════════════════
          PROJECT DETAIL MODAL
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[11000] flex items-start sm:items-center justify-center pt-20 sm:pt-0 p-4 sm:p-6 md:p-10 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-x-hidden overflow-y-auto shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all hover:scale-110 active:scale-95"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-3/5 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <ProjectImageSlider p={selectedProject} isModal />
                </div>
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
                        "Delivering precision and excellence in every structure
                        we build."
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <TurtleButton
                      variant="call_now"
                      className="rounded-2xl px-10"
                      href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
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

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section
        className="bg-slate-950 py-24 relative overflow-hidden text-center"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "auto 400px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10 md:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Next Steps
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">
            Want Similar Results <br className="hidden sm:block" /> for Your
            Building?
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/60 mb-10 leading-relaxed">
            Need{" "}
            <strong className="text-white/75">steel gate work in Trichy</strong>
            , <strong className="text-white/75">rolling shutter work</strong> or
            any{" "}
            <strong className="text-white/75">
              fabrication work in Trichy
            </strong>
            ? Call us for a free site visit and written quotation — no hidden
            charges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TurtleButton
              href={formatTelLink(CONTACT_DETAILS.primaryPhone.value)}
              variant="call_now"
              className="rounded-xl px-10 w-full sm:w-auto"
            >
              <span>📞</span> Call Our Expert
            </TurtleButton>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <span>💬</span> WhatsApp Details
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/10">
            {[
              "Premium Finish",
              "Structural Integrity",
              "On-Time Completion",
            ].map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 text-sm text-white/40 font-medium"
              >
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

/* ══════════════════════════════════════════════════════════
   IMAGE SLIDER — unchanged logic
══════════════════════════════════════════════════════════ */
const ProjectImageSlider = ({
  p,
  isModal = false,
}: {
  p: Project;
  isModal?: boolean;
}) => {
  const images = p.images || (p.image ? [p.image] : []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isModal || images.length <= 1) return;
    const id = setInterval(
      () => {
        setCurrent((prev) => (prev + 1) % images.length);
      },
      3000 + Math.random() * 2000,
    ); // Randomize timing so they don't all shift at once
    return () => clearInterval(id);
  }, [images.length, isModal]);

  const paginate = (dir: number) => {
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  if (images.length === 0) return null;

  const variants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { zIndex: 1, opacity: 1, scale: 1 },
    exit: { zIndex: 0, opacity: 0, scale: 0.95 },
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
          loading="lazy"
          decoding="async"
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            scale: { duration: 0.3, ease: "easeInOut" },
          }}
          style={{ willChange: "transform, opacity" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset }) => {
            const swipe = Math.abs(offset.x) > 50;
            if (swipe) paginate(offset.x > 0 ? -1 : 1);
          }}
          className={`absolute inset-0 w-full h-full object-cover select-none cursor-grab active:cursor-grabbing ${
            !isModal
              ? "transition-transform duration-1000 group-hover:scale-105"
              : ""
          }`}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            title="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
          >
            <ChevronLeft size={isModal ? 24 : 20} />
          </button>
          <button
            title="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover/slider:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
          >
            <ChevronRight size={isModal ? 24 : 20} />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 pt-4 px-4 bg-gradient-to-t from-black/50 to-transparent">
          {images.map((_, i) => (
            <button
              key={i}
              title={`Go to image ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className="group/dot p-1 transition-all"
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  current === i
                    ? "w-6 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    : "w-2 bg-white/40 group-hover/dot:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
