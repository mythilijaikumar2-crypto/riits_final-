import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Star, CheckCircle2, Wrench, Home, Building2, Factory, Zap } from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";
import SEO from "../components/SEO";
import resSvcImg from "../assets/residental.jpeg";
import comSvcImg from "../assets/commercial.jpeg";
import indSvcImg from "../assets/industial.jpeg";

/* ─── DATA ──────────────────────────────────────────────────────────── */
const serviceAreas = [
  {
    title: "Residential",
    icon: <Home className="w-6 h-6" />,
    color: "#2563eb",
    gradient: "from-blue-600 to-indigo-800",
    image: comSvcImg,
    items: [
      { name: "Steel Gate & Grill Work", slug: "ms-works" },
      { name: "Balcony Railing Work", slug: "ss-works" },
      { name: "Staircase Railing Work", slug: "ss-works" },
      { name: "Aluminium Window Work", slug: "aluminium-windows" },
      { name: "Elevation & Cladding Work", slug: "elevation-work" },
    ],
  },
  {
    title: "Commercial",
    icon: <Building2 className="w-6 h-6" />,
    color: "#0f766e",
    gradient: "from-teal-600 to-emerald-800",
    image: indSvcImg,
    items: [
      { name: "Showroom Facade & ACP Cladding", slug: "elevation-work" },
      { name: "Glass Partition Work", slug: "aluminium-partition" },
      { name: "Toughened Glass Door Work", slug: "aluminium-windows" },
      { name: "Rolling Shutter Installation", slug: "general-fabrication" },
      { name: "Aluminium Door Work", slug: "aluminium-windows" },
    ],
  },
  {
    title: "Industrial",
    icon: <Factory className="w-6 h-6" />,
    color: "#b45309",
    gradient: "from-amber-600 to-orange-800",
    image: resSvcImg,
    items: [
      { name: "Factory Shed Fabrication", slug: "roofing-work" },
      { name: "Warehouse Steel Fabrication", slug: "steel-fabrication" },
      { name: "Heavy-Duty Shop Shutter", slug: "general-fabrication" },
      { name: "Structural Metal Fabrication", slug: "steel-fabrication" },
      { name: "Industrial Gate Fabrication", slug: "ms-works" },
    ],
  },
];

