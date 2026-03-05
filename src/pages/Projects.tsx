import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { TurtleButton } from "../components/TurtleButton";

const projectCategories = [
  {
    title: "Residential",
    projects: [
      { title: "SS Railing Installation – Trichy", desc: "Brushed stainless steel balcony railings with glass infill for a 3-storey residence." },
      { title: "Modern MS Gate – Srirangam", desc: "Geometric-patterned mild steel main gate with motorized operation." },
      { title: "Aluminium Windows – Thillai Nagar", desc: "Full-house aluminium sliding window system with tinted glass." },
      { title: "Elevation Work – KK Nagar", desc: "ACP cladding and decorative louvers for a residential villa." },
    ],
  },
  {
    title: "Commercial",
    projects: [
      { title: "Showroom Facade – Trichy Main Road", desc: "Structural glazing with ACP cladding for a multi-brand showroom." },
      { title: "Rolling Shutters – Commercial Complex", desc: "Motorized rolling shutters for 12 shop units." },
      { title: "Office Partition – IT Park", desc: "Frameless toughened glass partitions for corporate office space." },
      { title: "Glass Entrance – Hotel Lobby", desc: "Toughened glass swing doors with SS hardware and canopy." },
    ],
  },
  {
    title: "Industrial",
    projects: [
      { title: "Factory Shed – SIDCO Industrial Estate", desc: "Large-span MS structural shed with GI roofing sheets." },
      { title: "Warehouse Shutters – Manachanallur", desc: "Heavy-duty industrial rolling shutters for warehouse complex." },
      { title: "Structural Steel – Construction Site", desc: "MS I-beam and column fabrication for multi-storey building." },
    ],
  },
  {
    title: "Elevation",
    projects: [
      { title: "Full Elevation – Residential Complex", desc: "Complete ACP + HPL cladding with aluminium louvers and SS railings." },
      { title: "Facade Upgrade – Commercial Building", desc: "Decorative laser-cut panels with LED backlighting integration." },
      { title: "Heritage Restoration – Temple Town", desc: "MS decorative gates and railings matching traditional Trichy architecture." },
    ],
  },
];

const Projects = () => {
  return (
    <main className="pt-20">
      <style>{`
        .projects-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #061b54;
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
          opacity: 0.4;
          mix-blend-mode: overlay;
          will-change: transform;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(6, 27, 84, 0.4) 0%, #061b54 95%);
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
          background: linear-gradient(90deg, #ffffff 0%, #93c5fd 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        .float-sketch {
          position: absolute;
          opacity: 0.15;
          pointer-events: none;
          z-index: 2;
        }

        /* --- New Premium Flexbox Project Cards --- */
        .projects-flex-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          perspective: 1000px;
        }

        .project-flex-card {
          flex: 1;
          min-width: 300px;
          height: 480px;
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .project-flex-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(13, 37, 87, 0.8) 100%);
          z-index: 2;
          opacity: 0.6;
          transition: opacity 0.5s ease;
        }

        .project-flex-card:hover {
          flex: 1.8;
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(147, 197, 253, 0.4);
          transform: translateY(-8px) translateZ(20px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
        }

        .project-flex-card:hover::before {
          opacity: 0.9;
        }

        .card-inner-content {
          position: absolute;
          inset: 0;
          z-index: 3;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: all 0.5s ease;
        }

        .card-bg-icon {
          position: absolute;
          top: 40px;
          left: 40px;
          font-size: 5rem;
          opacity: 0.1;
          transition: all 0.6s ease;
          transform: scale(1);
          color: #93c5fd;
          z-index: 1;
        }

        .project-flex-card:hover .card-bg-icon {
          opacity: 0.3;
          transform: scale(1.2) rotate(-10deg);
          top: 30px;
        }

        .card-tag {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #93c5fd;
          margin-bottom: 12px;
          opacity: 0.6;
          transition: all 0.4s ease;
        }

        .project-flex-card:hover .card-tag {
          opacity: 1;
          letter-spacing: 0.3em;
        }

        .card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 16px;
          max-width: 90%;
          transition: all 0.5s ease;
        }

        .card-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .project-flex-card:hover .card-desc {
          height: 100px;
          opacity: 1;
          margin-top: 20px;
        }

        .card-corner-shape {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 80px;
          height: 80px;
          background: #2563eb;
          filter: blur(40px);
          opacity: 0.2;
          border-radius: 50%;
          transition: all 0.5s ease;
        }

        .project-flex-card:hover .card-corner-shape {
          width: 120px;
          height: 120px;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .project-flex-card {
            min-width: 100%;
            height: 380px;
          }
          .project-flex-card:hover {
            flex: 1;
          }
        }
      `}</style>

      {/* ── PROJECTS HERO ── */}
      <section className="projects-hero">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/src/assets/our work hero page .png"
            alt="Background"
            className="hero-bg-img"
          />
        </motion.div>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />


        {/* Floating stat badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Residential · Commercial · Industrial
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Delivered
        </motion.div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Our Masterpieces
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Projects<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Portfolio.
                </span><br />
                Our Best Work.
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                From complex industrial structures to elegant residential gates — explore how we blend precision engineering with architectural vision across Tamil Nadu.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-3"
              >
                <TurtleButton href="tel:+919876543210" variant="premium_shimmer" className="rounded-xl">
                  <span>📞</span> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <span>💬</span> WhatsApp
                </TurtleButton>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

    {projectCategories.map((cat, catIdx) => (
      <section key={cat.title} className={`section-padding ${catIdx % 2 === 0 ? "bg-background" : "bg-muted"}`}>
        <div className="container-main">
          <SectionHeading subtitle={`${cat.title} Projects`} title={cat.title} />
          <div className="projects-flex-container">
            {cat.projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="project-flex-card group"
              >
                <div className="card-bg-icon font-heading">🏗️</div>
                <div className="card-corner-shape" />
                
                <div className="card-inner-content">
                  <div className="card-tag">Project Detail</div>
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-desc">
                    <p>{p.desc}</p>
                    <div className="mt-6 flex items-center gap-3 text-blue-300 font-bold text-xs tracking-widest uppercase">
                      <span>View Specifications</span>
                      <div className="w-8 h-[1px] bg-blue-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}
    </main>
  );
};

export default Projects;
