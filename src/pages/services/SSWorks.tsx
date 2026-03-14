import { ArrowRight, Phone, MessageCircle, CheckCircle2, Shield, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const SSWorks = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Premium SS Railing & Gate Fabrication in Trichy (304 Grade)"
        description="Experts in Stainless Steel (SS) works in Trichy. SS 304 grade gates, balcony railings, staircases, and custom decorative SS fabrication."
        keywords="SS works, stainless steel fabrication, SS 304 gate designs, SS railings with glass, SS spiral staircases"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/residental.jpeg"
            className="w-full h-full object-cover opacity-40"
            alt="Stainless Steel Railing and Gate Fabrication"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/15 border border-slate-400/30 text-slate-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Premium Finish
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              Stainless Steel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">
                (SS) Works
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Corrosion-resistant and elegant stainless steel (SS 304/316) fabrication. We specialize in luxury railings, main gates, and custom staircase solutions in Trichy.
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
                Corrosion-Resistant SS 304 Gates, Railings & Staircases
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  For a premium and modern look that lasts a lifetime, nothing beats Stainless Steel. At RIITS Metal Craft, we are experts in **SS Fabrication**, primarily using **SS 304 grade** to ensure maximum resistance against rust and corrosion.
                </p>
                <p className="mb-6">
                  Our workmanship is characterized by seamless welds and a perfect mirror or matte finish. From decorative main gates that make a statement to sleek balcony railings combined with toughened glass, we deliver luxury fabrication for homes and commercial spaces.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our SS Specializations:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "SS 304 Mirror & Matte Finish Main Gates",
                    "SS Balcony & Staircase Railings with Toughened Glass",
                    "Customized SS Spiral Staircases",
                    "SS Safety Doors & Designer Window Grills",
                    "Decorative SS Architectural Accents & Interior Work"
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
                  <Zap className="w-5 h-5 text-slate-600" /> Premium Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Rust Proof", desc: "SS 304 grade ensures no rust even in humid conditions." },
                    { title: "High Gloss", desc: "Available in superior mirror or elegant matte finishes." },
                    { title: "Incredible Strength", desc: "High structural integrity for safety applications." },
                    { title: "Low Maintenance", desc: "Just a wipe is enough to keep it looking new for years." }
                  ].map((feature) => (
                    <div key={feature.title}>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-xl font-black uppercase mb-4 relative z-10">
                  Luxury SS Design
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Explore our premium SS 304 gate and railing design catalogs.
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
            <Star className="w-3.5 h-3.5" /> Mirror Finish Quality
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            The SS Excellence Standard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Grade Certification", desc: "We use only genuine 304 and 316 grade stainless steel with high chromium content." },
              { title: "Invisible Welds", desc: "Advanced Argon-TIG welding with expert grinding for seamless, smooth joints." },
              { title: "Custom Fabrication", desc: "Every gate and railing is custom-built to perfectly fit your site dimensions." }
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

export default SSWorks;
