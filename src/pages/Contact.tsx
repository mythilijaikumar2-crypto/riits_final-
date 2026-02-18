import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => (
  <main className="pt-20">
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle text-silver mb-3">Get in Touch</p>
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-lg max-w-3xl opacity-80 leading-relaxed">
            Reach out to RITS Metal Craft for inquiries, quotations, or to schedule a site visit. We're based in Trichy and serve all of Tamil Nadu.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <MapPin className="w-6 h-6" />, title: "Address", lines: ["RITS Metal Craft", "Trichy, Tamil Nadu", "India"] },
            { icon: <Phone className="w-6 h-6" />, title: "Phone", lines: ["+91 98765 43210", "+91 98765 43211"], isLink: true, prefix: "tel:" },
            { icon: <Clock className="w-6 h-6" />, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"] },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="font-heading text-base font-semibold uppercase text-foreground mb-3">{item.title}</h3>
              {item.lines.map((line) =>
                item.isLink ? (
                  <a key={line} href={`${item.prefix}${line.replace(/\s/g, "")}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-sm text-muted-foreground">{line}</p>
                )
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <SectionHeading subtitle="Reach Out" title="Quick Contact" />
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="tel:+919876543210" className="btn-primary">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href="mailto:info@ritsmetalcraft.com" className="btn-outline">
            <Mail className="w-5 h-5" /> Email Us
          </a>
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
  </main>
);

export default Contact;
