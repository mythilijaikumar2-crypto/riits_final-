import { ArrowRight, Phone, MessageCircle, CheckCircle2, Building2, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const ElevationWork = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Best Building Elevation & ACP Cladding Services in Trichy"
        description="Premium building elevation and ACP cladding services in Trichy. We specialize in modern facades, HPL cladding, and architectural louvers for villas and offices."
        keywords="building elevation work, ACP cladding contractor, modern facade design, HPL cladding, architectural louvers, exterior wall cladding"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/commercial.jpeg"
            className="w-full h-full object-cover opacity-40"
            alt="Modern Building Elevation and ACP Cladding Work"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Building2 className="w-3 h-3" /> External Facades
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              Modern Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Elevation & Cladding
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Transform your building's exterior with premium ACP cladding, HPL panels, and architectural louvers. We deliver durable, weather-resistant facade solutions for residential villas and commercial offices across Trichy.
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
                Transform Your Building Exterior with Premium Facade Solutions
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  First impressions matter, and the elevation of your building is its face to the world. At RIITS Metal Craft, we specialize in high-quality **Elevation Work** that combines aesthetic appeal with structural durability.
                </p>
                <p className="mb-6">
                  Whether you are looking for modern **ACP Cladding**, elegant **HPL Panels**, or functional **Architectural Louvers**, our expert team ensures precision installation using the finest materials. We serve various sectors, including residential villas, commercial showrooms, and corporate offices in [City Name].
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Expertise Includes:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "ACP (Aluminium Composite Panel) Cladding Work",
                    "HPL (High-Pressure Laminate) Exterior Cladding",
                    "Architectural Louvers for Ventilation & Aesthetics",
                    "Structural Glazing and Glass Facades",
                    "Modern Tile and Stone Elevation Integration"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-heading text-xl font-black text-[#1a3a6b] uppercase mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" /> Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Weather Proof", desc: "Resistant to rain, UV rays, and extreme heat." },
                    { title: "Low Maintenance", desc: "Easy to clean and retains finish for years." },
                    { title: "Lightweight", desc: "Does not add significant load to the building structure." },
                    { title: "Cost Effective", desc: "Long-term durability ensures high return on investment." }
                  ].map((feature, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-xl font-black uppercase mb-4 relative z-10">
                  Ready to upgrade?
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Get a free site visit and consultation for your building elevation project today.
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Star className="w-3.5 h-3.5" /> Why RIITS Metal Craft
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            The RIITS Quality Assurance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Expert Installation", desc: "Our team has over 15 years of experience in structural cladding and facade work." },
              { title: "Premium Materials", desc: "We use only top-grade ACP and HPL panels from leading manufacturers." },
              { title: "Timely Handover", desc: "We respect your timelines and ensure projects are completed as scheduled." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
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

export default ElevationWork;
