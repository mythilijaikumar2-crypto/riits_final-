import { ArrowRight, Phone, MessageCircle, CheckCircle2, Wrench, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const GeneralFabrication = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Custom Metal & General Fabrication Services in Trichy"
        description="All-in-one shop for general fabrication work in Trichy. Custom welding, metal repairs, laser cutting, and architectural metal works."
        keywords="general fabrication work, metal fabrication service, custom welding service, laser-cut metal panels, architectural fabrication"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/industial.jpeg"
            className="w-full h-full object-cover opacity-40"
            alt="General Metal Fabrication and Welding Services"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/15 border border-slate-400/30 text-slate-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Wrench className="w-3 h-3" /> Custom Solutions
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              General Metal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
                Fabrication
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Your all-in-one destination for bespoke metal fabrication and custom welding. We bring your unique designs to life with precision engineering and professional finishing in Trichy.
            </p>
            <div className="flex flex-wrap gap-4">
              <TurtleButton href="/contact" variant="premium_shimmer" className="rounded-xl">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </TurtleButton>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-black text-[#1a3a6b] uppercase tracking-tight mb-6">
                Custom Metal & General Fabrication Services
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  Sometimes, off-the-shelf solutions just won't cut it. At RIITS Metal Craft, our **General Fabrication** service is designed to tackle unique challenges and create bespoke metal structures tailored to your exact specifications.
                </p>
                <p className="mb-6">
                  From architectural metal accents for modern interiors to large-scale structural repairs, we offer a versatile range of fabrication techniques. Our facility is equipped for precision laser cutting, CNC bending, and expert welding across various metals.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our General Services:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Custom Architectural Metal Design & Fabrication",
                    "Precision Laser Cutting for Decorative Panels",
                    "Professional MIG, TIG, and ARC Welding",
                    "Industrial Metal Repair and Modification",
                    "Bespoke Metal Furniture and Interior Elements"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-heading text-xl font-black text-[#1a3a6b] uppercase mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-slate-600" /> Service Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Bespoke Design", desc: "We build exactly what you envision, down to the millimeter." },
                    { title: "Material Versatility", desc: "Expertise in MS, SS, Aluminium, and specialized alloys." },
                    { title: "Precision Tools", desc: "Use of laser cutting ensuring intricate and clean designs." },
                    { title: "Quick Turnaround", desc: "Efficient processes that meet your project deadlines." }
                  ].map((feature, i) => (
                    <div key={feature.title}>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-xl font-black uppercase mb-4 relative z-10">
                  Custom Meta Design
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Bring your sketches or CAD designs to us for a professional feasibility check.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <TurtleButton href="tel:+919876543210" variant="call_now" size="sm" className="rounded-xl px-6">
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </TurtleButton>
                  <a href="https://wa.me/919876543210" className="flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Star className="w-3.5 h-3.5" /> Versatile Expertise
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            The Fabrication Specialists
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Tailored Engineering", desc: "Every custom project includes structural design analysis for safety and performance." },
              { title: "Multi-Metal Mastery", desc: "Our workshop is equipped to handle complex multi-material fabrication with ease." },
              { title: "Bespoke Consulting", desc: "Work directly with our fabrication experts to refine your design for manufacturability." }
            ].map((item, i) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GeneralFabrication;
