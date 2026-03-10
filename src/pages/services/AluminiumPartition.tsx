import { ArrowRight, Phone, MessageCircle, CheckCircle2, Layout, Zap, Star } from "lucide-react";
import { TurtleButton } from "../../components/TurtleButton";
import SEO from "../../components/SEO";

const AluminiumPartition = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SEO 
        title="Professional Aluminium Office Partition Work in Trichy"
        description="High-quality aluminium office partition work and glass cabins in Trichy. Durable, sleek, and affordable partitions for commercial and industrial spaces."
        keywords="aluminium partition work, office partition contractor, glass partition wall, aluminium cabin work, soundproof office partitions"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/industial.jpeg"
            className="w-full h-full object-cover opacity-40"
            alt="Aluminium Office Partition and Glass Cabin Work"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <Layout className="w-3 h-3" /> Office Interiors
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-6">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                Aluminium Partitions
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Optimize your workspace with durable aluminium partitions and soundproof glass cabins. We provide sleek, space-saving interior solutions for offices and commercial buildings in Trichy.
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
                Durable & Modern Interior Partitions for Every Workspace
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">
                  Creating an organized and productive office environment starts with smart space management. At RIITS Metal Craft, we offer expert **Aluminium Partition Work** that combines functionality with a professional aesthetic.
                </p>
                <p className="mb-6">
                  Our aluminium frame sections are lightweight yet incredibly strong, making them the perfect choice for high-traffic office environments. We specialize in everything from basic half-partitions for cubicles to full-height soundproof glass cabins.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Partition Solutions:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Full-Height Aluminium & Glass Partitions",
                    "Acoustic Soundproof Glass Cabins",
                    "Modular Office Cubicle Dividers",
                    "Sliding Glass Partition Walls",
                    "ACP & Aluminium Composite Cabins for Industrial Sites"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-heading text-xl font-black text-[#1a3a6b] uppercase mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-teal-600" /> Workspace Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Space Optimization", desc: "Maximize your floor area with slim, sturdy partitions." },
                    { title: "Sound Control", desc: "Reduce noise levels with specialized glass cabins." },
                    { title: "Quick Installation", desc: "Minimal disruption to your daily office operations." },
                    { title: "Modern Design", desc: "Sleek finishes that match any contemporary interior." }
                  ].map((feature, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-xl font-black uppercase mb-4 relative z-10">
                  Plan your office today
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  We provide custom layout designs and site measurements for office partitions.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <a href="tel:+919876543210" className="flex items-center gap-2 bg-white text-teal-600 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors">
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Star className="w-3.5 h-3.5" /> Premium Quality
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1a3a6b] uppercase tracking-tight mb-12">
            Professional Finish & Durability
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Precision Frame Work", desc: "Perfectly aligned frames ensuring smooth door movement and glass safety." },
              { title: "Acoustic Glass Options", desc: "We offer single and double glazed options for superior sound isolation." },
              { title: "Anti-Rust Coating", desc: "Our aluminium sections are powder-coated or anodized to prevent oxidation." }
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

export default AluminiumPartition;
