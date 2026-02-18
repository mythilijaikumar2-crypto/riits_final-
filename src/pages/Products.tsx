import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const productCategories = [
  {
    id: "ss",
    title: "Stainless Steel Fabrication",
    overview: "Premium-grade SS 304 and SS 202 fabrication for residential and commercial applications. All products feature brushed or mirror-polished finishes with precision welding.",
    products: [
      { name: "SS Gates", desc: "Modern geometric and classic designs, motorized or manual operation.", materials: "SS 304 / SS 202", applications: "Residential entrances, villa gates, compound gates" },
      { name: "SS Railings", desc: "Balcony railings, terrace railings with glass or rod infill options.", materials: "SS 304 tubes & pipes", applications: "Balconies, terraces, staircases" },
      { name: "SS Staircases", desc: "Straight, spiral and L-shaped staircases with anti-skid treads.", materials: "SS 304, toughened glass", applications: "Residential, commercial interiors" },
      { name: "SS Pergolas", desc: "Outdoor and entrance pergolas with powder-coated or polished finish.", materials: "SS 304 / MS with SS cladding", applications: "Entrances, terraces, gardens" },
      { name: "SS Canopies", desc: "Rain shelter and entrance canopies with glass or polycarbonate roofing.", materials: "SS 304, polycarbonate / glass", applications: "Building entrances, driveways" },
      { name: "SS Decorative Panels", desc: "Laser-cut decorative panels for exterior and interior applications.", materials: "SS 304 sheet", applications: "Facades, partitions, feature walls" },
    ],
    benefits: ["Corrosion-resistant", "Low maintenance", "Premium finish", "Long lifespan"],
  },
  {
    id: "ms",
    title: "Mild Steel Fabrication",
    overview: "Durable and cost-effective mild steel fabrication for structural and functional applications. All MS products are treated with anti-rust primer and powder coating.",
    products: [
      { name: "MS Gates", desc: "Heavy-duty main gates with automated or manual systems.", materials: "MS tubes, sheets, castings", applications: "Residential, commercial, industrial" },
      { name: "MS Structural Frames", desc: "Load-bearing frames and columns for construction support.", materials: "MS I-beams, channels, angles", applications: "Building construction, mezzanines" },
      { name: "MS Sheds", desc: "Industrial and commercial shed structures with roofing.", materials: "MS tubular frames, GI sheets", applications: "Warehouses, factories, parking" },
      { name: "MS Roofing", desc: "Roofing truss systems and metal roof sheet installations.", materials: "MS trusses, GI/Color sheets", applications: "Industrial, residential roofing" },
    ],
    benefits: ["High strength", "Cost-effective", "Weldable", "Versatile applications"],
  },
  {
    id: "glass",
    title: "Glass & Aluminium Systems",
    overview: "Modern aluminium and glass systems for residential and commercial buildings. All systems feature anodized or powder-coated aluminium with toughened safety glass.",
    products: [
      { name: "Aluminium Doors", desc: "Swing, sliding and folding door systems with thermal break profiles.", materials: "Aluminium sections, toughened glass", applications: "Residential, commercial entrances" },
      { name: "Aluminium Windows", desc: "Sliding, casement and fixed window systems with mosquito mesh options.", materials: "Aluminium profiles, clear/tinted glass", applications: "All building types" },
      { name: "Sliding Systems", desc: "Multi-track sliding systems for balconies and large openings.", materials: "Heavy-duty aluminium tracks", applications: "Balcony enclosures, partitions" },
      { name: "Glass Partitions", desc: "Frameless and framed glass partition systems for interior spaces.", materials: "Toughened glass 10mm/12mm", applications: "Offices, showrooms, commercial" },
      { name: "Structural Glazing", desc: "Full glass facade systems with spider fittings and silicone joints.", materials: "Toughened/DGU glass, SS spiders", applications: "Commercial facades, showrooms" },
    ],
    benefits: ["Weather-sealed", "Energy efficient", "Modern aesthetics", "Sound insulation"],
  },
  {
    id: "elevation",
    title: "Exterior Elevation & Cladding",
    overview: "Transform building exteriors with modern cladding and facade systems. Our elevation solutions combine aesthetics with weather protection.",
    products: [
      { name: "ACP Panels", desc: "Aluminium Composite Panel cladding in various colors and finishes.", materials: "ACP sheets, aluminium framework", applications: "Commercial buildings, showrooms" },
      { name: "HPL Cladding", desc: "High Pressure Laminate cladding for premium exterior finishes.", materials: "HPL sheets, SS/aluminium framing", applications: "Residential villas, offices" },
      { name: "Louvers", desc: "Aluminium and MS louvers for ventilation and aesthetics.", materials: "Aluminium / MS blades", applications: "Facades, parking structures" },
      { name: "Decorative Facade Panels", desc: "Custom laser-cut and CNC-routed metal panels for facades.", materials: "MS / SS / Aluminium sheets", applications: "Feature walls, building facades" },
    ],
    benefits: ["Weather protection", "Thermal insulation", "Low maintenance", "Architectural appeal"],
  },
  {
    id: "shutters",
    title: "Rolling Shutters",
    overview: "Motorized and manual rolling shutter systems for commercial, industrial and residential security. Heavy-duty construction with long operational life.",
    products: [
      { name: "Commercial Shutters", desc: "Standard rolling shutters for shops and commercial spaces.", materials: "GI / MS slats, spring/motor", applications: "Shops, showrooms, offices" },
      { name: "Industrial Shutters", desc: "Heavy-gauge shutters for warehouses and factory entrances.", materials: "MS heavy-gauge slats, motor-operated", applications: "Warehouses, factories" },
      { name: "Heavy-Duty Systems", desc: "Extra-wide and extra-tall shutter systems for large openings.", materials: "Reinforced MS/GI construction", applications: "Industrial, logistics, hangars" },
    ],
    benefits: ["Motorized options", "High security", "Low maintenance", "Weather resistant"],
  },
];

const Products = () => (
  <main className="pt-20">
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle text-silver mb-3">Our Products</p>
          <h1 className="heading-xl mb-6">Product Catalogue</h1>
          <p className="text-lg max-w-3xl opacity-80 leading-relaxed">
            Explore our comprehensive range of metal fabrication, glass & aluminium, and cladding products. Each category features detailed specifications and applications.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {productCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
            >
              <AccordionItem value={cat.id} className="glass-card rounded-xl overflow-hidden border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <span className="font-heading text-lg font-semibold uppercase text-foreground">{cat.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-body text-muted-foreground mb-6">{cat.overview}</p>

                  <div className="space-y-4 mb-6">
                    {cat.products.map((p) => (
                      <div key={p.name} className="bg-muted rounded-lg p-4">
                        <h4 className="font-heading text-sm font-semibold uppercase text-primary mb-1">{p.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{p.desc}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                          <span><strong className="text-foreground">Materials:</strong> {p.materials}</span>
                          <span><strong className="text-foreground">Applications:</strong> {p.applications}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-heading text-sm font-semibold uppercase text-foreground mb-2">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.benefits.map((b) => (
                        <span key={b} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{b}</span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  </main>
);

export default Products;
