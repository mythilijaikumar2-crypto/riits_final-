import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, Ruler, Gem, MapPin, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-building.jpg";
import SectionHeading from "../components/SectionHeading";

const services = [
  { icon: "🚪", title: "Gates & Grills", desc: "Custom MS & SS gates with modern geometric designs" },
  { icon: "🛡️", title: "Railings & Handrails", desc: "Brushed stainless steel balcony & staircase railings" },
  { icon: "🪜", title: "Staircases & Pergolas", desc: "Structural steel staircases and decorative pergolas" },
  { icon: "🏗️", title: "Rolling Shutters", desc: "Heavy-duty commercial & industrial rolling systems" },
  { icon: "🪟", title: "Aluminium & Glass", desc: "Sliding windows, glass partitions & structural glazing" },
  { icon: "🏢", title: "Elevation & Cladding", desc: "ACP panels, HPL cladding & decorative facades" },
  { icon: "⚙️", title: "Structural Fabrication", desc: "Steel frames, sheds, roofing & support beams" },
  { icon: "🏭", title: "Industrial Works", desc: "Large-scale industrial metal fabrication projects" },
];

const whyUs = [
  { icon: <Shield className="w-6 h-6" />, title: "Transparent Pricing", desc: "Detailed quotations with no hidden costs" },
  { icon: <Ruler className="w-6 h-6" />, title: "Precision Fabrication", desc: "Accurate measurements and expert craftsmanship" },
  { icon: <Gem className="w-6 h-6" />, title: "Material Expertise", desc: "Premium grade SS, MS, aluminium & glass" },
  { icon: <MapPin className="w-6 h-6" />, title: "Trichy-Based Reliability", desc: "Local team with deep regional expertise" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Residential Client, Trichy", text: "RITS Metal Craft delivered exceptional quality SS railings for our new home. The precision and finish exceeded expectations.", rating: 5 },
  { name: "Priya Constructions", role: "Commercial Builder", text: "Their ACP cladding work on our commercial complex was outstanding. Professional team with excellent on-site execution.", rating: 5 },
  { name: "Arunkumar S.", role: "Industrial Client", text: "Reliable and timely delivery of heavy-duty rolling shutters for our warehouse. Best fabrication partner in Trichy.", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern building with ACP cladding, steel railings and glass facade by RITS Metal Craft in Trichy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
        </div>
        <div className="relative container-main px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="font-heading text-sm uppercase tracking-[0.3em] text-silver mb-4">
              Premium Metal Fabrication & Elevation
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground uppercase leading-[1.1] mb-4">
              RITS Metal Craft
            </h1>
            <p className="font-heading text-2xl sm:text-3xl font-light text-gold uppercase tracking-wider mb-6">
              The Art of Metal
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed mb-10">
              Trichy's trusted partner for precision metal fabrication, architectural elevation, glass & aluminium systems, and structural steel solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919876543210" className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            subtitle="Who We Are"
            title="Crafting Excellence in Metal"
            description="RITS Metal Craft is a Trichy-based fabrication company specializing in precision metalwork for residential, commercial, and industrial projects across Tamil Nadu."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Metal Fabrication", desc: "Expert SS & MS fabrication for gates, railings, staircases and structural elements." },
              { title: "Elevation & Cladding", desc: "ACP panels, HPL cladding, louvers and decorative facade systems." },
              { title: "Glass & Aluminium", desc: "Sliding systems, partitions, structural glazing and toughened glass installations." },
              { title: "Structural Solutions", desc: "Steel frames, sheds, roofing systems and industrial-grade metal structures." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-heading text-lg font-semibold uppercase text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about" className="btn-outline text-xs">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <SectionHeading
            subtitle="What We Offer"
            title="Core Services"
            description="Comprehensive metal fabrication and architectural solutions for every construction need."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to="/products" className="service-card flex flex-col items-start h-full">
                  <span className="text-3xl mb-4">{s.icon}</span>
                  <h3 className="font-heading text-base font-semibold uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <ChevronRight className="w-5 h-5 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main">
          <SectionHeading subtitle="Why RITS" title="Why Choose Us" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-dark rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 text-gold">
                  {item.icon}
                </div>
                <h3 className="font-heading text-base font-semibold uppercase mb-2">{item.title}</h3>
                <p className="text-sm opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading subtitle="Client Feedback" title="Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading text-sm font-semibold uppercase text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted">
        <div className="container-main text-center">
          <SectionHeading
            subtitle="Get in Touch"
            title="Start Your Project Today"
            description="Contact RITS Metal Craft for a consultation on your next construction or fabrication project."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919876543210" className="btn-primary">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <Link to="/contact" className="btn-outline">
              Contact Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
