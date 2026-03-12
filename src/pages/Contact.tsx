import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Phone, MessageCircle, MapPin, Mail, Clock, Facebook } from "lucide-react";
import { TurtleButton } from "../components/TurtleButton";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="Contact RIITS Metal Craft | Metal Fabricators in Trichy"
        description="Contact RIITS Metal Craft in Trichy for all your metal fabrication needs. Get a free quote for gates, railings, elevation work, and industrial structures. Call +91 98765 43210."
        keywords="contact riits metal craft, trichy fabricators phone number, metal work quote trichy"
      />
      <style>{`
        .contact-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #020617;
          overflow: hidden;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          mix-blend-mode: screen;
          will-change: transform;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.1) 0%, rgba(2, 6, 23, 0.7) 100%);
          z-index: 1;
        }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(29, 78, 216, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29, 78, 216, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        }
        .contact-shimmer {
          background: linear-gradient(90deg, #93c5fd 0%, #ffffff 50%, #93c5fd 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: contactShimmer 3.5s linear infinite;
        }
        @keyframes contactShimmer {
          to { background-position: 200% center; }
        }
        .float-mail {
          position: absolute;
          opacity: 0.2;
          pointer-events: none;
          z-index: 2;
        }
        .glow-sphere {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
          z-index: 0;
        }
        @keyframes iconPulse {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(6deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}</style>

      {/* ── CONTACT HERO ── */}
      <section className="contact-hero">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/src/assets/heropage/contack page hero .webp"
            alt="Contact RIITS Metal Craft - We are Here to Help with Your Fabrication Projects"
            className="hero-bg-img"
            loading="eager"
          />
        </motion.div>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />


        {/* Floating stat badges */}
        <div className="absolute top-24 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available 24/7 For You
        </div>
        <div className="absolute bottom-24 left-[6%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium z-10 animate-float-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Free Consultation & Site Visit
        </div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Get In Touch
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4"
              >
                Let's Talk<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                  Steel.
                </span><br />
                Start Today.
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-white/65 text-base leading-relaxed max-w-md mb-7"
              >
                Have a project in mind or need a technical consultation? Our experts are ready to turn your vision into structural reality — with a free, transparent quote.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-3"
              >
                <TurtleButton href="tel:+919876543210" variant="call_now" className="rounded-xl px-10">
                  <Phone className="w-4 h-4" /> Call Now
                </TurtleButton>
                <TurtleButton href="https://wa.me/919876543210" variant="whatsapp" external className="rounded-xl">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </TurtleButton>
                <TurtleButton href="https://facebook.com" variant="premium_outline_shimmer" external className="rounded-xl border-blue-400 text-blue-300">
                  <Facebook className="w-4 h-4" /> Facebook
                </TurtleButton>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: <MapPin className="w-6 h-6" />, 
              title: "Address", 
              lines: ["RITS Metal Craft", "Trichy, Tamil Nadu", "India"],
              accent: "bg-blue-500/10 text-blue-600",
              hoverAccent: "group-hover:bg-blue-600 group-hover:text-white"
            },
            { 
              icon: <Phone className="w-6 h-6" />, 
              title: "Phone", 
              lines: ["+91 98765 43210", "+91 98765 43211"], 
              isLink: true, 
              prefix: "tel:",
              accent: "bg-emerald-500/10 text-emerald-600",
              hoverAccent: "group-hover:bg-emerald-600 group-hover:text-white"
            },
            { 
              icon: <Clock className="w-6 h-6" />, 
              title: "Working Hours", 
              lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
              accent: "bg-amber-500/10 text-amber-600",
              hoverAccent: "group-hover:bg-amber-600 group-hover:text-white"
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-slate-100 rounded-3xl p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500"
            >
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${item.accent} ${item.hoverAccent} flex items-center justify-center mx-auto mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:animate-[iconPulse_2s_infinite_ease-in-out] shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <div className="space-y-2">
                  {item.lines.map((line) =>
                    item.isLink ? (
                      <a 
                        key={line} 
                        href={`${item.prefix}${line.replace(/\s/g, "")}`} 
                        className="block text-base text-slate-500 hover:text-slate-900 font-medium transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-base text-slate-500 font-medium">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full opacity-0 group-hover:w-1/3 group-hover:opacity-100 transition-all duration-500 ${item.accent.split(' ')[1].replace('text-', 'bg-')}`} />
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <SectionHeading subtitle="Reach Out" title="Quick Contact" />
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <TurtleButton 
            href="tel:+919876543210" 
            variant="call_now"
            className="rounded-xl px-10"
          >
            <Phone className="w-5 h-5" /> Call Now
          </TurtleButton>
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-8 py-3 rounded-lg font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#1877F2]/25"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:info@ritsmetalcraft.com" className="btn-outline"
          >
            <Mail className="w-5 h-5" /> Email Us
          </motion.a>
        </div>

        {/* Map placeholder */}
        <div className="rounded-xl overflow-hidden border border-border">
          <iframe
            title="RITS Metal Craft Location - Trichy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40216379421!2d78.60046027439085!3d10.790483438378789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aab191%3A0xb64cd312cafc3438!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
      {/* ── FINAL CTA ── */}
      <section 
        className="bg-slate-950 py-24 relative overflow-hidden text-center"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 md:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-blue-300 mb-4">
            Direct Line
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">
            Immediate Assistance?
          </h2>
          <p className="mx-auto max-w-lg text-base text-white/60 mb-10 leading-relaxed">
            Our expert engineers are just a call away for technical queries, design help, or urgent project quotations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <TurtleButton
              href="tel:+919876543210"
              variant="call_now"
              className="rounded-xl px-10"
            >
              <Phone className="w-4 h-4" /> Call +91 98765 43210
            </TurtleButton>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 hover:shadow-2xl hover:-translate-y-1"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
