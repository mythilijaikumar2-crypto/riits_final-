import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Target, Eye, CheckCircle } from "lucide-react";

const workflow = [
  { step: "01", title: "Consultation", desc: "Understanding project requirements, specifications and budget." },
  { step: "02", title: "Site Visit", desc: "Accurate on-site measurements and feasibility assessment." },
  { step: "03", title: "Design Planning", desc: "Detailed drawings and material selection for approval." },
  { step: "04", title: "Fabrication", desc: "Precision manufacturing at our Trichy workshop facility." },
  { step: "05", title: "Installation", desc: "Expert on-site installation by trained professionals." },
  { step: "06", title: "Completion", desc: "Quality inspection, finishing and project handover." },
];

const materials = [
  "Stainless Steel (SS 304 / 202)",
  "Mild Steel (MS)",
  "Aluminium Profiles & Sections",
  "Toughened Glass (8mm / 10mm / 12mm)",
  "ACP Sheets (Aluminium Composite Panels)",
  "HPL Panels (High Pressure Laminate)",
  "GI Sheets & Tubes",
  "Polycarbonate Sheets",
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle text-silver mb-3">About Us</p>
          <h1 className="heading-xl mb-6">Building Trust Through Metal</h1>
          <p className="text-lg max-w-3xl opacity-80 leading-relaxed">
            RITS Metal Craft is a leading metal fabrication and architectural elevation company based in Tiruchirappalli (Trichy), Tamil Nadu. 
            With expertise spanning stainless steel, mild steel, aluminium, glass, and composite panel systems, we deliver end-to-end 
            fabrication solutions for residential, commercial, and industrial projects.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-background">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: <Eye className="w-8 h-8" />, title: "Our Vision", text: "To be the most trusted and preferred metal fabrication partner in Tamil Nadu — known for architectural precision, material quality, and dependable project execution." },
          { icon: <Target className="w-8 h-8" />, title: "Our Mission", text: "To deliver premium-quality fabrication and elevation solutions at transparent pricing, with skilled craftsmanship, timely delivery, and a deep understanding of regional construction needs." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="text-primary mb-4">{item.icon}</div>
            <h2 className="heading-md mb-4">{item.title}</h2>
            <p className="text-body text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Execution Workflow */}
    <section className="section-padding bg-muted">
      <div className="container-main">
        <SectionHeading subtitle="How We Work" title="Execution Workflow" description="A structured, professional approach from consultation to completion." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflow.map((w, i) => (
            <motion.div
              key={w.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-6"
            >
              <span className="font-heading text-4xl font-bold text-primary/20">{w.step}</span>
              <h3 className="font-heading text-lg font-semibold uppercase text-foreground mt-2 mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Materials */}
    <section className="section-padding bg-background">
      <div className="container-main">
        <SectionHeading subtitle="What We Work With" title="Material Specialization" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materials.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 p-4 glass-card rounded-lg"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{m}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Region */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main text-center">
        <SectionHeading subtitle="Service Coverage" title="Trichy & Surrounding Districts" light />
        <p className="text-body opacity-80 max-w-2xl mx-auto">
          We serve Tiruchirappalli and surrounding districts including Thanjavur, Perambalur, Karur, Pudukottai, Ariyalur, and Dindigul. 
          Our team executes projects on-site with full logistical support across the region.
        </p>
      </div>
    </section>
  </main>
);

export default About;