const stats = [
  { val: "800+", label: "Projects Completed", icon: <Wrench className="w-5 h-5" /> },
  { val: "15+",  label: "Years Experience",   icon: <Zap className="w-5 h-5" /> },
  { val: "100%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { val: "Pan TN", label: "Areas Served",      icon: <CheckCircle2 className="w-5 h-5" /> },
];

/* ── SEO service sections data ── */
const serviceSections = [
  {
    number: "01",
    heading: "Steel & Metal Fabrication Work",
    body: (
      <>
        We offer complete{" "}
        <strong className="text-slate-800">steel fabrication in Trichy</strong> — from
        small custom parts to large structural projects. Our skilled team handles all types of{" "}
        <strong className="text-slate-800">metal fabrication</strong>,{" "}
        <strong className="text-slate-800">steel work</strong> and{" "}
        <strong className="text-slate-800">metal work</strong> with precision and quality
        at every step.
      </>
    ),
  },
  {
    number: "02",
    heading: "Steel Gate & Grill Work",
    body: (
      <>
        Our <strong className="text-slate-800">gate fabrication in Trichy</strong> service
        covers custom <strong className="text-slate-800">steel gate work</strong>,{" "}
        <strong className="text-slate-800">metal gate work</strong> and decorative{" "}
        <strong className="text-slate-800">grill work in Trichy</strong>. We also install{" "}
        <strong className="text-slate-800">window grill work</strong> for homes, offices
        and commercial buildings.
      </>
    ),
  },
  {
    number: "03",
    heading: "Balcony & Staircase Railing Work",
    body: (
      <>
        We specialise in precision-welded{" "}
        <strong className="text-slate-800">balcony railing work</strong> and{" "}
        <strong className="text-slate-800">staircase railing work</strong> using Grade-A
        stainless steel and mild steel. Every railing is built for safety, durability and
        a clean professional finish.
      </>
    ),
  },
  {
    number: "04",
    heading: "Rolling Shutter Installation",
    body: (
      <>
        RITS Metal Craft provides professional{" "}
        <strong className="text-slate-800">rolling shutter work in Trichy</strong> and{" "}
        <strong className="text-slate-800">shop shutter installation</strong> for retail
        outlets, showrooms, warehouses and industrial units — motorized or manual,
        built for heavy daily use.
      </>
    ),
  },
  {
    number: "05",
    heading: "Aluminium Door & Window Work",
    body: (
      <>
        Our <strong className="text-slate-800">aluminium door work</strong> and{" "}
        <strong className="text-slate-800">aluminium window work</strong> services cover
        supply, fabrication and installation of{" "}
        <strong className="text-slate-800">aluminium sliding windows</strong>, casement
        windows and aluminium doors — weather-resistant, low-maintenance and perfectly fitted.
      </>
    ),
  },
  {
    number: "06",
    heading: "Glass Door & Partition Work",
    body: (
      <>
        We install frameless{" "}
        <strong className="text-slate-800">glass door work</strong>,{" "}
        <strong className="text-slate-800">toughened glass doors</strong> and{" "}
        <strong className="text-slate-800">glass partition work</strong> for modern homes,
        offices and showrooms — clean lines, professional finish and built to last.
      </>
    ),
  },
];

/* ─── SIMPLE COUNTER (STATIC TEXT) ──────────────────────────────────── */
const AnimatedCounter = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  return <span ref={ref}>{text}</span>;
};

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────── */
const Services = () => {
  return (
    <main className="overflow-hidden" style={{ transform: "translateZ(0)" }}>
      <SEO
        title="Steel Fabrication, Gate Work, Railing & Rolling Shutter Services in Trichy | RITS Metal Craft"
        description="RITS Metal Craft offers expert steel fabrication, gate work, grill work, railing, rolling shutter installation, aluminium door & window work and glass partition services in Trichy."
        keywords="steel fabrication, metal fabrication, fabrication work, gate fabrication, steel gate work, metal gate work, grill work, window grill work, balcony railing work, staircase railing work, rolling shutter work, shop shutter installation, aluminium door work, aluminium window work, aluminium sliding window, glass door work, toughened glass door, glass partition work, welding work, fabrication shop, metal work, steel work, fabrication shop in Trichy, steel fabrication in Trichy, gate fabrication in Trichy, grill work in Trichy, rolling shutter work in Trichy"
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-slate-950">

        {/* Visually hidden H1 — primary SEO heading for Google */}
        <h1 className="sr-only">
          Steel Fabrication, Gate Work, Railing, Rolling Shutter &amp; Aluminium Services in Trichy | RITS Metal Craft
        </h1>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/heropage/services hero page .webp"
            className="w-full h-full object-cover opacity-60"
            alt="RITS Metal Craft services — steel fabrication, gate work, rolling shutter and aluminium works in Trichy"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Floating badges */}
        <div className="absolute top-20 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          15+ Years of Expertise
        </div>
        <div className="absolute bottom-20 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          800+ Projects Delivered
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Badge — local keyword */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
                <Zap className="w-3 h-3" /> Fabrication Shop in Trichy
              </div>

              {/* Decorative display heading — aria-hidden; real H1 is sr-only above */}
              <p
                aria-hidden="true"
                className="font-heading text-4xl sm:text-5xl lg:text-5xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Expert
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Metal &amp; Glass
                </span>
                <br />
                Services
              </p>

              {/* SEO-rich hero paragraph */}
              <p className="text-white/65 text-base leading-relaxed max-w-md mb-7">
                RITS Metal Craft is your trusted{" "}
                <strong className="text-white/85">fabrication shop in Trichy</strong> —
                delivering expert{" "}
                <strong className="text-white/85">steel fabrication</strong>,{" "}
                <strong className="text-white/85">gate fabrication</strong>,{" "}
                <strong className="text-white/85">rolling shutter work</strong>,{" "}
                <strong className="text-white/85">aluminium window work</strong> and{" "}
                <strong className="text-white/85">glass partition work</strong> for
                residential, commercial and industrial projects across Tamil Nadu.
              </p>

              <div className="flex flex-wrap gap-3">
                <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </TurtleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center bg-white relative border-b border-slate-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(26,58,107,0.05),transparent_50%)]" />
        <div className="absolute -top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/30 blur-[100px] pointer-events-none animate-[spin_60s_linear_infinite]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <Star className="w-3.5 h-3.5" /> Our Impact
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-[#1a3a6b] uppercase tracking-tight">
              Proven by the <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Numbers
              </span>
            </h2>
            <p className="mt-5 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              15+ years of trusted{" "}
              <strong className="text-slate-700">metal fabrication</strong> and{" "}
              <strong className="text-slate-700">welding work</strong> in Trichy —
              serving 800+ happy clients across Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center p-8 lg:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                  <div className="scale-125 lg:scale-150">{s.icon}</div>
                </div>
                <div className="text-center relative z-10 w-full">
                  <div className="text-5xl lg:text-5xl font-black font-heading text-[#1a3a6b] mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                    <AnimatedCounter text={s.val} />
                  </div>
                  <div className="w-12 h-1 bg-blue-100 mx-auto my-4 rounded-full group-hover:bg-blue-500 transition-colors duration-300" />
                  <div className="text-xs lg:text-sm text-slate-500 uppercase tracking-[0.14em] lg:tracking-[0.18em] font-bold">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEO SERVICE SECTIONS — 6 H2 blocks
      ══════════════════════════════════════════ */}
      <section
        className="bg-white py-20 px-6 border-b border-slate-100"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight mt-2 mb-3">
              Our Fabrication Services in Trichy
            </h2>
            <p className="text-slate-500 text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
              From <strong className="text-slate-700">steel fabrication in Trichy</strong> to{" "}
              <strong className="text-slate-700">gate fabrication in Trichy</strong> —
              RITS Metal Craft delivers complete{" "}
              <strong className="text-slate-700">fabrication work</strong> across
              every category, on time and at transparent prices.
            </p>
          </div>

          {/* 6 service blocks */}
          <div className="space-y-12">
            {serviceSections.map((svc, i) => (
              <div key={svc.number}>
                <div className="flex items-start gap-5">
                  {/* Number pill */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[hsl(225,73%,35%)] text-white text-xs font-black flex items-center justify-center mt-1">
                    {svc.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight mb-2">
                      {svc.heading}
                    </h2>
                    <p className="text-slate-600 text-[0.95rem] leading-relaxed">{svc.body}</p>
                  </div>
                </div>
                {/* Divider — skip after last */}
                {i < serviceSections.length - 1 && (
                  <hr className="mt-10 border-slate-100" />
                )}
              </div>
            ))}
          </div>

          {/* Near-me CTA bar */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[hsl(225,73%,35%)] rounded-2xl px-7 py-5">
            <p className="text-sm font-semibold text-white/80 leading-relaxed">
              Looking for trusted{" "}
              <strong className="text-amber-300">steel fabrication in Trichy</strong> or{" "}
              <strong className="text-amber-300">gate fabrication in Trichy</strong>?
              Call RITS Metal Craft for a free site visit and written quote — no hidden charges.
            </p>
            <a
              href="tel:+919876543210"
              className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE AREAS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,58,107,0.04),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[#2d5a8e] mb-3">
              Sectors We Serve
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#1a3a6b] tracking-tight">
              Service Areas
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
              Comprehensive <strong className="text-slate-700">metal fabrication</strong> and{" "}
              <strong className="text-slate-700">fabrication work</strong> across residential,
              commercial and industrial segments in Trichy and Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, i) => (
              <div
                key={area.title}
                className="group relative rounded-3xl overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-56 flex flex-col justify-end p-8">
                  <div className="absolute inset-0 bg-slate-100">
                    <img
                      src={area.image}
                      alt={`${area.title} fabrication services in Trichy`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative z-10 flex items-start justify-between mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white backdrop-blur-md shadow-lg border-b-white/10 group-hover:bg-blue-600 transition-colors duration-500">
                      {area.icon}
                    </div>
                    <span className="text-white/40 drop-shadow-md font-heading font-black text-4xl group-hover:text-white/80 transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="relative z-10 font-heading text-2xl font-black uppercase text-white tracking-wide drop-shadow-lg">
                    {area.title}
                  </h3>
                </div>

                <div className="bg-white p-8 border border-slate-100 rounded-b-3xl">
                  <ul className="space-y-3">
                    {area.items.map((item) => (
                      <li key={item.name} className="flex items-center gap-3 text-sm text-slate-600 group-hover:gap-4 transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: area.color }} />
                        <Link to={`/services/${item.slug}`} className="hover:text-blue-600 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity opacity-0 group-hover:opacity-100"
                    style={{ color: area.color }}
                  >
                    Explore Services <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section
        className="py-24 bg-slate-950 relative overflow-hidden text-white"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight mb-6">
            Ready to Start
            <br />
            Your Project?
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Need <strong className="text-white/80">steel gate work</strong>,{" "}
            <strong className="text-white/80">rolling shutter work in Trichy</strong> or{" "}
            <strong className="text-white/80">glass partition work</strong> for your
            property? Contact us for a free site visit and written quotation — no hidden charges.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
              <Phone className="w-4 h-4" /> Call Now
            </TurtleButton>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/10">
            {["Free Consultation", "On-Time Delivery", "Quality Assured", "Pan Tamil Nadu"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-white/50 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
