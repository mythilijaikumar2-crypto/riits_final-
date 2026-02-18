import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Phone, MessageCircle } from "lucide-react";

const steps = [
  { num: "01", title: "Consultation", desc: "We begin with a detailed discussion of your project requirements, design preferences, and budget. Our team provides expert guidance on material selection and design possibilities.", icon: "💬" },
  { num: "02", title: "Site Visit", desc: "Our technical team visits the site for accurate measurements, structural assessment, and feasibility evaluation. We document all site conditions to ensure precise fabrication.", icon: "📐" },
  { num: "03", title: "Design Planning", desc: "Based on site data, we create detailed drawings and 3D visualizations. Material specifications, finishing options, and cost breakdowns are prepared for approval.", icon: "📝" },
  { num: "04", title: "Fabrication", desc: "Approved designs move to our Trichy workshop for precision fabrication. We use CNC cutting, expert welding, and quality-grade materials to manufacture each component.", icon: "⚙️" },
  { num: "05", title: "Installation", desc: "Our trained installation team handles on-site fitting with professional tools and equipment. We ensure accurate alignment, secure fixing, and clean finishing.", icon: "🔧" },
  { num: "06", title: "Completion", desc: "Final quality inspection, surface finishing, cleanup, and project handover. We provide maintenance guidelines and after-service support.", icon: "✅" },
];

const serviceAreas = [
  { title: "Residential", items: ["Home gates & grills", "Balcony railings", "Staircase handrails", "Window systems", "Elevation work"] },
  { title: "Commercial", items: ["Showroom facades", "Office partitions", "Structural glazing", "Rolling shutters", "ACP cladding"] },
  { title: "Industrial", items: ["Factory sheds", "Warehouse structures", "Heavy-duty shutters", "Structural steel", "Industrial gates"] },
];

const Services = () => (
  <main className="pt-20">
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle text-silver mb-3">Our Services</p>
          <h1 className="heading-xl mb-6">How We Work</h1>
          <p className="text-lg max-w-3xl opacity-80 leading-relaxed">
            From initial consultation to final handover, our structured workflow ensures precision, transparency, and quality at every stage of your project.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-4xl">
        <SectionHeading subtitle="Step by Step" title="Our Process" />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-heading font-bold text-sm shrink-0 relative z-10">
                  {s.num}
                </div>
                <div className="glass-card rounded-xl p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl md:hidden">{s.icon}</span>
                    <h3 className="font-heading text-lg font-semibold uppercase text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <SectionHeading subtitle="Sectors" title="Service Areas" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-8"
            >
              <h3 className="heading-md text-primary mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container-main">
        <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
        <p className="text-body opacity-80 max-w-xl mx-auto mb-8">Contact us today for a free consultation and site visit.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+919876543210" className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
