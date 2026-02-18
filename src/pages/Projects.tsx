import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

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

const Projects = () => (
  <main className="pt-20">
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle text-silver mb-3">Portfolio</p>
          <h1 className="heading-xl mb-6">Our Work</h1>
          <p className="text-lg max-w-3xl opacity-80 leading-relaxed">
            A selection of completed projects across residential, commercial, industrial, and elevation categories in Trichy and surrounding regions.
          </p>
        </motion.div>
      </div>
    </section>

    {projectCategories.map((cat, catIdx) => (
      <section key={cat.title} className={`section-padding ${catIdx % 2 === 0 ? "bg-background" : "bg-muted"}`}>
        <div className="container-main">
          <SectionHeading subtitle={`${cat.title} Projects`} title={cat.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="font-heading text-5xl text-primary/20">🏗️</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-sm font-semibold uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </main>
);

export default Projects;
