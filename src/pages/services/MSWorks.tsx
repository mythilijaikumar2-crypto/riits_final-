import { ArrowRight, Phone, MessageCircle, CheckCircle2, Gavel, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const MSWorks = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Durable MS Gate & Window Grill Fabrication in Trichy"
        description="Leading Mild Steel (MS) works contractor in Trichy. Durable MS gates, security grills, MS sheds, and general structural MS fabrication at best prices."
        keywords="MS works, mild steel fabrication, heavy-duty MS gates, window grills, MS safety doors, MS sheds"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/coms.jpg"
            className="w-full h-full object-cover opacity-40"
            alt="Mild Steel Gate and Grill Fabrication"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/15 border border-slate-400/30 text-slate-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Gavel className="w-3 h-3" /> Strength & Value
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              Mild Steel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
                (MS) Works
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Heavy-duty and secure Mild Steel (MS) fabrication solutions. From ornate safety gates to industrial window grills and structural sheds in Trichy.
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
                Heavy-Duty Main Gates and Window Security Grills
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  For projects where strength and security are the top priorities, Mild Steel is the industry gold standard. At RIITS Metal Craft, we offer end-to-end **MS Fabrication** services that provide peace of mind and long-lasting durability.
                </p>
                <p className="mb-6">
                  We specialize in creating robust security solutions, including powder-coated window grills, heavy-duty main gates, and MS industrial sheds. Every piece we fabricate is treated with anti-rust primers and high-quality paints to withstand environmental wear.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our MS Solutions:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Ornate & Heavy-Duty MS Main Gates",
                    "Security Window Grills & Safety Doors",
                    "MS Terrace Roofing & Parking Sheds",
                    "Wrought Iron Style Decorative MS Work",
                    "General MS Industrial Fabrication & Repairs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-heading text-xl font-black text-[#1a3a6b] uppercase mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-slate-600" /> Security Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Maximum Security", desc: "Tough materials that act as a superior deterrent." },
                    { title: "Cost Effective", desc: "Best-in-class strength-to-price ratio." },
                    { title: "Custom Designs", desc: "Wide range of traditional and modern patterns." },
                    { title: "Great Finish", desc: "Smooth powder coating or high-gloss paint options." }
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
                  Secure Your Site
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Request a catalog for modern MS gate and grill designs.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <a href="tel:+919876543210" className="flex items-center gap-2 bg-white text-slate-600 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors">
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
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
            <Star className="w-3.5 h-3.5" /> Durable Fabrication
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            The MS Strength Standard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Anti-Rust Treatment", desc: "All MS works receive a high-zinc epoxy primer coat to prevent oxidation." },
              { title: "Precision Welding", desc: "Deep-penetration ARC welding for maximum joint strength and reliability." },
              { title: "Heavy Sections", desc: "We use only standardized gauge sections to ensure structural stability." }
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

export default MSWorks;
