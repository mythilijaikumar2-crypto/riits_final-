import { ArrowRight, Phone, MessageCircle, CheckCircle2, Home, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const RoofingWork = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Best Industrial & Terrace Roofing Services in Trichy"
        description="Reliable roofing work in Trichy. Industrial sheds, terrace roofing, GI sheet roofing, and polycarbonate sheet installations. Leak-proof and durable."
        keywords="roofing work, industrial roofing contractor, metal roofing sheets, terrace roofing sheds, polycarbonate roofing"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/industial.jpeg"
            className="w-full h-full object-cover opacity-40"
            alt="Industrial and Terrace Roofing Shed Installation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Home className="w-3 h-3" /> Superior Shelter
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              Industrial & Residential <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Roofing Work
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Leak-proof and weather-resistant roofing solutions. From massive industrial sheds to modern terrace roofing using GI sheets and polycarbonate in Trichy.
            </p>
            <div className="flex flex-wrap gap-4">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Get a free site visit and cost estimate for your roofing project.
              </p>
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
                Industrial & Residential Roofing Services in Trichy
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  A high-quality roof is your property's first line of defense. At RIITS Metal Craft, we specialize in **Industrial & Terrace Roofing**, providing durable shedding solutions that are both functional and visually appealing.
                </p>
                <p className="mb-6">
                  We offer a variety of roofing materials, from heavy-duty GI and Galvalume sheets for industrial warehouse sheds to stylish polycarbonate and UV-resistant sheets for home terrace areas. Our focus is always on structural stability and leak-proof installation.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Roofing Solutions:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Industrial Factory & Warehouse Roofing Sheds",
                    "Terrace & Rooftop Multi-Purpose Sheds",
                    "Polycarbonate & UV-Resistant Sheet Work",
                    "Galvalume & Color Coated Profile Sheets",
                    "Car Parking & Outdoor Utility Sheds"
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
                  <Zap className="w-5 h-5 text-blue-600" /> Roofing Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Leak Proof", desc: "Expert flashing and sealing for zero water leakage." },
                    { title: "Heat Insulating", desc: "Optional thermal layers to reduce heat transfer." },
                    { title: "Storm Resistant", desc: "Heavy-duty structures built to withstand high winds." },
                    { title: "Wide Coverage", desc: "Ability to cover large industrial spans with ease." }
                  ].map((feature, i) => (
                    <div key={feature.title}>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-xl font-black uppercase mb-4 relative z-10">
                  Secure Your Terrace
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Ready to add a roof to your balcony or factory? Get an expert quote now.
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Star className="w-3.5 h-3.5" /> Durable Roofing
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            The RIITS Roofing Standard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "High-Quality Sheets", desc: "We use only branded sheets with superior micron coating for long life." },
              { title: "Precision Framework", desc: "Steel frames are engineered to handle the load and wind pressure of your area." },
              { title: "Professional Finishing", desc: "Complete roofing solutions including gutters and down-pipes for drainage." }
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

export default RoofingWork;
