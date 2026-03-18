import { ArrowRight, Phone, MessageCircle, CheckCircle2, Factory, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const SteelFabrication = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Industrial Structural Steel Fabrication Services in Trichy"
        description="Industrial-grade structural steel fabrication in Trichy. We specialize in I-beam structures, trusses, and heavy-duty metal frames for buildings."
        keywords="steel fabrication, structural steel work, heavy steel trusses, I-beam fabrication, metal frame construction"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/industial.jpeg"
            className="w-full h-full object-cover opacity-40"
            alt="Industrial Structural Steel Fabrication Site"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Factory className="w-3 h-3" /> Industrial Scale
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              Structural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                Steel Fabrication
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Heavy-duty structural steel solutions for industrial sheds, warehouses, and multi-storey buildings. We provide complete design, fabrication, and erecting services in Trichy.
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
                Robust Steel Frameworks for Commercial & Industrial Projects
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  Large-scale construction requires the unmatched strength of structural steel. At RIITS Metal Craft, we specialize in **Industrial Steel Fabrication**, providing the backbone for buildings, sheds, and specialized structures.
                </p>
                <p className="mb-6">
                  Our fabrication process involves advanced welding techniques and rigorous quality checks to ensure every joint and beam meets safety standards. We manage everything from initial trusses to complete I-beam frame erection.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Structural Capabilities:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Heavy-Duty Steel Roof Trusses",
                    "I-Beam and Channel Section Fabrication",
                    "Industrial Mezzanine Floor Construction",
                    "Heavy Trunking and Pipeline Support Systems",
                    "Factory Shed Frameworks & Erecting"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-heading text-xl font-black text-[#1a3a6b] uppercase mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" /> Industrial Advantages
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "High Strength", desc: "Supports massive spans without intermediate pillars." },
                    { title: "Quick Erection", desc: "Pre-fabricated sections lead to faster site completion." },
                    { title: "Highly Durable", desc: "Long lifespan with proper anti-corrosive painting." },
                    { title: "Sustainability", desc: "Steel is 100% recyclable and eco-friendly." }
                  ].map((feature) => (
                    <div key={feature.title}>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-xl font-black uppercase mb-4 relative z-10">
                  Industrial Consultation
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Speak with our engineers for structural load calculations and cost estimates.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <TurtleButton href="tel:+919894794557" variant="call_now" size="sm" className="rounded-xl px-6"><Phone className="w-3.5 h-3.5" /> Call Now</TurtleButton>
                  <a href="https://wa.me/919894794557?text=Hi%2C%20I'm%20interested%20in%20your%20fabrication%20services" className="flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors">
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Star className="w-3.5 h-3.5" /> Industrial Expertise
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            Built for Heavy Industry
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Precision Welding", desc: "Our certified welders ensure every joint is structurally sound and load-ready." },
              { title: "Structural Integrity", desc: "All fabrication follows engineering standards for load-bearing structures." },
              { title: "On-Site Management", desc: "Expert supervision during the erecting phase for maximum safety." }
            ].map((item) => (
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

export default SteelFabrication;
